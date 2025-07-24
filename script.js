document.getElementById('menu-toggle').onclick = () => {
  const nav = document.querySelector('nav ul');
  nav.classList.toggle('active');
};
// Dark mode toggle
const toggleBtn = document.getElementById('darkModeToggle');
const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
const savedTheme = localStorage.getItem('theme');

if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
  document.body.classList.add('dark');
  toggleBtn.textContent = '☀️';
}

toggleBtn.onclick = () => {
  document.body.classList.toggle('dark');
  const isDark = document.body.classList.contains('dark');
  localStorage.setItem('theme', isDark ? 'dark' : 'light');
  toggleBtn.textContent = isDark ? '☀️' : '🌙';
};








