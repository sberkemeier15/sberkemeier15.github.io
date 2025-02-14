
const toggleButton = document.getElementById("dark-mode-toggle-btn");
const body = document.body;
const icon = toggleButton.querySelector("i");

// Check for saved preference
if (localStorage.getItem("dark-mode") === "enabled") {
    body.classList.add("dark-mode");
    icon.classList.remove("fa-moon");
    icon.classList.add("fa-sun"); 
}

toggleButton.addEventListener("click", () => {
    body.classList.toggle("dark-mode");

    if (body.classList.contains("dark-mode")) {
        localStorage.setItem("dark-mode", "enabled");
        icon.classList.remove("fa-moon");
        icon.classList.add("fa-sun"); 
    } else {
        localStorage.setItem("dark-mode", "disabled");
        icon.classList.remove("fa-sun");
        icon.classList.add("fa-moon"); 
    }
});
