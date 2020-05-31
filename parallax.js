var shoe1 = document.getElementById("shoe1");
var shoe2 = document.getElementById("shoe2");
var shoe3 = document.getElementById("shoe3");
var shoe4 = document.getElementById("shoe4");

window.addEventListener('scroll',function(){
    var value = window.scrollY;
    shoe1.style.right = value * 0.5 + 'px';
    shoe2.style.right = value * 0.5 + 'px';
    shoe3.style.right = value * 0.5 + 'px';
    shoe4.style.right = value * 0.5 + 'px';
})