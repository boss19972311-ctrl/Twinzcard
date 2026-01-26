const brand = document.getElementById("brand");
const region = document.getElementById("region");
const amount = document.getElementById("amount");
const img = document.getElementById("cardImg");
const buyBtn = document.getElementById("buyBtn");

function updateUI(){
  const b = brand.value;
  let r = region.value;

  // Google Play & Apple = US فقط
  if (b === "googleplay" || b === "apple") {
    region.value = "us";
    region.disabled = true;
    r = "us";
  } else {
    region.disabled = false;
  }

  if (!b) {
    img.src = "";
    buyBtn.disabled = true;
    return;
  }

  img.src = `images/cards/${b}-${r}.jpg`;
  buyBtn.disabled = false;
}

brand.addEventListener("change", updateUI);
region.addEventListener("change", updateUI);

// زر الشراء (Affiliate)
buyBtn.addEventListener("click", () => {
  const link = `https://affiliate-link.com/${brand.value}?region=${region.value}&amount=${amount.value}`;
  window.location.href = link;
});
