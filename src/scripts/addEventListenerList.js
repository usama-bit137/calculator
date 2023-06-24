import buttonClickEvent from "./buttonClickEvent";

const addEventListenerList = (list) => {
  list.forEach((item) => {
    item.addEventListener("click", () => {
      buttonClickEvent(item.textContent);
    });
  });
};

export default addEventListenerList;
