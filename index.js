const sortableList = document.querySelector(".sortable-list");
const items = document.querySelectorAll(".item");
let draggingItem = null;

items.forEach((item) => {
  item.addEventListener("dragstart", () => {
    draggingItem = item;
    setTimeout(() => item.classList.add("dragging"), 0);
  });
  item.addEventListener("dragend", () => {
    draggingItem = null;
    item.classList.remove("dragging");
  });
});

const initSortableList = (e) => {
  e.preventDefault();

  if (draggingItem) {
    const siblings = [...sortableList.querySelectorAll(".item:not(.dragging)")];

    let nextSibling = siblings.find((sibling) => {
      return e.clientY <= sibling.offsetTop + sibling.offsetHeight / 2;
    });

    sortableList.insertBefore(draggingItem, nextSibling);
  }
};

sortableList.addEventListener("dragover", initSortableList);
sortableList.addEventListener("dragenter", (e) => e.preventDefault());
