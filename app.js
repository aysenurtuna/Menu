const menu = [
  {
    id: 1,
    title: "buttermilk pancakes",
    category: "breakfast",
    price: 15.99,
    img: "images/item-1.jpeg",
    desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
  },
  {
    id: 2,
    title: "diner double",
    category: "lunch",
    price: 13.99,
    img: "images/item-2.jpeg",
    desc: `vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats `,
  },
  {
    id: 3,
    title: "godzilla milkshake",
    category: "shakes",
    price: 6.99,
    img: "images/item-3.jpeg",
    desc: `ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.`,
  },
  {
    id: 4,
    title: "country delight",
    category: "breakfast",
    price: 20.99,
    img: "images/item-4.jpeg",
    desc: `Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut, `,
  },
  {
    id: 5,
    title: "egg attack",
    category: "lunch",
    price: 22.99,
    img: "images/item-5.jpeg",
    desc: `franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up `,
  },
  {
    id: 6,
    title: "oreo dream",
    category: "shakes",
    price: 18.99,
    img: "images/item-6.jpeg",
    desc: `Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday`,
  },
  {
    id: 7,
    title: "bacon overflow",
    category: "breakfast",
    price: 8.99,
    img: "images/item-7.jpeg",
    desc: `carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird `,
  },
  {
    id: 8,
    title: "american classic",
    category: "lunch",
    price: 12.99,
    img: "images/item-8.jpeg",
    desc: `on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut  `,
  },
  {
    id: 9,
    title: "quarantine buddy",
    category: "shakes",
    price: 16.99,
    img: "images/item-9.jpeg",
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },
  {
    id: 10,
    title: "steak dinner",
    category: "dinner",
    price: 39.99,
    img: "images/item-10.jpeg",
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  }
];

window.addEventListener("DOMContentLoaded", function () {
  showAllItems();
})


let itemArea = document.querySelector('.item-area')

function showItem(item) {
  itemArea.innerHTML += `<div class="col-lg-6 p-5">
  <div class="row">
  <div class="col-md-5 item">
    <img src="${item.img}" alt="" class="img-fit">
       </div>
    <div class="col-md-7 item item2">
      <div class="name">
        ${item.title} <span class="price">${item.price}</span>
      </div>
      <div class="description">
        ${item.desc}
      </div>
    </div>  
</div>
</div>
</div>
</div>`;
}

function showAllItems() {
  itemArea.innerHTML = ""
  for (let i = 0; i < menu.length; i++) {
    showItem(menu[i])
  }
}

function showBreakfastItems() {
  itemArea.innerHTML = ""
  var matchingItem = menu.map(function(item){
    if(item.category === "breakfast")
       showItem(item)
});
}

function showLunchItems() {
  itemArea.innerHTML = ""
  var matchingItem = menu.map(function(item){
    if(item.category === "lunch")
       showItem(item)
});
}

function showDinnerItems() {
  itemArea.innerHTML = ""
  var matchingItem = menu.map(function(item){
    if(item.category === "dinner")
       showItem(item)
});
}

function showShakeItems() {
  itemArea.innerHTML = ""
  var matchingItem = menu.map(function(item){
    if(item.category === "shakes")
       showItem(item)
});
}

