let catgory = "fruits";
let catbox = document.querySelectorAll(".cat");
let box = document.querySelector(".main");
let allPrducts = document.getElementById("allProduct");
let boxcat = document.querySelectorAll("a.box");
let parntBox;
let starcontainer;
let stopcat = 0;
let shopinCancelBtn;
let newResult = 0;
let result = 0;
let newAray = [];
let secAray = [];
let inputVal = 1;
let btnlogup = document.querySelector(".btnlogup");
let titleh3;
let alpha = "abcdefghijklmnopqrstuvwxyz";
let alphaUper = alpha.toUpperCase();
let defaulte = document.querySelector(".shopping-cart .defaulte");

// onclick to the btnlogup
btnlogup.addEventListener("click", () => {
  check.style.display = "none";
  userLogin.style.cssText = "border-color: lightgray;border-width: 1px;";
  passLogin.style.cssText = "border-color: lightgray;border-width: 1px;";
  userLogin.value = "";
  passLogin.value = "";
  loginForm.classList.add("active");
  logup.classList.remove("active");
});

// some aray function
function someAray(aray) {
  newResult = 0;
  for (let i = 0; i < aray.length; i++) {
    newResult += aray[i];
  }
  return newResult;
}
// get shopcart

// fuction sec and first
function first() {
  this.nextElementSibling.classList.remove("active");
  this.classList.add("active");
  srcval = this.parentElement.nextElementSibling.firstElementChild.src;
  srcval = srcval.substring(srcval.indexOf("im"));
  for (let i = 0; i < products.length; i++) {
    if (srcval == products[i].imgsrc) {
      products[i].status = true;
      this.classList.remove("shop");
      this.classList.add("shop1");
      this.classList.remove("active");
      this.removeEventListener("click", first);
      this.addEventListener("click", sec);
      addToShopingCart(i);
    }
  }
}
function sec() {
  shopCart.classList.add("active");
}
// aray of products
let products = [
  {
    cat: "fruits",
    discount: 800,
    imgsrc: "image/products/f1.jpg",
    title: "T-shirt Sport",
    price: 500,
    stars: 5,
    status: false,
  },
  {
    cat: "fruits",
    discount: 750,
    imgsrc: "image/products/f2.jpg",
    title: "مرحياااا",
    price: 500,
    stars: 4,
    status: false,
  },
  {
    cat: "meat",
    discount: 600,
    imgsrc: "image/products/f3.jpg",
    title: "organic foodes",
    price: 450,
    stars: 3,
    status: false,
  },
  {
    cat: "wheat",
    discount: 600,
    imgsrc: "image/products/f4.jpg",
    title: "organic foodes",
    price: 400,
    stars: 4,
    status: false,
  },
  {
    cat: "meat",
    discount: 650,
    imgsrc: "image/products/f5.jpg",
    title: "organic foodes",
    price: 500,
    stars: 3,
    status: false,
  },
  {
    cat: "vegetables",
    discount: 600,
    imgsrc: "image/products/f6.jpg",
    title: "organic foodes",
    price: 499,
    stars: 3,
    status: false,
  },
  {
    cat: "vegetables",
    discount: 600,
    imgsrc: "image/products/f7.jpg",
    title: "organic foodes",
    price: 300,
    stars: 5,
    status: false,
  },
  {
    cat: "meat",
    discount: 900,
    imgsrc: "image/products/f8.jpg",
    title: "organic foodes",
    price: 599,
    stars: 3,
    status: false,
  },
  {
    cat: "meat",
    discount: 1000,
    imgsrc: "image/products/n1.jpg",
    title: "organic foodes",
    price: 698,
    stars: 2,
    status: false,
  },
  {
    cat: "fruits",
    discount: 750,
    imgsrc: "image/products/n2.jpg",
    title: "organic foodes",
    price: 500,
    stars: 4,
    status: false,
  },
  {
    cat: "spices",
    discount: 898,
    imgsrc: "image/products/n3.jpg",
    title: "organic foodes",
    price: 600,
    stars: 2,
    status: false,
  },
  {
    cat: "spices",
    discount: 799,
    imgsrc: "image/products/n4.jpg",
    title: "organic foodes",
    price: 548,
    stars: 4,
    status: false,
  },
  {
    cat: "spices",
    discount: 900,
    imgsrc: "image/products/n5.jpg",
    title: "organic foodes",
    price: 450,
    stars: 2,
    status: false,
  },
  {
    cat: "vegetables",
    discount: 500,
    imgsrc: "image/products/n6.jpg",
    title: "organic foodes",
    price: 350,
    stars: 3,
    status: false,
  },
  {
    cat: "wheat",
    discount: 600,
    imgsrc: "image/products/n7.jpg",
    title: "organic foodes",
    price: 400,
    stars: 4,
    status: false,
  },
  {
    cat: "wheat",
    discount: 600,
    imgsrc: "image/products/n8.jpg",
    title: "organic foodes",
    price: 250,
    stars: 3,
    status: false,
  },
];
let shopCart = document.querySelector(".shopping-cart");
let shopCartBox, shopinProduct;
if (localStorage.getItem("shope")) {
  shopCart.innerHTML = localStorage.getItem("shope");
  let total = document.querySelector(".shopping-cart .total");
  let btn = document.querySelector(".shopping-cart .btn");
  total.classList.remove("active");
  btn.classList.remove("active");
  // update  result
  let totalVal = document.querySelector(".shopping-cart .total span");
  result = totalVal.innerText.substring(0, totalVal.innerText.indexOf("M"));
  // count input
  let input = document.querySelectorAll(
    ".header .shopping-cart .box .content .much input"
  );
  let much = document.querySelectorAll(
    ".header .shopping-cart .box .content .much"
  );
  input.forEach((ele) => {
    ele.addEventListener("change", () => {
      ele.setAttribute("value", ele.value);
      newAray = [];
      much.forEach((el) => {
        let val = el.firstElementChild.value;
        let price = el.lastElementChild.innerHTML;
        price = price.substring(0, price.indexOf("M"));
        newResult = val * price;
        newAray.push(newResult);
      });
      result = someAray(newAray);

      let totalVal = document.querySelector(".shopping-cart .total span");
      totalVal.innerHTML = `${result.toFixed(2)} MRU`;
      localStorage.setItem("shope", shopCart.innerHTML);
    });
  });

  shopinCancelBtn = document.querySelectorAll(".shopping-cart .box div.cancel");

  let srcvalShop1;
  // shopcartCancel btn
  shopinCancelBtn.forEach((el) => {
    el.addEventListener("click", () => {
      // update status
      let srcvalue = el.nextElementSibling.src;
      srcvalue = srcvalue.substring(srcvalue.indexOf("im"));
      for (let i = 0; i < products.length; i++) {
        if (srcvalue === products[i].imgsrc) {
          products[i].status = false;
        }
      }
      let totalVal = document.querySelector(".shopping-cart .total span");
      // count the price
      let price =
        el.nextElementSibling.nextElementSibling.lastElementChild
          .lastElementChild.innerText;
      price = price.substring(0, price.indexOf("M"));
      let value =
        el.nextElementSibling.nextElementSibling.lastElementChild
          .firstElementChild.value;
      result = result - price * value;

      // update total price filed

      // let totalVal = document.querySelector(".shopping-cart .total span");
      totalVal.innerHTML = `${result.toFixed(2)} MRU`;
      // hide total price
      // push the shopcart innerHtml to the the localstorage
      localStorage.setItem("shope", shopCart.innerHTML);
      // shopCart.innerHTML = localStorage.getItem("shope")

      srcvalShop1 = el.nextElementSibling.src;
      // srcvalShop1 = srcvalShop1.substring(srcvalShop1.indexOf("im"))
      let imgBox = document.querySelectorAll(
        ".products .box-container .box .image img"
      );
      imgBox.forEach((el) => {
        if (el.src == srcvalShop1) {
          el.parentElement.previousElementSibling.children[0].classList.remove(
            "shop1"
          );
          el.parentElement.previousElementSibling.children[0].classList.add(
            "shop"
          );
          el.parentElement.previousElementSibling.children[0].removeEventListener(
            "click",
            sec
          );
          el.parentElement.previousElementSibling.children[0].addEventListener(
            "click",
            first
          );
        }
      });

      // let icons = document.querySelectorAll(".icon .shop");

      el.parentElement.remove();
      localStorage.setItem("shope", shopCart.innerHTML);

      let shopBox = document.querySelectorAll(".shopping-cart .box");

      if (shopBox.length == 0) {
        result = 0;
        total.classList.add("active");
        btn.classList.add("active");
      }
      if (result == 0) {
        localStorage.setItem("shope", "");
        shopCart.classList.remove("active");
      }
    });
  });
  // update status
  let shopBox = document.querySelectorAll(".shopping-cart .box");
  shopBox.forEach((el) => {
    let srcImg = el.firstElementChild.nextElementSibling.src;
    srcImg = srcImg.substring(srcImg.indexOf("im"));
    for (let i = 0; i < products.length; i++) {
      if (srcImg == products[i].imgsrc) {
        products[i].status = true;
      }
    }
  });
} else {
  let total = document.querySelector(".shopping-cart .total");
  let btn = document.querySelector(".shopping-cart .btn");
  total.classList.add("active");
  btn.classList.add("active");
  localStorage.setItem("shope", "");
}
showProduct();

