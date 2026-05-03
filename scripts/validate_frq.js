const fs = require('fs');
eval(fs.readFileSync('js/data/apcsa_frq.js', 'utf8'));
console.log('Parsed OK:', APCSA_FRQ.length, 'questions');
let items = 0, kwCount = 0, errors = 0;
APCSA_FRQ.forEach(function(q) {
  if (q.autoGraded !== true) { console.log('  missing autoGraded:', q.id); errors++; }
  q.rubric.forEach(function(r) {
    items++;
    kwCount += r.keywords.length;
    if (!r.index) { console.log('  missing index:', q.id); errors++; }
    if (!r.partLabel) { console.log('  missing partLabel:', q.id); errors++; }
    if (r.skill !== 'code') { console.log('  missing skill:', q.id); errors++; }
    if (!r.keywords || r.keywords.length === 0) { console.log('  empty keywords:', q.id); errors++; }
  });
});
console.log('Items:', items, '| Avg kw:', (kwCount/items).toFixed(1), '| Errors:', errors);
