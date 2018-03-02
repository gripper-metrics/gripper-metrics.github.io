function show(shown, hidden) {
  document.getElementById(shown).style.display='block';
  document.getElementById(hidden).style.display='none';
  return false;
}
    
function metricstime() {
  alert('hola')
  var ObSi = document.getElementById('OS');
  var ObWe = document.getElementById('OW');
  var ObSh = document.getElementById('OH');
  var ObMa = document.getElementById('OM');
  var RoAc = document.getElementById('RA');
  var RoPl = document.getElementById('RP');
  var Task = document.getElementById('Task');
  
  alert({ObSi.value,ObWe.value,ObSh.value,ObMa.value,RoAc.value,RoPl.value,Task.value]);
}
