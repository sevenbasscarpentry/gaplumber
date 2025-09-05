
function toggleNav(){
  const m = document.getElementById('nav-menu');
  if(!m) return;
  m.style.display = (m.style.display === 'flex') ? 'none' : 'flex';
}

function nextTestimonial(){
  const el = document.getElementById('testimonials');
  if(!el) return;
  const quotes = el.querySelectorAll('blockquote');
  let i = parseInt(el.dataset.index||'0',10);
  quotes[i].style.display = 'none';
  i = (i+1) % quotes.length;
  quotes[i].style.display = 'block';
  el.dataset.index = i;
}
function prevTestimonial(){
  const el = document.getElementById('testimonials');
  if(!el) return;
  const quotes = el.querySelectorAll('blockquote');
  let i = parseInt(el.dataset.index||'0',10);
  quotes[i].style.display = 'none';
  i = (i-1+quotes.length) % quotes.length;
  quotes[i].style.display = 'block';
  el.dataset.index = i;
}
(function initSlides(){
  const el = document.getElementById('testimonials');
  if(!el) return;
  const quotes = el.querySelectorAll('blockquote');
  quotes.forEach((q, idx)=>{ q.style.display = idx===0 ? 'block' : 'none'; });
})();

function openLightbox(img){
  const lb = document.getElementById('lightbox');
  const lbimg = lb.querySelector('img');
  lbimg.src = img.src;
  lb.style.display = 'flex';
}
function closeLightbox(){
  const lb = document.getElementById('lightbox');
  lb.style.display = 'none';
}

function toggleCallback(){
  const d = document.getElementById('callback-drawer');
  if(!d) return;
  d.style.display = (d.style.display === 'block') ? 'none' : 'block';
}