// get icons
let mainIcon;
let statusProduct;
let srcval;
let icons = document.querySelectorAll(".icon .shop");
let icons1 = document.querySelectorAll(".icon .shop1");

function getIcons() {
  let icons = document.querySelectorAll(".icon .shop");
  let icons1 = document.querySelectorAll(".icon .shop1");

  icons1.forEach((el) => {
    // el.classList.add("active");
    el.addEventListener("click", () => {
      shopCart.classList.add("active");
    });
  });
  icons.forEach((el) => {
    el.addEventListener("click", first);
  });
}

// function addToShopingCart to add product to shoping cart
function addToShopingCart(index) {
  shopinProduct = `<div class="box">
  <div class="cancel"><i class="fas fa-times"></i></div>
  <img src="${products[index].imgsrc}" alt="">
  <div class="content">
      <h3>${products[index].title}</h3>
      <div class="much">
      <input type="number" value="1">
      <span class="multiply">x</span>
      <span class="price">${products[index].price}MRU</span>
      </div>
      </div>
      </div>`;
  // default paragraphe in cardshop
  // insert to the shopCart
  shopCart.innerHTML = shopinProduct + shopCart.innerHTML;
  shopCart.classList.add("active");

  // push the shopcart innerHtml to the the localstorage
  localStorage.setItem("shope", shopCart.innerHTML);

  // default state of shopcart
  let shopBox = document.querySelectorAll(".shopping-cart .box");
  let defaulte = document.querySelector(".shopping-cart .defaulte");
  if (shopBox.length > 0) {
    defaulte.style.display = "none";
  }
  // long title and short title
  let h3 = document.querySelectorAll(".header .shopping-cart .box .content h3");
  h3.forEach((el) => {
    if (el.innerText.length >= 10) {
      el.classList.add("long");
    } else {
      el.classList.add("short");
    }
  });
  // count the product price
  let much = document.querySelectorAll(
    ".header .shopping-cart .box .content .much"
  );
  let totalVal = document.querySelector(".shopping-cart .total span");

  secAray = [];
  much.forEach((el) => {
    let val = el.firstElementChild.value;
    let price = el.lastElementChild.innerHTML;
    price = price.substring(0, price.indexOf("M"));
    newResult = val * price;
    secAray.push(newResult);
  });
  result = someAray(secAray);
  totalVal.innerHTML = `${someAray(secAray).toFixed(2)} MRU`;
  // push the shopcart innerHtml to the the localstorage
  localStorage.setItem("shope", shopCart.innerHTML);
  // shopCart.innerHTML = localStorage.getItem("shope")

  // countInput
  let input = document.querySelectorAll(
    ".header .shopping-cart .box .content .much input"
  );
  let total = document.querySelector(".shopping-cart .total");
  input.forEach((ele) => {
    ele.addEventListener("change", () => {
      ele.setAttribute("value", ele.value);
      newAray = [];
      much.forEach((el) => {
        let val = el.firstElementChild.value;
        let price = el.lastElementChild.innerHTML;
        price = price.substring(0, price.indexOf("M"));
        newResult = val * price;
        newAray.push(newResult);
      });
      result = someAray(newAray);

      let totalVal = document.querySelector(".shopping-cart .total span");
      totalVal.innerHTML = `${result.toFixed(2)} MRU`;
      localStorage.setItem("shope", shopCart.innerHTML);
    });
  });

  let btn = document.querySelector(".shopping-cart .btn");
  total.classList.remove("active");
  btn.classList.remove("active");

  shopinCancelBtn = document.querySelectorAll(".shopping-cart .box div.cancel");

  let srcvalShop1;
  // shopcartCancel btn
  shopinCancelBtn.forEach((el) => {
    el.addEventListener("click", () => {
      // update status
      let srcvalue = el.nextElementSibling.src;
      srcvalue = srcvalue.substring(srcvalue.indexOf("im"));
      for (let i = 0; i < products.length; i++) {
        if (srcvalue === products[i].imgsrc) {
          products[i].status = false;
        }
      }

      // count the price
      let price =
        el.nextElementSibling.nextElementSibling.lastElementChild
          .lastElementChild.innerText;
      price = price.substring(0, price.indexOf("M"));

      let value =
        el.nextElementSibling.nextElementSibling.lastElementChild
          .firstElementChild.value;
      result = result - price * value;

      // update total price filed

      let totalVal = document.querySelector(".shopping-cart .total span");
      totalVal.innerHTML = `${result.toFixed(2)} MRU`;
      // hide total price
      // push the shopcart innerHtml to the the localstorage
      localStorage.setItem("shope", shopCart.innerHTML);
      // shopCart.innerHTML = localStorage.getItem("shope")

      srcvalShop1 = el.nextElementSibling.src;
      // srcvalShop1 = srcvalShop1.substring(srcvalShop1.indexOf("im"))
      let imgBox = document.querySelectorAll(
        ".products .box-container .box .image img"
      );
      imgBox.forEach((el) => {
        if (el.src == srcvalShop1) {
          el.parentElement.previousElementSibling.children[0].classList.remove(
            "shop1"
          );
          el.parentElement.previousElementSibling.children[0].classList.add(
            "shop"
          );
          el.parentElement.previousElementSibling.children[0].removeEventListener(
            "click",
            sec
          );
          el.parentElement.previousElementSibling.children[0].addEventListener(
            "click",
            first
          );
        }
      });

      // let icons = document.querySelectorAll(".icon .shop");

      el.parentElement.remove();
      localStorage.setItem("shope", shopCart.innerHTML);
      if (result == 0) {
        localStorage.setItem("shope", "");
        shopCart.classList.remove("active");
      }
      let shopBox = document.querySelectorAll(".shopping-cart .box");
      if (shopBox.length == 0) {
        result = 0;
        total.classList.add("active");
        btn.classList.add("active");
      }
    });
  });
}

