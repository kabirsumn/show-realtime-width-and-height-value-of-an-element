const updateWidth = () => {
  const pageWidth = window.innerWidth;
  const containerWidth = document.querySelector(".container").clientWidth;
  const cardWidth = document.querySelector(".card").clientWidth;

  document.querySelector(".window").innerText = pageWidth + "px";
  document.querySelector(".container-width").innerText = containerWidth + "px";
  document.querySelector(".card-width").innerText = cardWidth + "px";
  // checkWidth();
};

// const checkWidth = () => {
//   const min = document.querySelector('.min')
//   const max = document.querySelector('.max')

//   const cardMin = document.querySelector('.card_min')
//   const cardMax = document.querySelector('.card_max')
//   const cardIdeal = document.querySelector('.card_ideal')

//   const minValue = parseInt(min.innerText)
//   const maxValue = parseInt(max.innerText)

//   const cardMinWidth = parseInt(cardMin.innerText)
//   const cardMaxWidth = parseInt(cardMax.innerText)

//   if ()
// };

window.onresize = updateWidth;
updateWidth();
