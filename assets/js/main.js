const dropdownHeader = document.getElementById("dropdownHeader");
const dropdownList = document.getElementById("dropdownList");
const selectedText = document.getElementById("selectedText");

dropdownHeader.addEventListener("click", () => {
  dropdownList.classList.toggle("open");
  dropdownHeader.classList.toggle("open");
});

document.querySelectorAll("#dropdownList li").forEach((item) => {
  item.addEventListener("click", () => {
    // Remove previous selected class
    document.querySelectorAll("#dropdownList li").forEach((el) => {
      el.classList.remove("selected");
    });

    // Set new selected item
    item.classList.add("selected");
    selectedText.textContent = item.textContent;

    // Close dropdown
    dropdownList.classList.remove("open");
    dropdownHeader.classList.remove("open");
  });
});

// Close dropdown if clicked outside
document.addEventListener("click", (e) => {
  if (!e.target.closest(".custom-dropdown")) {
    dropdownList.classList.remove("open");
    dropdownHeader.classList.remove("open");
  }
});
