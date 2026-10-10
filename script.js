
const searchInput = document.getElementById("searchInput");
const blogItems = document.querySelectorAll(".blog-item");
const filterButtons = document.querySelectorAll(".filter-btn");
const noResults = document.getElementById("noResults");

// Selected category
let selectedCategory = "All";

// Search and category filtering
function filterArticles() {
    const searchText = searchInput.value.toLowerCase().trim();
    let visibleCount = 0;

    blogItems.forEach(function (item) {
        const category = item.dataset.category;
        const text = item.textContent.toLowerCase();

        const categoryMatches =
            selectedCategory === "All" ||
            category === selectedCategory;

        const searchMatches = text.includes(searchText);

        if (categoryMatches && searchMatches) {
            item.hidden = false;
            visibleCount++;
        } else {
            item.hidden = true;
        }
    });

    noResults.hidden = visibleCount !== 0;
}

// Search while typing
searchInput.addEventListener("input", filterArticles);

// Category button events
filterButtons.forEach(function (button) {
    button.addEventListener("click", function () {
        selectedCategory = button.dataset.category;

        filterButtons.forEach(function (btn) {
            btn.classList.remove("active");
        });

        button.classList.add("active");

        filterArticles();
    });
});

// Current year in footer
document.getElementById("currentYear").textContent =
    new Date().getFullYear();
