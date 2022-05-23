// Hamburger menu code
var deskNavClass = document.querySelector('.navbar_menu');
var deskNavStyle = getComputedStyle(deskNavClass);

function openMenu() {
    if(deskNavStyle.display === 'none') {
        document.querySelector('#topnav').classList.add('hamburger_menu')
    } else {
        document.querySelector('#topnav').classList.remove('hamburger_menu')
        document.querySelector('#topnav').classList.add('navbar_menu')
    }
}