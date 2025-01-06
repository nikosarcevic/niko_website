document.addEventListener('DOMContentLoaded', () => {
    // Load header
    fetch('../assets/header.html')
        .then(response => response.text())
        .then(data => {
            document.querySelector('#header-container').innerHTML = data;
            document.getElementById("year").textContent = new Date().getFullYear(); // Add dynamic year
        });

    // Load footer
    fetch('../assets/footer.html')
        .then(response => response.text())
        .then(data => {
            document.querySelector('#footer-container').innerHTML = data;
        });
});
