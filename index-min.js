let linksWrpr=document.querySelector(".header-nav__links"),btnCloseMenu=document.querySelector(".header-nav__close"),btnOpenMenu=document.querySelector(".header-nav__open"),menuWrpr=document.querySelector(".header-nav__main"),mainHeader=document.querySelector(".header-nav__logo-text");const slides=document.querySelectorAll(".slider__slide");let slideIndex=0;function initializeSlider(){slides.length>0&&slides[slideIndex].classList.add("slider__slide--show")}function showSlide(e){e>=slides.length?slideIndex=0:e<0&&(slideIndex=slides.length-1),slides.forEach((e=>{e.classList.remove("slider__slide--show")})),slides[slideIndex].classList.add("slider__slide--show")}function prevSlide(){slideIndex--,showSlide(slideIndex)}function nextSlide(){slideIndex++,showSlide(slideIndex)}btnCloseMenu.addEventListener("click",(function(){linksWrpr.classList.contains("header-nav__links--open")&&(btnCloseMenu.classList.remove("header-nav__close--open"),btnCloseMenu.classList.add("header-nav__close--closed"),btnOpenMenu.classList.remove("header-nav__open--closed"),btnOpenMenu.classList.add("header-nav__open--open"),linksWrpr.classList.remove("header-nav__links--open"),linksWrpr.classList.add("header-nav__links--closed"),mainHeader.classList.remove("header-nav__logo-text--open"),mainHeader.classList.add("header-nav__logo-text--open"),menuWrpr.classList.remove("header-nav__main--open"),menuWrpr.classList.add("header-nav__main--closed"))})),btnOpenMenu.addEventListener("click",(function(){linksWrpr.classList.contains("header-nav__links--closed")&&(btnCloseMenu.classList.remove("header-nav__close--closed"),btnCloseMenu.classList.add("header-nav__close--open"),btnOpenMenu.classList.remove("header-nav__open--open"),btnOpenMenu.classList.add("header-nav__open--closed"),linksWrpr.classList.remove("header-nav__links--closed"),linksWrpr.classList.add("header-nav__links--open"),mainHeader.classList.remove("header-nav__logo-text--closed"),mainHeader.classList.add("header-nav__logo-text--closed"),menuWrpr.classList.remove("header-nav__main--closed"),menuWrpr.classList.add("header-nav__main--open"))})),document.addEventListener("DOMContentLoaded",initializeSlider);