# Calculator
To see a live demo of this project [check this out](https://usama-bit137.github.io/calculator/)
The purpose of this project is to create a functioning calculator which can calculate the basic operations such as (+-\*/). The basic functionality of this project is creation and use of the `addEventListenersList` function:

```js
const addEventListenerList = (list) => {
  list.forEach((item) => {
    item.addEventListener("click", () => {
      buttonClickEvent(item.textContent);
    });
  });
};
```

and a `buttonClickEvent` function:

```js
const buttonClickEvent = (symbol) => console.log(symbol);
```

Essentially, all we have to do it insert code into the `buttonClickEvent` function.We perform a import of all the button elements, using ES6 spread to call in all elements with the class `grid-item`:

```js
const buttonArray = [...document.querySelectoryAll(".grid-item")];
```

and pass this array into `addEventListenerList` as follows:

```js
addEventListenerList(buttonArray);
```

If a button is clicked in this rudimentary example, it will print `textContent` property of the button clicked.
