// Load user info
const currentUser = JSON.parse(localStorage.getItem("currentUser"));

if (currentUser) {
  document.getElementById("username").textContent = currentUser.username;
  document.getElementById("email").textContent = currentUser.email;
} else {
  alert("You must be logged in to view your profile.");
  window.location.href = "login.html";
}

// Logout
document.getElementById("logoutBtn").addEventListener("click", () => {
  localStorage.removeItem("currentUser");
  alert("You have been logged out.");
  window.location.href = "login.html";
});
