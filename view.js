/*Bruk det du har lært om å legge inn data i arrays og hvordan å hente
 data fra arrays og lag en handlevogn!
Når du trykker på knappen "add to cart", tar du inn input fra brukeren 
og legger til og oppdaterer listen din i viewet.
*/
updateView();
function updateView() {
  document.getElementById("app").innerHTML = /*html*/ `
    ${createShoppingCart()}
    <input type="text" name="groceryInput" onchange="this.value" placeholder="legg til vare" />
    <input type="number" name="priceInput" onchange="this.value" placeholder="legg til pris" />
    ${createAddButton()}
  `;
}

//Henter ut brukerens inndate og viser varen og prisen
function addToCart() {
  let inputGrocery = document.querySelector('input[name = "groceryInput"]');
  let inputPrice = document.querySelector('input[name = "priceInput"]');

  let grocery = inputGrocery.value;
  let price = inputPrice.value;

  if (grocery && price) {
    shoppingList.push({ item: grocery, price: price });

    console.table(shoppingList); //Tabell over varer og pris i arrayet
    inputGrocery.value = "";
    inputPrice.value = "";
    updateView();
  } else {
    alert("Vennligst fyll inn både vare og pris korrekt.");
  }
}

//Lager "Add to cart"-knapp
function createAddButton() {
  return /*html*/ `<button onclick="addToCart()">Legg til i handleliste</button>`;
}
