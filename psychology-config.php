<?php
declare(strict_types=1);
ini_set('display_errors', '0');
/** Public configuration defaults; secrets are loaded only from a private absolute path. */
function py_bootstrap_config(): void {
    try { py_config(); }
    catch (Throwable $error) {
        if (defined('OLV_GATE_LIBRARY_ONLY')) throw $error;
        http_response_code(503);
        header('Cache-Control: private, no-store, max-age=0');
        header('Content-Type: application/json; charset=utf-8');
        echo '{"error":"Psychology services are temporarily unavailable. Configuration needs attention."}';
        exit;
    }
}
function py_outside_webroot(string $path): bool {
    if ($path === '' || $path[0] !== DIRECTORY_SEPARATOR) return false;
    $real = realpath($path);
    if ($real === false) {
        $parent = realpath(dirname($path));
        if ($parent === false) return false;
        $real = $parent . DIRECTORY_SEPARATOR . basename($path);
    }
    foreach ([__DIR__, $_SERVER['DOCUMENT_ROOT'] ?? ''] as $root) {
        $web = $root !== '' ? realpath($root) : false;
        if ($web !== false && ($real === $web || strpos($real, $web . DIRECTORY_SEPARATOR) === 0)) return false;
    }
    return true;
}
function py_config(): array {
    static $cfg;
    if ($cfg !== null) return $cfg;
    $privateFile = getenv('PSYCHOLOGY_PRIVATE_CONFIG') ?: '';
    $private = [];
    if ($privateFile !== '') {
        $real = realpath($privateFile);
        if ($real === false || is_link($privateFile) || !is_file($real) || !py_outside_webroot($privateFile)) {
            throw new RuntimeException('Private Psychology configuration is unavailable.');
        }
        $private = require $real;
        if (!is_array($private)) throw new RuntimeException('Invalid Psychology configuration.');
    }
    $origin = $private['origin'] ?? (getenv('PSYCHOLOGY_ORIGIN') ?: 'https://apps.olevels.com');
    $base = $private['base'] ?? (getenv('PSYCHOLOGY_BASE') ?: '/igcsepsychology/');
    if ($origin !== 'https://apps.olevels.com' || $base !== '/igcsepsychology/') {
        throw new RuntimeException('This release is scoped to the Psychology destination.');
    }
    // Open access (Bareera, 14 Oct 2026): "Any student should be able to open it up". No sign-in and no course gate;
    // teacher-only material is refused to everyone. Turned off only by an explicit 'open_access' => false.
    $open = ($private['open_access'] ?? true) !== false;
    $course = (int)($private['course_id'] ?? getenv('PSYCHOLOGY_COURSE_ID') ?: 0);
    if ($course === 48926 || $course === 11608 || $course < 0) throw new RuntimeException('A verified Psychology course ID is required.');
    $resolved = $private + [
        'origin' => $origin, 'base' => $base, 'course_id' => $course, 'open_access' => $open,
        'private_dir' => $privateFile ? dirname($privateFile) : sys_get_temp_dir() . '/olv-psychologyigcse-private',
        'gate_session' => 'OLV_PSYCHOLOGY_ACCESS', 'teach_session' => 'OLV_PSYCHOLOGY_TEACH_ME',
        'policy' => 'psychology-1ps0-v1-course-' . $course,
        'media_prefix' => 'psychologyigcse/recordings/',
        'media_delivery' => 'private-proxy',
        'firebase_project' => 'olevels-live',
        'firebase_web_key' => (string)($private['firebase_web_key'] ?? getenv('PSYCHOLOGY_FIREBASE_WEB_KEY') ?: ''),  // kept out of git; set in private config at release
        'firebase_database' => 'https://olevels-live-default-rtdb.firebaseio.com',
        'auth_exchange' => 'https://live.olevels.com/functions/api/auth/exchange',
        'auth_epoch' => 'https://live.olevels.com/functions/api/auth/session-epoch',
        'auth_certificates' => 'https://www.googleapis.com/robot/v1/metadata/x509/securetoken@system.gserviceaccount.com',
        'return_url' => $origin . $base,
    ];
    $resolved['course_id'] = $course;
    $resolved['open_access'] = $open;
    $resolved['gate_session'] = 'OLV_PSYCHOLOGY_ACCESS';
    $resolved['teach_session'] = 'OLV_PSYCHOLOGY_TEACH_ME';
    $resolved['policy'] = 'psychology-1ps0-v1-course-' . $course;
    if (!is_string($resolved['private_dir']) || !py_outside_webroot($resolved['private_dir'])) throw new RuntimeException('Psychology private storage must be outside the document root.');
    if (!empty($resolved['gcs_key_file']) && (!is_string($resolved['gcs_key_file']) || !py_outside_webroot($resolved['gcs_key_file']) || is_link($resolved['gcs_key_file']))) throw new RuntimeException('Storage credentials must be outside the document root.');
    if (strpos($resolved['media_prefix'], 'psychologyigcse/') !== 0 || strpos($resolved['media_prefix'], '..') !== false) {
        throw new RuntimeException('Invalid Psychology media namespace.');
    }
    if (!in_array($resolved['media_delivery'], ['private-proxy', 'public-redirect'], true)) throw new RuntimeException('Invalid Psychology media delivery policy.');
    $cfg = $resolved;
    return $cfg;
}
