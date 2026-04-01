// Adaptive Engine — read-only question prioritization module.
// Sorts a pool of MCQ question objects so the most useful questions surface first.
// Never writes to localStorage; only reads App state.

(function() {

  // Builds { [unitNum]: accuracy 0–1 } in a single pass over the question pool.
  // Units with no seen questions default to 0.5 so the modifier stays neutral.
  function buildUnitAccuracyMap(questions, history) {
    const stats = {};
    for (var i = 0; i < questions.length; i++) {
      var q = questions[i];
      var u = String(q.unit);
      if (!stats[u]) stats[u] = { seen: 0, correct: 0 };
      var h = history[q.id];
      if (h && h.seen) {
        stats[u].seen++;
        if (h.correct) stats[u].correct++;
      }
    }
    var map = {};
    for (var u in stats) {
      map[u] = stats[u].seen > 0 ? stats[u].correct / stats[u].seen : 0.5;
    }
    return map;
  }

  var SEVEN_DAYS = 7 * 24 * 60 * 60 * 1000;

  // Returns a numeric priority score for a single question.
  // Higher score = show sooner.
  function scoreQuestion(q, history, unitAccuracy) {
    var h = history[q.id];
    var score;

    if (!h || !h.seen) {
      score = 100;                           // never seen
    } else if (!h.correct) {
      score = 80;                            // seen, got wrong
    } else if (h.attempts >= 2) {
      score = 20;                            // correct 2+ times (proxy: seen multiple, last correct)
    } else {
      // correct once (attempts === 1)
      var age = Date.now() - (h.lastSeen || 0);
      score = age > SEVEN_DAYS ? 60 : 40;   // >7 days ago : recent
    }

    // Difficulty modifier
    var unitAcc = unitAccuracy[String(q.unit)];
    if (unitAcc == null) unitAcc = 0.5;
    if (unitAcc < 0.6 && (q.difficulty === 'easy' || q.difficulty === 'medium')) {
      score += 15;   // struggling unit — surface approachable questions first
    } else if (unitAcc > 0.8 && q.difficulty === 'hard') {
      score += 15;   // strong unit — push up challenges
    }

    // Random tiebreaker so identical-priority questions don't freeze in place
    score += Math.random() * 5;

    return score;
  }

  window.AdaptiveEngine = {
    sort: function(questions) {
      var state   = App.getState();                              // read exactly once
      var subjId  = App.getActiveSubject();
      var history = (state.subjects && state.subjects[subjId] && state.subjects[subjId].questionHistory) || {};
      var unitAccuracy = buildUnitAccuracyMap(questions, history);

      return questions
        .map(function(q) { return { q: q, score: scoreQuestion(q, history, unitAccuracy) }; })
        .sort(function(a, b) { return b.score - a.score; })
        .map(function(x) { return x.q; });
    }
  };

})();
