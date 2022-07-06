const updateValues = () => {
  let pageWidth = window.innerWidth;
  let elementWidth = document.querySelector(".element").clientWidth;

  document.querySelector(".window").innerText = pageWidth + "px";
  document.querySelector(".actual").innerText = elementWidth + "px";

  checkWidth(elementWidth);
};

const checkWidth = (elementWidth) => {
  const maxValue = parseInt(document.querySelector(".max").innerText, 10);
  const minValue = parseInt(document.querySelector(".min").innerText, 10);

  const min = document.querySelector(".min");
  const max = document.querySelector(".max");
  const ideal = document.querySelector(".ideal");

  if (elementWidth === maxValue) {
    max.classList.add("highlight");
    min.classList.remove("highlight");
    ideal.classList.remove("highlight");
  } else if (elementWidth === minValue) {
    min.classList.add("highlight");
    max.classList.remove("highlight");
    ideal.classList.remove("highlight");
  } else {
    ideal.classList.add("highlight");
    max.classList.remove("highlight");
    min.classList.remove("highlight");
  }
};

updateValues();

window.onresize = updateValues;
