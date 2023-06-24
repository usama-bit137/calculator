const buttonArray = [...document.querySelectorAll(".grid-item")]; // node list.

const buttonClickEvent = (symbol) => {
  console.log(symbol); // Edit here!!!
};

const addEventListenerList = (list) => {
  list.forEach((item) => {
    item.addEventListener("click", () => {
      buttonClickEvent(item.textContent);
    });
  });
};

addEventListenerList(buttonArray);
