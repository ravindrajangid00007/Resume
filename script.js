'use strict'


// let anchors = document.querySelectorAll('.nav-menu a');
// let id;
// for (let anchor of anchors) {
//     anchor.addEventListener('click', function (event) {
//         event.preventDefault();
//     }
//     );
// }
// for (let i = 0; i < anchors.length - 1; i++) {
//     anchors[i].addEventListener('click', function () {
//         let sl = this.attributes[0].textContent.length;
//         let targetSectionID = this.attributes[0].textContent.slice(1, sl,);
//         let targetSection = document.getElementById(targetSectionID);
//         if (targetSection) {

//             id = setInterval(scrollVertically, 1, targetSection);
//         }
//     });
// }
// var contactSection = document.getElementById('contact');
// anchors[anchors.length - 1].addEventListener('click', function () {
//     var contactID = setInterval(function () {
//         if (contactSection.getBoundingClientRect().top <= window.innerHeight - 300) {
//             clearInterval(contactID);
//             return;
//         }
//         window.scrollBy(0, 50);
//     }, 1);
// });


// function scrollVertically(targetSection) {
//     let targetDestination = targetSection.getBoundingClientRect().top;
//     if (targetDestination <= 50) {
//         clearInterval(id);
//         return;
//     }
//     window.scrollBy(0, 50);
// }








// skill- bar 
let bars = document.getElementsByClassName("block2");
let skillSection = document.getElementById('skills');

function initilizeBarsWidth() {
    for (let bar of bars) {
        bar.style.width = 0 + '%';
    }
}
initilizeBarsWidth();
let animationDone = false;
function setColorAnimation() {
    if (!animationDone && skillSection.getBoundingClientRect().top <= window.innerHeight - 600) {
        animationDone = true;
        for (let bar of bars) {
            let skillBar = bar.attributes[1].value;
            // console.log(skillBar);
            let currentWidth = 0;
            let barID = setInterval(function () {
                if (currentWidth >= skillBar) {
                    clearInterval(barID);
                    return;
                }
                bar.style.width = currentWidth + "%";
                currentWidth++;
            }, 5);
        }
        console.log("hello");
    }
}

window.addEventListener('scroll', setColorAnimation);



// project-BhxBrowser

var upper = document.getElementsByClassName("upper");
var back = document.getElementsByClassName("back");
function upperChangeSize(){
    this.children[0].classList.toggle('sizeofupper');
}
for(var obj of back){
    obj.addEventListener("mouseenter", upperChangeSize);
    obj.addEventListener("mouseleave" , upperChangeSize)
}


// ham burger menu 


var hamBurger = document.querySelector('.mobile-menu') ;
var navList = document.querySelector('.nav-menu-list') ;

function activeContainer(){
    navList.classList.toggle('active');
}
hamBurger.addEventListener('click' , activeContainer)


// highlight border
var element = document.querySelector('.highlight');
var homePage = document.querySelector('#home-page');
var aboutPage = document.querySelector('#about-page');
var skillPage = document.querySelector('#skills-page');
var experiencePage = document.querySelector('#experience-page');
var  educationPage= document.querySelector('#education-page');
var portfolioPage = document.querySelector('#portfolio-page');
var contactPage = document.querySelector('#contact-page');

function src() {

    var pos = window.scrollY;
    if (window.innerWidth > 1050 && pos < 306) {
        aboutPage.classList.remove('highlight');
    } else if (window.innerWidth > 1050 && pos < 745) {
        aboutPage.classList.add('highlight');
        skillPage.classList.remove('highlight');
    } else if (window.innerWidth > 1050 && pos < 1459) {
        skillPage.classList.add('highlight');
        aboutPage.classList.remove('highlight');
        experiencePage.classList.remove('highlight') ;
    } else if (window.innerWidth > 1050 && pos < 2581){
        experiencePage.classList.add('highlight') ;
        skillPage.classList.remove('highlight');
        educationPage.classList.remove('highlight');
    } else if (window.innerWidth > 1050 && pos < 3499){
        educationPage.classList.add('highlight');
        experiencePage.classList.remove('highlight') ;
        portfolioPage.classList.remove('highlight');
    } else if (window.innerWidth > 1050 && pos < 4159){
        portfolioPage.classList.add('highlight');
        educationPage.classList.remove('highlight');
        contactPage.classList.remove('highlight') ;
    } else if(window.innerWidth > 1050 && pos < 4300){
        contactPage.classList.add('highlight');
        portfolioPage.classList.remove('highlight') ;
    }else{
        contactPage.classList.remove('highlight');
    }
}


setInterval(src, 10);
window.addEventListener('click', src);