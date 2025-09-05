
function toggleNav(){
  const m = document.getElementById('nav-menu');
  if(!m) return;
  m.style.display = (m.style.display === 'flex') ? 'none' : 'flex';
}
