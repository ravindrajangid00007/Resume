'use strict'
{

    let anchor = document.querySelectorAll('.nav-menu a');
    let id;
    for (let i = 0; i < anchor.length; i++) {
        anchor[i].addEventListener('click', function (event) {
            event.preventDefault();
        }
        );

        anchor[i].addEventListener('click', function () {
            let sl = this.attributes[0].textContent.length;
            let targetSectionID = this.attributes[0].textContent.slice(1, sl,);
            let targetSection = document.getElementById(targetSectionID);
            if (targetSection) {

                id = setInterval(scrollVertically, 0.5, targetSection);
            }
        });
    }

    function scrollVertically(targetSection) {
        let targetDestination = targetSection.getBoundingClientRect().top;
        if (targetDestination <= 0) {
            clearInterval(id);
            return;
        }
        window.scrollBy(0, 100);
    }








    // skill- bar 
    let bars = document.getElementsByClassName("block2");

    function initilizeBarsWidth() {
        for (let bar of bars) {
            bar.style.width = 0 + '%';
        }
    }

    initilizeBarsWidth();
    function setColorAnimation() {

        for (let i = 0; i < bars.length; i++) {
            let skillBar = bars[i].attributes[1].value;
            console.log(skillBar);
            bars[i].style.width = skillBar + "%";
        }
    }

    function isSectionSeen(target) {
        if (target <= 0) {
            return true;
        } else {
            return false;
        }
    }

    let skillSection = document.getElementById('skills');
    let skillSeenID = setInterval(function () {
        if (isSectionSeen(skillSection.getBoundingClientRect().top)) {
            console.log("skill-section-seen");
            setColorAnimation();
            clearInterval(skillSeenID);
            return;
        }
    }, 1000);
}
