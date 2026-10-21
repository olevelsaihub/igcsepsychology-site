/* Group G06 mastery bank: Extended answers across topics; Research methods; Development. Original questions, not copied from past papers. */
(function () {
  'use strict';
  var B = window.MASTERY_BANKS = window.MASTERY_BANKS || {};
  var R = window.Mastery;   // R.roundDp(x, dp), R.roundSf(x, n)
  function pick(a) { return a[Math.floor(Math.random() * a.length)]; }
  function rint(lo, hi) { return lo + Math.floor(Math.random() * (hi - lo + 1)); }
  function sum(a) { return a.reduce(function (s, x) { return s + x; }, 0); }
  // Static single-answer item: the correct option is written first (the engine shuffles the options).
  function mc(skill, q, right, wrongs, why, extra) {
    var it = { skill: skill, kind: 'mcq', q: q, options: [right].concat(wrongs), answer: 0, why: why };
    if (extra) for (var k in extra) it[k] = extra[k];
    return it;
  }
  // Static select-all item: the correct options are written first.
  function ms(skill, q, rights, wrongs, why, extra) {
    var ans = rights.map(function (_, i) { return i; });
    var it = { skill: skill, kind: 'multi', q: q, options: rights.concat(wrongs), answers: ans, why: why };
    if (extra) for (var k in extra) it[k] = extra[k];
    return it;
  }
  // n whole-number scores in [lo, hi] whose total divides exactly by n (so the mean is a whole number).
  function wholeMeanData(n, lo, hi) {
    var a = [], i, r;
    for (i = 0; i < n; i++) a.push(rint(lo, hi));
    r = sum(a) % n;
    if (r) { if (a[0] - r >= lo) a[0] -= r; else a[0] += n - r; }
    return a;
  }
  function list(a) { return a.join(', '); }

  /* ============ PSY-DEV-06 Stages of moral development ============ */
  B['PSY-DEV-06'] = { title: 'Stages of moral development', items: [
    mc('define-morality', 'Which statement best defines <b>morality</b>?',
      "A person's sense of what is right and wrong",
      ['How quickly a child learns the rules of a new game', 'A fear of authority figures such as teachers', "A person's ability to recall the laws of their country"],
      'Morality is a person\'s sense of right and wrong, and morals are the principles that guide behaviour. It is not about memory, speed of learning or fear.'),
    mc('define-morality', 'Which is an example of a <b>moral</b> principle?',
      'Telling the truth even when a lie would be easier',
      ['Finishing a jigsaw puzzle faster than a friend', 'Choosing a blue bicycle instead of a red one', 'Counting to a hundred without a mistake'],
      'A moral is a principle about right and wrong that guides behaviour, such as honesty. The other options are skills or preferences with no right-or-wrong judgement.'),
    mc('define-morality', 'A student answers the question "Define the term morality. Use an example." Which answer earns both marks?',
      'A sense of right and wrong, such as knowing that stealing is wrong',
      ['Knowing that stealing is wrong and that it can get a child into trouble', 'A stage of growing up, such as becoming a teenager', 'Being told off by a teacher for stealing'],
      'You need the meaning (a sense of right and wrong) and an example. "Knowing stealing is wrong" is only an example, and the others do not define morality.'),
    mc('stage-features', 'On what does a person in the <b>pre-conventional</b> stage mainly base their judgement of right and wrong?',
      'Whether they will be rewarded or punished',
      ['Laws and rules that keep society running', 'Their own universal ethical principles', 'What their family and friends approve of'],
      'Pre-conventional reasoning is about avoiding punishment and gaining rewards. Rules and approval belong to the conventional stage and personal principles to the post-conventional stage.'),
    mc('stage-features', 'On what does a person in the <b>conventional</b> stage mainly base their judgement of right and wrong?',
      'Rules, laws and the approval of other people',
      ['Avoiding punishment and gaining rewards', 'Their own ethical principles, even against the law', 'Whatever helps them most at the time'],
      'Conventional morality is about following rules and laws and gaining approval, to keep social order. Avoiding punishment is pre-conventional; own principles over the law is post-conventional.'),
    mc('stage-features', 'Which feature belongs to the <b>post-conventional</b> stage of morality?',
      'Using personal ethical principles, which may go against the law',
      ['Obeying authority figures because doing so keeps society in good order', 'Behaving well to avoid being punished', 'Doing what gains approval from others'],
      'In the post-conventional stage a person uses their own ethical principles, so they may judge that breaking a law is right. The other options describe the conventional and pre-conventional stages.'),
    mc('identify-stage', 'Kofi leaves the sweets on the shop shelf. "A guard might catch me and I would be in big trouble," he thinks. Which stage of morality does his reasoning show?',
      'Pre-conventional', ['Conventional', 'Post-conventional', 'Pre-operational'],
      'Kofi is thinking only about being caught and punished, which is pre-conventional reasoning. Pre-operational is one of Piaget\'s cognitive stages, not a stage of morality.'),
    mc('identify-stage', 'Marta gives back extra change to a cashier. "It is the law and good citizens follow the rules," she says. Which stage of morality does her reasoning show?',
      'Conventional', ['Pre-conventional', 'Post-conventional', 'Concrete operational'],
      'Marta bases her judgement on laws and what a good citizen should do, which is conventional reasoning.'),
    mc('identify-stage', 'Ines joins a peaceful protest that breaks a local curfew. She says that freedom to speak out is a basic right that matters more than the curfew. Which stage of morality does her reasoning show?',
      'Post-conventional', ['Conventional', 'Pre-conventional', 'Formal operational'],
      'Ines puts a personal ethical principle (freedom of speech) above the law, which is post-conventional reasoning.'),
    mc('identify-stage', 'Dev does not copy his friend\'s homework. "My parents and teachers would be so disappointed in me," he says. Which stage of morality does his reasoning show?',
      'Conventional', ['Pre-conventional', 'Post-conventional', 'Sensorimotor'],
      'Dev is concerned about the approval of his parents and teachers, which is conventional reasoning. He is not thinking about punishment or his own principles.'),
    mc('identify-stage', 'Lila shares her toys with her brother only when her mum gives her a sticker for it. Which stage of morality does this show?',
      'Pre-conventional', ['Conventional', 'Post-conventional', 'Pre-operational'],
      'Lila behaves well to gain a reward, which is typical of pre-conventional reasoning.'),
    mc('dilemma-prediction', 'A nurse, Hana, uses a locked hospital drugs cupboard without permission to save a patient who would otherwise die. Which comment shows <b>post-conventional</b> reasoning?',
      'She was right, because saving a life matters more than a hospital rule',
      ['She was wrong, because she might lose her job', 'She was wrong, because nurses are expected to follow hospital rules at all times', 'She was right, because her colleagues will approve'],
      'Putting the principle of saving life above the rule is post-conventional. "Might lose her job" is pre-conventional, and following rules or gaining approval is conventional.'),
    mc('dilemma-prediction', 'A bus driver leaves his route to rush an injured passenger to hospital, breaking company rules. What would a person in the <b>conventional</b> stage most likely say?',
      'He was wrong because drivers must follow the company rules',
      ['He was right because the life of a person matters more than any company rules', 'He was wrong because he might be punished', 'He was right because nobody can punish him'],
      'Conventional reasoning supports rules and authority, so the answer is that he should have followed the rules. Saving life above rules is post-conventional; fear of punishment is pre-conventional.'),
    mc('dilemma-prediction', 'A girl finds a lost phone. Three children say why she should hand it in. Whose reasoning is the most advanced stage of morality?',
      '"Respect for property is a principle for everyone, even if nobody finds out."',
      ['"The owner is offering a big reward for it, so she should hand it in and get it."', '"Everyone would think well of her and it is the rule."', '"A teacher might see her keep it and punish her."'],
      'The first child uses a universal ethical principle, which is post-conventional. The reward and punishment answers are pre-conventional and the approval and rule answer is conventional.'),
    mc('difference', 'Which answer correctly describes a difference between <b>pre-conventional</b> and <b>conventional</b> morality?',
      'Pre-conventional is based on reward and punishment, whereas conventional is based on rules and approval',
      ['Pre-conventional is based on rules and approval, whereas conventional is based on reward and punishment', 'Pre-conventional is based on personal principles, whereas conventional is based on punishment', 'Pre-conventional follows the law, whereas conventional breaks it'],
      'Pre-conventional reasoning is about rewards and punishments; conventional reasoning is about rules, laws and approval. The incorrect options swap or invent the features.'),
    mc('difference', 'Which answer correctly describes a difference between <b>conventional</b> and <b>post-conventional</b> morality?',
      'Conventional obeys laws to keep order, whereas post-conventional follows own principles',
      ['Conventional follows own principles over laws, whereas post-conventional obeys laws to keep order', 'Conventional avoids punishment, whereas post-conventional seeks rewards', 'Conventional ignores other people, whereas post-conventional seeks approval'],
      'Conventional morality values laws and order; post-conventional morality uses personal ethical principles that can override the law.'),
    mc('development', 'How do children\'s moral stages usually change as their thinking matures?',
      'They move from pre-conventional towards conventional and possibly post-conventional',
      ['They move from post-conventional to pre-conventional', 'They stay in exactly the same stage throughout their whole lives, whatever they experience', 'They skip straight to the conventional stage at birth'],
      'The stages are linked to cognitive development, so as thinking matures children tend to move from pre-conventional to conventional and, for some, post-conventional reasoning.'),
    mc('development', 'The stages of morality are linked to cognitive development. What does this suggest?',
      'More mature thinking allows more advanced reasoning about right and wrong',
      ['Moral reasoning is fixed at birth and cannot develop', 'Only fully grown adults can have any real sense of right and wrong, never children', 'Rewards are the only thing that affects morality'],
      'If the stages are linked to cognitive development, then as thinking becomes more abstract and mature, moral reasoning becomes more advanced.'),
    mc('stage-features', 'The stages of morality used in this specification are based on the work of which psychologist?',
      'Kohlberg', ['Bartlett', 'Sperry', 'Milgram'],
      'Kohlberg proposed the pre-conventional, conventional and post-conventional stages of morality.'),
    mc('common-error', 'A student writes: "A person in the conventional stage would say stealing medicine is right because the reason is good." What is wrong with this?',
      'Judging a good reason to outweigh the law is post-conventional, not conventional',
      ['Conventional people always think stealing is right', 'Conventional people only care about rewards', 'Nothing is wrong, because a conventional thinker would accept a good reason for stealing'],
      'A conventional thinker supports rules and laws. Excusing a law-breaking act because of a higher principle is post-conventional reasoning.'),
    ms('stage-features', 'Select <b>all</b> the statements that describe pre-conventional morality.',
      ['Right and wrong are judged by punishment', 'A person behaves well to gain a reward'],
      ['A person follows laws to keep social order', 'A person uses their own ethical principles', 'A person acts to gain the approval of others'],
      'Pre-conventional reasoning is about punishments and rewards. Following laws and approval are conventional and own principles are post-conventional.'),
    ms('stage-features', 'Select <b>all</b> the statements that describe conventional morality.',
      ['Obeying authority figures matters', 'Rules and laws keep society in order'],
      ['Avoiding punishment is the only reason to behave', 'Personal principles can override the law', 'Rewards decide what is right'],
      'Conventional morality is about rules, laws, authority and approval. Punishment and rewards are pre-conventional and overriding the law is post-conventional.')
  ] };

  /* ============ PSY-RM-01 Spotting the IV and the DV ============ */
  B['PSY-RM-01'] = { title: 'Spotting the IV and the DV', items: [
    mc('identify-IV', 'Priya tests whether background music affects problem solving. One group hears fast music, one hears slow music and one works in silence. Each person solves anagrams for five minutes and the number solved is counted.<br>Which is the <b>independent variable</b>?',
      'The type of background music', ['The number of anagrams solved', 'The five minutes allowed in the room', 'The difficulty of the anagrams'],
      'The IV is what the researcher changes between conditions: fast music, slow music or silence. The number solved is the DV and the time and anagrams are controlled.'),
    mc('identify-DV', 'Priya tests whether background music affects problem solving. One group hears fast music, one hears slow music and one works in silence. Each person solves anagrams for five minutes and the number solved is counted.<br>Which is the <b>dependent variable</b>?',
      'The number of anagrams solved', ['The type of background music', 'The five minutes allowed', 'Whether the room was quiet'],
      'The DV is what is measured to see whether the IV had an effect: the number of anagrams solved.'),
    mc('identify-DV', 'Researchers ask 30 students to sleep for either four hours or eight hours. Next morning each student presses a button as soon as a light appears, and the reaction time is recorded in milliseconds.<br>Which is the <b>dependent variable</b>?',
      'Reaction time in milliseconds', ['Length of sleep (four or eight hours)', 'The light that appeared', 'The 30 students'],
      'The reaction time is what was measured. The length of sleep is the IV, which the researchers changed.',
      { family: 'sleep' }),
    mc('identify-IV', 'Researchers ask 30 students to sleep for either four hours or eight hours. Next morning each student presses a button as soon as a light appears, and the reaction time is recorded in milliseconds.<br>Which is the <b>independent variable</b>?',
      'Whether students slept for four or eight hours', ['How quickly students pressed the button', 'The time of day at which the students were tested', 'How tired the students said they felt'],
      'The IV is the thing that differs between the conditions: four hours or eight hours of sleep.',
      { family: 'sleep' }),
    mc('group-IV', 'A researcher compares how many pictures are recalled by 10-year-olds and by 14-year-olds. She does not create the groups; the children are already those ages.<br>Which is the independent variable?',
      'The age group of the children', ['The number of pictures recalled', 'The pictures shown to every child', 'The researcher\'s choice of schools'],
      'When groups are compared, the difference between them (age) is the IV even if the researcher did not create it. The number recalled is the DV.'),
    mc('group-IV', 'A study compares the time taken to complete a puzzle by regular gamers and by people who never play video games. The researcher did not create the groups. Is the type of player still the IV?',
      'Yes, because the difference between the groups is what is being compared',
      ['No, because the researcher did not change it himself, so it cannot be an IV', 'No, because it is the thing being measured', 'Yes, because it was kept the same for everyone'],
      'The IV can be a difference between existing groups. The time taken is the DV, the thing measured.'),
    mc('identify-DV', 'Passers-by see a student drop a pile of books. In one condition the student wears a leg cast and in the other the student does not. Observers record how many passers-by stop to help.<br>Which is the <b>dependent variable</b>?',
      'The number of passers-by who stopped to help', ['Whether the student wore a leg cast', 'The pile of books that was dropped on the pavement', 'The place where the books were dropped'],
      'The DV is the behaviour that was counted. Whether the student wore a cast is the IV.'),
    mc('identify-IV', 'Drivers approach an amber light. On some days a police car is parked beside the road and on other days it is not. Researchers count how many drivers stop at the light.<br>Which is the <b>independent variable</b>?',
      'Whether a police car was parked by the road', ['The number of drivers who stopped', 'The colour of the traffic light at the junction', 'The road the drivers were using'],
      'The IV is the condition that changes: police car present or absent. The number who stopped is the DV.'),
    mc('operationalise', 'A researcher wants to measure the DV "stress" in students after a talk. Which is the best <b>operationalised</b> DV?',
      'Heart rate in beats per minute after the talk', ['How stressed the students felt overall after the talk', 'The level of stress shown generally', 'Whether the students seemed stressed'],
      'An operationalised variable says exactly how it is measured, such as heart rate in beats per minute. The others are vague and could be measured in many ways.'),
    mc('operationalise', 'A study asks whether memory is affected by lighting. Which is the best way to write the DV?',
      'The number of words recalled out of 20', ['How good the memory of each person was', 'Memory', 'How well people remembered things'],
      'A good DV is operationalised with the exact measure, such as words recalled out of 20. "Memory" alone is too vague.'),
    mc('operationalise', 'A researcher investigates whether noise affects concentration. Which is the best way to operationalise the <b>IV</b>?',
      'Playing a 70-decibel recording of traffic or playing silence', ['Making the room noisy for some groups and not noisy for others', 'Different amounts of sound around', 'Whether the room was loud'],
      'An operationalised IV states exactly how it is varied. A named recording at a set volume versus silence can be repeated by others.'),
    mc('controls', 'In an experiment on revision methods, half the students use flashcards and half reread notes. All have 20 minutes and then take the same ten-question test.<br>Which is a <b>controlled variable</b> rather than the IV or DV?',
      'The 20 minutes allowed for revision', ['Whether flashcards or notes were used', 'The score on the ten-question test', 'The revision method chosen'],
      'Things kept the same for everyone, such as the time allowed, are controls. The method is the IV and the test score is the DV.'),
    ms('controls', 'In a study of caffeine and proofreading, some adults drink a caffeinated coffee and some drink a decaffeinated coffee. All proofread the same page for ten minutes and the errors found are counted.<br>Select <b>all</b> the variables that are kept the same for everyone (controls).',
      ['The page that is proofread', 'The ten minutes allowed'],
      ['Whether the coffee had caffeine', 'The number of errors found', 'The type of coffee drunk'],
      'The same page and the same time are controls. The type of coffee is the IV and the errors found is the DV.'),
    mc('definitions', 'Which is the correct definition of an <b>independent variable</b>?',
      'The factor the researcher changes or compares between conditions', ['The factor the researcher measures at the end', 'Any factor that the researcher keeps the same across every condition', 'The group of people taking part'],
      'The IV is the factor that is changed or compared. The measured outcome is the DV.'),
    mc('definitions', 'Which is the correct definition of a <b>dependent variable</b>?',
      'The outcome that is measured to see if the IV had an effect', ['The factor that the researcher changes', 'The instructions that are given to every participant in the study', 'The place where the study is carried out'],
      'The DV depends on the IV, so it is what is measured, counted or scored at the end.'),
    mc('swap-error', 'In a study, one group revises for 10 minutes and another for 20 minutes, then both take the same test. A student says "the DV is the revision time". What is wrong?',
      'Revision time is changed by the researcher, so it is the IV', ['Revision time is the DV, so the student is right', 'Revision time is a controlled variable that stays the same, not the IV', 'Revision time cannot be a variable at all'],
      'The revision time differs between conditions, so it is the IV. The DV is the test score.'),
    mc('swap-error', 'A researcher records the mood score (1 to 10) of people sitting in a blue room and in a red room. A student writes "the IV is mood score". What is the correct IV?',
      'The colour of the room (blue or red)', ['The mood score from 1 to 10', 'The number of people sitting in each room', 'The time spent in the room'],
      'The mood score is measured, so it is the DV. The colour of the room is what differs between conditions, so it is the IV.'),
    mc('identify-IV', 'A researcher compares the number of items recalled by left-handed and right-handed adults on the same memory test. Which is the IV?',
      'Whether adults are left-handed or right-handed', ['The number of items recalled', 'The memory test used by the researcher for all adults', 'The age of the adults'],
      'The comparison between left-handed and right-handed adults is the IV. The number of items recalled is the DV.'),
    mc('identify-DV', 'A researcher compares the spatial test scores of 15-year-old boys and 15-year-old girls on the same test, marked out of 40. Which is the DV?',
      'Score on the spatial test out of 40', ['Whether participants were boys or girls', 'The age of 15 years', 'The spatial test used'],
      'The score is the measured outcome, so it is the DV. Gender is the IV, and the age and test are controls.'),
    mc('operationalise', 'Which pair correctly gives the IV and the DV for this study: "Adults read a story either aloud or silently, and then the number of details recalled is counted"?',
      'IV: reading aloud or silently; DV: number of details recalled', ['IV: number of details recalled; DV: reading aloud or silently', 'IV: the story used; DV: reading aloud or silently', 'IV: the adults; DV: the story used'],
      'The reading method is what differs between conditions (IV) and the number of details recalled is what is measured (DV).'),
    mc('identify-IV', 'Researchers drop a sweet wrapper in a car park that is either clean or already full of litter. They count how many people nearby pick up the wrapper. Which is the <b>independent variable</b>?',
      'Whether the car park was clean or littered', ['The number of people who picked up the wrapper', 'The sweet wrapper that was dropped', 'The size of the car park'],
      'The researchers changed whether the car park was clean or littered, so that is the IV. The number who picked up the wrapper is the DV.'),
    ms('identify-DV', 'A teacher tries two methods of teaching spelling. Select <b>all</b> the options that could be a dependent variable in a study of this.',
      ['Score on a 20-word spelling test', 'Number of words spelt correctly in a week'],
      ['The teaching method used', 'The length of each lesson'],
      'Dependent variables are measured outcomes, such as spelling test scores. The teaching method is the IV and the lesson length would be a control.')
  ] };

  /* ============ PSY-RM-15 Calculating the mean ============ */
  function tbl(head, rows) {
    return '<table class="mc-table"><tr>' + head.map(function (h) { return '<th>' + h + '</th>'; }).join('') + '</tr>' +
      rows.map(function (r) { return '<tr>' + r.map(function (c) { return '<td>' + c + '</td>'; }).join('') + '</tr>'; }).join('') + '</table>';
  }
  // true when x sits exactly halfway at dp decimal places (an unfair rounding case, so generators avoid it)
  function isTie(x, dp) { var y = x * Math.pow(10, dp); return Math.abs(y - Math.floor(y) - 0.5) < 1e-7; }
  function dpText(x, dp) { return R.roundDp(x, dp).toFixed(dp); }
  B['PSY-RM-15'] = { title: 'Calculating the mean', items: [
    { skill: 'calculate-mean', gen: function () {
      var n = rint(6, 9), d = wholeMeanData(n, 3, 18), m = sum(d) / n, who = pick(['Aisha', 'Tomas', 'Ngozi', 'Callum']);
      return { kind: 'num', q: who + ' counts the number of words recalled by each of ' + n + ' participants: ' + list(d) + '.<br>Calculate the <b>mean</b> number of words recalled.', answer: m, unit: 'words', display: String(m),
        why: 'Add all the scores: ' + d.join(' + ') + ' = ' + sum(d) + '. There are ' + n + ' scores, so the mean is ' + sum(d) + ' ÷ ' + n + ' = ' + m + '.' };
    } },
    { skill: 'calculate-mean', gen: function () {
      var n = rint(8, 10), d = wholeMeanData(n, 12, 40), m = sum(d) / n;
      return { kind: 'num', q: 'A researcher times how many seconds ' + n + ' children take to finish a puzzle: ' + list(d) + '.<br>Calculate the <b>mean</b> time in seconds.', answer: m, unit: 'seconds', display: String(m),
        why: 'The total is ' + sum(d) + ' seconds for ' + n + ' children, so the mean is ' + sum(d) + ' ÷ ' + n + ' = ' + m + ' seconds.' };
    } },
    { skill: 'rounding', gen: function () {
      var n = rint(6, 9), d, t, m;
      do { d = []; for (var i = 0; i < n; i++) d.push(rint(4, 25)); t = sum(d); m = t / n; } while (t % n === 0 || isTie(m, 1));
      var r = R.roundDp(m, 1);
      return { kind: 'num', q: 'The numbers of dreams reported by ' + n + ' sleepers in a week were: ' + list(d) + '.<br>Calculate the <b>mean</b>. Give your answer to <b>1 decimal place</b>.', answer: r, unit: 'dreams', tol: 0.05, display: r.toFixed(1),
        why: 'The total is ' + t + ' and there are ' + n + ' sleepers: ' + t + ' ÷ ' + n + ' = ' + (Math.round(m * 10000) / 10000) + ', which is ' + r.toFixed(1) + ' to 1 decimal place.' };
    } },
    { skill: 'rounding', gen: function () {
      var n = rint(6, 8), d, t, m;
      do { d = []; for (var i = 0; i < n; i++) d.push(rint(10, 35)); t = sum(d); m = t / n; } while (t % n === 0 || isTie(m, 2) || Math.abs(R.roundDp(m, 2) - R.roundDp(m, 1)) < 0.005);
      var r = R.roundDp(m, 2);
      return { kind: 'num', q: 'Seven-year-olds were given a memory test marked out of 40. The scores of ' + n + ' children were: ' + list(d) + '.<br>Calculate the <b>mean</b> score. Give your answer to <b>2 decimal places</b>.', answer: r, unit: 'marks', tol: 0.005, display: r.toFixed(2),
        why: 'The total is ' + t + ', divided by ' + n + ' children gives ' + (Math.round(m * 100000) / 100000) + ', which is ' + r.toFixed(2) + ' to 2 decimal places.' };
    } },
    { skill: 'frequency-table', gen: function () {
      var f = [rint(2, 5), rint(3, 6), rint(2, 6), rint(1, 4)], v = [1, 2, 3, 4], n = sum(f), t = f[0] * 1 + f[1] * 2 + f[2] * 3 + f[3] * 4;
      while (isTie(t / n, 1)) { f = [rint(2, 5), rint(3, 6), rint(2, 6), rint(1, 4)]; n = sum(f); t = f[0] * 1 + f[1] * 2 + f[2] * 3 + f[3] * 4; }
      var r = R.roundDp(t / n, 1);
      return { kind: 'num', q: 'A teacher records how many cups of water each of ' + n + ' students drank during a lesson.<br>' + tbl(['Cups drunk', 'Number of students'], v.map(function (x, i) { return [x, f[i]]; })) + '<br>Calculate the <b>mean</b> number of cups. Give your answer to <b>1 decimal place</b>.', answer: r, unit: 'cups', tol: 0.05, display: r.toFixed(1),
        why: 'Multiply each value by its frequency: ' + v.map(function (x, i) { return x + ' × ' + f[i]; }).join(' + ') + ' = ' + t + '. The number of students is ' + n + ', so the mean is ' + t + ' ÷ ' + n + ' = ' + r.toFixed(1) + ' to 1 decimal place.' };
    } },
    { skill: 'choose-column', gen: function () {
      var n = rint(5, 7), a = wholeMeanData(n, 10, 30), b = wholeMeanData(n, 10, 30), mb = sum(b) / n, names = pick([['Quiet room', 'Noisy room'], ['Morning', 'Afternoon'], ['Practice', 'No practice']]);
      var rows = []; for (var i = 0; i < n; i++) rows.push(['P' + (i + 1), a[i], b[i]]);
      return { kind: 'num', q: 'The scores of participants in two conditions are shown.<br>' + tbl(['Participant', names[0], names[1]], rows) + '<br>Calculate the <b>mean</b> score in the <b>' + names[1] + '</b> condition.', answer: mb, unit: '', display: String(mb),
        why: 'Use only the ' + names[1] + ' column: ' + b.join(' + ') + ' = ' + sum(b) + '. Divide by ' + n + ' scores: ' + sum(b) + ' ÷ ' + n + ' = ' + mb + '.' };
    } },
    { skill: 'compare-means', gen: function () {
      var n = rint(5, 8), a = wholeMeanData(n, 8, 24), b = wholeMeanData(n, 14, 30), ma = sum(a) / n, mb = sum(b) / n;
      while (mb <= ma) { b = wholeMeanData(n, 14, 30); mb = sum(b) / n; }
      return { kind: 'num', q: 'A study gave ' + n + ' participants a word list to learn with and ' + n + ' without a mnemonic. Words recalled <b>without</b> the mnemonic: ' + list(a) + '. Words recalled <b>with</b> the mnemonic: ' + list(b) + '.<br>By how many words is the <b>mean</b> with the mnemonic higher than the mean without?', answer: mb - ma, unit: 'words', display: String(mb - ma),
        why: 'Without: ' + sum(a) + ' ÷ ' + n + ' = ' + ma + '. With: ' + sum(b) + ' ÷ ' + n + ' = ' + mb + '. The difference is ' + mb + ' − ' + ma + ' = ' + (mb - ma) + ' words.' };
    } },
    { skill: 'missing-value', gen: function () {
      var n = rint(5, 7), m = rint(10, 20), known = [], i;
      for (i = 0; i < n - 1; i++) known.push(rint(m - 6, m + 6));
      var last = m * n - sum(known);
      while (last < 1 || last > 40) { known = []; for (i = 0; i < n - 1; i++) known.push(rint(m - 6, m + 6)); last = m * n - sum(known); }
      return { kind: 'num', q: 'The mean score of ' + n + ' participants was ' + m + '. ' + (n - 1) + ' of the scores were ' + list(known) + '.<br>What was the score of the remaining participant?', answer: last, unit: '', display: String(last),
        why: 'The total of all ' + n + ' scores must be ' + m + ' × ' + n + ' = ' + (m * n) + '. The known scores add up to ' + sum(known) + ', so the missing score is ' + (m * n) + ' − ' + sum(known) + ' = ' + last + '.' };
    } },
    { skill: 'total-from-mean', gen: function () {
      var n = rint(8, 14), m = rint(6, 15);
      return { kind: 'num', q: 'In a reaction-time study, ' + n + ' participants had a mean score of ' + m + ' correct responses each. What was the <b>total</b> number of correct responses for the whole group?', answer: n * m, unit: '', display: String(n * m),
        why: 'The mean is the total divided by the number of scores, so total = mean × number of scores = ' + m + ' × ' + n + ' = ' + (n * m) + '.' };
    } },
    { skill: 'count-values', gen: function () {
      var base = [rint(3, 6), rint(7, 9)], d = [base[0], base[0], base[1], base[0], base[1]], extra = rint(5, 7);
      d.push(extra); while ((sum(d)) % d.length !== 0) { d[d.length - 1]++; }
      var m = sum(d) / d.length, order = d.slice();
      return { kind: 'num', q: 'A psychologist records the number of friends named by ' + d.length + ' teenagers: ' + list(order) + '. Some values appear more than once.<br>Calculate the <b>mean</b> number of friends named.', answer: m, unit: 'friends', display: String(m),
        why: 'Every score counts, including repeated ones. The total is ' + sum(d) + ' and there are ' + d.length + ' scores, so the mean is ' + sum(d) + ' ÷ ' + d.length + ' = ' + m + '.' };
    } },
    mc('describe-method', 'State how a researcher would calculate the <b>mean</b> score of a group of participants.',
      'Add all the scores together and divide by the number of scores', ['Put the scores in order and take the score that is exactly in the middle', 'Find the score that occurs most often', 'Subtract the lowest score from the highest score'],
      'The mean is the total of all scores divided by the number of scores. The middle score is the median, the most common is the mode and highest minus lowest is the range.'),
    mc('describe-method', 'Which calculation gives the mean of the scores 4, 6, 8, 10 and 12?',
      '(4 + 6 + 8 + 10 + 12) ÷ 5', ['(4 + 6 + 8 + 10 + 12) ÷ 4', '(4 + 12) ÷ 2', '8 ÷ 5'],
      'The five scores add up to 40 and there are five of them, so the mean is 40 ÷ 5 = 8. Dividing by 4 uses the wrong number of values.'),
    { skill: 'common-error', gen: function () {
      var n = rint(5, 7), d = wholeMeanData(n, 5, 20), t = sum(d), m = t / n;
      return { kind: 'mcq', q: 'A student finds the mean of ' + n + ' scores (' + list(d) + ') by working out ' + t + ' ÷ ' + (n + 1) + '. What mistake has the student made?',
        options: ['Divided by the wrong number of values', 'Found the median instead of the mean', 'Forgot to add all the scores together', 'Rounded the answer incorrectly'], answer: 0,
        why: 'There are ' + n + ' scores, so the total ' + t + ' must be divided by ' + n + ' to get ' + m + '. Dividing by ' + (n + 1) + ' uses the wrong number of values.' };
    } },
    { skill: 'outliers', gen: function () {
      var d = [rint(10, 14), rint(11, 15), rint(12, 16), rint(10, 15)], out = rint(45, 60), n = d.length + 1;
      var all = d.concat([out]), mAll = sum(all) / n, mD = sum(d) / d.length;
      return { kind: 'mcq', q: 'Four participants score ' + list(d) + '. A fifth participant scores ' + out + '. What happens to the <b>mean</b> when the fifth score is added?',
        options: ['It rises sharply because of the extreme score', 'It stays exactly the same however large the new score is', 'It falls because there are more scores', 'It is no longer possible to calculate'], answer: 0,
        why: 'The mean uses every score, so one extreme high score pulls it up. Without it the mean is ' + dpText(mD, 2) + ' and with it the mean is ' + dpText(mAll, 2) + '.' };
    } },
    { skill: 'outliers', gen: function () {
      var n = rint(5, 6), d = wholeMeanData(n, 6, 14), m0 = sum(d) / n, out;
      var t = sum(d) + 60; while (t % (n + 1) !== 0) t++;
      out = t - sum(d);
      var all = d.concat([out]);
      return { kind: 'num', q: 'The scores of ' + all.length + ' participants were ' + list(all) + '. One score is a clear outlier. Calculate the <b>mean of the scores excluding the outlier</b>.', answer: m0, unit: '', display: String(m0),
        why: 'The outlier is ' + out + ', far above the rest. The other ' + n + ' scores total ' + sum(d) + ', so their mean is ' + sum(d) + ' ÷ ' + n + ' = ' + m0 + '.' };
    } },
    { skill: 'zero-scores', gen: function () {
      var n = rint(6, 8), k = rint(1, 2), nz = [], i;
      for (i = 0; i < n - k; i++) nz.push(rint(3, 9));
      var r = sum(nz) % n;
      if (r) nz[0] += n - r;
      var all = nz.concat(new Array(k).fill(0)), tot = sum(nz), m = tot / n;
      return { kind: 'num', q: 'In a game, ' + n + ' players scored: ' + list(all) + '. Calculate the <b>mean</b> score, remembering to count every player.', answer: m, unit: 'points', display: String(m),
        why: 'Players who scored 0 still count. The total is ' + tot + ' and there are ' + n + ' players, so the mean is ' + tot + ' ÷ ' + n + ' = ' + m + '.' };
    } },
    { skill: 'difference-of-means', gen: function () {
      var n = rint(5, 7), pre = wholeMeanData(n, 5, 15), post = wholeMeanData(n, 10, 20), mp = sum(pre) / n, mq = sum(post) / n;
      while (mq <= mp) { post = wholeMeanData(n, 10, 20); mq = sum(post) / n; }
      var rows = []; for (var i = 0; i < n; i++) rows.push(['P' + (i + 1), pre[i], post[i]]);
      return { kind: 'num', q: 'Participants took a memory test before and after a training week.<br>' + tbl(['Participant', 'Before', 'After'], rows) + '<br>Calculate the <b>mean after</b> training minus the <b>mean before</b> training.', answer: mq - mp, unit: 'marks', display: String(mq - mp),
        why: 'Before: ' + sum(pre) + ' ÷ ' + n + ' = ' + mp + '. After: ' + sum(post) + ' ÷ ' + n + ' = ' + mq + '. The difference is ' + mq + ' − ' + mp + ' = ' + (mq - mp) + ' marks.' };
    } },
    { skill: 'choose-column', gen: function () {
      var days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'], a = wholeMeanData(5, 3, 12), b = wholeMeanData(5, 8, 20), mb = sum(b) / 5;
      var rows = days.map(function (dd, i) { return [dd, a[i], b[i]]; });
      return { kind: 'num', q: 'A school counts how many pupils use the library at break (Column X) and at lunch (Column Y) on five days.<br>' + tbl(['Day', 'Column X: break', 'Column Y: lunch'], rows) + '<br>Calculate the <b>mean</b> number of pupils per day at <b>lunch</b>.', answer: mb, unit: 'pupils', display: String(mb),
        why: 'Use the lunch column only: ' + b.join(' + ') + ' = ' + sum(b) + '. Divide by 5 days: ' + sum(b) + ' ÷ 5 = ' + mb + '.' };
    } },
    mc('mean-vs-median', 'A student writes: "I put the scores in order and picked the middle one, so that is the mean." What did the student actually find?',
      'The median', ['The mode', 'The range', 'The mean'],
      'The middle score of an ordered set is the median. The mean is found by adding all the scores and dividing by how many there are.'),
    mc('properties', 'The scores 3, 4 and 4 have a total of 11. Which statement about their mean is correct?',
      'It is 3.67 to 2 decimal places, and need not be one of the scores', ['It must be 4, because 4 is the most common score', 'It must always be one of the actual scores that appears in the data set', 'It is 11, the total of the scores'],
      'The mean is 11 ÷ 3 = 3.67 to 2 decimal places. A mean does not have to be a score that actually appears in the data.'),
    ms('properties', 'Select <b>all</b> the correct statements about the mean.',
      ['It uses every score in the data set', 'It can be affected by one extreme score'],
      ['It is always the middle score', 'It is the score that appears most often', 'It is the highest score minus the lowest score'],
      'The mean uses every score, so an extreme value can pull it up or down. The middle score is the median, the most common is the mode and highest minus lowest is the range.'),
    { skill: 'common-error', gen: function () {
      var n = rint(5, 6), d = wholeMeanData(n, 8, 20), m = sum(d) / n;
      var wrong = Math.min.apply(null, d) + Math.max.apply(null, d);
      return { kind: 'mcq', q: 'Scores: ' + list(d) + '. Which method gives the correct mean?',
        options: ['Total of all ' + n + ' scores ÷ ' + n, 'Highest score + lowest score ÷ 2', 'Total of all scores ÷ the highest score', 'Total of all scores − the lowest score'], answer: 0,
        why: 'The total is ' + sum(d) + ' and there are ' + n + ' scores, so the mean is ' + sum(d) + ' ÷ ' + n + ' = ' + m + '. The other methods do not use every score divided by how many there are.' };
    } }
  ] };

  /* ============ PSY-RM-19 Arithmetic: standard form, estimates and rounding ============ */
  function commas(n) { return String(n).replace(/\B(?=(\d{3})+(?!\d))/g, ','); }
  B['PSY-RM-19'] = { title: 'Arithmetic: standard form, estimates and rounding', items: [
    { skill: 'standard-form', gen: function () {
      var a = rint(11, 99) / 10, n = rint(4, 8), val = Number(a + 'e' + n);
      return { kind: 'num', q: 'A survey of social media users had ' + commas(val) + ' responses. Written in standard form as a × 10<sup>n</sup>, what is the value of <b>n</b>?', answer: n, unit: '', display: String(n),
        why: 'Standard form needs the front number to be at least 1 and below 10. ' + commas(val) + ' = ' + a + ' × 10<sup>' + n + '</sup>, so n = ' + n + '.' };
    } },
    { skill: 'standard-form', gen: function () {
      var a = rint(11, 99) / 10, n = rint(1, 3);
      var val = Number(a + 'e-' + n), sa = String(a);
      return { kind: 'num', q: 'A reaction took ' + String(val).replace(/e.*/, '') + ' seconds. Written in standard form as a × 10<sup>n</sup>, what is the value of <b>n</b>? (n may be negative.)', answer: -n, unit: '', display: String(-n),
        why: 'Write the front number between 1 and 10: ' + sa + ' × 10<sup>−' + n + '</sup> = ' + val.toFixed(n + 1) + '. Numbers smaller than 1 have a negative power, so n = −' + n + '.' };
    } },
    { skill: 'standard-form', gen: function () {
      var a = rint(12, 98) / 10, n = rint(3, 7), val = Number(a + 'e' + n);
      return { kind: 'num', q: 'The population of a town is ' + commas(val) + '. In standard form this is a × 10<sup>' + n + '</sup>. What is the value of <b>a</b>?', answer: a, unit: '', tol: 0.005, display: String(a),
        why: 'Move the decimal point so the front number is between 1 and 10. ' + commas(val) + ' = ' + a + ' × 10<sup>' + n + '</sup>, so a = ' + a + '.' };
    } },
    { skill: 'standard-form', gen: function () {
      var a = rint(12, 98) / 10, n = rint(3, 6), val = Number(a + 'e' + n);
      return { kind: 'num', q: 'Write ' + a + ' × 10<sup>' + n + '</sup> as an ordinary number.', answer: val, unit: '', tol: 0.5, display: String(val),
        why: 'Multiplying by 10<sup>' + n + '</sup> moves the decimal point ' + n + ' places to the right: ' + a + ' × 10<sup>' + n + '</sup> = ' + commas(val) + '.' };
    } },
    { skill: 'standard-form', gen: function () {
      var a = rint(12, 98) / 10, n = rint(2, 4), val = Number(a + 'e-' + n);
      return { kind: 'num', q: 'Write ' + a + ' × 10<sup>−' + n + '</sup> as an ordinary decimal number.', answer: val, unit: '', tol: Number('5e-' + (n + 3)), display: val.toFixed(n + 1),
        why: 'A negative power moves the decimal point ' + n + ' places to the left: ' + a + ' × 10<sup>−' + n + '</sup> = ' + val.toFixed(n + 1) + '.' };
    } },
    mc('standard-form', 'Which of these numbers is written correctly in <b>standard form</b>?',
      '3.2 × 10<sup>4</sup>', ['32 × 10<sup>3</sup>', '0.32 × 10<sup>5</sup>', '320 × 10<sup>2</sup>'],
      'Standard form is a × 10<sup>n</sup> with a at least 1 and less than 10. Only 3.2 fits; the others have a front number of 10 or more, or less than 1.'),
    mc('standard-form', 'A student writes 39,980,000 as 39.98 × 10<sup>6</sup>. What is the correct standard form?',
      '3.998 × 10<sup>7</sup>', ['39.98 × 10<sup>6</sup> is already correct', '3.998 × 10<sup>6</sup>', '0.3998 × 10<sup>8</sup>'],
      'The front number must be between 1 and 10, so move the decimal point one more place: 39.98 × 10<sup>6</sup> = 3.998 × 10<sup>7</sup>.'),
    ms('standard-form', 'Select <b>all</b> the numbers that are written in correct standard form.',
      ['6.4 × 10<sup>5</sup>', '1.05 × 10<sup>−3</sup>'],
      ['64 × 10<sup>4</sup>', '0.64 × 10<sup>6</sup>', '10 × 10<sup>2</sup>'],
      'In standard form the front number is at least 1 and below 10. 6.4 and 1.05 fit; 64, 0.64 and 10 do not.'),
    { skill: 'estimate', gen: function () {
      var x = rint(1200, 8900), y = rint(12, 39) / 10; while (x % 1000 === 500 || Math.round(y * 10) % 10 === 5) { x = rint(1200, 8900); y = rint(12, 39) / 10; }
      var rx = R.roundSf(x, 1), ry = R.roundSf(y, 1), ans = rx * ry;
      return { kind: 'num', q: 'A study had ' + commas(x) + ' participants and each gave ' + y + ' hours of data. <b>Estimate</b> the total hours by rounding each number to <b>1 significant figure</b> first, then multiplying. (Round up when the next digit is 5 or more.)', answer: ans, unit: 'hours', display: String(ans),
        why: 'Round each number to 1 significant figure: ' + commas(x) + ' ≈ ' + commas(rx) + ' and ' + y + ' ≈ ' + ry + '. Then ' + commas(rx) + ' × ' + ry + ' = ' + commas(ans) + '.' };
    } },
    { skill: 'estimate', gen: function () {
      var a, b, c;
      do { a = rint(1100, 9400); b = rint(11000, 29000); c = rint(1900, 9900); } while (a % 100 === 50 || b % 1000 === 500 || c % 100 === 50);
      var ra = R.roundSf(a, 2), rb = R.roundSf(b, 2), rc = R.roundSf(c, 2);
      return { kind: 'num', q: 'Three surveys received ' + commas(a) + ', ' + commas(b) + ' and ' + commas(c) + ' replies. <b>Estimate</b> the total number of replies by rounding each to <b>2 significant figures</b> and adding. (Round up when the next digit is 5 or more.)', answer: ra + rb + rc, unit: '', display: String(ra + rb + rc),
        why: 'Round each to 2 significant figures: ' + commas(ra) + ', ' + commas(rb) + ' and ' + commas(rc) + '. Their total is ' + commas(ra + rb + rc) + '.' };
    } },
    mc('estimate', 'To estimate 6.8 × 304 a student rounds each number to 1 significant figure. Which calculation should the student do?',
      '7 × 300', ['6 × 300', '7 × 30', '68 × 3'],
      '6.8 rounds to 7 and 304 rounds to 300 (1 significant figure), so the estimate is 7 × 300 = 2100.'),
    { skill: 'decimal-places', gen: function () {
      var x = rint(1000000, 9999999) / 100000, r = R.roundDp(x, 2);
      return { kind: 'num', q: 'A participant drank ' + x.toFixed(5) + ' units of alcohol. Give this to <b>2 decimal places</b>.' + ' (Round up when the next digit is 5 or more.)', answer: r, unit: 'units', tol: 0.005, display: r.toFixed(2),
        why: 'Keep two digits after the decimal point and look at the third digit to round: ' + x.toFixed(5) + ' = ' + r.toFixed(2) + ' to 2 decimal places.' };
    } },
    { skill: 'decimal-places', gen: function () {
      var w = rint(3, 29), t = rint(1, 9), x = Number(w + '.' + t + '5'), r = R.roundDp(x, 1);
      return { kind: 'num', q: 'A mean reaction time was ' + x.toFixed(2) + ' seconds. Round this to <b>1 decimal place</b>.' + ' (Round up when the next digit is 5 or more.)', answer: r, unit: 'seconds', tol: 0.05, display: r.toFixed(1),
        why: 'The second decimal digit is 5, and 5 or more rounds up. So ' + x.toFixed(2) + ' rounds up to ' + r.toFixed(1) + ' to 1 decimal place.' };
    } },
    { skill: 'significant-figures', gen: function () {
      var x = rint(1000, 9999) / 1000, r = R.roundSf(x, 2);
      return { kind: 'num', q: 'A correlation calculation gives ' + x.toFixed(3) + '. Round this to <b>2 significant figures</b>.' + ' (Round up when the next digit is 5 or more.)', answer: r, unit: '', tol: 0.005, display: (r >= 10 ? '10' : r.toFixed(1)),
        why: 'The first two significant figures of ' + x.toFixed(3) + ' are the first two digits. Use the next digit to round: the answer is ' + (r >= 10 ? '10' : r.toFixed(1)) + ' to 2 significant figures.' };
    } },
    { skill: 'significant-figures', gen: function () {
      var x = rint(10000, 99999), r = R.roundSf(x, 2);
      return { kind: 'num', q: 'A school has ' + commas(x) + ' pupils in the area. Round this to <b>2 significant figures</b>.' + ' (Round up when the next digit is 5 or more.)', answer: r, unit: '', display: String(r),
        why: 'The first two significant figures are ' + String(x).slice(0, 2) + '. The next digit is ' + String(x)[2] + ', so ' + (Number(String(x)[2]) >= 5 ? 'round up' : 'round down') + ' to give ' + commas(r) + '.' };
    } },
    { skill: 'significant-figures', gen: function () {
      var opts = [['0.0405', 3], ['0.00450', 3], ['2.50', 3], ['0.0072', 2], ['5008', 4], ['0.3', 1], ['1.206', 4]], o = pick(opts);
      return { kind: 'num', q: 'How many significant figures does ' + o[0] + ' have? (Count from the first non-zero digit.)', answer: o[1], unit: '', display: String(o[1]),
        why: 'Significant figures are counted from the first non-zero digit, and zeros before it are not counted. ' + o[0] + ' has ' + o[1] + (o[1] === 1 ? ' significant figure.' : ' significant figures.') };
    } },
    mc('dp-vs-sf', 'The number 12.3456 is rounded to <b>3 significant figures</b>. What is the result?',
      '12.3', ['12.35', '12.346', '12'],
      '3 significant figures keeps the digits 1, 2 and 3, so 12.3. Rounding to 2 decimal places would give 12.35, and 3 decimal places 12.346.'),
    mc('dp-vs-sf', 'A student rounds 0.04567 to <b>2 decimal places</b> and writes 0.05. A teacher says it should be <b>2 significant figures</b>. What should the 2 significant figure answer be?',
      '0.046', ['0.05', '0.0457', '0.04'],
      'Significant figures start at the first non-zero digit (the 4): 4 and 5 are the first two, and the next digit 6 rounds the 5 up, so 0.046. The student had counted decimal places instead.'),
    { skill: 'totals-differences', gen: function () {
      var v = [rint(120, 480), rint(120, 480), rint(120, 480), rint(120, 480), rint(120, 480)], t = sum(v);
      return { kind: 'num', q: 'A researcher counted students in five year groups who used a revision app: ' + list(v) + '.<br>Calculate the <b>total</b> number of students.', answer: t, unit: 'students', display: String(t),
        why: 'Add the exact figures: ' + v.join(' + ') + ' = ' + t + '.' };
    } },
    { skill: 'totals-differences', gen: function () {
      var a = rint(11, 30), b = rint(3, a - 3), rows = [['1 to 20 mph', a], ['21 to 30 mph', b]];
      return { kind: 'num', q: 'Drivers were recorded at different speeds.<br>' + tbl(['Speed band', 'Number of drivers'], rows) + '<br>Calculate the <b>difference</b> between the numbers of drivers in the two bands.', answer: a - b, unit: 'drivers', display: String(a - b),
        why: 'Subtract the smaller figure from the larger: ' + a + ' − ' + b + ' = ' + (a - b) + '.' };
    } },
    { skill: 'totals-differences', gen: function () {
      var v = [rint(100, 990) / 100, rint(100, 990) / 100, rint(100, 990) / 100, rint(100, 990) / 100], t = Math.round(sum(v) * 100) / 100;
      return { kind: 'num', q: 'A patient drank ' + v.map(function (x) { return x.toFixed(2); }).join(', ') + ' units of alcohol over four days.<br>Calculate the <b>total</b> units of alcohol. Give your answer to <b>2 decimal places</b>.', answer: t, unit: 'units', tol: 0.005, display: t.toFixed(2),
        why: 'Add the exact figures: ' + v.map(function (x) { return x.toFixed(2); }).join(' + ') + ' = ' + t.toFixed(2) + '.' };
    } },
    { skill: 'totals-differences', gen: function () {
      var a = rint(5000, 7500) / 100, b = rint(4500, 6500) / 100;
      var hi = Math.max(a, b), lo = Math.min(a, b), d = Math.round((hi - lo) * 100) / 100;
      var r = R.roundSf(d, 2);
      while (r === d || d === 0) { a = rint(5000, 7500) / 100; b = rint(4500, 6500) / 100; hi = Math.max(a, b); lo = Math.min(a, b); d = Math.round((hi - lo) * 100) / 100; r = R.roundSf(d, 2); }
      return { kind: 'num', q: 'Mean times to finish a task were ' + hi.toFixed(2) + ' seconds for one group and ' + lo.toFixed(2) + ' seconds for another. Calculate the difference between the means. Give your answer to <b>2 significant figures</b>.', answer: r, unit: 'seconds', tol: Math.pow(10, Math.floor(Math.log10(r)) - 1) / 2, display: String(r),
        why: 'Subtract the exact values: ' + hi.toFixed(2) + ' − ' + lo.toFixed(2) + ' = ' + d.toFixed(2) + '. Round only at the end to 2 significant figures: ' + r + '.' };
    } }
  ] };

  /* ============ PSY-RM-02 Extraneous variables and how to control them ============ */
  B['PSY-RM-02'] = { title: 'Extraneous variables and how to control them', items: [
    mc('define-EV', 'Which statement best describes an <b>extraneous variable</b>?',
      'A variable other than the IV that could affect the DV', ['The variable the researcher changes on purpose between conditions', 'The variable the researcher measures at the end', 'A variable that is kept exactly the same for all'],
      'An extraneous variable is anything other than the IV that might change the DV. If it is not controlled it can make the results hard to trust.'),
    mc('define-EV', 'A student says: "In my experiment the type of music is an extraneous variable." The type of music is what the researcher deliberately changed between groups. What is wrong?',
      'It is the IV, because the researcher changed it on purpose', ['It is the DV, because it is the outcome that gets measured at the end', 'It is correct, because music is not a main focus', 'It is a participant variable, because it is about people'],
      'A variable that the researcher changes deliberately between conditions is the IV, not an extraneous variable.'),
    mc('classify', 'In a memory experiment, some participants were very tired because they had not slept the night before. What type of variable is this?',
      'A participant variable', ['A situational variable', 'The independent variable', 'The dependent variable'],
      'Tiredness is a difference between the people taking part, so it is a participant variable.'),
    mc('classify', 'In a study run in a school hall, building work started outside halfway through the day and some participants did the task in the noise. What type of variable is the noise?',
      'A situational variable', ['A participant variable', 'The independent variable', 'The dependent variable'],
      'Noise comes from the setting, not from the people, so it is a situational variable that could affect the DV.'),
    mc('classify', 'A researcher tests some participants in a warm room in the afternoon and others in a cold room in the morning. Which is a <b>situational</b> variable?',
      'The room temperature', ['The participants\' intelligence', 'The participants\' age', 'The participants\' mood'],
      'Room temperature (and time of day) is part of the situation. Age, mood and intelligence are about the participants.'),
    ms('classify', 'Select <b>all</b> the participant variables.',
      ['Age of the participants', 'Intelligence of the participants'],
      ['Temperature of the room', 'Instructions read out by the researcher', 'Time of day of the test'],
      'Participant variables are differences between the people, such as age and intelligence. Temperature, instructions and time of day belong to the situation.'),
    ms('classify', 'Select <b>all</b> the situational variables.',
      ['Time of day the test is run', 'Wording of the instructions'],
      ['Mood of the participants', 'Gender of the participants', 'Previous experience of the task'],
      'Situational variables come from the setting or procedure, such as the time of day and instructions. Mood, gender and experience are participant variables.'),
    mc('standardisation', 'What does it mean to use a <b>standardised procedure</b>?',
      'Every participant gets the same instructions, materials, timing and setting', ['Participants are matched on age and gender', 'Participants are kept unaware of both the aim and the conditions of the study', 'Half the participants do the conditions in reverse order'],
      'Standardising means keeping the procedure the same for everyone so that situational variables cannot differ between participants.'),
    mc('standardisation', 'Which is a way a researcher could <b>standardise</b> a memory experiment?',
      'Read the same recorded instructions to every participant', ['Let each participant choose how long to study', 'Give some participants more words to learn', 'Allow the researcher to explain the task in their own words'],
      'Using the same recorded instructions removes differences in how the task is explained. The other options would let the procedure differ between participants.'),
    mc('blind-techniques', 'In a study, participants are not told which of two conditions they are in. Which control is being used?',
      'A single-blind technique', ['A double-blind technique', 'Counterbalancing', 'Matched pairs'],
      'Single-blind means the participants do not know the aim or which condition they are in. In a double-blind technique the researcher running the test is unaware too.'),
    mc('blind-techniques', 'An assistant runs the tests and records scores. Neither the assistant nor the participants know which participants received the real treatment. Which technique is this?',
      'A double-blind technique', ['A single-blind technique', 'Counterbalancing', 'An independent measures design'],
      'Both the participants and the person running the study are unaware of the conditions, so it is double-blind.'),
    mc('blind-techniques', 'Why might a researcher use a <b>single-blind</b> technique?',
      'So participants cannot change their behaviour to match the aim', ['So the researcher cannot influence the results through their own expectations', 'So the participants do the conditions in different orders', 'So each participant is matched with a similar person'],
      'If participants know the aim they may behave differently (demand characteristics). Single-blind stops this. Preventing researcher influence is the job of a double-blind technique.'),
    mc('blind-techniques', 'Why might a researcher use a <b>double-blind</b> technique rather than only a single-blind one?',
      'So the researcher\'s expectations cannot affect the results', ['So participants cannot work out the order of the conditions', 'So every participant has the same instructions', 'So participants can be matched in pairs'],
      'In a double-blind study the person running the test does not know the condition either, so their expectations cannot affect how they behave or record results.'),
    mc('counterbalancing', 'In a repeated measures study, half the participants do condition A and then B, and the other half do B and then A. What is this control called?',
      'Counterbalancing', ['Standardisation', 'Matched pairs', 'A double-blind technique'],
      'Counterbalancing varies the order of conditions across participants so that order effects, such as practice or tiredness, do not favour one condition.'),
    mc('counterbalancing', 'Which problem does counterbalancing mainly control?',
      'Order effects such as practice or fatigue', ['Differences between participants in different groups', 'Participants guessing the aim', 'The researcher\'s expectations'],
      'Counterbalancing is used with repeated measures designs to spread order effects (practice, boredom, fatigue) evenly across both conditions.'),
    mc('randomisation', 'Names of 30 participants are drawn from a hat to decide who goes in each of two groups. Which control is being used?',
      'Random allocation of participants to conditions', ['Counterbalancing of the order in which conditions are done', 'A double-blind technique', 'Matching on age and gender'],
      'Drawing names by chance is randomisation. It helps spread participant variables evenly between the groups in an independent measures design.'),
    mc('design-identify', 'A researcher tests the same 20 people in a quiet room and then again in a noisy room. Which experimental design is this?',
      'Repeated measures', ['Independent measures', 'Matched pairs', 'Natural experiment'],
      'The same people take part in both conditions, so it is a repeated measures design.'),
    mc('design-identify', 'Twenty-four participants are split so that 12 do the task with a distraction and 12 do the task without. Nobody takes part in both. Which design is this?',
      'Independent measures', ['Repeated measures', 'Matched pairs', 'Counterbalanced design'],
      'Different people are in each condition, so it is independent measures.'),
    mc('design-identify', 'A researcher pairs participants who have a similar age and IQ, then puts one from each pair in each condition. Which design is this?',
      'Matched pairs', ['Independent measures', 'Repeated measures', 'Single-blind design'],
      'Pairing similar people and putting one in each condition is a matched pairs design.'),
    mc('design-evaluate', 'Which is a weakness of an <b>independent measures</b> design?',
      'Participant variables may differ between the groups', ['Participants may get better with practice', 'Participants may become tired or bored', 'The same people must be found and tested twice over'],
      'Different people are in each condition, so their differences (participant variables) could affect the DV. Practice and fatigue are problems for repeated measures.'),
    mc('design-evaluate', 'Which is a weakness of a <b>repeated measures</b> design?',
      'Order effects such as practice and fatigue', ['Participant variables differ between the conditions', 'A lot of time is spent matching people', 'More participants are needed in total'],
      'Doing both conditions can cause practice or fatigue effects, which can be controlled by counterbalancing. Participant variables are controlled because the same people do both conditions.'),
    mc('design-evaluate', 'Which is a strength of a <b>matched pairs</b> design compared with independent measures?',
      'Participant variables are reduced by pairing similar people', ['It needs fewer participants than repeated measures', 'It completely removes every difference between the participants', 'It is quicker because no matching is needed'],
      'Matching on key characteristics reduces the effect of participant variables without order effects. It cannot remove every difference and it takes time to match.')
  ] };

  /* ============ PSY-RM-05 Experiments: lab, field and natural ============ */
  B['PSY-RM-05'] = { title: 'Experiments: lab, field and natural', items: [
    mc('identify-method', 'A researcher tests 40 volunteers one at a time in a soundproofed university room. She decides whether each volunteer sees a cheerful or a gloomy film clip and then measures their mood. Which method is this?',
      'Laboratory experiment', ['Field experiment', 'Natural experiment', 'Questionnaire'],
      'The setting is artificial and controlled and the researcher manipulates the IV (the type of clip), so it is a laboratory experiment.'),
    mc('identify-method', 'A researcher changes the seating plan of two real classes at their own school, one by ability and one mixed, and counts how often pupils ask for help. The pupils do not know they are in a study. Which method is this?',
      'Field experiment', ['Laboratory experiment', 'Natural experiment', 'Interview'],
      'The IV (the seating plan) is manipulated by the researcher in the pupils\' normal setting, so it is a field experiment.'),
    mc('identify-method', 'A council opens a new playground in one town but not in a similar town. A researcher compares the amount of exercise children take in each town before and after. The researcher did not decide where the playground went. Which method is this?',
      'Natural experiment', ['Field experiment', 'Laboratory experiment', 'Observation'],
      'The IV (having a playground) changed naturally and the researcher only measured the DV, so it is a natural experiment.'),
    mc('identify-method', 'A researcher gives half of the shoppers in a real supermarket a leaflet about healthy eating and half none, then records what they buy. Which method is this?',
      'Field experiment', ['Natural experiment', 'Laboratory experiment', 'Case study'],
      'The researcher manipulates the IV (leaflet or no leaflet) in a natural setting, so it is a field experiment. It would be natural only if the IV changed without the researcher\'s involvement.'),
    mc('common-error', 'A researcher assigns half the classes in a school to use a new reading scheme and compares test scores. A student calls this a natural experiment. What is wrong?',
      'The researcher chose which classes got the scheme', ['Nothing is wrong, because it took place in a school', 'It must be a laboratory experiment, because tests were used', 'It is a natural experiment because scores were measured'],
      'In a natural experiment the IV changes without the researcher manipulating it. Here the researcher decided which classes used the scheme, so it is not natural.'),
    mc('features', 'Which is a feature of a <b>laboratory experiment</b>?',
      'It takes place in a controlled, artificial setting', ['It uses an IV that changes naturally', 'It is carried out in the participants\' everyday setting', 'The researcher does not manipulate the IV'],
      'Laboratory experiments are done in controlled settings where the researcher manipulates the IV.'),
    mc('features', 'Which is a feature of a <b>field experiment</b>?',
      'The researcher manipulates the IV in a natural setting', ['The IV changes without the researcher doing anything', 'It is carried out in a tightly controlled laboratory setting', 'No variable is measured'],
      'Field experiments take place in the participants\' natural setting but the researcher still manipulates the IV.'),
    mc('features', 'Which is a feature of a <b>natural experiment</b>?',
      'The IV changes naturally and the researcher only measures the DV', ['The researcher decides which participants will receive which condition', 'It is carried out in a controlled laboratory', 'The same people always do every condition'],
      'In a natural experiment the researcher does not manipulate the IV, such as the arrival of television in a community; they measure the effect on the DV.'),
    mc('strength-weakness', 'Which is a <b>strength</b> of a laboratory experiment?',
      'Variables can be tightly controlled and the study repeated', ['The setting is the same as everyday life', 'Participants never guess the aim of the study', 'It can study variables that it would be unethical for researchers to change'],
      'High control and easy replication are strengths of laboratory experiments. They often have low ecological validity and participants may guess the aim (demand characteristics).'),
    mc('strength-weakness', 'Which is a <b>weakness</b> of a laboratory experiment?',
      'The artificial setting may make behaviour unlike real life', ['Extraneous variables are hard to control', 'The IV is not controlled by the researcher', 'Participants are always unaware that they are being studied at all'],
      'Low ecological validity is a typical weakness: behaviour in an artificial lab may not reflect real life.'),
    mc('strength-weakness', 'Which is a <b>strength</b> of a field experiment compared with a laboratory experiment?',
      'Behaviour is more natural, so the results are more true to life', ['The researcher controls extraneous variables far more tightly than in the lab', 'It is easier to replicate exactly', 'Consent is always given before the study'],
      'In a natural setting participants behave more naturally, giving higher ecological validity. Control and replication are usually better in a lab.'),
    mc('strength-weakness', 'Which is a <b>weakness</b> of a field experiment?',
      'It is harder to control extraneous variables', ['The setting is artificial and highly controlled', 'The researcher cannot manipulate the IV', 'It always needs repeated measures'],
      'In real-life settings the researcher cannot control everything, so extraneous variables may affect the DV and the study is harder to replicate.'),
    mc('strength-weakness', 'Which is a <b>strength</b> of a natural experiment?',
      'It can study variables that would be unethical or impossible to manipulate', ['The researcher randomly allocates people to each of the conditions of the study', 'Extraneous variables are tightly controlled', 'It is quick and easy to repeat exactly'],
      'Natural experiments use IVs that change naturally, so researchers can study things they could not or should not manipulate. They cannot control allocation or extraneous variables.'),
    mc('strength-weakness', 'Which is a <b>weakness</b> of a natural experiment?',
      'The researcher has no control over who is in each condition', ['The setting is always artificial', 'The IV must be unethical to manipulate', 'The results always apply to everyone in every possible situation'],
      'Because the IV changes naturally the researcher cannot allocate participants or control extraneous variables, so cause and effect is harder to show.'),
    mc('named-study', 'In Godden and Baddeley\'s (1975) study, what did the scuba divers do?',
      'Learned word lists on land or underwater, then recalled them', ['Learned word lists only on land and recalled them later underwater', 'Watched a film underwater and answered questions on land', 'Counted backwards in threes and then recalled letter strings'],
      'The divers learned and recalled word lists either on land or underwater, producing four combinations of learning and recall environment.'),
    mc('named-study', 'What did Godden and Baddeley (1975) conclude from their results?',
      'Recall is better when the learning and recall environments match', ['Recall is always better underwater than on land', 'Recall is better when the learning and recall environments are different', 'Divers remember less than non-divers'],
      'Recall was best when the divers learned and recalled in the same environment, which supports the idea that matching context helps retrieval.'),
    mc('named-study', 'Why is Godden and Baddeley\'s (1975) study described as a <b>field experiment</b>?',
      'The researchers chose where words were learned and recalled, in familiar settings', ['The divers\' environment changed naturally without the researchers', 'It took place in a soundproofed laboratory', 'The divers were not given any word lists'],
      'The researchers decided the IV (learning and recall environment) in real settings the divers knew, which makes it a field experiment.'),
    mc('named-study', 'Becker et al. (2002) studied the effect of television on eating behaviours in Fiji. Why was this a <b>natural experiment</b>?',
      'The researchers did not introduce television; it arrived in Fiji by itself', ['The researchers gave girls television in a laboratory', 'The researchers randomly allocated the girls to watch or not to watch television', 'The researchers controlled which programmes were shown'],
      'The IV (the introduction of television) changed naturally, and the researchers measured the effect on eating attitudes and behaviours.'),
    mc('named-study', 'Which is a weakness of using a natural experiment such as Becker et al.\'s (2002) Fiji study?',
      'Other changes in Fiji over the three years could also have affected the girls', ['The girls knew they were in a laboratory', 'The researchers decided which of the girls would be allowed to see television', 'The study could be repeated in exactly the same way'],
      'Because the researchers could not control other influences, changes such as other Western influences could have affected the results, so television may not be the only cause.'),
    mc('extended-AO', 'In a 12-mark answer on experiments, which sentence is an example of <b>evaluation</b> (AO3)?',
      'Natural experiments can study things that cannot ethically be manipulated', ['A natural experiment is one where the IV changes without the researcher doing anything', 'In Fiji, television arrived naturally and the researchers compared the girls\' eating attitudes in 1995 and 1998', 'The divers learned lists on land or underwater in one of four conditions'],
      'Weighing a strength against a weakness is evaluation. The other sentences describe the method (AO1) and apply it to a study (AO2).'),
    mc('extended-AO', 'In a 12-mark answer on experiments, which sentence is an example of <b>application</b> to a named study?',
      'In Godden and Baddeley\'s study the divers\' environments were familiar', ['A field experiment takes place in a natural setting', 'Field experiments generally have less control than laboratory experiments', 'Overall, field experiments are better than laboratory experiments'],
      'Linking the method to details of the named study is application. The others are a description of the method, an evaluation point and a judgement.'),
    mc('extended-AO', 'Which ending to a 12-mark answer on laboratory experiments is a balanced <b>judgement</b>?',
      'Laboratory experiments give strong control, but may not reflect real life', ['Laboratory experiments are controlled', 'Laboratory experiments take place in a laboratory', 'Laboratory experiments are used by many psychologists, who run them in many universities'],
      'A judgement weighs the strengths against the limits and reaches a reasoned conclusion. The other options only state facts.')
  ] };

  /* ============ PSY-EXT-02 Issues and debates essays (9 marks) ============ */
  B['PSY-EXT-02'] = { title: 'Issues and debates essays (9 marks)', items: [
    mc('debate-terms', 'In the nature and nurture debate, what does <b>nurture</b> mean?',
      'Behaviour comes from the environment and experience', ['Behaviour comes from inherited genes', 'Behaviour comes from the structure of the brain and nothing else', 'Behaviour cannot be explained'],
      'Nurture is the influence of upbringing, life events and learning. Nature is the influence of inherited, biological factors such as genes.'),
    mc('debate-terms', 'In the nature and nurture debate, what does <b>nature</b> mean?',
      'Behaviour comes from inherited, biological factors', ['Behaviour comes from upbringing and experience', 'Behaviour comes from what other people expect and from their own upbringing', 'Behaviour comes from the laws of a country'],
      'Nature refers to biological and inherited influences, such as genes and neurotransmitters.'),
    mc('debate-terms', 'A teenager is described as very anxious. Which explanation is a <b>nurture</b> explanation?',
      'She grew up in a household where worry was constantly modelled', ['She inherited genes that affect the way her body processes stress', 'Her neurotransmitter levels are naturally low', 'Her brain structure is different at birth'],
      'Learning from the environment and experience is nurture. Genes, neurotransmitters and inherited brain structure are nature explanations.'),
    mc('debate-terms', 'Which pair of terms is used when discussing the <b>reductionism and holism</b> debate in memory?',
      'Reductionist and holistic', ['Conventional and post-conventional', 'Independent and dependent', 'Single-blind and double-blind'],
      'Reductionist explanations break behaviour into simple parts; holistic explanations look at the whole person or system.'),
    mc('debate-terms', 'Which description of <b>reductionism</b> is correct?',
      'Explaining behaviour by breaking it into simple parts', ['Explaining behaviour by looking at the whole person in their context', 'Explaining behaviour only through upbringing', 'Explaining behaviour using ethical principles'],
      'Reductionism explains complex behaviour using its simplest components. Looking at the whole person is holism.'),
    mc('evidence', 'Why is the multi-store model of memory described as <b>reductionist</b>?',
      'It breaks memory into separate simple stores, such as STM and LTM', ['It says memory depends on each person\'s whole life story', 'It says that memory is rebuilt each time a person recalls something', 'It says memory is inherited from parents'],
      'Splitting memory into a sensory register, short-term store and long-term store breaks a complex process into parts, which is reductionist.'),
    mc('evidence', 'Why is Bartlett\'s (1932) work on reconstructive memory and schemas often used as a <b>holistic</b> account?',
      'It treats memory as shaped by the whole person\'s knowledge', ['It splits memory into simple, separate stores that work in order', 'It reduces memory to a single chemical process', 'It shows memory is the same in every person'],
      'Bartlett argued memory is reconstructed using schemas, which come from a person\'s overall experience, so it considers the whole person rather than separate parts.'),
    mc('evidence', 'What did Caspi et al. (2003) find about depression?',
      'Short 5-HTT alleles plus stressful events led to more depression', ['Stressful life events on their own always caused depression in everyone', 'The 5-HTT gene alone always caused depression', 'Neither genes nor life events affected depression'],
      'Caspi et al. found depression was more likely when a particular gene variant was combined with stressful experiences, showing an interaction between nature and nurture.'),
    mc('evidence', 'What does the Caspi et al. (2003) finding suggest about the nature-nurture debate?',
      'Both interact: genes and stress together raised the risk', ['Nurture is the only cause of depression, as stress is what matters', 'Nature is the only cause of depression', 'The debate cannot apply to depression'],
      'The risk of depression was highest when a genetic factor (nature) and stressful events (nurture) combined, which is the diathesis-stress idea.'),
    mc('evidence', 'A student writes: "Caspi proved that depression is caused only by genes." What is wrong with this?',
      'Genes interacted with stressful events; they did not act alone', ['The study used no genetic evidence at all', 'The study showed depression is caused only by upbringing', 'The statement is correct, as the study found genes alone were responsible'],
      'Caspi et al. found a gene effect only in combination with stressful events, so genes alone were not the whole explanation.'),
    mc('evidence', 'Which research could be used in a Topic 4 essay on how psychology has <b>changed over time</b>?',
      'Phineas Gage\'s brain injury, then Sperry\'s (1968) split-brain research', ['Kohlberg\'s stages of morality, followed by Asch\'s conformity research', 'Peterson and Peterson (1959), followed by Milgram\'s obedience research', 'Bartlett (1932), followed by Dweck\'s mindset theory'],
      'Studying brain damage and then split-brain patients are the examples of research on the brain used to show how psychology has changed.'),
    mc('evidence', 'What did Sperry\'s (1968) split-brain research show that earlier case studies such as Phineas Gage\'s had not?',
      'That the two hemispheres have different specialisms', ['That the frontal lobe has no function', 'That a person\'s personality is fixed at birth and cannot change', 'That memory is stored only in the right hemisphere'],
      'Sperry\'s work on lateralisation showed the left hemisphere is mainly specialised for language and the right for spatial tasks, adding detail to earlier ideas about brain function.'),
    mc('debate-terms', 'Which of these is an example of a <b>social issue</b> that psychology can help to explain?',
      'Why ordinary people may obey harmful orders from authority', ['How many words a person is able to remember in one minute of testing', 'Which side of the brain controls the right hand', 'What colour a child chooses to paint with'],
      'A social issue is a problem that affects society. Obedience to authority is a social issue studied by Milgram. The other options are individual tasks.'),
    mc('debate-terms', 'Which best describes <b>culture</b> in the social and cultural issues debate?',
      'The shared beliefs, customs and values of a group', ['The inherited genes of a family', 'A single person\'s own memories and personal experiences', 'The size of a country\'s population'],
      'Culture is the shared way of life, beliefs and values of a group, which can shape how people behave and are judged.'),
    mc('evidence', 'What is a limitation of using Milgram\'s obedience research to explain social issues today?',
      'It may not apply to other cultures', ['It used no real participants at all in the study', 'It showed nobody ever obeyed', 'It can only be used in schools'],
      'A limitation of one study in one place and time is that its findings may not generalise to different cultures or times.'),
    mc('AO-skills', 'In an essay on nature and nurture, which sentence is <b>knowledge</b> (AO1)?',
      'Nurture is the effect of upbringing and experience on behaviour', ['Her shyness fits a nurture explanation because of how she was brought up', 'The study cannot show that genes cause shyness', 'On balance, both factors seem to matter for her shyness'],
      'A definition of a term is knowledge. Linking to a person is application, a limit of a study is evaluation, and the last sentence is a judgement.'),
    mc('AO-skills', 'In an essay on nature and nurture, which sentence is <b>application</b> (AO2)?',
      'Rhys\'s worry could come from being bullied, which is nurture', ['Nurture means behaviour is shaped by experience', 'Twin studies are difficult to carry out', 'Overall, the evidence is mixed and cannot be clearly decided'],
      'Applying a side of the debate to the details of a named person in the stem is application. Definitions are AO1 and weighing evidence is AO3.'),
    mc('AO-skills', 'In an essay on reductionism, which sentence is <b>evaluation</b> (AO3)?',
      'A reductionist model is easy to test but may ignore interactions', ['Reductionism explains behaviour by breaking it into parts', 'Elena\'s forgetting might be explained by a separate store failing', 'Memory involves a short-term and a long-term store'],
      'Weighing a strength against a limitation is evaluation. The other sentences describe or apply.'),
    { skill: 'marks-structure', gen: function () {
      var v = pick([0, 1, 2]);
      if (v === 0) return { kind: 'num', q: 'A 9-mark debate essay is marked using levels. Level 1 is worth 1 to 3 marks. A response shows good knowledge (AO1) of the debate but no application or evaluation at all. What is the <b>most</b> marks it can be awarded?', answer: 3, unit: 'marks', display: '3',
        why: 'The mark scheme says a response showing only AO1 cannot be given more than the top of Level 1, however strong the knowledge is. Level 1 is 1 to 3 marks, so the most is 3.' };
      var pr = [['knowledge (AO1)', 'application (AO2)'], ['application (AO2)', 'evaluation (AO3)'], ['knowledge (AO1)', 'evaluation (AO3)']][v - 1];
      return { kind: 'num', q: 'A 9-mark debate essay has 3 marks for knowledge (AO1), 3 for application (AO2) and 3 for evaluation (AO3). How many of the 9 marks are for ' + pr[0] + ' and ' + pr[1] + ' together?', answer: 6, unit: 'marks', display: '6',
        why: 'Each skill is worth 3 marks, so two skills together are worth 3 + 3 = 6 marks.' };
    } },
    mc('marks-structure', 'A student writes a long, detailed essay about stages of morality but never mentions the debate named in the question. What is the likely effect on the mark?',
      'The answer is held at Level 2 as the debate is ignored', ['The answer can still reach Level 3 because it has so much detail', 'The answer loses a single mark for not using the terms', 'The answer is marked as a different question'],
      'The question names a debate, so the essay must use the debate terms. Ignoring the debate limits the answer to Level 2, however detailed it is.'),
    mc('judgement', 'A question asks for the importance of nature and nurture in depression. Which ending is the best <b>supported judgement</b>?',
      'Both matter: Caspi found genes and stress interacted, so neither is enough alone', ['Nature and nurture are both interesting topics in psychology', 'Depression is a serious condition that many people have', 'There are many different studies on this topic, and several of them are listed above'],
      'A judgement answers the question and is backed by evidence, here the interaction found by Caspi et al. Restating the topic or listing studies is not a judgement.'),
    mc('judgement', 'A response argues only for nature and never mentions nurture. Why does this limit the marks?',
      'The answer is unbalanced because the other side is not discussed', ['Nature is never a correct explanation of any behaviour in any person', 'Essays must always agree with nurture', 'Only one side is ever needed'],
      'Level 3 needs balanced evaluation. Discussing both sides, with evidence for each, lets the student reach a reasoned judgement.'),
    mc('apply-stem', 'A stem describes how a family struggles to pay bills after a parent\'s long-term illness. Which sentence best uses the stem in a nature-nurture essay?',
      'The family\'s money worries are a stressful life event, which Caspi links to depression', ['Depression is a condition that affects many people in many different ways', 'Nature and nurture are two different sides of a well-known and much discussed psychology debate', 'The multi-store model has a short-term and a long-term store'],
      'Using details from the stem (stressful circumstances) and linking them to evidence (Caspi) gives application. The other sentences ignore the stem.')
  ] };

  /* ============ PSY-EXT-01 Using two areas of psychology to explain a scenario (9 marks) ============ */
  B['PSY-EXT-01'] = { title: 'Using two areas of psychology to explain a scenario (9 marks)', items: [
    mc('choose-areas', 'Tariq starts wearing the same brand of trainers as everyone in his new class, though he thinks they are ugly. Later he cannot recall a phone number he heard once and did not repeat. Which <b>two areas</b> best explain his behaviour?',
      'Conformity and the multi-store model of memory', ['Obedience and the lateralisation of the brain', 'Mindset theory and Piaget\'s schemas', 'Conformity and the lateralisation of the brain'],
      'Copying the class is conformity, and the number was lost because it was not rehearsed (multi-store model). The other pairs do not fit both behaviours.'),
    mc('choose-areas', 'A shop assistant, Jun, follows his manager\'s order to move stock into the rain, though he thinks it is a bad idea. Which area of psychology best explains this?',
      'Obedience to authority', ['The multi-store model of memory', 'Lateralisation of the brain', 'Mindset theory'],
      'Following an order from a person in charge, even against his own view, links to Milgram\'s research on obedience.'),
    mc('choose-areas', 'Ana repeats a new password to herself over and over for several minutes, and she still knows it next week. Which area best explains this?',
      'The multi-store model: rehearsal put it into long-term memory', ['Conformity: she copied what others did', 'Lateralisation: her right hemisphere was the place where it was stored', 'Obedience: she followed an instruction'],
      'In the multi-store model (Atkinson and Shiffrin, 1968) rehearsal moves information from short-term to long-term memory.'),
    mc('choose-areas', 'After an injury to the left side of his brain, Kamal can see and move well but struggles to speak. Which area best explains this?',
      'Lateralisation: the left hemisphere is mainly for language', ['Conformity: he is copying other people', 'Obedience: he is following an authority figure', 'The multi-store model: his sensory register has completely failed'],
      'Sperry\'s (1968) work shows the left hemisphere is mainly specialised for language and the right for spatial tasks.'),
    mc('choose-areas', 'Bea says "I\'m just not clever, so there is no point trying the harder maths," and avoids challenges. Which theory best explains this?',
      'Dweck\'s mindset theory: a fixed mindset', ['Milgram\'s obedience research', 'Sperry\'s research on split-brain patients', 'The multi-store model'],
      'Believing ability cannot change is a fixed mindset, from Dweck\'s mindset theory.'),
    mc('AO-skills', 'In a two-areas essay, which sentence is <b>knowledge</b> (AO1)?',
      'Asch (1951) found about a third of critical responses conformed', ['Dani copied the group because he wanted to fit in', 'Asch\'s sample was made up only of men', 'Overall, conformity explains Dani\'s choice quite well in this case'],
      'Stating what a study found is knowledge. Linking to Dani is application, a sample limit is evaluation, and the last is a judgement.'),
    mc('AO-skills', 'In a two-areas essay, which sentence is <b>application</b> (AO2)?',
      'Dani changed his answer when the class disagreed, showing majority influence', ['Majority influence means that people change what they do or say to fit in with a group', 'Asch\'s study took place in a laboratory', 'Studies like Asch\'s may lack ecological validity'],
      'Applying an idea to details of the scenario (Dani changing his answer) is AO2.'),
    mc('AO-skills', 'In a two-areas essay, which sentence is <b>evaluation</b> (AO3)?',
      'Asch used a lab task, so conformity may differ in real life', ['Dani\'s classmates all chose the same answer', 'Asch (1951) found that about 75% of participants conformed at least once', 'The multi-store model has a sensory register'],
      'Commenting on a limitation (ecological validity) is evaluation. The other sentences apply to the scenario or state facts.'),
    mc('level-cap', 'A student explains a scenario well but uses only conformity throughout. What is the highest level the answer can reach?',
      'Level 2', ['Level 3', 'Level 1', 'It cannot be marked'],
      'The question asks for two areas of psychology. Using only one area limits the answer to Level 2 (up to 6 of the 9 marks).'),
    { skill: 'marks-structure', gen: function () {
      var ao = pick([['application (AO2)', 'applying it to the scenario'], ['evaluation (AO3)', 'evaluation and judgement'], ['knowledge (AO1)', 'knowledge of the areas']]);
      return { kind: 'num', q: 'The 9 marks of a two-areas essay are split equally between knowledge (AO1), application (AO2) and evaluation (AO3). How many marks are for ' + ao[0] + '?', answer: 3, unit: 'marks', display: '3',
        why: 'Nine marks shared equally between three skills is 9 ÷ 3 = 3 marks each, so ' + ao[1] + ' is worth 3 marks.' };
    } },
    mc('named-study', 'In Asch\'s (1951) conformity research, roughly what percentage of participants conformed at least once?',
      'About 75%', ['About 5%', 'About 25%', 'Almost 100%'],
      'Asch found that about three quarters of participants conformed on at least one critical trial, although only about a third of all critical responses were conforming ones.'),
    mc('named-study', 'Which describes Peterson and Peterson\'s (1959) procedure?',
      'Participants counted backwards in threes, then recalled trigrams', ['Participants rehearsed each letter string for a very long time before recall', 'Participants learned word lists underwater', 'Participants gave electric shocks to a learner'],
      'Counting backwards blocked rehearsal, and recall of trigrams fell to about 10% after 18 seconds.'),
    mc('named-study', 'What did Peterson and Peterson\'s (1959) results suggest about short-term memory?',
      'Without rehearsal, information is lost within seconds', ['Short-term memory lasts for many years if the person tries', 'Short-term memory has unlimited capacity', 'Rehearsal makes no difference to memory'],
      'Recall fell to about 10% after 18 seconds of blocked rehearsal, suggesting short-term memory has a very short duration without rehearsal.'),
    mc('named-study', 'According to the multi-store model (Atkinson and Shiffrin, 1968), what moves information into long-term memory?',
      'Rehearsal', ['Attention alone', 'The sensory register', 'Deindividuation'],
      'Attention moves information from the sensory register into short-term memory, and rehearsal moves it from short-term into long-term memory.'),
    mc('named-study', 'Which finding is from Milgram\'s obedience research?',
      'About 65% went on to the highest shock level of 450 volts', ['No participant went beyond 150 volts', 'About 5% obeyed the authority figure', 'Most participants refused to continue after the very first shock was given'],
      'In Milgram\'s original study about 65% of participants continued to the maximum 450 volts.'),
    mc('named-study', 'What did Sperry\'s (1968) research on split-brain patients show?',
      'The left hemisphere is mainly specialised for language and the right for spatial tasks', ['Both hemispheres are specialised for exactly the same tasks', 'The right hemisphere is mainly specialised for language', 'Memory is stored only in the frontal lobe'],
      'Sperry\'s work with split-brain patients supported lateralisation of function: language mainly on the left and spatial tasks mainly on the right.'),
    mc('application', 'In a noisy canteen Priya was chatting to friends when her teacher gave her some instructions, and later she could not remember them. Which application of the multi-store model to this scenario uses the details most effectively?',
      'Priya was not attending, so the instructions never reached short-term memory', ['Priya has a memory and this is simply how all human memory works in everyday life', 'Memory is made of stores which hold information', 'Priya forgot things because she is a forgetful person'],
      'A strong application links a specific part of the theory (attention) to a detail in the scenario (chatting in a noisy canteen) and explains the outcome.'),
    mc('evaluation', 'Which is the most complete evaluation of Asch\'s (1951) conformity study?',
      'A third of responses conformed, but a lab task limits real-life validity', ['It was a famous study from 1951', 'It used a lot of people so it is good', 'It found that conformity happens, which is an interesting thing to know about'],
      'A full evaluation names a finding and a limitation. The others are vague comments with no evidence or reason.'),
    mc('judgement', 'Which is the best closing <b>judgement</b> for a two-areas answer about Dani copying friends and forgetting a new rule?',
      'Conformity explains his copying and the multi-store model his forgetting, so both areas fit', ['Both areas of psychology are relevant to many people in a great many different situations', 'Dani is a typical teenager in many ways', 'There are many other possible explanations of behaviour'],
      'A judgement says how well each area explains the behaviour, linked to what Dani did. The others do not answer the question.'),
    mc('common-error', 'Which response is weakest in a two-areas essay?',
      'It retells Marcus\'s day in detail without any psychological terms', ['It defines two theories and links each of them to the details about Marcus', 'It names a study and says what it found', 'It ends by judging how well each theory explains Marcus'],
      'Retelling the scenario without psychology earns no knowledge or evaluation credit. Strong answers link theory, evidence and the scenario.'),
    mc('common-error', 'A student lists "Asch, Milgram, Sperry, Peterson" with no explanation. Why does this earn little credit?',
      'The studies are named but not linked to findings or the scenario', ['Naming studies is never allowed', 'The studies are not listed in the same order as they happened historically', 'Essays should not use research at all'],
      'Marks need what each study found and how it supports or challenges the explanation of the person\'s behaviour.'),
    ms('choose-areas', 'Select <b>all</b> the sentences that apply psychology to the scenario "Ella stays silent in a lesson because everyone else says the same wrong answer".',
      ['Ella shows conformity to the majority in the class', 'Ella\'s silence matches Asch\'s finding that many people go along with a group'],
      ['Ella\'s left hemisphere processes language', 'The sensory register holds information for about a second'],
      'Conformity and Asch link directly to Ella\'s behaviour. The other sentences are about brain lateralisation and memory, which do not explain why she stayed silent.')
  ] };
})();
