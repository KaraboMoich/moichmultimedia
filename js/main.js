//-------------------------Functionality to menu----------------------//

var btnMenu = document.getElementById("btn-menu")
var sideNav = document.getElementById("side-nav")
var menu = document.getElementById("menu")

sideNav.style.right = "-220px"; 

btnMenu.onclick = function(){
    if(sideNav.style.right == "-220px"){
        sideNav.style.right = "0";
        menu.src = "images/close.png";
    }
    else{
        sideNav.style.right = "-220px";
        menu.src = "images/menu.png";
    }
}

var scroll = new SmoothScroll('a[href*="#"]', {
	speed: 1000,
	speedAsDuration: true
});
//-------------------------Functionality to menu ends here----------------------//
