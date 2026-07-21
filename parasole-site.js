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
})();
