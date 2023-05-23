let searchForm=document.querySelector(".search-form");
document.querySelector("#search-btn") .onclick =() =>{
    searchForm.classList.toggle("active");
    shopping.classList.remove('active');
    login.classList.remove('active');
    nav.classList.remove('active');
}

let shopping=document.querySelector(".shopping-cart");
document.querySelector("#cart-btn") .onclick =() =>{
    shopping.classList.toggle("active");
    
    searchForm.classList.remove('active');
    login.classList.remove('active');
    nav.classList.remove('active');
}

let login=document.querySelector(".login-form");
document.querySelector("#login-btn") .onclick =() =>{
    login.classList.toggle("active");
    searchForm.classList.remove('active');
    shopping.classList.remove('active');
    nav.classList.remove('active');
}

let nav=document.querySelector(".navbar");
document.querySelector("#menu-btn") .onclick =() =>{
    nav.classList.toggle("active");
    searchForm.classList.remove('active');
    shopping.classList.remove('active');
    login.classList.remove('active');
}

window.onscroll = () =>{
    searchForm.classList.remove('active');
    shoppingCart.classList.remove('active');
    loginForm.classList.remove('active');
    navbar.classList.remove('active');
}





var swiper = new Swiper(".product-slider", {
    loop:true,
    spaceBetween: 20,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    centeredSlides: true,
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1020: {
        slidesPerView: 3,
      },
    },
});

var swiper = new Swiper(".review-slider", {
    loop:true,
    spaceBetween: 20,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    centeredSlides: true,
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1020: {
        slidesPerView: 3,
      },
    },
});
var swiper = new Swiper(".box-container-slider", {
    loop:true,
    spaceBetween: 20,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    centeredSlides: true,
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1020: {
        slidesPerView: 3,
      },
    },
});




function myFunction() {
  var dots = document.getElementById("dots");
  var moreText = document.getElementById("more");
  var btnText = document.getElementById("myBtn");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Read more";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Read less";
    moreText.style.display = "inline";
  }
}


