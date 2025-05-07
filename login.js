const loginForm = document.getElementById("loginForm");

loginForm.addEventListener("submit", async (e) => {
  e.preventDefault();

  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  try {
    const response = await fetch("http://localhost:5000/api/users/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });

    const data = await response.json();

    if (response.ok) {
      const { _id, username, email } = data;
      const user = { _id, username, email };
      localStorage.setItem("currentUser", JSON.stringify(user));
      alert("Login successful!");
      window.location.href = "profile.html";
    } else {
      alert(data.message || "Login failed.");
    }
  } catch (error) {
    console.error("Error during login:", error);
    alert("An error occurred. Please try again later.");
  }
});

document.querySelector(".profile-icon").addEventListener("click", () => {
  window.location.href = "login.html";
});
