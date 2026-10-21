/* Group G02 mastery bank: Development (mindsets and praise, Piaget, Willingham), Memory (reconstructive memory, amnesia, Multi-store Model), Psychological problems (Young 2007, Caspi et al. 2003). Original questions, not copied from past papers. */
(function () {
  'use strict';
  var B = window.MASTERY_BANKS = window.MASTERY_BANKS || {};
  var R = window.Mastery;   // R.roundDp(x, dp), R.roundSf(x, n)
  function pick(a) { return a[Math.floor(Math.random() * a.length)]; }
  function rint(a, b) { return a + Math.floor(Math.random() * (b - a + 1)); }
  function shuf(a) { a = a.slice(); for (var i = a.length - 1; i > 0; i--) { var j = Math.floor(Math.random() * (i + 1)); var t = a[i]; a[i] = a[j]; a[j] = t; } return a; }
  function ext(o, x) { if (x) for (var k in x) o[k] = x[k]; return o; }
  // Single-answer item: the correct option is listed first; the engine shuffles the options.
  function mcq(skill, q, right, wrongs, why, x) { return ext({ skill: skill, kind: 'mcq', q: q, options: [right].concat(wrongs), answer: 0, why: why }, x); }
  function multi(skill, q, rights, wrongs, why, x) {
    var ans = []; for (var i = 0; i < rights.length; i++) ans.push(i);
    return ext({ skill: skill, kind: 'multi', q: q, options: rights.concat(wrongs), answers: ans, why: why }, x);
  }
  function genMcq(skill, fn) { return { skill: skill, gen: function () { var r = fn(); return mcq(r.skill || skill, r.q, r.right, r.wrongs, r.why, r.x); } }; }

  // ---------- PSY-DEV-03 ----------
  B['PSY-DEV-03'] = { title: 'Mindsets and praise (Dweck; Gunderson et al., 2013)', items: [
    mcq('Identify the mindset', 'Ravi gets a puzzle wrong in a chess club. He says, "I\'m just not a puzzle person, so there is no point trying again," and takes up a different game. According to Dweck, which mindset is Ravi showing?',
      'A fixed mindset, because he treats his ability as something that cannot be improved', ['A growth mindset, because he is willing to try a new activity when one task goes wrong', 'A growth mindset, because he has accepted that he made a mistake', 'A fixed mindset, because he thinks that practice always makes a person worse'],
      'Ravi believes his ability is set ("I\'m not a puzzle person") and gives up after failing. This is a fixed mindset. A growth mindset would lead him to keep trying and learn from the mistake.'),
    mcq('Identify the mindset', 'After losing a netball match, Amara asks her coach for a new passing drill and practises it every lunchtime. According to Dweck, this behaviour is most likely to come from',
      'a growth mindset, because she believes practice can improve her ability', ['a fixed mindset, because she thinks her skills are fixed already', 'a fixed mindset, because she is focused on the result of the match', 'a growth mindset, because she believes winning is down to talent'],
      'Amara responds to failure by working harder and looking for ways to improve. That matches a growth mindset: the belief that ability can be developed through effort and practice.'),
    mcq('Define the mindsets', 'Which statement correctly defines a <b>fixed mindset</b> in Dweck\'s mindset theory?',
      'The belief that ability is set and will not improve with effort', ['The belief that ability can be developed through effort and practice', 'The belief that praise matters more than feedback for learning and for motivation', 'The belief that everyone is born with exactly the same ability'],
      'A fixed mindset means believing your ability is set. The belief that effort and practice can develop ability is the growth mindset, which is the opposite.'),
    mcq('Define the mindsets', 'Which statement correctly defines a <b>growth mindset</b> in Dweck\'s mindset theory?',
      'The belief that ability can be developed through effort and practice', ['The belief that ability is set and will not improve with effort', 'The belief that natural talent matters more than any practice', 'The belief that mistakes show that a person should stop trying'],
      'A growth mindset is the belief that you can get better with effort and practice. People with this mindset tend to persist after failure rather than give up.'),
    mcq('Types of praise', 'A teacher wants to encourage a growth mindset in a pupil who has just improved a science grade. Which comment should the teacher make?',
      '"You must have worked really hard, and your revision method clearly paid off."', ['"You are so clever, you are obviously a natural scientist who needs no revision."', '"You are the brightest pupil in the class at science."', '"That was easy for you because you have the talent for it."'],
      'Praise for effort and strategy (process praise) encourages a growth mindset. Praise for intelligence or talent (person praise) encourages a fixed mindset.'),
    multi('Types of praise', 'Which of these comments are examples of <b>process praise</b> (praise for effort or strategy)?',
      ['"You kept trying different ways to solve it."', '"Your careful planning really helped you."'], ['"You are a natural at this."', '"You are such a clever boy."'],
      'Process praise names the effort or strategy used. Telling a child they are clever or a natural praises the person\'s ability, which is person praise.'),
    mcq('Mueller and Dweck (1998)', 'Mueller and Dweck (1998) gave children praise after a task and then a harder task they failed. Which result matches what they found?',
      'Children praised for being clever showed less effort and did worse after failing than children praised for effort', ['Children praised for being clever tried harder and did better after failing than the children praised for their effort', 'Children praised for effort gave up sooner and did worse after the failure than the others', 'Praise made no difference to how children coped with failure on the harder task'],
      'Mueller and Dweck found that praise for cleverness (person praise) led to less effort and poorer performance after failure. Praise for effort led to more persistence, which fits the growth mindset.'),
    mcq('Gunderson et al. (2013): procedure', 'In Gunderson et al. (2013), how old were the children when their parents\' praise was video-recorded and coded?',
      '14, 26 and 38 months', ['7, 8 and 9 years', '3, 5 and 7 years', '14, 26 and 38 years'],
      'Parents and children were recorded at 14, 26 and 38 months. The children\'s motivational frameworks were then measured about five years later, at 7 to 8 years old.'),
    mcq('Gunderson et al. (2013): findings', 'Which finding does Gunderson et al. (2013) report about parents\' praise?',
      'Process praise at 14 to 38 months predicted an incremental (growth) framework at 7 to 8 years', ['Person praise at 14 to 38 months predicted an incremental framework at 7 to 8 years', 'Parents gave more process praise to girls than to boys in the early recordings', 'Process praise at 14 to 38 months predicted a fixed framework at 7 to 8 years'],
      'Early process praise predicted a growth (incremental) framework years later, and boys received more process praise than girls. The study did not link person praise significantly to a fixed framework.'),
    mcq('Gunderson et al. (2013): findings', 'In Gunderson et al. (2013), which statement about differences between boys and girls is correct?',
      'Boys received more process praise than girls', ['Girls received more process praise than boys', 'Boys and girls received exactly the same amount of process praise', 'Girls received more person praise than boys, who received none'],
      'The study found that boys received more process praise than girls. This is one of the key results about the parents\' behaviour in the recordings.'),
    mcq('Gunderson et al. (2013): findings', 'About how much of what the parents said to their children in Gunderson et al. (2013) was praise?',
      'A small proportion, about 3% of utterances', ['About a third of everything that they said', 'About half of all their utterances', 'A large majority, about 80% of utterances'],
      'Praise made up only a small proportion of parents\' speech (about 3% of utterances). Even so, the type of praise given predicted the children\'s motivational frameworks later.'),
    mcq('Gunderson et al. (2013): conclusions', 'Gunderson et al. (2013) found that early process praise <i>predicted</i> a growth framework years later. Why can this not prove that the praise <b>caused</b> the later framework?',
      'The findings are correlational, so other factors could also explain the link', ['The children were too young to have been praised by their parents at the start of it', 'The parents were not video-recorded at more than one age', 'The children were not tested again after the early recordings'],
      'A prediction between two measures is a correlation, and correlations do not prove cause. Parents who give process praise may differ in other ways too, such as how they talk to their children.'),
    mcq('Gunderson et al. (2013): terms', 'In Gunderson et al. (2013), what is meant by an <b>incremental framework</b>?',
      'A belief that intelligence can be increased through effort, like a growth mindset', ['A belief that intelligence is fixed and cannot be changed, like a fixed mindset', 'A belief that praise should only be given once a year', 'A belief that children learn mainly by copying what other people do'],
      'An incremental framework is the belief that ability can grow with effort, which is the growth mindset. The study measured whether children held this belief or an entity (fixed) one.'),
    mcq('Applying the theory', 'After her daughter scores top marks in a spelling test, Mrs Hall says, "You are so clever, you were born to be good at words." Which outcome is most likely, according to Dweck?',
      'The girl may develop a fixed mindset and avoid harder words in case she fails', ['The girl will develop a growth mindset and choose harder words in future', 'The girl will work harder, because she feels that talent always needs practice', 'The girl will not be affected, because only teachers\' praise changes mindset'],
      'Praise for cleverness is person praise, which tends to encourage a fixed mindset. A child who believes she is naturally clever may avoid challenges that could show she is not.'),
    mcq('Applying the theory', 'Tomas has just finished a hard jigsaw after several attempts. Which comment from his dad is best for encouraging a growth mindset?',
      '"You didn\'t give up and you tried a new way of sorting the pieces."', ['"You are brilliant at puzzles, you are a natural and you never need to practise."', '"That puzzle was too easy for someone as clever as you."', '"I always knew you were the smartest child in the family."'],
      'The comment names effort and strategy, which is process praise and supports a growth mindset. The other comments praise talent, so they encourage a fixed mindset.'),
    multi('Mindset behaviours', 'Which of these behaviours are typical of a <b>fixed mindset</b>?',
      ['Avoiding a hard task to avoid looking unintelligent', 'Giving up quickly after getting a low mark'], ['Asking for feedback so that the next piece of work improves', 'Practising a skill again after failing at it'],
      'People with a fixed mindset avoid challenge and give up when things go wrong. Asking for feedback and persisting after failure are typical of a growth mindset.'),
    mcq('Ability and effort', 'Dweck\'s mindset theory links beliefs about ability and effort. Which pair is correct?',
      'Fixed mindset: effort cannot change ability. Growth mindset: effort can develop ability', ['Fixed mindset: effort develops ability. Growth mindset: effort cannot change ability', 'Fixed mindset: ability and effort are both unimportant. Growth mindset: only ability matters', 'Fixed mindset: only effort matters. Growth mindset: only natural talent matters'],
      'The two mindsets differ over whether effort can change ability. A fixed mindset says it cannot, and a growth mindset says that it can.'),
    mcq('Evaluating the theory', 'Which of these is a <b>strength</b> of Dweck\'s mindset theory?',
      'It gives practical advice, such as praising effort rather than talent, which teachers and parents can use', ['It was based on the video-recorded home behaviour of a large number of adults and their children', 'It explains how children move through fixed stages in a set order', 'It shows that practice is useful only once a child has learned the facts'],
      'The theory suggests simple, usable changes, such as praising effort and strategy. The stages idea belongs to Piaget and the facts-before-skill idea belongs to Willingham.'),
    mcq('Evaluating the theory', 'Which of these is a genuine <b>weakness</b> of Dweck\'s mindset theory?',
      'It sorts people into two types, but a person may be fixed about one skill and growth-minded about another', ['It cannot be used by teachers or parents, because praise has no effect on any pupil\'s beliefs', 'It only applies to babies who cannot yet understand what is said to them', 'It says that all children develop a growth mindset by the age of two'],
      'Real people are not always purely one type, so the two-type idea simplifies. The other options are wrong claims, because the theory is about praise and beliefs and applies mainly to children and adults who can understand feedback.'),
    genMcq('Reading data on praise', function () {
      var a = pick(['Mr Lowe', 'Ms Okoye', 'Mr Davies']), b = pick(['Mrs Ford', 'Ms Anand', 'Mrs Clarke']);
      var aP = rint(14, 18), aT = rint(2, 5), bP = rint(2, 5), bT = rint(14, 18);
      return { q: 'Two music teachers\' comments were counted over a term.<br><table class="mc-table"><tr><th></th><th>Praise for effort or strategy</th><th>Praise for talent</th></tr><tr><td>' + a + '</td><td>' + aP + '</td><td>' + aT + '</td></tr><tr><td>' + b + '</td><td>' + bP + '</td><td>' + bT + '</td></tr></table>According to Dweck\'s mindset theory, whose pupils are more likely to develop a growth mindset?',
        right: a + '\'s, because they gave more praise for effort or strategy (' + aP + ' comments, compared with ' + bP + ')', wrongs: [b + '\'s, because they gave more praise for talent (' + bT + ' comments, compared with ' + aT + ')', a + '\'s, because they gave more praise for talent (' + aT + ' comments) than for effort', 'Neither, because the number of comments is too small to affect any mindset'],
        why: a + ' gave ' + aP + ' effort or strategy comments (process praise) and only ' + aT + ' talent comments. Process praise encourages a growth mindset, whereas ' + b + ' gave mostly talent praise, which encourages a fixed mindset.' };
    }),
    { skill: 'Reading data on praise', gen: function () {
      var tot = pick([20, 25, 40, 50]), p = rint(2, tot / 5 - 1) * 1, pr = p;
      var name = pick(['Priya', 'Callum', 'Ines', 'Jamal']);
      return { kind: 'num', q: 'A parent observed ' + name + '\'s teacher for one lesson. Of the teacher\'s ' + tot + ' praise comments, ' + pr + ' were praise for effort or strategy (process praise). What percentage of the praise comments were process praise?',
        answer: R.roundDp(pr / tot * 100, 1), unit: '%', tol: 0.05, display: String(R.roundDp(pr / tot * 100, 1)) + '%',
        why: 'Percentage = ' + pr + ' ÷ ' + tot + ' × 100 = ' + R.roundDp(pr / tot * 100, 1) + '%. Give the answer as a percentage, to 1 decimal place if needed.' };
    } },
    mcq('Applying the theory', 'Leila gets a poor result for a project, then tells her teacher, "I\'ll try again with a better plan, because I know I can get better at this." Which theory idea and praise would fit best?',
      'Growth mindset: the teacher could praise the planning and effort that she puts in', ['Growth mindset: the teacher could praise Leila for being a naturally gifted pupil', 'Fixed mindset: the teacher could praise Leila for her high level of intelligence', 'Fixed mindset: the teacher could tell Leila that effort will not change her result'],
      'Leila believes she can improve, which is a growth mindset. Process praise for her planning and effort will keep that belief going, while praising "natural gift" would push her towards a fixed mindset.')
  ] };

  // ---------- PSY-DEV-01 ----------
  B['PSY-DEV-01'] = { title: 'Piaget\'s stages of cognitive development', items: [
    mcq('Identify the stage', 'Nadia, aged 10 months, watches her mum put a rattle under a cushion. Nadia lifts the cushion and grabs the rattle. Which concept does this show, and in which stage of Piaget\'s theory?',
      'Object permanence, in the sensorimotor stage', ['Conservation, in the pre-operational stage', 'Object permanence, in the concrete operational stage', 'Assimilation, in the formal operational stage'],
      'Nadia knows the rattle still exists although she cannot see it, which is object permanence. This develops during the sensorimotor stage (birth to about 2 years).'),
    mcq('Identify the stage', 'Four-month-old Jonah stops looking for his toy bear as soon as a blanket covers it, as though it has disappeared. What does this suggest, according to Piaget?',
      'He has not yet developed object permanence, which develops during the sensorimotor stage', ['He is in the pre-operational stage and cannot yet conserve number or volume', 'He has reached the concrete operational stage but does not have a schema for toys', 'He is in the formal operational stage and is reasoning about the toy'],
      'Jonah acts as if hidden things stop existing, so he has not yet developed object permanence. This happens in the sensorimotor stage, and babies gain it as they develop.'),
    mcq('Identify the stage', 'Five-year-old Ella sees the same amount of orange juice poured from a wide glass into a tall, thin glass. She says, "The tall one has more now." Which stage is Ella most likely in?',
      'Pre-operational, because she cannot yet conserve volume', ['Concrete operational, because she is judging by what she can see', 'Sensorimotor, because she is learning mainly through movement', 'Formal operational, because she is thinking in abstract ideas'],
      'Ella is fooled by how the juice looks and does not understand that the amount stays the same. This failure to conserve is typical of the pre-operational stage (about 2 to 7 years).'),
    mcq('Identify the stage', 'Eight-year-old Dev watches a ball of modelling clay being rolled into a long sausage. He says, "It\'s still the same amount, you only changed the shape." Which stage is this most likely to show?',
      'Concrete operational, because he can conserve mass', ['Pre-operational, because he is using his own point of view to judge the clay', 'Sensorimotor, because he understands that objects still exist', 'Formal operational, because he can think about abstract ideas'],
      'Dev understands that mass stays the same when only the appearance changes. Conservation is achieved in the concrete operational stage (about 7 to 11 years).'),
    mcq('Identify the stage', 'Fourteen-year-old Kiara is asked what would happen to the world if nobody ever slept. She talks about possible effects on health, jobs and traffic, none of which she has seen. Which stage does this show?',
      'Formal operational, because she can reason about hypothetical situations', ['Concrete operational, because she is using logic about real objects', 'Pre-operational, because she is using only her own point of view about the future', 'Sensorimotor, because she is learning through her senses'],
      'Reasoning abstractly about possibilities that are not in front of you is a key feature of the formal operational stage (about 11 years onwards).'),
    mcq('Stage ages', 'According to Piaget, which age range matches the <b>concrete operational</b> stage?',
      'About 7 to 11 years', ['Birth to about 2 years', 'About 2 to 7 years', 'About 11 years onwards'],
      'The four stages are sensorimotor (birth to about 2), pre-operational (about 2 to 7), concrete operational (about 7 to 11) and formal operational (about 11 onwards).'),
    mcq('Stage ages', 'According to Piaget, a child who cannot yet conserve and who is egocentric is most likely to be aged',
      'about 4 years, in the pre-operational stage', ['about 9 years, in the concrete operational stage', 'about 1 year, in the sensorimotor stage', 'about 13 years, in the formal operational stage'],
      'The pre-operational stage runs from about 2 to 7 years, and the child cannot yet conserve. Conservation is achieved from about 7 years.'),
    mcq('Stage order', 'Which list gives the stages of Piaget\'s theory in the correct order, from youngest to oldest?',
      'Sensorimotor, pre-operational, concrete operational, formal operational', ['Pre-operational, sensorimotor, formal operational, concrete operational', 'Sensorimotor, concrete operational, pre-operational, formal operational', 'Concrete operational, sensorimotor, pre-operational, formal operational'],
      'Piaget said every child passes through the four stages in the same fixed order. The stages are always in the order sensorimotor, pre-operational, concrete operational, formal operational.'),
    mcq('Key terms', 'In Piaget\'s theory, what is <b>object permanence</b>?',
      'Knowing that an object still exists when it is hidden from view', ['Understanding that quantity stays the same when only the appearance of it changes', 'Being able to think about abstract and hypothetical ideas', 'Changing a schema when new information does not fit it'],
      'Object permanence is understanding that things continue to exist when they cannot be seen. Understanding that quantity stays the same is conservation.'),
    mcq('Key terms', 'In Piaget\'s theory, what is <b>conservation</b>?',
      'Understanding that number, mass or volume stays the same when only the appearance changes', ['Knowing that an object still exists when it is hidden from view', 'Fitting new information into a schema that a child already has', 'Using abstract ideas to solve problems about the future'],
      'Conservation is knowing that quantities stay the same when only the look of them changes, such as when water is poured into a taller glass. Children achieve this in the concrete operational stage.'),
    mcq('Schema, assimilation, accommodation', 'In Piaget\'s theory, what is a <b>schema</b>?',
      'A mental framework of knowledge built from experience', ['A stage that children reach at around seven years old', 'A way of judging that a child is fully developed', 'A task used to test whether a child can conserve'],
      'A schema is a mental framework or "package" of ideas about something, built up from experience. Children use and change schemas as they learn.'),
    mcq('Schema, assimilation, accommodation', 'Zara has a "bird" schema for things that fly. She sees a bat at the zoo and says, "Look, a bird!" Which process is Zara using, and why?',
      'Assimilation, because she fits the new animal into her existing schema', ['Accommodation, because she changes her schema to fit the bat that she saw', 'Equilibrium, because her new experience now matches what she knows', 'Conservation, because she knows the bat is the same as a bird'],
      'Zara fits the new animal into the schema she already has without changing it, which is assimilation. If she changed her schema, such as by making a separate "bat" category, that would be accommodation.', { family: 'zara-bat' }),
    mcq('Schema, assimilation, accommodation', 'Zara\'s mum tells her that bats are not birds, and Zara makes a new "bat" group separate from her "bird" schema. Which process does this show?',
      'Accommodation, because she changes her schema to fit new information', ['Assimilation, because she uses the schema that she already has', 'Object permanence, because she knows the bat still exists', 'Egocentrism, because she believes that everyone sees the bat as she does'],
      'Changing or creating a schema because new information does not fit the old one is accommodation. After this the child can reach equilibrium, a balance between what she knows and what she experiences.', { family: 'zara-bat' }),
    mcq('Schema, assimilation, accommodation', 'In Piaget\'s theory, what is <b>equilibrium</b>?',
      'The balance reached when a child\'s schemas fit their experiences', ['Fitting new information into an existing schema without any changes', 'Changing an existing schema when new information does not fit', 'The ability to think about hypothetical situations'],
      'Equilibrium is the balance between what a child knows and what they meet. Assimilation and accommodation are the two processes that help to restore this balance.'),
    multi('Stage features', 'Which of these are features of the <b>pre-operational</b> stage?',
      ['The child cannot yet conserve number, mass or volume', 'The child tends to see things from their own point of view'], ['The child can reason about hypothetical situations', 'The child is learning object permanence for the first time'],
      'In the pre-operational stage (about 2 to 7 years) children cannot conserve and are egocentric. Hypothetical reasoning belongs to the formal operational stage and object permanence develops in the sensorimotor stage.'),
    mcq('Concrete vs formal', 'Mei, aged 9, can sort her real-life collection of shells into logical groups but cannot answer, "What would the world be like if gravity was twice as strong?" What does Piaget\'s theory suggest about her stage?',
      'She is concrete operational, as she can think logically about real objects but not abstract ideas', ['She is pre-operational, because she cannot yet think logically about real objects', 'She is formal operational, because she can sort and group objects logically', 'She is sensorimotor, because she is still learning through her senses'],
      'Logical thinking about real, physical things is concrete operational. Thinking about unseen or hypothetical ideas, such as stronger gravity, develops in the formal operational stage.'),
    mcq('Explaining with the theory', 'Which answer would show both knowledge of the theory and a link to the child, when explaining why three-year-old Ben says a squashed row of sweets has "fewer" sweets than a spread-out row?',
      'Ben is pre-operational and cannot conserve number, so he judges the squashed row to have fewer sweets because it looks shorter', ['Ben is pre-operational, which is a stage of development that lasts from about 2 to 7 years', 'Ben said that the squashed row has fewer sweets because it looks shorter than the other row', 'Ben is concrete operational, so he thinks that the row of squashed sweets has fewer sweets because it looks shorter'],
      'A full answer names the stage or concept (pre-operational, cannot conserve number) and links it to what Ben said. Describing the stage alone, or repeating the behaviour alone, only gets part of the credit, and concrete operational is the wrong stage.'),
    mcq('Evaluating the theory', 'Which of these is a <b>strength</b> of Piaget\'s theory of cognitive development?',
      'It is supported by tasks such as conservation and the Three mountains task, in which younger children made errors', ['It shows that young children can do far more than Piaget\'s tasks suggest, which supports the stages', 'It proves that every child passes through each stage at exactly the same age', 'It explains how praise changes a child\'s beliefs about ability'],
      'Piaget\'s tasks showed that younger children made the kinds of errors his stages predict, which supports the theory. Saying young children can do more is a criticism, and praise and mindset belongs to Dweck.'),
    mcq('Evaluating the theory', 'A researcher shows that four-year-olds can conserve number when the task is made simple and the wording is clear. How does this finding affect Piaget\'s theory?',
      'It is a weakness, as it suggests Piaget\'s tasks underestimated what young children can do', ['It is a strength, as it proves that children conserve in the pre-operational stage', 'It is a strength, as it shows that children do not need schemas at all', 'It has no effect, as conservation is only tested in the sensorimotor stage'],
      'If younger children succeed when tasks are simpler, Piaget\'s stages may have set ages too late. That is a common criticism: the theory underestimated young children\'s abilities.'),
    { skill: 'Reading data', gen: function () {
      var age = pick([4, 5, 6, 7, 8, 9]), base = [3, 6, 14, 26, 34, 38], tot = 40;
      var ages = [4, 5, 6, 7, 8, 9];
      var vals = base.map(function (v) { return v + rint(-1, 1); });
      var idx = ages.indexOf(age), n = vals[idx];
      var rows = ages.map(function (a, i) { return '<tr><td>' + a + '</td><td>' + vals[i] + '</td></tr>'; }).join('');
      return { kind: 'num', q: '<i>Invented example data, not Piaget\'s results.</i> A researcher gave a conservation-of-number task to 40 children at each age. The table shows how many gave the correct answer.<br><table class="mc-table"><tr><th>Age (years)</th><th>Children who conserved</th></tr>' + rows + '</table>What percentage of the ' + age + '-year-olds conserved number? Give your answer as a whole number or to 1 decimal place.',
        answer: R.roundDp(n / tot * 100, 1), unit: '%', tol: 0.05, display: String(R.roundDp(n / tot * 100, 1)) + '%',
        why: 'Percentage = ' + n + ' ÷ 40 × 100 = ' + R.roundDp(n / tot * 100, 1) + '%.' };
    } },
    { skill: 'Reading data', gen: function () {
      var v = [rint(2, 5), rint(8, 12), rint(18, 24), rint(30, 34), rint(36, 39)], ages = [4, 5, 6, 7, 8];
      var rows = ages.map(function (a, i) { return '<tr><td>' + a + '</td><td>' + v[i] + '</td></tr>'; }).join('');
      return { kind: 'mcq', q: '<i>Invented example data, not Piaget\'s results.</i> In a conservation task, 40 children at each age were tested. The table shows how many conserved.<br><table class="mc-table"><tr><th>Age (years)</th><th>Children who conserved</th></tr>' + rows + '</table>Which conclusion fits Piaget\'s theory and these results?',
        options: ['Conservation becomes more common as children get older, with most able to do it by age 7', 'Most children aged 4 and 5 can conserve, so the pre-operational stage does not exist', 'The number who can conserve falls as children move into the concrete operational stage', 'Conservation is only found in children aged 8 because it needs hypothetical thinking'],
        answer: 0, why: 'The number who conserved rises from ' + v[0] + ' at age 4 to ' + v[4] + ' at age 8, and ' + v[3] + ' out of 40 had conserved by age 7. This fits conservation developing over the pre-operational to concrete operational stages.' };
    } },
    mcq('Stage order', 'Which statement about the order of Piaget\'s stages is correct?',
      'Every child passes through the stages in the same fixed order', ['A child can skip a stage if they are taught well enough', 'The order of the stages is different for each child', 'A child can be in two stages for a number of years'],
      'Piaget believed that all children go through sensorimotor, pre-operational, concrete operational and formal operational thinking in that order, without skipping any.')
  ] };

  // ---------- PSY-DEV-04 ----------
  B['PSY-DEV-04'] = { title: 'Willingham\'s learning theory', items: [
    mcq('Core principles', 'Which statement is a key idea in Willingham\'s learning theory?',
      'Factual knowledge comes before skill', ['Skill must be learned before any facts', 'Learning happens through assimilation and accommodation', 'Children learn best when they are praised for being clever'],
      'Willingham argued that you need background facts in your memory before you can think critically or use a skill well. Assimilation and accommodation are Piaget\'s ideas and praise for cleverness links to Dweck.'),
    mcq('Core principles', 'Which of these did Willingham emphasise as essential for learning?',
      'Practice and effort', ['Equilibrium between schemas', 'Natural talent from birth', 'Stages that children move through'],
      'Willingham emphasised that repeated practice and effort are needed to learn skills. Equilibrium and stages are parts of Piaget\'s theory.'),
    mcq('Why the theory says so', 'According to Willingham, why does factual knowledge need to come before critical thinking about a topic?',
      'Thinking critically uses facts already stored in memory, so a learner with few facts has little to think with', ['Facts are the only part of a topic that pupils can be tested on in exams, so teachers must put them first', 'Learners cannot understand facts until they have mastered the skill', 'Facts are more enjoyable for pupils than thinking skills are'],
      'You need background knowledge to compare, question and use ideas. Without the facts in memory, a learner has nothing to apply the skill to.'),
    mcq('Why the theory says so', 'According to Willingham, why does repeated practice help a learner?',
      'It makes skills automatic, which frees up working memory for harder thinking', ['It shows the learner that natural talent does not matter at all, whatever the task', 'It lets the learner skip the facts that they would otherwise have to learn', 'It moves the learner on to the next stage at a younger age'],
      'With practice a skill becomes automatic, so less working memory is needed to carry it out. This leaves more thinking space for harder parts of the task.'),
    mcq('Cognitive development', 'Mr Evans wants his pupils to write a critical essay on the causes of a war but they keep writing weak answers. Using Willingham, what should Mr Evans do first?',
      'Teach the key facts about the war, so pupils have knowledge to think critically about', ['Tell the pupils that they are clever enough to work it out alone, without teaching any facts', 'Move the class on to a topic that has fewer facts to learn', 'Ask pupils to write essays without teaching any background first'],
      'Willingham says factual knowledge precedes skill. Pupils with the main facts in memory can then practise the skill of building an argument.'),
    mcq('Cognitive development', 'Ms Rana sets her class maths work that is much too easy and then work that is far too hard. Which change fits Willingham\'s ideas about cognitive development?',
      'Set tasks that are challenging but achievable, with plenty of practice', ['Set only the easiest tasks so that no pupil ever makes an error', 'Set only the hardest tasks so that pupils must find the skill themselves', 'Set no practice tasks, and rely on pupils\' natural talent'],
      'Willingham suggested practice on tasks pitched at the right level: not so easy that there is no effort, not so hard that learners cannot succeed.'),
    mcq('Physical development', 'A PE teacher wants Year 7 pupils to improve their netball chest pass. Which strategy fits Willingham\'s theory for supporting <b>physical</b> development?',
      'Have pupils repeat the pass many times, giving feedback until the movement is automatic', ['Show pupils the pass once and then leave them to find their own way of doing it', 'Tell pupils that they have a natural gift for passing and need no practice', 'Ask pupils to read about passing and then wait for them to develop'],
      'Willingham\'s theory says movement skills improve with repeated practice and feedback until they become automatic.'),
    mcq('Physical development', 'A toddler keeps dropping the ball when trying to throw it to a parent. Which action by the parent best fits Willingham\'s ideas?',
      'Playing throwing and catching games over and over, correcting how the child holds the ball', ['Telling the toddler to wait until they are older and stronger before trying to throw again', 'Playing games using only facts about the rules of sport', 'Stopping the game because the toddler seems to lack talent'],
      'Repeated practice of the movement with feedback helps physical skills become automatic, which is the Willingham strategy for physical development.'),
    mcq('Social development', 'Two Year 2 pupils often snatch toys from others. Which strategy fits Willingham\'s theory for supporting <b>social</b> development?',
      'Show good sharing behaviour and let the pupils practise taking turns', ['Tell the pupils that sharing is a fixed trait that they will grow into', 'Ask the pupils to learn facts about toys before playing again', 'Keep the pupils apart from others so that they cannot copy anything'],
      'Willingham\'s theory suggests social behaviour is supported by seeing good behaviour shown by others and practising it.'),
    multi('Applying strategies', 'Which of these strategies would fit Willingham\'s learning theory?',
      ['Revisiting key vocabulary until pupils know it well', 'Having pupils repeat a dance routine with feedback'], ['Praising pupils for being naturally gifted', 'Asking pupils to fit new ideas into their existing schemas'],
      'Learning facts first and repeated practice with feedback are Willingham\'s ideas. Praising talent links to Dweck\'s fixed mindset and schemas link to Piaget.'),
    mcq('Spot the theory', 'Which pair of ideas belongs to Willingham\'s learning theory rather than to Piaget\'s or Dweck\'s?',
      'Facts precede skill, and effort and practice matter', ['Assimilation precedes accommodation, and equilibrium matters', 'Fixed mindset leads to avoidance, and growth mindset leads to persistence', 'Concrete operational thinking precedes formal operational thinking'],
      'Willingham focused on knowledge first and effortful practice. The other pairs come from Piaget (assimilation, accommodation, equilibrium, stages) and Dweck (mindsets).'),
    mcq('Correcting errors', 'A student writes, "Willingham said that skill comes first, so facts can be learned later." What is wrong with this statement?',
      'Willingham said the opposite: factual knowledge precedes skill', ['Willingham said skill and facts are learned at exactly the same time', 'Nothing is wrong, since Willingham ranked skill above facts', 'Willingham said that neither facts nor skills could be learned at school'],
      'In Willingham\'s theory background knowledge comes first because skills such as critical thinking depend on facts already stored in memory.'),
    mcq('Evaluating the theory', 'Which of these is a <b>strength</b> of Willingham\'s learning theory?',
      'Research supports the role of practice, such as expert violinists having done far more deliberate practice (Ericsson et al., 1993)', ['It shows that all learners progress through fixed stages in a set order, whatever they practise', 'It proves that learners can succeed without any effort if they are clever', 'It was based on a study in which parents were video-recorded with their children'],
      'The importance of practice is supported by research like Ericsson et al., where the best violinists had practised much more. Stages are Piaget\'s idea and the parent recordings are Gunderson\'s.'),
    mcq('Evaluating the theory', 'Which of these is a genuine <b>weakness</b> of Willingham\'s learning theory?',
      'It gives general strategies that may not suit the individual differences between learners', ['It says that practice is not needed at all once a learner has been taught the facts', 'It can only be used to teach physical skills and not school subjects', 'It claims that learning is complete once children turn seven'],
      'Willingham\'s advice is general, so it may not meet the needs of each learner. The other options misdescribe the theory, which applies to cognitive, physical and social development.'),
    mcq('Applying strategies', 'Aiden finds it hard to join in with groups in the playground. His teacher models friendly ways to ask to join and then has Aiden try them with classmates. Which part of Willingham\'s theory is this?',
      'Supporting social development by seeing good behaviour and practising it', ['Supporting cognitive development by teaching facts before skill', 'Supporting physical development by repeating a movement until automatic', 'Supporting a growth mindset by praising the effort that Aiden makes each time he tries'],
      'Modelling good social behaviour and giving chances to practise it is the Willingham approach for social development.'),
    { skill: 'Reading data', gen: function () {
      var n = rint(5, 6), v = [], i, s = 0;
      for (i = 0; i < n; i++) { v.push(rint(3, 14)); s += v[i]; }
      var adj = ((s % n) + n) % n; v[0] += (n - adj) % n; s = v.reduce(function (a, b) { return a + b; }, 0);
      var m = s / n;
      return { kind: 'num', q: 'A teacher recorded how many hours each of ' + n + ' pupils practised a piece of music in a week: ' + v.join(', ') + '. What was the mean number of hours of practice per pupil?',
        answer: m, unit: 'hours', display: String(m) + ' hours',
        why: 'Add the values: ' + v.join(' + ') + ' = ' + s + '. Divide by the number of pupils: ' + s + ' ÷ ' + n + ' = ' + m + ' hours.' };
    } },
    { skill: 'Reading data', gen: function () {
      var a = rint(2, 4), b = rint(8, 12), sa = rint(30, 42), sb = rint(70, 88);
      return { kind: 'mcq', q: 'Pupils were put into two groups for a typing test. Group A practised for ' + a + ' hours and group B practised for ' + b + ' hours.<br><table class="mc-table"><tr><th>Group</th><th>Practice (hours)</th><th>Mean words per minute</th></tr><tr><td>A</td><td>' + a + '</td><td>' + sa + '</td></tr><tr><td>B</td><td>' + b + '</td><td>' + sb + '</td></tr></table>Which conclusion fits Willingham\'s learning theory?',
        options: ['Group B did better, which supports the idea that practice and effort improve skill', 'Group A did better, which supports the idea that practice makes no difference', 'Both groups did the same, which supports the idea that talent decides performance', 'Group A did better, which supports the idea that skills come before facts'],
        answer: 0, why: 'Group B practised for ' + b + ' hours and averaged ' + sb + ' words per minute, compared with ' + sa + ' for group A after ' + a + ' hours. The link between more practice and better performance fits Willingham\'s emphasis on practice and effort.' };
    } },
    { skill: 'Reading data', gen: function () {
      var cl = pick(['Class 9A', 'Class 9B']), t = pick([20, 25, 30]), k = pick([3, 4, 5]), pre = rint(5, 9), post = pre + rint(5, 9);
      return { kind: 'num', q: cl + ' had a weekly ' + t + '-mark spelling test. After they practised the words for ' + k + ' short sessions a week, their mean score rose from ' + pre + ' marks to ' + post + ' marks. By how many marks did the mean score increase?',
        answer: post - pre, unit: 'marks', display: (post - pre) + ' marks',
        why: 'Increase = ' + post + ' - ' + pre + ' = ' + (post - pre) + ' marks. The rise after repeated practice fits Willingham\'s point that practice and effort improve performance.' };
    } },
    mcq('Applying strategies', 'Coach Imran notices that his under-11 football squad can name every rule but cannot control the ball when they are under pressure. According to Willingham, what should he add?',
      'Many repetitions of ball-control drills until the skill is automatic', ['More lectures about football rules so that the pupils know even more facts', 'Praise for natural ability, so that pupils feel clever', 'Fewer drills, so that pupils do not become tired and lose heart'],
      'Willingham says physical skills become automatic through repeated practice with feedback. The squad already has the facts, so the missing part is practice.'),
    mcq('Applying strategies', 'A science teacher gives Year 8 pupils a task that is only just within their ability and they succeed after effort. Why does this fit Willingham\'s ideas?',
      'Tasks that are challenging but achievable make pupils practise with effort', ['Easy tasks with no effort needed guarantee that pupils will develop a growth mindset', 'Success shows pupils were born with a talent for science', 'Tasks should always be so hard that pupils fail the first time'],
      'Willingham\'s theory says cognitive development is supported by effort and practice on tasks that are challenging but achievable.'),
    mcq('Evaluating the theory', 'Which statement is a valid <b>strength</b> of using Willingham\'s theory to help a teacher with a class?',
      'It gives practical strategies for cognitive, physical and social development', ['It tells the teacher exactly which stage every pupil is in', 'It shows that the teacher\'s praise decides the pupils\' beliefs about their ability', 'It proves that pupils with little knowledge will never think critically'],
      'Willingham\'s theory offers usable strategies in all three areas. Identifying stages is Piaget\'s approach and the effect of praise on beliefs is Dweck\'s.'),
    mcq('Matching the strategy', 'Which pairing of a type of development with a Willingham strategy is correct?',
      'Social development: seeing good behaviour from others and practising it', ['Physical development: learning facts about the body before any movement', 'Cognitive development: avoiding hard tasks so no pupil ever fails', 'Social development: telling pupils their personality is fixed at birth'],
      'Willingham links social development to seeing good social behaviour shown by others and then practising it. Physical skills need repeated practice with feedback, and cognitive development needs challenging but achievable tasks.')
  ] };

  // ---------- PSY-MEM-05 ----------
  B['PSY-MEM-05'] = { title: 'Reconstructive memory and the War of the Ghosts', items: [
    mcq('Theory of reconstructive memory', 'According to Bartlett\'s Theory of Reconstructive Memory, what happens when we recall something?',
      'We rebuild the memory using our schemas, so details can be changed, added or left out', ['We replay an exact copy of the event, in the same way as a video recorder would play it back', 'We recall only the details that we paid attention to at the time', 'We recall each detail in the same order in which it first happened'],
      'Bartlett said memory is an active process: we reconstruct events using schemas rather than replaying an exact recording. This can introduce errors.'),
    mcq('Schemas', 'In Bartlett\'s theory, how are the schemas that affect memory formed?',
      'From past experience and the culture a person grows up in', ['From a single event that the person has recently seen', 'By repeating information until it is moved into long-term memory', 'From the stage of cognitive development a child has reached'],
      'Schemas are mental frameworks built from past experience and culture. They shape what we expect and so how we reconstruct memories.'),
    mcq('Applying the theory', 'Gina watched a street theft and later told police the thief carried a knife. In fact, he carried a phone. Gina had seen many crime dramas in which thieves use knives. Using Bartlett\'s theory, why could her memory have changed?',
      'Her crime schema, built from the dramas, led her to fill the gap with a knife when she reconstructed the event', ['She was lying to the police to make her statement sound more serious than the real event', 'She did not rehearse the event, so the details were lost from short-term memory', 'She was in the pre-operational stage, so she could not recall the thief properly'],
      'Bartlett\'s theory says recall is rebuilt using schemas. Gina\'s schema for thieves added a detail that fits her expectations. This is reconstruction and not lying.'),
    mcq('Applying the theory', 'Hamza, from a city, hears a story about farming on a remote island. A week later he retells it but changes the farm animals into pets and the island into a village. Which idea in Bartlett\'s theory explains this best?',
      'Hamza\'s own schemas changed unfamiliar details so that they fitted what he already knows', ['Hamza rehearsed the story too often, so it moved into his sensory register', 'Hamza forgot the story because he never paid attention while it was told', 'Hamza has retrograde amnesia, so he cannot recall earlier events accurately from before'],
      'Unfamiliar details are changed so that they fit the schemas a person already has, as in the War of the Ghosts study. This is not forgetting caused by lack of attention or amnesia.'),
    mcq('Applying the theory', 'Ava recalls her school trip to the coast as sunny and warm. Her photographs show that it was cloudy and cold. Using the Theory of Reconstructive Memory, why might Ava\'s memory have changed?',
      'She rebuilt the event using her schema that days out by the sea are sunny', ['She did not pay attention, so the weather never entered her short-term memory', 'She is lying about the day because she wants other people to think that it was a good one', 'Her memory of the day was recorded exactly and so cannot have been changed'],
      'Ava\'s schema for a day at the sea includes sunshine, and she used it to reconstruct the weather. This is a normal feature of reconstructive memory and not lying.'),
    mcq('Bartlett (1932): procedure', 'How many participants took part in Bartlett\'s (1932) "War of the Ghosts" repeated reproduction study?',
      '20', ['10', '30', '40'],
      'The study used 20 British participants who read a Native American folk story and then reproduced it more than once.'),
    mcq('Bartlett (1932): procedure', 'Which description of the method used in Bartlett\'s (1932) War of the Ghosts study is correct?',
      'British participants read a Native American folk story and reproduced it several times', ['Participants were shown consonant trigrams and then counted backwards in threes before recall', 'Participants watched a video of a crime and answered questions about it', 'Participants learned lists of words and were tested on them after a fixed delay'],
      'Bartlett used repeated reproduction of an unfamiliar story. Trigrams and counting backwards belong to Peterson and Peterson, and videos of crimes are used in eyewitness studies.'),
    mcq('Bartlett (1932): findings', 'What happened to the length of the participants\' reproductions of the story in Bartlett\'s study?',
      'They became shorter each time that the story was reproduced', ['They became longer each time that the story was reproduced, as more details were added', 'They stayed exactly the same length for every reproduction', 'They became shorter for men and longer for women'],
      'Recall became shorter as participants reproduced the story several times. They also changed some details, but the overall story order was kept fairly well.'),
    mcq('Bartlett (1932): findings', 'In Bartlett\'s study, what often happened to unfamiliar details in the Native American story, such as canoes?',
      'They were changed to fit British culture, for example canoes became boats', ['They were always recalled exactly because they stood out so much from the rest of the story', 'They were repeated more often than the familiar details', 'They were moved to the start of every reproduction'],
      'Participants changed unfamiliar details so that they fitted their own cultural schemas. This is evidence that memory is reconstructed.'),
    multi('Bartlett (1932): findings', 'Which of these were findings of Bartlett\'s War of the Ghosts study?',
      ['Supernatural and unusual details were often missed out', 'The overall order of the story was kept fairly well'], ['Participants recalled unfamiliar details more accurately than familiar ones', 'The reproductions grew longer each time they were produced'],
      'Participants left out unusual and supernatural details but kept the broad order of the story. Their recall got shorter and unfamiliar details were changed, not made more accurate.'),
    mcq('Distinguishing studies', 'A student writes, "In Bartlett\'s study participants recalled consonant trigrams after counting backwards." What is wrong with this statement?',
      'This describes Peterson and Peterson; Bartlett used a folk story that was reproduced several times', ['Nothing is wrong, since Bartlett used trigrams to study how memory is reconstructed from schemas', 'This describes Bartlett, but he used participants aged under five', 'This describes Bartlett, but he used a video of a crime scene'],
      'Consonant trigrams and counting backwards are from Peterson and Peterson\'s study of short-term memory. Bartlett\'s procedure was repeated reproduction of a story.'),
    mcq('Evaluating the theory', 'Which of these is a <b>strength</b> of Bartlett\'s Theory of Reconstructive Memory?',
      'It helps to explain everyday memory errors, such as mistakes made by eyewitnesses', ['It explains how information moves from the sensory register to long-term memory', 'It uses carefully controlled laboratory tests with exact measures of how much was recalled', 'It shows that memories are stored as exact copies in the brain'],
      'Because memory is rebuilt using schemas, the theory can explain why witnesses add or change details. The model of stores belongs to Atkinson and Shiffrin.'),
    mcq('Evaluating the study', 'Which of these is a genuine <b>weakness</b> of Bartlett\'s War of the Ghosts study?',
      'It was not tightly controlled, and Bartlett judged the reproductions himself, which may be subjective', ['It used a large sample of participants from many cultures around the world', 'It used trigrams, which are not like the memories that people use in their everyday lives', 'It measured recall in seconds, so it did not test long-term memory'],
      'Bartlett did not control the procedure closely and interpreted the changes himself, so his conclusions could be biased. The sample was 20 British participants, so it was not large or multicultural.'),
    mcq('Reconstruction not lying', 'A witness remembers that the getaway car was red but it was in fact orange. According to the Theory of Reconstructive Memory, what is the most likely reason?',
      'Her memory was rebuilt with the help of her schemas and was not an exact record', ['She is being dishonest and has decided to lie to the police', 'She has anterograde amnesia and cannot form new memories', 'The event was never stored in her sensory register at all'],
      'The theory treats errors as a normal result of reconstruction using schemas. It does not say that people are lying.'),
    mcq('Predictions of the theory', 'A researcher has people hear a short story and retell it over a week. Which result would the Theory of Reconstructive Memory predict?',
      'Retellings change, with some details shortened or altered to fit what people know', ['Every retelling matches the original story word for word, whatever the person already knows', 'Retellings get longer, with more unfamiliar details recalled each time', 'People recall nothing of the story after the first retelling'],
      'The theory predicts that memory changes because people reconstruct it from schemas. It predicts shorter, adapted accounts and not exact copies.'),
    mcq('Strength or weakness', 'Which of these statements about Bartlett\'s work is a <b>weakness</b> and not a strength?',
      'His interpretation of what participants changed may have been affected by his own opinions', ['It helps explain why the accounts of witnesses to the same event differ', 'It fits with everyday experience that memories can change a lot over time and be unreliable', 'It can explain why people change unfamiliar details into more familiar ones'],
      'Only the first statement points to a flaw, which is that the interpretation might be subjective. The other three are reasons that support the theory.'),
    mcq('Applying the theory', 'Keira retells a story about a haunted lighthouse to her friends several times. By the fifth retelling she leaves out the ghost but keeps the sequence of events. Which feature of Bartlett\'s findings does this match?',
      'Unusual or supernatural details were often missed out, while the story\'s order was kept', ['Unfamiliar details became more accurate each time that they were retold by the participants', 'The story grew longer as new schema-based details were added', 'The overall order of the story was lost completely'],
      'This matches the War of the Ghosts findings: supernatural details were often dropped while the main structure was kept fairly well.'),
    mcq('Cultural schemas', 'Why did Bartlett use a Native American folk story with British participants?',
      'The story contained unfamiliar ideas, so he could see how participants\' own schemas changed it', ['He wanted to test whether trigrams were easier to recall than stories, and which were forgotten first', 'He wanted to find out how many items short-term memory can hold', 'He wanted the story to be so familiar that nothing would change in recall'],
      'An unfamiliar story from another culture would clash with British schemas, so changes in recall would show how schemas influence memory.'),
    { skill: 'Reading data', gen: function () {
      var tot = pick([20, 25, 30, 40]), k = pick([0.5, 0.6, 0.7, 0.8]) * tot, name = pick(['Dr Singh', 'Dr Mensah', 'Dr Larsen']);
      k = Math.round(k);
      return { kind: 'num', q: name + ' repeated a story-reproduction study with ' + tot + ' students. ' + k + ' of them changed at least one unfamiliar detail to fit their own culture. What percentage of the students changed an unfamiliar detail? Give your answer as a percentage.',
        answer: R.roundDp(k / tot * 100, 1), unit: '%', tol: 0.05, display: String(R.roundDp(k / tot * 100, 1)) + '%',
        why: 'Percentage = ' + k + ' ÷ ' + tot + ' × 100 = ' + R.roundDp(k / tot * 100, 1) + '%. This supports the idea that unfamiliar details are changed to fit schemas.' };
    } },
    { skill: 'Reading data', gen: function () {
      var w1 = pick([160, 180, 200, 240]), cut = pick([0.25, 0.5]), w3 = w1 * (1 - cut);
      return { kind: 'num', q: 'In a story-reproduction study a participant\'s first reproduction was ' + w1 + ' words long and their third reproduction was ' + w3 + ' words long. By what percentage did the length fall from the first to the third reproduction?',
        answer: cut * 100, unit: '%', display: (cut * 100) + '%',
        why: 'Fall = ' + w1 + ' - ' + w3 + ' = ' + (w1 - w3) + ' words. Percentage fall = ' + (w1 - w3) + ' ÷ ' + w1 + ' × 100 = ' + (cut * 100) + '%. Shorter reproductions match Bartlett\'s finding that recall became shorter.' };
    } },
    { skill: 'Reading data', gen: function () {
      var a = rint(11, 16), b = rint(4, 8), n = 20;
      return { kind: 'mcq', q: 'A teacher counted how participants\' recall of a folk story changed after the third retelling (' + n + ' participants).<br><table class="mc-table"><tr><th>Type of detail</th><th>Participants who kept it</th></tr><tr><td>Familiar details</td><td>' + a + '</td></tr><tr><td>Unfamiliar, supernatural details</td><td>' + b + '</td></tr></table>Which conclusion fits the Theory of Reconstructive Memory?',
        options: ['Familiar details were kept by more participants (' + a + ' compared with ' + b + '), as schemas help with details that fit what people know', 'Unfamiliar details were kept by more participants, as schemas help with details that do not fit', 'Both types were kept by the same number of participants, so schemas have no effect', 'Fewer participants kept the familiar details, as schemas make people forget familiar ideas'],
        answer: 0, why: a + ' participants kept familiar details but only ' + b + ' kept the unfamiliar, supernatural ones. The theory says schemas shape recall, so details that fit existing schemas are more likely to survive.' };
    } },
    mcq('Real-life application', 'Which real-life situation best supports Bartlett\'s idea that memory is reconstructive?',
      'Two bystanders giving different accounts of the same accident', ['A person repeating a phone number to keep it in mind for 20 seconds', 'A patient who cannot form new memories after brain surgery', 'A student who forgets a list because they never paid attention'],
      'Different accounts of one event fit the idea that each person rebuilds the memory using their own schemas. The other options are about short-term memory, amnesia and attention.')
  ] };

  // ---------- PSY-MEM-03 ----------
  B['PSY-MEM-03'] = { title: 'Retrograde and anterograde amnesia', items: [
    mcq('Definitions', 'What is meant by <b>retrograde amnesia</b>?',
      'Being unable to recall information or events from before the amnesia began', ['Being unable to form new long-term memories after the amnesia began', 'Being unable to recall any information at all, including skills and language', 'Being unable to pay attention to new information for more than a few seconds'],
      'In retrograde amnesia the memory loss is for the past (the time before the damage). Being unable to form new memories is anterograde amnesia.'),
    mcq('Definitions', 'What is meant by <b>anterograde amnesia</b>?',
      'Being unable to form new long-term memories after the amnesia began', ['Being unable to recall events from before the amnesia began, such as childhood', 'Being unable to recall events from a single day in the past', 'Being unable to remember anything about one\'s own identity'],
      'Anterograde amnesia affects new learning after the onset. A person usually can still recall events from before the damage.'),
    mcq('Identifying the type', 'After a car crash, Marcus cannot recall his wedding or anything from the five years before the crash. He can learn new names and follow a new route to work. Which type of amnesia does he most likely have?',
      'Retrograde amnesia, as he lost memories from before the crash but can learn', ['Anterograde amnesia, as he cannot recall events from before the crash happened', 'Anterograde amnesia, as he can learn new names but he cannot follow any new routes', 'Retrograde amnesia, as he cannot make new long-term memories'],
      'Marcus has lost past memories (retrograde) but his ability to form new memories is intact. Anterograde amnesia would be the other way round.'),
    mcq('Identifying the type', 'After brain surgery, Joanna remembers her childhood and her old school friends clearly. Each morning, however, she greets the same nurse as a stranger and cannot recall any conversations from the day before. Which type of amnesia does she most likely have?',
      'Anterograde amnesia, as she cannot form new long-term memories', ['Retrograde amnesia, as she cannot recall the nurse that she meets every day', 'Retrograde amnesia, as she remembers her childhood well', 'Neither type, since she can recall some events from before the surgery'],
      'Joanna recalls old memories but cannot make new ones, which is anterograde amnesia. A person with this type can usually still recall events from before the damage.'),
    mcq('Predicting test results', 'A psychologist plans to test a man who has retrograde amnesia on famous news events from before his injury and on a list of new words learned this morning. What is she most likely to find?',
      'Poor recall of the news events, but he can learn and recall the new words', ['Good recall of the news events, but he cannot learn or recall the new words', 'Poor recall of both the news events and the new words', 'Good recall of both the news events and the new words'],
      'Retrograde amnesia affects memories from before the injury, so older news events are lost, but the ability to learn new information is usually still there.'),
    mcq('Predicting test results', 'A psychologist tests a woman who has anterograde amnesia on a picture of her childhood home and on faces of staff she met yesterday. What is she most likely to find?',
      'She recognises the childhood home but not the staff she met yesterday', ['She recognises the staff she met yesterday, but not her childhood home', 'She recognises neither the staff nor her childhood home', 'She recognises both the staff and her childhood home equally well'],
      'Anterograde amnesia stops new long-term memories from forming, so recent meetings are not recalled. Memories from before the damage are usually still there.'),
    mcq('Famous case', 'HM is a well-known case in memory research. Which description of HM is correct?',
      'After brain surgery in 1953 he could no longer form new long-term memories', ['After a brain infection in 1953 he lost all of his childhood memories', 'After brain surgery in 1953 he could recall only the previous week', 'After a head injury in 1953 he could not remember how to speak'],
      'HM had surgery in 1953 and then could not form new long-term memories, which is anterograde amnesia.'),
    multi('Symptoms', 'Which of these are symptoms of <b>anterograde</b> amnesia?',
      ['Difficulty remembering new people met after the damage', 'Being able to recall events from many years before the damage'], ['Being unable to recall the events of childhood', 'Being able to learn new information quickly and easily'],
      'Anterograde amnesia affects new learning and leaves earlier memories largely intact. Losing childhood memories is a feature of retrograde amnesia.'),
    multi('Symptoms', 'Which of these are true of someone with <b>retrograde</b> amnesia?',
      ['Being unable to recall events from before the damage', 'Still being able to learn new information after the damage'], ['Being unable to form new long-term memories', 'Meeting someone each day as though for the first time'],
      'Retrograde amnesia is loss of memories from before the onset, while the ability to learn new things usually remains. The other two options describe anterograde amnesia.'),
    mcq('Common errors', 'A student writes, "Someone with amnesia forgets everything, including how to talk and walk." Why would this answer lose credit?',
      'Amnesia affects particular memories, so people usually keep skills and language', ['Amnesia affects only the sensory register and so never affects long-term memory', 'People with amnesia forget everything except the past week of their lives', 'Amnesia affects only babies, who have not yet formed any memories'],
      'Amnesia is loss of certain memories, either old (retrograde) or new (anterograde). People generally keep basic skills and language.'),
    multi('Causes', 'Which of these can cause amnesia?',
      ['Brain damage after an accident', 'Brain surgery'], ['Having a vivid dream', 'Learning a new language'],
      'Amnesia can follow brain damage, illness, surgery or drugs. Dreaming or learning a language does not cause it.'),
    mcq('Method of testing', 'A psychologist wants to find out whether a patient has retrograde amnesia. Which test would help most?',
      'Asking the patient about important events from several years before the illness', ['Asking the patient to learn a new list of words and then recall them later in the day', 'Asking the patient to count backwards from 100 in threes', 'Asking the patient to copy a drawing that is placed in front of them'],
      'Retrograde amnesia is about loss of past memories, so testing memory for events before the illness is the way to detect it. A new word list tests anterograde amnesia.'),
    mcq('Method of testing', 'A psychologist wants to find out whether a patient has anterograde amnesia. Which test would help most?',
      'Giving the patient new information, then testing recall of it the next day', ['Asking the patient about their wedding day that took place many years ago', 'Asking the patient to name the prime minister before the illness', 'Asking the patient to describe their primary school'],
      'Anterograde amnesia means being unable to form new long-term memories, so the test must involve learning something new and recalling it later.'),
    mcq('Explaining with the term', 'Which answer would earn both marks for explaining what a psychologist would find if a man, Pavel, has anterograde amnesia?',
      'Pavel could not form new long-term memories, so he would not recall words learned an hour ago', ['Pavel would have anterograde amnesia, which is a type of memory loss that follows damage to the brain', 'Pavel would struggle to recall a list of words, as many people do', 'Pavel would lose past memories, so he would not recall his childhood home'],
      'A full answer defines the effect of anterograde amnesia (no new long-term memories) and links it to a test result for Pavel. Other options are vague or describe retrograde amnesia.'),
    { skill: 'Interpreting data', gen: function () {
      var oldA = rint(2, 4), newA = rint(15, 19), oldB = rint(15, 19), newB = rint(2, 4);
      var pa = pick(['Patient X', 'Patient K']), pb = pick(['Patient Y', 'Patient L']);
      return { kind: 'mcq', q: 'Two patients were each tested on 20 questions about events before their illness and 20 questions about information learned since their illness.<br><table class="mc-table"><tr><th></th><th>Correct: before illness</th><th>Correct: since illness</th></tr><tr><td>' + pa + '</td><td>' + oldA + '</td><td>' + newA + '</td></tr><tr><td>' + pb + '</td><td>' + oldB + '</td><td>' + newB + '</td></tr></table>Which conclusion is correct?',
        options: [pa + ' is more likely to have retrograde amnesia, because ' + oldA + ' out of 20 for the earlier memories is much lower than ' + newA + ' for new learning', pb + ' is more likely to have retrograde amnesia, because only ' + newB + ' out of 20 was recalled after the illness', pa + ' is more likely to have anterograde amnesia, because ' + oldA + ' out of 20 for the earlier memories is very low', 'Both patients have the same type of amnesia, because both scored below 20 on at least one set'],
        answer: 0, why: pa + ' scored ' + oldA + '/20 on memories from before the illness but ' + newA + '/20 on new learning, so past memories are lost while new learning works: retrograde. ' + pb + ' scored ' + oldB + '/20 before and ' + newB + '/20 since, which suggests anterograde amnesia.' };
    } },
    { skill: 'Interpreting data', gen: function () {
      var a = rint(2, 5), b = rint(15, 19), c = rint(1, 4), n = 20;
      return { kind: 'num', q: 'A patient with anterograde amnesia was shown ' + n + ' faces of people who were famous before their illness and ' + n + ' faces of people who became famous after their illness. They named ' + b + ' of the first set and ' + a + ' of the second set. How many more faces did they name from the first set than from the second set?',
        answer: b - a, unit: 'faces', display: (b - a) + ' faces',
        why: 'Difference = ' + b + ' - ' + a + ' = ' + (b - a) + ' faces. The higher score for faces known before the illness fits anterograde amnesia: older memories remain but new ones are not formed.' };
    } },
    { skill: 'Interpreting data', gen: function () {
      var s = [rint(14, 19), rint(1, 4), rint(1, 4), rint(2, 5)], tot = 20;
      var p = R.roundDp(s[0] / tot * 100, 0);
      return { kind: 'num', q: 'A man with retrograde amnesia was asked ' + tot + ' questions about events from before his stroke and answered ' + (tot - s[0]) + ' of them correctly. What percentage of the questions about events from before his stroke did he get wrong? ',
        answer: R.roundDp(s[0] / tot * 100, 1), unit: '%', tol: 0.05, display: String(R.roundDp(s[0] / tot * 100, 1)) + '%',
        why: 'Number wrong = ' + tot + ' - ' + (tot - s[0]) + ' = ' + s[0] + '. Percentage wrong = ' + s[0] + ' ÷ ' + tot + ' × 100 = ' + R.roundDp(s[0] / tot * 100, 1) + '%. A high error rate for past events fits retrograde amnesia.' };
    } },
    mcq('Distinguishing', 'Which person could still learn a new phone number but cannot recall their own wedding that took place before an accident?',
      'A person with retrograde amnesia', ['A person with anterograde amnesia', 'A person with either type of amnesia', 'A person with neither type of amnesia'],
      'Retrograde amnesia affects memories from before the damage, but the person can still make new memories, such as learning a phone number.'),
    mcq('Distinguishing', 'Which person could recall their own wedding that took place before an accident but would fail to learn a new phone number?',
      'A person with anterograde amnesia', ['A person with retrograde amnesia', 'A person with either type of amnesia', 'A person with neither type of amnesia'],
      'Anterograde amnesia leaves older memories largely intact but stops new long-term memories from forming, so the new phone number would not be learned.'),
    mcq('Applying the terms', 'After a head injury, Ruth cannot recall how she met her husband and cannot remember where she lived as a child. She learns new facts on a computer course without difficulty. Which description fits best?',
      'Retrograde amnesia, because her lost memories are all from before the injury', ['Anterograde amnesia, because she can learn new facts without any real difficulty', 'Anterograde amnesia, because she has lost her memories of childhood', 'Retrograde amnesia, because she cannot form new long-term memories'],
      'Ruth lost memories from before the injury but can form new ones, so she has retrograde amnesia. A person with anterograde amnesia could not learn the new facts.'),
    mcq('Common features', 'Which statement is true of <b>both</b> retrograde and anterograde amnesia?',
      'Both involve memory loss that can follow brain damage', ['Both stop a person recalling anything from their childhood', 'Both prevent a person from learning any new information', 'Both are caused only by illness and never by injuries'],
      'Both types are forms of memory loss with causes such as brain damage, illness, surgery or drugs. Only retrograde loses past memories, and only anterograde stops new ones forming.'),
    mcq('Hardest task', 'Which task would be <b>hardest</b> for a person with anterograde amnesia?',
      'Recalling a talk they had an hour ago', ['Recalling the name of their first school teacher', 'Recalling the date of their own wedding day', 'Recalling the street where they grew up'],
      'Anterograde amnesia affects the formation of new long-term memories, so a recent conversation would not be recalled. Memories from long before the damage are usually still there.')
  ] };

  // ---------- PSY-MEM-04 ----------
  B['PSY-MEM-04'] = { title: 'The Multi-store Model of Memory', items: [
    mcq('Model structure', 'Which list shows the correct order in which information flows through the Multi-store Model of Memory (Atkinson and Shiffrin, 1968)?',
      'Sensory register, short-term memory, long-term memory', ['Short-term memory, sensory register, long-term memory', 'Long-term memory, short-term memory, sensory register', 'Sensory register, long-term memory, short-term memory'],
      'Information enters the sensory register, passes to short-term memory if attended to, and passes to long-term memory if rehearsed.'),
    mcq('Sensory register', 'In the Multi-store Model, what is the <b>sensory register</b>?',
      'A store that briefly holds sensory information in the form that it was received', ['A store that holds information for a lifetime with unlimited capacity, in coded form', 'A store that holds about seven items for up to thirty seconds', 'A process of repeating information over and over again'],
      'The sensory register holds information from the senses for a very short time in the same form (visual, sound). Unattended information is lost from it.'),
    mcq('Role of attention', 'According to the Multi-store Model, what is the role of <b>attention</b>?',
      'It moves information from the sensory register into short-term memory', ['It moves information from short-term memory into long-term memory for storage', 'It keeps information in the sensory register for a longer time', 'It retrieves information from long-term memory into the senses'],
      'Paying attention transfers information from the sensory register into short-term memory. Information that is not attended to is lost.'),
    mcq('Role of rehearsal', 'According to the Multi-store Model, what is the role of <b>rehearsal</b>?',
      'It keeps information in STM and can transfer it into long-term memory', ['It moves information from the sensory register into short-term memory', 'It removes information from long-term memory when it is not needed any more', 'It increases the capacity of the sensory register to hold information'],
      'Repeating information keeps it in STM and, with enough rehearsal, passes it into LTM. Attention is what moves information from the sensory register to STM.'),
    mcq('Capacity and duration', 'Which row correctly gives the capacity and duration of <b>short-term memory</b> in the Multi-store Model?',
      'About 7 plus or minus 2 items, lasting about 15 to 30 seconds', ['About 7 plus or minus 2 items, lasting a whole lifetime', 'Unlimited capacity, lasting about 15 to 30 seconds', 'Unlimited capacity, lasting a whole lifetime'],
      'STM has limited capacity (about 7 plus or minus 2 items) and short duration (about 15 to 30 seconds). LTM has unlimited capacity and can last a lifetime.'),
    mcq('Capacity and duration', 'Which row correctly gives the capacity and duration of <b>long-term memory</b> in the Multi-store Model?',
      'Unlimited capacity, lasting potentially a lifetime', ['About 7 plus or minus 2 items, lasting about 15 to 30 seconds', 'About 7 plus or minus 2 items, lasting potentially a lifetime', 'Unlimited capacity, lasting about 15 to 30 seconds'],
      'Long-term memory has unlimited capacity and can last a lifetime. The 7 plus or minus 2 and 15 to 30 seconds figures belong to STM.'),
    mcq('Applying the model', 'Nia was listening to music through headphones when a station announcement gave her platform number. She could not say the number a minute later. Using the Multi-store Model, what is the best explanation?',
      'She did not pay attention, so it never passed from the sensory register to STM', ['She rehearsed the number too often, which stopped it from reaching her long-term memory at all', 'She paid attention, so the number should have reached LTM without rehearsal', 'Her long-term memory was full, so it could not hold the platform number'],
      'Without attention, information in the sensory register is lost and never enters STM. Long-term memory has unlimited capacity, so it cannot be "full".'),
    mcq('Applying the model', 'Callum is given a phone number and says it out loud over and over until he has typed it into his phone. Which part of the Multi-store Model does this show, and why?',
      'Rehearsal, because repeating the number keeps it in short-term memory', ['Attention, because it moves the number into long-term memory', 'The sensory register, because the number is held in sound form for a very long time', 'Retrieval, because the number is being brought back from long-term memory'],
      'Repeating information is rehearsal, which keeps it in STM (and could transfer it to LTM if repeated enough). Attention moves information from the sensory register into STM.'),
    mcq('Applying the model', 'Sunita wants to remember the list of the planets for a quiz next week. Using the Multi-store Model, which advice would help most?',
      'Pay attention and rehearse the list repeatedly so it passes into long-term memory', ['Read the list once and then think about something else completely for a day or two', 'Keep the list in the sensory register by looking at it for a very long time', 'Focus only on the final few planets because short-term memory holds them'],
      'Attention gets the information into STM and repeated rehearsal helps to transfer it to LTM. One look is not enough, and the sensory register holds information only briefly.'),
    mcq('Applying the model', 'Dylan recalls a 6-digit code for a few seconds after hearing it but cannot recall it five minutes later because he did not repeat it to himself. Using the model, why?',
      'It was held in STM, but without rehearsal it was lost before reaching LTM', ['It was held in the sensory register for five minutes and then lost', 'It moved straight to long-term memory but it could not be retrieved when needed', 'It was too many digits to be held in short-term memory at all'],
      'Six digits fit within STM\'s capacity, but STM lasts only about 15 to 30 seconds without rehearsal. Without rehearsal the code did not pass to LTM.'),
    mcq('Common errors', 'A student writes, "Attention moves information from short-term memory into long-term memory." What is wrong with this?',
      'Attention moves information from the sensory register to STM, while rehearsal helps move it to LTM', ['Nothing is wrong, since attention is the process that moves information from STM into long-term memory', 'Attention moves information from long-term memory back to the senses', 'Attention only operates in long-term memory, where it keeps information for life'],
      'In the Multi-store Model, attention links the sensory register to STM. Rehearsal links STM to LTM.'),
    mcq('Attention and rehearsal', 'Which statement correctly describes the difference between <b>attention</b> and <b>rehearsal</b>?',
      'Attention brings incoming information into STM; rehearsal repeats it to keep it there and move it to LTM', ['Attention repeats information to move it into LTM; rehearsal focuses on incoming information from the senses', 'Attention and rehearsal both mean repeating information to hold it in the sensory register', 'Attention happens in long-term memory; rehearsal happens in the sensory register'],
      'Attention is about focusing on information so it passes from the sensory register to STM. Rehearsal is about repeating it so it stays in STM and may enter LTM.'),
    multi('Model features', 'Which of these statements about the Multi-store Model of Memory are correct?',
      ['Information not attended to is lost from the sensory register', 'Rehearsal can transfer information from STM into LTM'], ['Short-term memory has an unlimited capacity', 'Information is passed from LTM to the sensory register to be recalled'],
      'Unattended information is lost and rehearsal links STM to LTM. STM has a limited capacity, and retrieval brings information from LTM back to STM.'),
    mcq('Serial position', 'In a free-recall test of a long word list, a participant remembers the first few words well. Which explanation fits the Multi-store Model?',
      'Early words were rehearsed more, so more of them reached long-term memory', ['Early words were held in the sensory register for the entire length of the test', 'Early words were not rehearsed, which let them enter LTM easily', 'Early words stayed in STM, since STM can hold hundreds of words'],
      'The primacy effect fits the model because the first words get most rehearsal time before the list gets too long, so they reach LTM.'),
    mcq('Evaluating the model', 'Which of these is a <b>strength</b> of the Multi-store Model?',
      'HM\'s STM worked normally but he could not form new LTMs, which supports separate stores', ['It explains how schemas change memories to fit what a person already knows and expects', 'It accounts for memories that are formed without any rehearsal', 'It shows that STM has separate parts for different kinds of information'],
      'HM\'s case supports the idea of separate STM and LTM stores. Schema changes link to Bartlett, while the last two options are criticisms of the model.'),
    mcq('Evaluating the model', 'Which of these is a genuine <b>weakness</b> of the Multi-store Model?',
      'It is too simple, as KF\'s case suggests STM has more than one part', ['It has no support from any case studies or experiments on memory in real patients', 'It suggests that rehearsal is not needed to hold information in STM', 'It says that there are no limits on the capacity of STM'],
      'KF\'s case suggested that STM is not a single store, so the model oversimplifies. The model is supported by evidence and it does say that STM is limited and rehearsal is needed.'),
    mcq('Evaluating the model', 'Sofia remembers the details of a surprising event from a year ago, although she never repeated them to herself. Why is this a problem for the Multi-store Model?',
      'The model says LTM needs rehearsal, but she remembers without it', ['The model says that LTM can only hold information for about 30 seconds without rehearsal', 'The model says that information moves from LTM to the senses', 'The model says that surprising events are never stored at all'],
      'Some things are remembered without rehearsal, which the model cannot explain. This is a weakness of the model: it is too simple.'),
    mcq('Short-term memory capacity', 'A participant hears a list of 15 unrelated words once and then recalls as many as possible straight away. Using the Multi-store Model, roughly how many words would they be expected to recall from STM alone?',
      'About 7, plus or minus 2', ['About 15, because STM holds a whole list', 'About 30, because STM lasts for 30 seconds', 'None, because STM cannot hold words'],
      'STM has limited capacity of about 7 plus or minus 2 items. With rehearsal some words might also reach LTM, but STM alone cannot hold all 15.'),
    mcq('Chunking', 'Elena finds that she can recall the 12 digits 1 4 9 2 1 7 7 6 2 0 1 2 more easily when she thinks of them as three well-known years. Which idea about the capacity of STM does this fit?',
      'Grouping information into meaningful chunks lets more fit within STM\'s limited capacity', ['STM has unlimited capacity, so any number of digits can be stored if they are in chunks', 'Digits are held in the sensory register for several minutes if grouped', 'Long-term memory has a limited capacity of about seven digits'],
      'STM can hold only about 7 plus or minus 2 items, but each chunk counts as one item. Three year-chunks are within the limit.'),
    { skill: 'Reading data', gen: function () {
      var n = pick([5, 6]), v = [], i, s = 0, reh = pick(['rehearse', 'repeat']);
      for (i = 0; i < n; i++) { v.push(rint(6, 14)); s += v[i]; }
      var r = ((s % n) + n) % n; v[0] += (n - r) % n; s = v.reduce(function (a, b) { return a + b; }, 0);
      var m = s / n;
      return { kind: 'num', q: n + ' students were given 15 seconds to ' + reh + ' a list of 15 words, then recalled as many as they could. Their scores were ' + v.join(', ') + '. What was the mean number of words recalled?',
        answer: m, unit: 'words', display: m + ' words',
        why: 'Total = ' + v.join(' + ') + ' = ' + s + '. Mean = ' + s + ' ÷ ' + n + ' = ' + m + ' words.' };
    } },
    { skill: 'Reading data', gen: function () {
      var a = rint(11, 14), b = rint(4, 7), c = pick(['Group R', 'Group S']), d = c === 'Group R' ? 'Group T' : 'Group U';
      return { kind: 'mcq', q: 'In an experiment ' + c + ' was allowed to rehearse a word list for one minute and ' + d + ' was stopped from rehearsing. Both were tested on the list a day later.<br><table class="mc-table"><tr><th>Group</th><th>Mean words recalled (out of 15)</th></tr><tr><td>' + c + ' (rehearsal)</td><td>' + a + '</td></tr><tr><td>' + d + ' (no rehearsal)</td><td>' + b + '</td></tr></table>Which conclusion fits the Multi-store Model?',
        options: [c + ' recalled more (' + a + ' compared with ' + b + '), which fits rehearsal transferring information to long-term memory', d + ' recalled more, which fits the idea that rehearsal removes information from memory', 'Both groups recalled the same, which fits the idea that rehearsal has no effect', c + ' recalled more, which fits the idea that attention moves information into LTM'],
        answer: 0, why: c + ' averaged ' + a + ' words and ' + d + ' averaged ' + b + '. Rehearsal transfers information from STM to LTM, so the group that rehearsed should remember more a day later. Attention is the link from the sensory register to STM.' };
    } },
    mcq('Retrieval', 'In the Multi-store Model, what happens during <b>retrieval</b>?',
      'Information is brought back from long-term memory into short-term memory', ['Information is moved from the senses into the sensory register', 'Information is repeated to keep it in short-term memory', 'Information is lost from the sensory register through lack of attention'],
      'Retrieval brings information stored in LTM back into STM so it can be used. Repeating information is rehearsal and losing unattended information is a feature of the sensory register.')
  ] };

  // ---------- PSY-PRB-06 ----------
  B['PSY-PRB-06'] = { title: 'Young (2007): CBT for internet addiction', items: [
    mcq('Aim and context', 'What was the aim of Young\'s (2007) study?',
      'To test whether CBT is an effective treatment for internet addiction', ['To find out whether a gene makes people more likely to become addicted to the internet', 'To compare CBT with drug treatment for people who are addicted to gambling', 'To measure how many hours a day the average person spends online'],
      'Young investigated whether CBT works as a treatment for internet addiction. She did not compare drugs, test genes or measure internet use in the general population.'),
    mcq('Procedure', 'In which country did Young (2007) carry out her study, at the Center for Internet Addiction Recovery?',
      'The USA', ['The UK', 'Australia', 'New Zealand'],
      'The study was carried out in the USA. The country matters when evaluating how far the findings can be generalised to other cultures.'),
    mcq('Procedure', 'How many clients with internet addiction took part in Young\'s (2007) study?',
      '114', ['41', '147', '1 037'],
      'The sample was 114 clients, who all received online CBT. Do not confuse this with the larger samples of other studies, such as Caspi et al.'),
    mcq('Procedure', 'After which sessions did clients in Young (2007) complete the client outcome questionnaire?',
      'After sessions 3, 8 and 12', ['After sessions 1, 5 and 10', 'After sessions 2, 4 and 6', 'After sessions 4, 8 and 16'],
      'Clients were given the questionnaire after the 3rd, 8th and 12th sessions, and there was also a follow-up later.'),
    mcq('Procedure', 'When was the follow-up questionnaire given in Young\'s (2007) study?',
      'Six months after therapy ended', ['One week after the therapy had ended', 'One month after the therapy had ended', 'Two years after the therapy had ended'],
      'The follow-up came six months after therapy. This allowed Young to check whether the improvements lasted.'),
    multi('Measures', 'Which of these were measured in the client outcome questionnaire used by Young (2007)?',
      ['Motivation to quit using the internet', 'Ability to manage time spent online'], ['Level of the stress hormone cortisol', 'Number of friends on social media sites'],
      'The questionnaire included measures such as motivation to quit, managing time online, relationship functioning, engaging in offline activities and ability to stop problem applications. No hormones were measured.'),
    mcq('Measures', 'Which of these is another measure from the client outcome questionnaire in Young\'s study?',
      'Relationship functioning', ['Blood pressure', 'Reaction time', 'Intelligence quotient'],
      'Relationship functioning was one of the measures, along with motivation to quit, managing time online, engaging in offline activities and the ability to stop problem applications.'),
    mcq('Findings', 'What did Young (2007) find about the problem applications that clients used?',
      'Most men\'s problem application was pornography and most women\'s was chat rooms', ['Most men\'s problem application was chat rooms and most women\'s was online pornography', 'Most men and women had a problem with online shopping above all', 'There were no differences, since all clients used the same application'],
      'The study found a difference between men and women in their main problem application. The main problem that clients reported overall was the time spent online.'),
    mcq('Findings', 'Which was the main problem that clients in Young\'s (2007) study reported?',
      'The amount of time they spent online', ['Losing money through online gambling', 'Being bullied in online chat rooms', 'Buying goods that they could not afford'],
      'The most common problem was the time spent online. This was the targeted behaviour that CBT aimed to reduce.'),
    mcq('Findings', 'What did Young (2007) find about how clients\' problems changed during therapy and afterwards?',
      'Most clients improved by session 3 and largely stayed improved at follow-up', ['Most clients got worse after session 3 but improved by the time of the follow-up', 'Most clients improved only after the follow-up questionnaire was given', 'Most clients showed no change at any point, including follow-up'],
      'Improvement appeared early (by session 3) and mostly lasted to the follow-up. This supports CBT as a treatment.'),
    mcq('Conclusions', 'Which conclusion did Young (2007) draw from her study?',
      'CBT can be an effective treatment for internet addiction', ['CBT is always more effective than any other treatment for addiction', 'Internet addiction is caused by problems with a particular gene', 'CBT works only for people who are motivated by a family member'],
      'Young concluded that CBT can be effective for internet addiction. She did not compare it with other therapies, so she could not say it is always better.'),
    mcq('Evaluation', 'Young\'s clients answered questionnaires about their own behaviour. Why is this a weakness?',
      'Self-reports may be biased, e.g. clients may exaggerate or hide their internet use', ['Questionnaires cannot give any information about people\'s behaviour or their feelings', 'Clients were answering questions about a treatment that they did not receive', 'Questionnaires can only be given to children and not to adults'],
      'Self-report data can be inaccurate or biased by what clients want to say, which affects the reliability of the findings.'),
    mcq('Evaluation', 'Which feature of Young\'s (2007) design makes it hard to say that CBT caused the improvements?',
      'There was no control group of addicts without CBT for comparison', ['The clients were not asked to attend a session at any point in the study', 'The study measured only one client over a period of time', 'The follow-up was done before the treatment was completed'],
      'Without a control group it is not possible to know whether clients would have improved anyway, so the effect of CBT cannot be separated from other factors.'),
    mcq('Evaluation', 'Which statement is a valid <b>weakness</b> about the sample in Young (2007)?',
      'Only USA internet addicts were used, so it may not apply to other addictions', ['It was a very small sample, so the study is not valid for any type of person', 'It included only children, so it cannot be applied to adults', 'It was a sample that could not be traced for the follow-up questionnaire'],
      'Findings from American internet addicts may not generalise to other addictions (such as gambling) or to other cultures. The sample of 114 was not tiny and the follow-up was completed.'),
    mcq('Evaluation', 'Which of these is a <b>strength</b> of Young\'s (2007) study?',
      'It used real clients and a follow-up, so it shows whether improvements lasted', ['It controlled all extraneous variables in a laboratory setting with exact measures', 'It compared CBT with a placebo given to a matched control group', 'It used brain scans to measure changes in addiction'],
      'Using real clients and a six-month follow-up lets the study show lasting effects. It did not have a control group or use brain scans.'),
    mcq('Applying Young', 'Darius spends so long playing online games that he misses lessons. His doctor suggests CBT. According to Young (2007), how effective is CBT likely to be for Darius?',
      'Likely to help, as most of Young\'s clients improved and stayed improved', ['Unlikely to help, as most of Young\'s clients got worse during and after the therapy', 'Unlikely to help, as CBT only works for men with a pornography problem', 'Certain to cure him, as every client in the study fully recovered'],
      'Young found that most clients improved and kept those improvements, so CBT is likely to help Darius. It is wrong to say it works for everyone, because not every client improved fully.'),
    mcq('Applying Young', 'Stefan has a nicotine addiction and is considering CBT. Which is the best weakness of using Young (2007) to predict how effective CBT will be for him?',
      'The study was on internet addiction, so it may not apply to nicotine addiction', ['The study was about internet addiction, so CBT cannot work for any other addiction at all', 'The study included men, so the result does not apply to women', 'The study used questionnaires, so it must have been done online'],
      'The sample had internet addiction, so the findings may not generalise to a different addiction such as nicotine. The study included both men and women, so the second option is wrong.'),
    mcq('Applying Young', 'A therapist wants to check, in the style of Young (2007), whether a client\'s improvement lasted after treatment. What should the therapist do?',
      'Give a follow-up questionnaire some months after the therapy has ended', ['Give a questionnaire before the client has started any therapy session', 'Give the questionnaire only to the client\'s friends and family', 'Stop measuring once the client says that they feel better'],
      'Young used a follow-up questionnaire six months after therapy ended to see whether improvements were maintained. A therapist can do the same for a client.'),
    mcq('Giving two weaknesses', 'A student must give <b>two different</b> weaknesses of Young (2007). Which pair earns both marks?',
      'The data were self-reported; there was no control group', ['The data were self-reported; clients may have said what they wanted to', 'There was no control group; there was no group for comparison', 'The sample was only from the USA; the clients were all American'],
      'Two different points are needed. The other pairs repeat the same point in different words (self-report bias twice, no control group twice, American sample twice).'),
    { skill: 'Reading data', gen: function () {
      var tot = pick([40, 50, 60, 80]), k = Math.round(tot * pick([0.55, 0.6, 0.7, 0.75, 0.8])), nm = pick(['Dr Park', 'Dr Evans', 'Dr Walker']);
      return { kind: 'num', q: nm + ' ran a small online CBT group for ' + tot + ' clients with internet addiction. By the third session ' + k + ' clients reported improvement in managing their time online. What percentage of the clients reported improvement by the third session? Give your answer to 1 decimal place if needed.',
        answer: R.roundDp(k / tot * 100, 1), unit: '%', tol: 0.05, display: String(R.roundDp(k / tot * 100, 1)) + '%',
        why: 'Percentage = ' + k + ' ÷ ' + tot + ' × 100 = ' + R.roundDp(k / tot * 100, 1) + '%.' };
    } },
    { skill: 'Reading data', gen: function () {
      var a = rint(18, 24), b = a - rint(4, 7), c = b - rint(4, 7), nm = pick(['Mira', 'Owen', 'Saskia']);
      var hrs = [a, b, c];
      return { kind: 'num', q: nm + ' kept a record of the hours per week that a client spent on a problem website. Before CBT it was ' + a + ' hours, after session 8 it was ' + b + ' hours and after session 12 it was ' + c + ' hours. By how many hours did the weekly time fall from before CBT to after session 12?',
        answer: a - c, unit: 'hours', display: (a - c) + ' hours',
        why: 'Fall = ' + a + ' - ' + c + ' = ' + (a - c) + ' hours. A falling time online across sessions is the kind of improvement that Young reported.' };
    } },
    { skill: 'Reading data', gen: function () {
      var s = [rint(30, 40), rint(55, 65), rint(66, 74)], nm = pick(['Dr Ahmed', 'Dr Brooks']);
      return { kind: 'mcq', q: nm + ' measured the mean "motivation to quit" score (out of 100, higher is better) of clients receiving online CBT.<br><table class="mc-table"><tr><th>Time</th><th>Mean score</th></tr><tr><td>Start of therapy</td><td>' + s[0] + '</td></tr><tr><td>After session 3</td><td>' + s[1] + '</td></tr><tr><td>Six months after therapy ended</td><td>' + s[2] + '</td></tr></table>Which conclusion is supported by the table and by Young (2007)?',
        options: ['Motivation rose by session 3 and was still higher at follow-up than at the start, as in Young\'s findings', 'Motivation fell during therapy and stayed below the starting score at follow-up', 'Motivation stayed the same throughout, so CBT had no effect on motivation to quit', 'The follow-up score shows that CBT caused the improvement as there was no control group'],
        answer: 0, why: 'The mean rose from ' + s[0] + ' to ' + s[1] + ' by session 3 and was ' + s[2] + ' six months later, higher than the start. This matches Young\'s findings that improvement came early and was largely maintained. A table without a control group cannot prove cause.' };
    } }
  ] };

  // ---------- PSY-PRB-02 ----------
  B['PSY-PRB-02'] = { title: 'Genes and depression: Caspi et al. (2003)', items: [
    mcq('Genetic explanation', 'What does the genetic explanation of depression say?',
      'Inherited genes can make a person more vulnerable to depression', ['Depression is caused only by life events and never by genes', 'Depression is passed on by copying the behaviour of relatives', 'Everyone who has a depression gene will certainly become depressed'],
      'The genetic explanation is a nature explanation: genes can make people more likely to develop depression. It does not say that genes alone make it certain.'),
    mcq('The 5-HTT gene', 'Caspi et al. (2003) studied the 5-HTT gene. Which description is correct?',
      'The serotonin transporter gene, which has a short (s) and a long (l) version', ['The dopamine receptor gene, which has a short (s) and a long (l) version of it', 'The stress hormone gene, which is the same in every person', 'The gene that makes people addicted to alcohol and drugs'],
      '5-HTT is the serotonin transporter gene and comes in short (s) and long (l) alleles. The dopamine receptor gene linked to addiction is DRD2.'),
    mcq('Procedure', 'Which description of the sample in Caspi et al. (2003) is correct?',
      'Children born in Dunedin, New Zealand, followed from age 3 up to age 26', ['Adults in the UK who were interviewed only once during a stressful year of life', 'Twins in the USA who were raised in different families', 'Teenagers in Australia who had been diagnosed with depression'],
      'The study followed a New Zealand (Dunedin) birth cohort over time, a longitudinal design. Of 1 037 children, 847 Caucasian non-Maori participants were used.'),
    mcq('Procedure', 'How did Caspi et al. (2003) measure the participants\' stressful life events between the ages of 21 and 26?',
      'With a life-history calendar', ['With brain scans taken each year', 'With a blood test for stress hormones', 'With a diary kept by the participants\' parents'],
      'Stressful events were recorded with a life-history calendar, and depression was assessed with a diagnostic interview.'),
    mcq('Procedure', 'How was depression assessed in Caspi et al. (2003)?',
      'With a diagnostic interview', ['With a blood test', 'With a brain scan', 'With a personality questionnaire completed by teachers'],
      'Participants were assessed with a diagnostic interview about whether they had met criteria for a major depressive episode in the past year.'),
    mcq('Procedure', 'How were participants grouped for the analysis in Caspi et al. (2003)?',
      'By 5-HTT genotype: two short alleles, one of each, or two long alleles', ['By whether they had been born in a city or in the countryside of New Zealand', 'By their age at the start of the study, from 3 to 26 years', 'By the number of friends they reported having at school'],
      'Participants were grouped by genotype (s/s, s/l or l/l) and the researchers then compared depression for each group.'),
    mcq('Findings', 'About what percentage of participants in Caspi et al. (2003) reported experiencing four or more stressful life events?',
      '15%', ['5%', '35%', '55%'],
      'About 15% reported four or more stressful life events, and about 17% met criteria for a major depressive episode in the past year.'),
    mcq('Findings', 'About what percentage of participants in Caspi et al. (2003) met the criteria for a major depressive episode in the past year?',
      '17%', ['7%', '37%', '47%'],
      'About 17% of participants met criteria for a major depressive episode in the past year.'),
    mcq('Findings', 'What was the key finding of Caspi et al. (2003) about the genotype groups and stressful life events?',
      'Similar numbers of life events, but more depression with a short allele after many', ['Groups with a short allele had many more stressful events than the other groups did', 'All groups became depressed to the same extent after many stressful events', 'Only the group with two long alleles became depressed after many stressful events'],
      'The genotype groups experienced similar numbers of life events. The short-allele groups showed a much stronger link between many events and depression, which is a gene-environment interaction.'),
    mcq('Findings', 'Which statement about the s/s and l/l groups in Caspi et al. (2003) is correct?',
      'Short-allele groups showed a stronger stress-depression link than the two-long-allele group', ['People with two long alleles showed a stronger link between stressful events and depression than people with short alleles', 'People with short alleles became depressed even if they had no stressful events', 'There was no difference in the link between stressful events and depression for any group'],
      'The short allele increased the risk of depression following stress. Long-allele participants were relatively protected.'),
    mcq('Common errors', 'A student writes, "Caspi et al. found a depression gene, so anyone with the short allele will be depressed." What is wrong with this?',
      'Depression was linked to the gene only when combined with many stressful life events', ['Nothing is wrong, since the short allele alone caused depression in every case in the study', 'The study found that life events had no effect on depression', 'The study found that the long allele alone causes depression'],
      'Caspi et al. found an interaction: the gene raised the risk of depression only in people who also experienced several stressful events.'),
    mcq('Gene-environment interaction', 'Which statement best describes a gene-environment interaction as shown by Caspi et al. (2003)?',
      'The effect of stress on depression depends on a person\'s version of the gene', ['Genes decide whether a person is depressed and life events are irrelevant to the outcome', 'Life events decide whether a person is depressed and genes are irrelevant', 'Genes and life events each work on their own and never affect each other'],
      'An interaction means that genes and environment work together. In Caspi et al. the short allele made stressful events more likely to lead to depression.'),
    mcq('Applying the study', 'Tobias had a stressful year in which he lost his job, ended a long relationship and moved house. His mother and uncle have had depression. Using Caspi et al. (2003), how could genes have contributed if Tobias becomes depressed?',
      'He may have a short allele of 5-HTT, so stressful events more likely led to depression', ['He must have two long alleles, which make him depressed whenever he is under any stress at all', 'His genes alone would cause depression, so the stressful year makes no difference', 'His depression comes from copying the behaviour of his mother and uncle'],
      'Caspi et al. showed that a short allele combined with stressful life events raised the risk of depression. Family history suggests a genetic vulnerability, but the stress matters too.'),
    mcq('Applying the study', 'Two sisters each had the same number of stressful events last year. Only one became depressed. Which idea from Caspi et al. (2003) could explain this?',
      'They may have different 5-HTT genotypes, so the stress affected them differently', ['Stress affects everyone in exactly the same way, so there is no way to explain it at all', 'Only the sister with two long alleles can become depressed after stress', 'The stress must have been caused by their genes and not by events'],
      'People with the same experiences can respond differently depending on genotype. In the study a short allele made the effects of stress stronger.'),
    mcq('Genes and addiction', 'Which gene has variants that have been linked to alcohol and drug misuse in the genetic explanation of addiction?',
      'The DRD2 dopamine receptor gene', ['The 5-HTT serotonin transporter gene', 'The gene for the stress hormone adrenaline', 'The BDNF growth gene'],
      'Variants of the DRD2 dopamine receptor gene have been linked to addiction. The 5-HTT gene is the one that Caspi et al. studied for depression.'),
    mcq('Applying the explanation', 'Mia\'s father and two uncles have all had alcohol addiction. Using the genetic explanation, how could genes have contributed to Mia\'s own alcohol addiction?',
      'She may have inherited a gene variant, such as DRD2, that raises her vulnerability', ['She must have copied her father by watching his drinking behaviour as a child, not inherited it', 'Her addiction was certain from birth, so it was nothing to do with the environment', 'She has a short allele of the 5-HTT gene, which causes alcohol addiction'],
      'The genetic explanation says that vulnerability to addiction is inherited. It does not say that addiction is certain, and 5-HTT was studied for depression in Caspi et al.'),
    mcq('Evaluating the explanation', 'Which of these is a <b>strength</b> of the genetic explanation of depression or addiction?',
      'It explains why the problems run in families and has research support', ['It shows that the environment has no effect on whether people develop these problems at all', 'It proves that people cannot be treated if they inherit a vulnerable gene', 'It shows that these problems are caused by one single gene in each case'],
      'Family patterns and studies like Caspi et al. support a genetic influence. The explanation does not say that the environment is irrelevant or that treatment is impossible.'),
    mcq('Evaluating the explanation', 'Which of these is a genuine <b>weakness</b> of the genetic explanation of depression or addiction?',
      'It is reductionist, because it ignores environmental factors such as stressful events', ['It cannot explain why the problems occur in more than one family member in some families', 'It has never been tested by research on any group of people', 'It says that the environment is the only thing that matters'],
      'Genes do not act alone. Caspi et al. themselves showed that life events matter, so an explanation using only genes is too simple.'),
    mcq('Evaluating the explanation', 'Family members with depression could have similar problems because of shared genes. Why does this make it hard to prove the genetic explanation?',
      'Relatives also share an environment, so the cause could be the shared home and not genes', ['Family members never share any genes, so the evidence is not relevant to the explanation at all', 'Depression has been shown never to occur in more than one family member', 'Environments cannot affect people who are in the same family'],
      'Relatives share both genes and surroundings, so family patterns cannot separate nature from nurture.'),
    mcq('Evaluating Caspi', 'Which of these is a <b>strength</b> of the design of Caspi et al. (2003)?',
      'It followed the same people over many years, linking genotype with life events', ['It used a very small sample of adults from several different countries around the world', 'It compared genotypes without looking at any life events', 'It tested participants only once, at the age of 26'],
      'The study was longitudinal, following a birth cohort from age 3 to 26. It also measured life events as well as genotype, which allowed the interaction to be found.'),
    mcq('Evaluating Caspi', 'Which of these is a valid <b>weakness</b> of Caspi et al. (2003)?',
      'All were Caucasian non-Maori from one place, so findings may not apply to other groups', ['The study followed participants for only a few weeks, so it could not show any later effects', 'The study measured the life events of their parents instead', 'The study did not measure depression at all'],
      'The analysis used 847 Caucasian non-Maori participants from New Zealand, so it may not generalise to people from other ethnic groups or countries.'),
    { skill: 'Reading data', gen: function () {
      var tot = pick([200, 400, 500, 800]), pc = pick([10, 15, 20, 25]), nm = pick(['Dr Hale', 'Dr Ito', 'Dr Rossi']);
      var k = tot * pc / 100;
      return { kind: 'num', q: nm + ' followed ' + tot + ' adults for a year. ' + pc + '% reported four or more stressful life events. How many adults reported four or more stressful life events?',
        answer: k, unit: 'adults', display: k + ' adults',
        why: 'Number = ' + pc + '% of ' + tot + ' = ' + pc + ' ÷ 100 × ' + tot + ' = ' + k + ' adults.' };
    } },
    { skill: 'Reading data', gen: function () {
      var a = rint(8, 12), b = rint(24, 34), c = rint(7, 11), d = rint(10, 14), nm = pick(['Dr Quinn', 'Dr Osei']);
      return { kind: 'mcq', q: nm + ' recorded the percentage of people who became depressed, by genotype and by number of stressful life events.<br><table class="mc-table"><tr><th></th><th>No stressful events</th><th>Four or more stressful events</th></tr><tr><td>Two short alleles</td><td>' + a + '%</td><td>' + (b + 20) + '%</td></tr><tr><td>Two long alleles</td><td>' + c + '%</td><td>' + d + '%</td></tr></table>Which conclusion is supported, in line with Caspi et al. (2003)?',
        options: ['Many stressful events were linked to much more depression in people with two short alleles than in people with two long alleles', 'Two short alleles were linked to more depression whatever the number of stressful life events', 'Stressful events were linked to more depression only in people with two long alleles', 'Genotype and stressful events had no link with depression in either group'],
        answer: 0, why: 'With four or more stressful events, ' + (b + 20) + '% of the short-allele group were depressed compared with ' + d + '% of the long-allele group. With no events the groups were similar (' + a + '% and ' + c + '%). The gene mattered mostly when stress was high, which is a gene-environment interaction.' };
    } },
    { skill: 'Procedure', kind: 'num', q: 'In Caspi et al. (2003), 1 037 children were followed from age 3 and 847 Caucasian non-Maori participants were used in the analysis. How many of the 1 037 were not included in the analysis?',
      answer: 190, unit: 'children', display: '190 children', why: '1 037 - 847 = 190 children were not included.' }
  ] };

})();
