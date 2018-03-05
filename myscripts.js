function show(shown, hidden) {
  document.getElementById(shown).style.display='block';
  document.getElementById(hidden).style.display='none';
  return false;
}  

function metricstime() {
  
  var ND2 = 0;
  var ND3 = 0;
  var ND4 = 0;
  var AM = 0;
  var AP = 0;
  var TH = 0;
  var TV = 0;
  var DM = 0;
  var DSA = 0;
  var DA = 0;
  var DT = 0;
  
  alert('hola')
  var ObSi = document.getElementById('OS');
  var ObWe = document.getElementById('OW');
  var ObSh = document.getElementById('OH');
  var ObMa = document.getElementById('OM');
  var RoAc = document.getElementById('RA');
  var RoPl = document.getElementById('RP');
  var Task = document.getElementById('Task');
    
  alert(ObSi.value);
  alert(ObWe.value);
  alert(ObSh.value);
  alert(ObMa.value);
  alert(RoAc.value);
  alert(RoPl.value);
  alert(Task.value);
  
  if (ObSi.value == 'OSL') {
    ND2 = ND2 + 3;
    TH = TH + 2;
    DM = DM + 3;
    DSA = DSA + 2;
  } else if (ObSi.value == 'OSM') {
    ND3 = ND3 + 2;
    TV = TV + 2;
    DSA = DSA + 3;
    DA = DA + 2;
    DT = DT + 2;
  } else if (ObSi.value == 'OSB') {
    ND4 = ND4 + 3;
    TV = TV + 2;
    DA = DA + 2;
    DT = DT + 2;
  } else if (ObSi.value == 'OSLM') {
    ND2 = ND2 + 3;
    ND3 = ND3 + 2;
    TH = TH + 2;
    TV = TV + 2;
    DM = DM + 3;
    DSA = DSA + 3;
    DA = DA + 2;
    DT = DT + 2;
  } else if (ObSi.value == 'OSMB') {
    ND3 = ND3 + 2;
    ND4 = ND4 + 3;
    TV = TV + 2;
    DSA = DSA + 3;
    DA = DA + 2;
    DT = DT + 2; 
  } else if (ObSi.value == 'OSA') {
    ND2 = ND2 + 3;
    ND3 = ND3 + 2;
    ND4 = ND4 + 3;
    TH = TH + 2;
    TV = TV + 2;
    DM = DM + 3;
    DSA = DSA + 3;
    DA = DA + 2;
    DT = DT + 2;
  } else {
    alert ('Error Object Size')
  }
  
  if (ObWe.value == 'OWL') {
    AP = AP + 2;
  } else if (ObWe.value == 'OWM') {
    AM = AM + 1;
    AP = AP + 2;
  } else if (ObWe.value == 'OWH') {
    AM = AM + 2;
  } else if (ObWe.value == 'OWLM') {
    AM = AM + 1;
    AP = AP + 2;
  } else if (ObWe.value == 'OWMH') {
    AM = AM + 2;
    AP = AP + 2;
  } else if (ObWe.value == 'OWA') {
    AM = AM + 2;
    AP = AP + 2;
  } else {
    alert ('Error Object Weight')
  }
    
  if (ObSh.value = 'OHR') {
    ND2 = ND2 + 3;
    ND4 = ND4 + 2;
    DM = DM + 3;
    DSA = DSA + 2;
  } else if (ObSh.value = 'OHI') {
    ND3 = ND3 + 3;
    ND4 = ND4 + 2;
    DSA = DSA + 1;
    DA = DA + 2;
    DT = DT + 2;
  } else if (ObSh.value = 'OHB') {
    ND2 = ND2 + 3;
    ND3 = ND3 + 3;
    ND4 = ND4 + 2;
    DM = DM + 3;
    DSA = DSA + 2;
    DA = DA + 2;
    DT = DT + 2;
  } else {
    alert ('Error Object Shape')
  }
  
  
  alert (ND2);
  alert (ND3);
  alert (ND4);
  alert (AM);
  alert (AP);
  alert (TH);
  alert (TV);
  alert (DM);
  alert (DSA);
  alert (DA);
  alert (DT);  
}
