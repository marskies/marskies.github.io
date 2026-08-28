/* Parasole Properties — shared behaviors */
(function(){
  "use strict";

  // ---- toast ----
  var toast, tt;
  function ping(m){
    if(!toast){toast=document.createElement('div');toast.className='toast';document.body.appendChild(toast);}
    toast.textContent=m;toast.classList.add('on');
    clearTimeout(tt);tt=setTimeout(function(){toast.classList.remove('on');},3200);
  }
  window.parasolePing=ping;

  function onReady(fn){if(document.readyState!=='loading')fn();else document.addEventListener('DOMContentLoaded',fn);}

  onReady(function(){
    // mobile hamburger menu, built from the existing nav so every page gets it
    (function(){
      var row=document.querySelector('.head .row'), head=document.querySelector('.head');
      if(!row||!head||document.querySelector('.menu-btn'))return;
      var nav=row.querySelector('.nav'), apply=null;
      row.querySelectorAll(':scope > a.btn').forEach(function(a){apply=a;});
      var btn=document.createElement('button');
      btn.className='menu-btn';btn.setAttribute('aria-label','Menu');btn.setAttribute('aria-expanded','false');
      btn.innerHTML='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 7h16M4 12h16M4 17h16"/></svg>';
      row.appendChild(btn);
      var panel=document.createElement('div');panel.className='mobile-menu';var h='';
      if(nav)nav.querySelectorAll('a').forEach(function(a){h+='<a href="'+a.getAttribute('href')+'">'+a.textContent.trim()+'</a>';});
      if(apply)h+='<a class="apply" href="'+apply.getAttribute('href')+'">'+apply.textContent.trim()+'</a>';
      panel.innerHTML=h;head.appendChild(panel);
      btn.addEventListener('click',function(){var open=panel.classList.toggle('open');btn.setAttribute('aria-expanded',open?'true':'false');});
    })();

    // text buttons -> explain texting
    document.querySelectorAll('.tx').forEach(function(el){
      el.addEventListener('click',function(e){e.preventDefault();ping('On the live site this opens your phone to text Parasole at (570) 343-2597 — the fastest way to reach them.');});
    });
    // demo-only controls (forms/buttons with data-demo)
    document.querySelectorAll('[data-demo]').forEach(function(el){
      el.addEventListener('click',function(e){e.preventDefault();ping(el.getAttribute('data-demo')||'This is a design preview. On the live site this will be fully functional.');});
    });

    // scroll-reveal
    if('IntersectionObserver' in window){
      var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target);}});},{threshold:.12});
      document.querySelectorAll('.reveal').forEach(function(el){io.observe(el);});
    }else{
      document.querySelectorAll('.reveal').forEach(function(el){el.classList.add('in');});
    }

    // "what sets us apart" carousel (home)
    var slides=document.querySelectorAll('.aslide');
    if(slides.length){
      var per=slides.length/2, i=0; // slides duplicated (image + text) => per is count of logical slides
      // count logical slides by unique index using data-idx if present, else assume paired
      var total=0;document.querySelectorAll('.aslide[data-idx]').forEach(function(s){total=Math.max(total,+s.getAttribute('data-idx')+1);});
      if(!total)total=slides.length;
      function show(n){i=(n+total)%total;document.querySelectorAll('.aslide').forEach(function(s){var idx=s.hasAttribute('data-idx')?+s.getAttribute('data-idx'):0;s.classList.toggle('on',idx===i);});}
      var p=document.getElementById('aprev'),nx=document.getElementById('anext');
      if(p)p.addEventListener('click',function(){show(i-1);});
      if(nx)nx.addEventListener('click',function(){show(i+1);});
    }

    // transparent-background logo
    document.querySelectorAll('img.logo').forEach(function(target){
      var img=new Image();img.crossOrigin='anonymous';
      img.onload=function(){
        try{
          var w=img.naturalWidth,h=img.naturalHeight,c=document.createElement('canvas');c.width=w;c.height=h;
          var ctx=c.getContext('2d');ctx.drawImage(img,0,0);var id=ctx.getImageData(0,0,w,h),d=id.data;
          function white(k){return d[k]>233&&d[k+1]>228&&d[k+2]>222;}
          var st=[];function push(x,y){if(x<0||y<0||x>=w||y>=h)return;var k=(y*w+x)*4;if(d[k+3]===0)return;if(!white(k))return;st.push(y*w+x);}
          for(var x=0;x<w;x++){push(x,0);push(x,h-1);}for(var y=0;y<h;y++){push(0,y);push(w-1,y);}
          while(st.length){var pp=st.pop(),k=pp*4;if(d[k+3]===0||!white(k))continue;d[k+3]=0;var px=pp%w,py=(pp-px)/w;push(px+1,py);push(px-1,py);push(px,py+1);push(px,py-1);}
          ctx.putImageData(id,0,0);target.src=c.toDataURL('image/png');
        }catch(e){/* CORS or other — leave original */}
      };
      img.src=target.getAttribute('src');
    });
  });

  // ---- lightbox (used by listing detail) ----
  window.parasoleLightbox=function(images){
    var idx=0, lb=document.getElementById('lb');
    if(!lb)return;
    var big=lb.querySelector('img');
    function render(){big.src=images[idx];}
    function open(n){idx=n;render();lb.classList.add('on');}
    function move(d){idx=(idx+d+images.length)%images.length;render();}
    lb.querySelector('.x').addEventListener('click',function(){lb.classList.remove('on');});
    lb.querySelector('.prev').addEventListener('click',function(e){e.stopPropagation();move(-1);});
    lb.querySelector('.next').addEventListener('click',function(e){e.stopPropagation();move(1);});
    lb.addEventListener('click',function(e){if(e.target===lb)lb.classList.remove('on');});
    document.addEventListener('keydown',function(e){if(!lb.classList.contains('on'))return;if(e.key==='Escape')lb.classList.remove('on');if(e.key==='ArrowLeft')move(-1);if(e.key==='ArrowRight')move(1);});
    return {open:open};
  };

  // ---- prequalify widget (verifiable income / pets / timeframe / household vs 2-per-bedroom) ----
  window.parasolePrequalWidget=function(container,getProp){
    container.innerHTML=
      '<div class="q"><span class="ql">Your household’s gross monthly income <span style="color:var(--ink3);font-weight:400">(before taxes)</span></span><input class="txt" style="max-width:220px" data-q="incamt" type="text" inputmode="numeric" placeholder="e.g. 4000"></div>'+
      '<div class="q"><span class="ql">Is that income verifiable? <span style="color:var(--ink3);font-weight:400">(pay stubs, offer letter, etc.)</span></span><div class="yn" data-q="verifiable"><button type="button" data-v="yes">Yes</button><button type="button" data-v="no">No</button></div></div>'+
      '<div class="q"><span class="ql">Do you have any pets?</span><div class="yn" data-q="pets"><button type="button" data-v="yes">Yes</button><button type="button" data-v="no">No</button></div></div>'+
      '<div class="q"><span class="ql">Are you looking to move within the next 30–45 days?</span><div class="yn" data-q="timeframe"><button type="button" data-v="yes">Yes</button><button type="button" data-v="no">No</button></div></div>'+
      '<div class="q"><span class="ql">How many people will live in the home?</span><input class="txt" style="max-width:170px" data-q="household" type="text" inputmode="numeric" placeholder="e.g. 2"></div>'+
      '<div class="result" data-res></div>'+
      '<div data-actions style="margin-top:16px;display:flex;gap:10px;flex-wrap:wrap"></div>';
    var ans={incamt:null,verifiable:null,pets:null,timeframe:null,household:null};
    var res=container.querySelector('[data-res]'), actions=container.querySelector('[data-actions]');
    function bindLocal(root){
      root.querySelectorAll('.tx').forEach(function(el){el.addEventListener('click',function(e){e.preventDefault();window.parasolePing&&window.parasolePing('On the live site this opens your phone to text Parasole at (570) 343-2597.');});});
      root.querySelectorAll('[data-demo]').forEach(function(el){el.addEventListener('click',function(e){e.preventDefault();window.parasolePing&&window.parasolePing(el.getAttribute('data-demo'));});});
    }
    container.querySelectorAll('.yn').forEach(function(g){
      g.querySelectorAll('button').forEach(function(b){
        b.addEventListener('click',function(){
          g.querySelectorAll('button').forEach(function(x){x.classList.remove('sel');});
          b.classList.add('sel'); ans[g.getAttribute('data-q')]=b.getAttribute('data-v'); evaluate();
        });
      });
    });
    var hh=container.querySelector('[data-q="household"]');
    hh.addEventListener('input',function(){var n=parseInt((hh.value||'').replace(/[^0-9]/g,''),10);ans.household=n>0?n:null;evaluate();});
    var inc=container.querySelector('[data-q="incamt"]');
    inc.addEventListener('input',function(){var n=parseInt((inc.value||'').replace(/[^0-9]/g,''),10);ans.incamt=n>0?n:null;evaluate();});
    function evaluate(){
      var p=getProp(); res.className='result'; res.innerHTML=''; actions.innerHTML='';
      if(!p){res.className='result no';res.textContent='Pick a home first, then answer the questions.';return;}
      if(!ans.incamt||ans.verifiable===null||ans.pets===null||ans.timeframe===null||!ans.household)return;
      var beds=parseInt(p.beds,10)||1, maxHH=2*beds, need=Math.round(p.rent*40/12), reasons=[];
      if(ans.incamt<need)reasons.push('the income for this home is below our guideline');
      if(ans.verifiable==='no')reasons.push('verifiable income is required');
      if(ans.timeframe==='no')reasons.push('we’re currently scheduling showings for move-ins within about 30–45 days');
      if(ans.household>maxHH)reasons.push('PA occupancy guidelines allow up to '+maxHH+' people for this '+beds+'-bedroom home');
      if(reasons.length){res.className='result no';res.innerHTML='Not quite a match right now — '+reasons.join('; ')+'. Text us and we’ll help or suggest another rental.';return;}
      if(ans.pets==='yes'){
        res.className='result warn';
        res.innerHTML='You’re almost there! Because you have pets, we just need to confirm a couple of details before scheduling. Share your info and we’ll reach out to approve and book your showing.';
        actions.innerHTML='<div style="width:100%"><div class="formgrid">'+
          '<div><label class="fld">Name</label><input class="txt" type="text" placeholder="Your name"></div>'+
          '<div><label class="fld">Phone (for text)</label><input class="txt" type="text" placeholder="(570) 000-0000"></div>'+
          '<div><label class="fld">Email</label><input class="txt" type="text" placeholder="you@email.com"></div>'+
          '<div><label class="fld">Tell us about your pet(s)</label><input class="txt" type="text" placeholder="e.g. 1 small dog, 25 lbs"></div>'+
          '</div><div style="margin-top:14px"><a class="btn gold up" href="#" data-demo="On the live site this sends your details to Parasole for a quick review, and they text you back to approve and schedule your showing.">Request review &amp; showing</a></div></div>';
        bindLocal(actions);return;
      }
      res.className='result ok';
      res.textContent='You prequalify'+(p.addr?(' for '+p.addr):'')+'! Book your showing below.';
      actions.innerHTML='<a class="btn gold up" href="#" data-demo="On the live site this opens the showing calendar to book a tour.">Book a showing</a>'+
        '<a class="btn ghost tx" href="#"><svg><use href="#i-txt"/></svg> Text us instead</a>';
      bindLocal(actions);
    }
    return {evaluate:evaluate};
  };
})();
