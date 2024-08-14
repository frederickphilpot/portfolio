document.addEventListener("DOMContentLoaded", function() {
    // When the page has fully loaded
    const loadingScreen = document.getElementById("loading-screen");
    const mainContent = document.getElementById("main-content");
    
    // Remove the loading screen and show the main content
    loadingScreen.style.opacity = 0;
    mainContent.classList.remove("hidden");
    mainContent.style.opacity = 1;

    // Optional: Remove the loading screen element after transition
    setTimeout(() => {
        loadingScreen.remove();
    }, 1000); // Duration should match the CSS transition duration
});
