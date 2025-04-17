fetch("content.html")
  .then((response) => response.text())
  .then((data) => {
    document.getElementById("content-container").innerHTML = data;
  })
  .catch((error) => {
    document.getElementById("content-container").innerText =
      "Failed to load content.";
    console.error("Error loading content.html:", error);
  });
