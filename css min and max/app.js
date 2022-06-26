const body = document.querySelector("body");
const container = document.querySelector(".container");
const bWidth = document.querySelector(".b-width");
const bHeight = document.querySelector(".b-height");
const cWidth = document.querySelector(".c-width");
const cHeight = document.querySelector(".c-height");

function getSize() {
  const bodyWidth = body.clientWidth;
  const bodyHeight = body.clientHeight;
  const containerWidth = container.clientWidth;
  const containerHeight = container.clientHeight;

  bWidth.innerHTML = `${bodyWidth}px`;
  bHeight.innerHTML = `${bodyHeight}px`;
  cWidth.innerHTML = `${containerWidth}px`;
  cHeight.innerHTML = `${containerHeight}px`;
}

window.addEventListener("resize", getSize);
