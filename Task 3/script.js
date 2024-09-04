const list = document.querySelector("nav ul");
const items = document.querySelectorAll("li");
const links = document.querySelectorAll("a");

list.addEventListener("click", HandleClick);

function HandleClick(e) {
  let targetItem;

  if (e.target.matches("li")) {
    targetItem = e.target.querySelector("a"); // Get the a inside the li
  } else if (e.target.matches("a")) {
    targetItem = e.target;
  }

  if (targetItem) {
    items.forEach((item) => item.classList.remove("active"));
    links.forEach((link) => link.classList.remove("active"));

    targetItem.parentElement.classList.add("active"); // Add active to li
    targetItem.classList.add("active"); // Add active to a

    // Trigger the click event on the a element if li is clicked
    if (e.target.matches("li")) {
      targetItem.click();
    }
  }
}