// when click to any category
document.addEventListener("click", (e) => {
  if (e.target.getAttribute("data-cat") == "fruits") {
    catgory = e.target.getAttribute("data-cat");
    parntBox = e.target.parentElement;
    activecat(parntBox);
    showProduct();
  } else if (e.target.getAttribute("data-cat") == "vegetables") {
    catgory = e.target.getAttribute("data-cat");
    parntBox = e.target.parentElement;
    activecat(parntBox);
    showProduct();
  } else if (e.target.getAttribute("data-cat") == "spices") {
    catgory = e.target.getAttribute("data-cat");
    parntBox = e.target.parentElement;
    activecat(parntBox);
    showProduct();
  } else if (e.target.getAttribute("data-cat") == "meat") {
    catgory = e.target.getAttribute("data-cat");
    parntBox = e.target.parentElement;
    activecat(parntBox);
    showProduct();
  } else if (e.target.getAttribute("data-cat") == "wheat") {
    catgory = e.target.getAttribute("data-cat");
    parntBox = e.target.parentElement;
    activecat(parntBox);
    showProduct();
  }
});
// show All Products
allPrducts.addEventListener("click", () => {
  boxcat.forEach((el) => {
    el.classList.remove("active");
  });
  showAllProduct();
});
// function showProduct to show special category
function showProduct() {
  box.innerHTML = "";

  for (let i = 0; i < products.length; i++) {
    if (products[i].status === false) {
      if (catgory == products[i].cat) {
        let boxcontainer = ` <div class="box">
               <div class="icons icon">
                   <div class="shop"><i class="fas fa-shopping-cart"></i></div>
                   <a href="#" class="fas fa-heart"></a>
                   <a href="#" class="fas fa-eye"></a>
               </div>
               <div class="image">
               <img src="${products[i].imgsrc}" alt="">
               </div>
               <div class="content">
               <h3>${products[i].title}</h3>
                   <div class="price">${products[i].price}MRU<span>${
          products[i].discount
        }MRU</span></div>
                   <div class="stars">
                       ${stars(products[i].stars)}
                   </div>
               </div>
               </div>`;
        box.innerHTML += boxcontainer;
        titleh3 = document.querySelectorAll(
          ".products .box-container .box .content h3"
        );
        getIcons();
      }
    } else {
      if (catgory == products[i].cat) {
        let boxcontainer = ` <div class="box">
               <div class="icons icon">
                   <div class="shop1"><i class="fas fa-shopping-cart"></i></div>
                   <a href="#" class="fas fa-heart"></a>
                   <a href="#" class="fas fa-eye"></a>
               </div>
               <div class="image">
               <img src="${products[i].imgsrc}" alt="">
               </div>
               <div class="content">
               <h3>${products[i].title}</h3>
                   <div class="price">${products[i].price}MRU<span>$${
          products[i].discount
        }MRU</span></div>
                   <div class="stars">
                       ${stars(products[i].stars)}
                   </div>
               </div>
               </div>`;
        box.innerHTML += boxcontainer;
        titleh3 = document.querySelectorAll(
          ".products .box-container .box .content h3"
        );
        getIcons();
      }
    }
  }
  let allPrice = document.querySelectorAll(
    ".products .box-container .box .content .price"
  );
  let allDiscount = document.querySelectorAll(
    ".products .box-container .box .content .price span"
  );
  allPrice.forEach((el) => {
    el.classList.add("fontEnglich");
  });
  allDiscount.forEach((el) => {
    el.classList.add("fontEnglich");
  });
}
// functoin showAllProduct for show All Product and remov activ from the current category
function showAllProduct() {
  box.innerHTML = "";
  catbox.forEach((el) => {
    el.classList.remove("active");
  });
  for (let i = 0; i < products.length; i++) {
    if (products[i].status === false) {
      let boxcontainer = ` <div class="box">
               <div class="icons icon">
                   <div class="shop"><i class="fas fa-shopping-cart"></i></div>
                   <a href="#" class="fas fa-heart"></a>
                   <a href="#" class="fas fa-eye"></a>
               </div>
               <div class="image">
               <img src="${products[i].imgsrc}" alt="">
               </div>
               <div class="content">
               <h3>${products[i].title}</h3>
                   <div class="price">${products[i].price}MRU<span>${
        products[i].discount
      }MRU</span></div>
                   <div class="stars">
                       ${stars(products[i].stars)}
                   </div>
               </div>
               </div>`;
      box.innerHTML += boxcontainer;
      getIcons();
    } else {
      let boxcontainer = ` <div class="box">
               <div class="icons icon">
                   <div class="shop1"><i class="fas fa-shopping-cart"></i></div>
                   <a href="#" class="fas fa-heart"></a>
                   <a href="#" class="fas fa-eye"></a>
               </div>
               <div class="image">
               <img src="${products[i].imgsrc}" alt="">
               </div>
               <div class="content">
               <h3>${products[i].title}</h3>
                   <div class="price">${products[i].price}MRU<span>${
        products[i].discount
      }MRU</span></div>
                   <div class="stars">
                       ${stars(products[i].stars)}
                   </div>
               </div>
               </div>`;
      box.innerHTML += boxcontainer;
      getIcons();
    }
  }
}
// activ category
function activecat(parntBox) {
  boxcat.forEach((el) => {
    el.classList.remove("active");
  });
  parntBox.classList.add("active");
  parntBox.href = "#product";
}

