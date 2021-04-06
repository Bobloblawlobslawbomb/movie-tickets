let secreOfTheThing = new Movie("Secret of the Thing", [130, 330, 530], "200", "R", 15)
let theWolfOfWallstreet = new Movie("The Wolf On Wall Street", [133, 100,], "1000", "R", 100)
let noseferatu = new Movie("Noseferatu", [2000, 2300, 2330], "120", "XXX", 13)
let theLionTeam = new Movie("The Lion Team", [430, 530, 730], "90", "G", 12)
let deepFeelings = new Movie("Deep Feelings", [930, 1030, 1130, 1230], "240", "PG-13", 11)

let movieTitles = [secreOfTheThing, theWolfOfWallstreet, noseferatu, theLionTeam, deepFeelings]
let movieString = ""

function Movie(movieName, movieShowings, movieRating, moviePrice, movieRunTime) {
  this.movieName = movieName
  this.movieShowings = movieShowings
  this.movieRunTime = movieRunTime
  this.movieRating = movieRating
  this.moviePrice = moviePrice
}

movieTitles.forEach(function (Title) {
  console.log(Title.movieName);
})


// Movie.forEach(function(movieName){

// })


// movieTitles.forEach(function (title) {
//   title = this
//   console.log(title);
// })

// movieTitles.forEach(function (title) {
//   title = movieTitles['title[index]'],
//     movieShowings.forEach(function (index) {
//       index = 
//   });
//   console.log(title);
// })

/*
function displayContactDetails(addressBookToDisplay) {
  let contactsList = $('ul#contacts')
  let htmlForContactInfo = ""
  Object.keys(addressBookToDisplay.contacts).forEach(function (key) {
    const contact = addressBookToDisplay.findContact(key)
    htmlForContactInfo += "<li id=" + contact.id + ">" + contact.firstName + " " + contact.lastName + "</li>"
  })
  contactsList.html(htmlForContactInfo)
}
*/

// let tomatoes = { name: "Tomatoes", price: 2.99 };
// let cucumbers = { name: "Cucumbers", price: 0.99 };
// let onions = { name: "Onions", price: 0.79 };

// let groceryStore = { name: "Michael's corner market", products: [tomatoes, cucumbers, onions] };

// let iPhone = { name: "iPhone", price: 699 };
// let android = { name: "Android", price: 499 };
// let windowsPhone = { name: "Windows Phone", price: 399 };

// let phoneStore = { name: "RadioShack", products: [iPhone, android, windowsPhone] };

// let stores = [groceryStore, phoneStore];

// stores.forEach(function (store) {
//   //console.log(store.name + " sells:");
//   store.products.forEach(function (product) {
//     //console.log(product.name);
//   });
//   console.log("\n");
// });