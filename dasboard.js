document.addEventListener("DOMContentLoaded", () => {
  const username = localStorage.getItem("eco_username") || "Eco User";
  document.getElementById("username").textContent = username;

  document.getElementById("logoutBtn").addEventListener("click", () => {
    localStorage.removeItem("eco_username");
    window.location.href = "index.html";
  });
});

loginForm.addEventListener('submit', function (e) {
  e.preventDefault();

  const username = loginForm.username.value.trim();
  const password = loginForm.password.value;

  // Simple login logic (replace with real validation if needed)
  if (username && password) {
    localStorage.setItem('eco_username', username);
    loginModal.style.display = 'none';
    alert(`Welcome, ${username}!`);
    window.location.href = "dashboard.html";  // ⬅ Redirect to dashboard
  } else {
    alert("Please enter valid login credentials.");
  }
});


document.addEventListener('DOMContentLoaded', () => {
  const isLoggedIn = localStorage.getItem("eco_username");
  const dashLink = document.getElementById("dashboardLink");
  if (isLoggedIn && dashLink) {
    dashLink.style.display = "inline-block";
  }
});
