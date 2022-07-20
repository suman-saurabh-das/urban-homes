let lastScrollTop = 0;
let navbar = document.getElementById("navigation-bar");
window.addEventListener("scroll", function() {
    let scrollTop = this.window.pageYOffset || this.document.documentElement.scrollTop;
    if(scrollTop > lastScrollTop){
        navbar.style.top = "-8rem";
    }
    else{
        navbar.style.top = "0";
    }
    lastScrollTop = scrollTop;
})

const navLinks = document.querySelectorAll('.nav-item')
const menuToggle = document.getElementById('customnavbarMenu')
const bsCollapse = new bootstrap.Collapse(menuToggle)
navLinks.forEach((l) => {
    l.addEventListener('click', () => { bsCollapse.toggle() })
})