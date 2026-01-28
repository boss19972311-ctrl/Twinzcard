const cards = [
  { name: "Apple USA", price: "$10", img: "images/cards/apple-us.jpg" },
  { name: "Google Play USA", price: "$15", img: "images/cards/googleplay-us.jpg" },
  { name: "Steam USA", price: "$20", img: "images/cards/steam-us.jpg" },
  { name: "Steam Qatar", price: "$25", img: "images/cards/steam-qa.jpg" },
  { name: "PlayStation Qatar", price: "$30", img: "images/cards/playstation-qa.jpg" }
];

const container = document.getElementById("cardsContainer");

cards.forEach(card => {
  const div = document.createElement("div");
  div.className = "card";
  div.innerHTML = `
    <img src="${card.img}">
    <h3>${card.name}</h3>
    <p>${card.price}</p>
    <button>شراء الآن</button>
  `;
  container.appendChild(div);
});
