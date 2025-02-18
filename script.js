let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

let section = document.querySelector('section');
let navLinks = document.querySelector('header nav ul li a');

window.onscroll = () => {
    section.forEach(sec => {
        let top = window.scrollY; 
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height){
            navLinks.forEach(links => {
                links.classlist.remove('active');
                document.querySelector('header nav ul li a[href*=' + id + ' ]').classList.add(active)
            })
        }
            })
}

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}