let menuToggle=document.querySelector(".header-top-toggle"),menuHeader=document.querySelector(".header-top-nav"),expandClass="is-expand",menuUser=(menuToggle.addEventListener("click",function(){menuHeader.classList.add(expandClass)}),window.addEventListener("click",function(e){menuHeader.contains(e.target)||e.target.matches(".header-top-toggle")||menuHeader.classList.remove(expandClass)}),document.querySelector(".header-top-user")),menuAuth=document.querySelector(".header-top-auth"),isLogin="is-login";menuUser.addEventListener("click",function(){menuAuth.classList.add(isLogin)}),window.addEventListener("click",function(e){menuAuth.contains(e.target)||e.target.matches(".header-top-user")||menuAuth.classList.remove(isLogin)}),$(document).ready(function(){$(".feedback-list").slick({infinite:!0,slidesToShow:2,slidesToScroll:2,prevArrow:"<button type='button' class='slick-prev pull-left slick-arrow'><i class='fa fa-chevron-left' aria-hidden='true'></i></button>",nextArrow:"<button type='button' class='slick-next pull-right slick-arrow'><i class='fa fa-chevron-right' aria-hidden='true'></i></button>",responsive:[{breakpoint:767,settings:{arrows:!0,slidesToShow:1,slidesToScroll:1}}]})});