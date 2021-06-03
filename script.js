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

var back = document.getElementsByClassName("back");

for (var i = 0; i < back.length; i++) {

    back[i].addEventListener("mouseenter", function () {
        if (window.innerWidth >= 550) {
            this.children[0].style.top = "40px";
            this.children[0].style.left = "-60px";
            this.children[0].style.height = "120px";
            this.children[0].style.width = "120px";
            this.children[0].style.backgroundSize = "120px 120px";
        } else {
            // // this.children[1].style.transform = "rotateY(90deg)";
            // this.children[1].style.width = "0px";
            // this.children[1].style.backgroundSize = "0px 200px";

        }

    });
    back[i].addEventListener("mouseleave", function () {
        if (window.innerWidth >= 550) {
            this.children[0].style.top = "0px";
            this.children[0].style.left = "0px";
            this.children[0].style.height = "200px";
            this.children[0].style.width = "400px";
            this.children[0].style.backgroundSize = "400px 200px";
        } else {

            // // this.children[1].style.transform = "rotateY(0deg)";
            // this.children[1].style.backgroundSize = "400px 200px";
            // this.children[1].style.width = "400px";

        }



    });
}

setInterval(function () {
    if (window.innerWidth < 550) {
        for (var obj of back) {
            
            obj.children[0].style.height = "200px";
            obj.children[0].style.width = "350px";
            obj.children[0].style.backgroundSize = "350px 200px";
        }
    }
}, 500);





