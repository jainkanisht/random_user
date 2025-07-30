const container = document.getElementById("user-container");

function getUser() {
  container.innerHTML = "<p>Loading...</p>";

  fetch("https://randomuser.me/api/")
    .then(res => res.json())
    .then(data => {
      const user = data.results[0];
      container.innerHTML = `
        <img src="${user.picture.large}" width="100" height="100" alt="User Image" />
        <h3>${user.name.first} ${user.name.last}</h3>
        <p>Email: ${user.email}</p>
        <p>Location: ${user.location.city}, ${user.location.country}</p>
      `;
    })
    .catch(err => {
      container.innerHTML = "<p>Failed to load user 😢</p>";
      console.error("Fetch error:", err);
    });
}

// Load a user when the page loads
window.onload = getUser;