// category arry for dynamique category

let catgorys = [
  {
    title: "إلكترونيات",
    picture: "image/cat-4.png",
    catgoryname: "meat",
  },
  {
    title: "أجهزة",
    picture: "image/cat-5.png",
    catgoryname: "wheat",
  },
];

let catgorycontainer = document.querySelector(".box-container"),
  viewAllCat = document.getElementById("add");
// view All Category when click to this btn
viewAllCat.addEventListener("click", () => {
  getIcons();
  stopcat++;
  if (stopcat == 1) {
    for (let i = 0; i < catgorys.length; i++) {
      let catgorybox = `<a href="#" class="box cat">
                          <img src="${catgorys[i].picture}" alt="" data-cat="${catgorys[i].catgoryname}">
                          <h3 data-cat="${catgorys[i].catgoryname}">${catgorys[i].title}</h3>
                      </a>`;
      catgorycontainer.innerHTML += catgorybox;
    }
    catbox = document.querySelectorAll(".cat");
    activcat();
  }
});

activcat();
// active category
function activcat() {
  catbox.forEach((el) => {
    el.addEventListener("click", () => {
      catbox.forEach((ele) => {
        ele.classList.remove("active");
      });
      el.classList.add("active");
    });
  });
}

// how much stars are there in the products
function stars(star) {
  switch (star) {
    case 1:
      starcontainer = `<i class="fas fa-star"></i>
     <i class="far fa-star"></i>
     <i class="far fa-star"></i>
     <i class="far fa-star"></i>
     <i class="far fa-star"></i>`;
      break;
    case 2:
      starcontainer = `<i class="fas fa-star"></i>
    <i class="fas fa-star"></i>
    <i class="far fa-star"></i>
    <i class="far fa-star"></i>
    <i class="far fa-star"></i>`;
      break;
    case 3:
      starcontainer = `<i class="fas fa-star"></i>
    <i class="fas fa-star"></i>
    <i class="fas fa-star"></i>
    <i class="far fa-star"></i>
    <i class="far fa-star"></i>`;
      break;
    case 4:
      starcontainer = `<i class="fas fa-star"></i>
    <i class="fas fa-star"></i>
    <i class="fas fa-star"></i>
    <i class="fas fa-star"></i>
    <i class="far fa-star"></i>`;
      break;
    case 5:
      starcontainer = `<i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i> 
        <i class="fas fa-star"></i>`;
      break;
  }
  return starcontainer;
}

// if the product title is in english language change the font

titleh3.forEach((el) => {
  for (let i = 0; i < 26; i++) {
    if (alpha[i] == el.innerText[0] || alphaUper[i] == el.innerText[0]) {
      el.classList.add("fontEnglich");
    }
  }
});
