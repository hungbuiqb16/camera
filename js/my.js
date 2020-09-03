var slideIndex = 1;
showSlides(slideIndex);
function plusSlides(n) {
    showSlides(slideIndex += n);
}
function currentSlide(n) {
    showSlides(slideIndex = n);
}
function showSlides(n) {
    var i;
    var slides = 8;
    var dots = document.getElementsByClassName("box");
    var captionText = document.getElementById("caption");
    if (n > slides) {slideIndex = 1}
    if (n < 1) {slideIndex = slides}
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    dots[slideIndex-1].className += " active";
    var a = dots[slideIndex-1].textContent;
    var result = a.substring(30);
    captionText.innerHTML = result;
}