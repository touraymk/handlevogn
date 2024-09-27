/*Bruk det du har lært om å legge inn data i arrays og hvordan å hente
 data fra arrays og lag en handlevogn!
Når du trykker på knappen "add to cart", tar du inn input fra brukeren 
og legger til og oppdaterer listen din i viewet.
*/

//Lager en handleliste som viser vare og pris som
function createShoppingCart() {
  let listItem = "";

  for (let i = 0; i < shoppingList.length; i++) {
    let item = shoppingList[i].item;
    let price = shoppingList[i].price;
    listItem += /*html*/ `
      <div>- ${item}  ${price},-</div>
    `;
  }
  return listItem;
}
