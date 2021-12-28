$(document).ready(function() {
    $(".container-content-text").slideUp();

    $(".container-heading").click(function() {
        $(this)
            .next(".container-content-text")
            .slideToggle(1000)
            .siblings(".container-content-text")
            .slideUp(1000);
    });
});

const div1 = document.getElementById("content-1");
const div2 = document.getElementById("content-2");
const div3 = document.getElementById("content-3");
const div4 = document.getElementById("content-4");

const indicators = document.querySelectorAll(".angle i");

function click1() {
    indicators[0].classList.toggle("yes");
    indicators[1].classList.remove("yes");
    indicators[2].classList.remove("yes");
    indicators[3].classList.remove("yes");
}

function click2() {
    indicators[0].classList.remove("yes");
    indicators[1].classList.toggle("yes");
    indicators[2].classList.remove("yes");
    indicators[3].classList.remove("yes");
}

function click3() {
    indicators[0].classList.remove("yes");
    indicators[1].classList.remove("yes");
    indicators[2].classList.toggle("yes");
    indicators[3].classList.remove("yes");
}

function click4() {
    indicators[0].classList.remove("yes");
    indicators[1].classList.remove("yes");
    indicators[2].classList.remove("yes");
    indicators[3].classList.toggle("yes");
}

div1.addEventListener("click", click1);
div2.addEventListener("click", click2);
div3.addEventListener("click", click3);
div4.addEventListener("click", click4);