// entry-point

const buttonArray = [...document.querySelectorAll(".grid-item")]; // node list.

const addEventListenerList = (list) => {
  list.forEach((item) => {
    item.addEventListener("click", () => {
      console.log(item.textContent);
    });
  });
};

addEventListenerList(buttonArray);
