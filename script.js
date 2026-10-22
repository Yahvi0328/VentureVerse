var b=document.getElementById('burger'),n=document.getElementById('nav');
b.onclick=function(){var o=n.classList.toggle('open');b.setAttribute('aria-expanded',o)};
n.onclick=function(e){if(e.target.tagName==='A'){n.classList.remove('open');b.setAttribute('aria-expanded',false)}};
var t=new Date('2026-11-12T10:00:00+05:30').getTime(),c=document.getElementById('count');
function tick(){var d=t-Date.now();if(d<=0){c.innerHTML='<div><b>Live</b><small>NOW</small></div>';return}
var v=[[Math.floor(d/864e5),'DAYS'],[Math.floor(d%864e5/36e5),'HRS'],[Math.floor(d%36e5/6e4),'MIN'],[Math.floor(d%6e4/1e3),'SEC']];
c.innerHTML=v.map(function(x){return'<div><b>'+x[0]+'</b><small>'+x[1]+'</small></div>'}).join('')}
tick();setInterval(tick,1000);
var F=document.getElementById('rsvp'),D=document.getElementById('done'),ids=['f-name','f-mail','f-course'];
function msg(id){var v=document.getElementById(id).value.trim();
if(id==='f-name'){if(!v)return'Please enter your name.';if(v.length<2||/\d/.test(v))return'Enter your full name using letters only.'}
if(id==='f-mail'){if(!v)return'Please enter your email address.';if(!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v))return'Enter a valid email, like you@example.com.'}
if(id==='f-course'){if(!v)return'Please enter your course and year.';if(v.length<3)return'Add a bit more, e.g. B.Tech CSE, 2nd year.'}
return''}
function show(id){var m=msg(id),i=document.getElementById(id);document.getElementById(id+'-e').textContent=m;i.setAttribute('aria-invalid',m?'true':'false');return!m}
ids.forEach(function(id){var i=document.getElementById(id);i.addEventListener('blur',function(){if(i.value||i.getAttribute('aria-invalid'))show(id)});i.addEventListener('input',function(){if(i.getAttribute('aria-invalid')==='true')show(id)})});
F.addEventListener('submit',function(e){e.preventDefault();var bad=ids.filter(function(id){return!show(id)});
if(bad.length){document.getElementById(bad[0]).focus();return}
document.getElementById('d-name').textContent=document.getElementById('f-name').value.trim().split(/\s+/)[0];
document.getElementById('d-mail').textContent=document.getElementById('f-mail').value.trim();
document.getElementById('d-course').textContent=document.getElementById('f-course').value.trim();
F.hidden=true;D.hidden=false;D.focus()});
document.getElementById('again').onclick=function(){F.reset();ids.forEach(function(id){document.getElementById(id+'-e').textContent='';document.getElementById(id).removeAttribute('aria-invalid')});D.hidden=true;F.hidden=false;document.getElementById('f-name').focus()};
