document.getElementById("signupForm").addEventListener("submit", async (e) => {
  e.preventDefault();

  const username = document.getElementById("username").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  try {
    const response = await fetch("http://localhost:5000/api/users/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, email, password }),
    });

    const data = await response.json();

    if (response.ok) {
      alert("Signup successful! Please login.");
      window.location.href = "login.html";
    } else {
      alert(data.message || "Signup failed. Try again.");
    }
  } catch (error) {
    console.error("Error during signup:", error);
    alert("Something went wrong. Try again later.");
  }
});

document.querySelector(".profile-icon").addEventListener("click", () => {
  window.location.href = "login.html";
});
