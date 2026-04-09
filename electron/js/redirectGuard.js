try {
  var s = JSON.parse(localStorage.getItem('apcsa_state') || '{}');
  if (!s.subjectsConfigured) window.location.replace('subject-select.html');
} catch(e) {}
