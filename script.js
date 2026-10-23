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
F.hidden=true;D.hidden=false;D.focus();confetti(D,70)});
document.getElementById('again').onclick=function(){F.reset();ids.forEach(function(id){document.getElementById(id+'-e').textContent='';document.getElementById(id).removeAttribute('aria-invalid')});D.hidden=true;F.hidden=false;document.getElementById('f-name').focus()};
document.documentElement.classList.add('js');
var m=document.querySelector('.mq div');m.innerHTML=m.innerHTML.repeat(4);
var h1=document.querySelector('h1');h1.setAttribute('aria-label','Venture Verse 2026');
h1.querySelectorAll('span').forEach(function(s,k){var t=s.textContent;s.textContent='';t.split('').forEach(function(ch,i){var l=document.createElement('span');l.className='l';l.textContent=ch;l.style.animationDelay=(k*.25+i*.05)+'s';s.appendChild(l)})});
var pb=document.getElementById('pb'),pr=document.getElementById('pr');
function sc(){var h=document.documentElement.scrollHeight-innerHeight,p=h>0?scrollY/h*100:0;pb.style.width=p+'%';pr.style.left=p+'%'}
addEventListener('scroll',sc,{passive:true});sc();
var rv=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){var el=e.target;el.classList.add('in');rv.unobserve(el);setTimeout(function(){el.style.transitionDelay=''},1200)}})},{threshold:.12});
document.querySelectorAll('#speakers .card').forEach(function(c){c.classList.add('tilt');c.addEventListener('mousemove',function(e){var r=c.getBoundingClientRect(),x=(e.clientX-r.left)/r.width-.5,y=(e.clientY-r.top)/r.height-.5;c.style.transform='perspective(600px) rotateY('+x*14+'deg) rotateX('+-y*14+'deg) translateY(-4px)'});c.addEventListener('mouseleave',function(){c.style.transform=''})});
document.querySelectorAll('.card,.tl li,details,section h2,.lead,.rsvp,.fact,.reel,.jny').forEach(function(el,i){el.classList.add('rv');el.style.transitionDelay=(i%4*90)+'ms';rv.observe(el)});
document.querySelectorAll('.tl li').forEach(function(li){li.tabIndex=0;li.addEventListener('click',function(){document.querySelectorAll('.tl li.sel').forEach(function(x){if(x!==li)x.classList.remove('sel')});li.classList.toggle('sel')});li.addEventListener('keydown',function(e){if(e.key==='Enter'||e.key===' '){e.preventDefault();li.click()}})});
var links={};document.querySelectorAll('nav a').forEach(function(a){links[a.getAttribute('href').slice(1)]=a});
var so=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting)Object.keys(links).forEach(function(k){links[k].classList.toggle('on',k===e.target.id)})})},{rootMargin:'-45% 0px -50% 0px'});
Object.keys(links).forEach(function(k){var s=document.getElementById(k);if(s)so.observe(s)});
var hero=document.getElementById('hero'),dots=document.getElementById('dots'),rkt=document.getElementById('rkt');
hero.addEventListener('mousemove',function(e){var x=e.clientX/innerWidth-.5,y=e.clientY/innerHeight-.5;dots.style.translate=(x*-30)+'px '+(y*-30)+'px';rkt.style.translate=(x*40)+'px '+(y*40)+'px'});
function spark(x,y,i){var d=document.createElement('i');d.className='sp';d.style.left=x+'px';d.style.top=y+'px';d.style.background=['#ff8a3d','#00b4e6','#fff'][i%3];hero.appendChild(d);var a=Math.PI*2*i/14,k=40+Math.random()*70;d.animate([{transform:'translate(0,0) scale(1)',opacity:1},{transform:'translate('+Math.cos(a)*k+'px,'+Math.sin(a)*k+'px) scale(0)',opacity:0}],{duration:750,easing:'ease-out'});setTimeout(function(){d.remove()},760)}
hero.addEventListener('click',function(e){if(e.target.closest('a,button'))return;var r=hero.getBoundingClientRect();for(var i=0;i<14;i++)spark(e.clientX-r.left,e.clientY-r.top,i)});
var P=['Long canteen queues','Hard-to-find study spots','Wasted food in the mess','Messy club sign-ups','Expensive textbooks','Unsafe late-night commutes','Lost-and-found chaos','Finding internships'],S=['AI','Gamification','A peer-to-peer marketplace','IoT sensors','A community app','A subscription box','AR/VR'];
function pick(a){return a[Math.floor(Math.random()*a.length)]}
document.getElementById('roll').onclick=function(){var btn=this,n=0,r1=document.getElementById('r1'),r2=document.getElementById('r2'),r3=document.getElementById('r3'),rs=[r1,r2,r3].map(function(x){return x.parentNode});btn.disabled=true;rs.forEach(function(r){r.classList.add('spin')});
var iv=setInterval(function(){r1.textContent=pick(P);r2.textContent=pick(S);r3.textContent='…';if(++n>12){clearInterval(iv);var p=pick(P),s=pick(S);r1.textContent=p;r2.textContent=s;r3.textContent=s+' for '+p.toLowerCase();window.LI={p:p,s:s};rs.forEach(function(r){r.classList.remove('spin')});btn.disabled=false;document.getElementById('rollmsg').innerHTML='Love it? Take it to the Campus Idea Sprint. <a href="#register"><u>RSVP now</u></a> · <a href="#pitch" id="usei"><u>Pitch it in the Lab</u></a>'}},80)};
var pf=['p-who','p-prob','p-sol','p-why'].map(function(i){return document.getElementById(i)});
function esc(s){return s.replace(/[&<>"]/g,function(c){return{'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]})}
function seg(el,ph){var v=el.value.trim();return v?'<mark>'+esc(v)+'</mark>':'<mark class="ph">['+ph+']</mark>'}
function upd(){var sc=0;pf.forEach(function(x){var l=x.value.trim().length;sc+=l?(l<10?10:25):0});
document.getElementById('ptxt').innerHTML='Every day, '+seg(pf[0],'who')+' struggle with '+seg(pf[1],'the problem')+'. We’re building '+seg(pf[2],'your solution')+'. We’ll win because '+seg(pf[3],'why you')+'.';
document.getElementById('mb').style.width=sc+'%';if(sc===100&&!upd.d){upd.d=1;confetti(document.getElementById('mb'),45)}if(sc<100)upd.d=0;document.getElementById('ml').textContent=sc<25?'Just a spark':sc<50?'Taking shape':sc<100?'Getting sharp':'Pitch-ready 🚀'}
pf.forEach(function(x){x.addEventListener('input',upd)});upd();
document.addEventListener('click',function(e){if(e.target.closest('#usei')&&window.LI){pf[1].value=LI.p.toLowerCase();pf[2].value=LI.s+' that fixes it';upd()}});
var tI,t0,tb=document.getElementById('tstart'),ring=document.getElementById('ring'),tt=document.getElementById('tt');
function tstop(){clearInterval(tI);tI=null;tb.textContent='▶ Start 60s timer';ring.style.strokeDashoffset=0;ring.style.stroke='#ff8a3d';tt.textContent='60'}
tb.onclick=function(){if(tI){tstop();return}t0=Date.now();tb.textContent='■ Stop';tI=setInterval(function(){var e=(Date.now()-t0)/1000,r=Math.max(0,60-e);ring.style.strokeDashoffset=119.4*e/60;ring.style.stroke=r<10?'#c62828':'#ff8a3d';tt.textContent=Math.ceil(r);if(r<=0){clearInterval(tI);tI=null;tb.textContent='↻ Time! Go again';tt.textContent='0'}},100)};
document.getElementById('pcopy').onclick=function(){var b=this,tx=document.getElementById('ptxt').textContent;function ok(m){b.textContent=m;setTimeout(function(){b.textContent='Copy pitch'},2200)}
try{navigator.clipboard.writeText(tx).then(function(){ok('Copied ✓')},function(){ok('Select the text and copy')})}catch(e){ok('Select the text and copy')}};
var wd=['Action.','Ventures.','Impact.','Reality.'],wi=0,sb=document.querySelector('.slogan b');
setInterval(function(){wi=(wi+1)%wd.length;sb.textContent=wd[wi];sb.classList.remove('flip');void sb.offsetWidth;sb.classList.add('flip')},2400);
for(var q=0;q<9;q++){var bu=document.createElement('span');bu.className='bub';bu.setAttribute('aria-hidden','true');bu.textContent=['💡','✨','💡','⭐'][q%4];bu.style.left=(5+q*11)+'%';bu.style.animationDuration=(9+Math.random()*6)+'s';bu.style.animationDelay=(-Math.random()*12)+'s';hero.appendChild(bu)}
var co=new IntersectionObserver(function(es){es.forEach(function(e){if(!e.isIntersecting)return;co.unobserve(e.target);var el=e.target,n=+el.dataset.n,s=el.dataset.s||'',st=performance.now();(function f(t){var p=Math.min(1,(t-st)/1400);el.textContent=Math.round(n*(1-Math.pow(1-p,3)))+s;if(p<1)requestAnimationFrame(f)})(st)})},{threshold:.6});
document.querySelectorAll('[data-n]').forEach(function(el){co.observe(el)});
document.querySelectorAll('.cta').forEach(function(b){b.addEventListener('mousemove',function(e){var r=b.getBoundingClientRect();b.style.translate=((e.clientX-r.left-r.width/2)*.18)+'px '+((e.clientY-r.top-r.height/2)*.28)+'px'});b.addEventListener('mouseleave',function(){b.style.translate=''})});
function piece(x,y,i){var c=document.createElement('i');c.className='cf';c.style.left=x+'px';c.style.top=y+'px';c.style.background=['#ff8a3d','#00b4e6','#1b2a4a','#ffd166','#fff'][i%5];document.body.appendChild(c);var a=-Math.PI/2+(Math.random()-.5)*2.4,v=120+Math.random()*240,dx=Math.cos(a)*v,dy=Math.sin(a)*v;c.animate([{transform:'translate(0,0) rotate(0)',opacity:1},{transform:'translate('+dx+'px,'+dy+'px) rotate(260deg)',opacity:1,offset:.4},{transform:'translate('+dx*1.3+'px,'+(dy*.2+440)+'px) rotate(760deg)',opacity:0}],{duration:1500+Math.random()*900,easing:'ease-out'});setTimeout(function(){c.remove()},2500)}
function confetti(host,n){if(matchMedia('(prefers-reduced-motion:reduce)').matches)return;var r=host.getBoundingClientRect();for(var i=0;i<n;i++)piece(r.left+r.width/2,r.top+r.height/3,i)}
if(matchMedia('(pointer:fine)').matches){var cu=document.createElement('div');cu.className='cur';document.body.appendChild(cu);var cx=0,cy=0,mx=0,my=0;
addEventListener('mousemove',function(e){mx=e.clientX;my=e.clientY;cu.style.opacity=1;cu.classList.toggle('big',!!e.target.closest('a,button,summary,input,.tl li'))});
(function f(){cx+=(mx-cx)*.18;cy+=(my-cy)*.18;cu.style.transform='translate('+cx+'px,'+cy+'px)';requestAnimationFrame(f)})()}
