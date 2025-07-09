
function hamburgerClick() {
    document.getElementById('close').style.display = "block";
    document.getElementById('hamb').style.display = "none";
    document.querySelector('header').style.backgroundImage = "linear-gradient(hsl(0, 0.00%, 0.00%), hsl(0, 0%, 0%, 1))"
    document.querySelector('header h1').style.color = "hsl(0, 0%, 0%)"
    document.querySelector('header h1').style.border = "hsl(0, 0%, 0%)"
    document.querySelector('nav ul').style.display = "inline";
}

function closeClick() {
    document.getElementById('close').style.display = "none";
    document.getElementById('hamb').style.display = "block";
    document.querySelector('header').style.backgroundImage = "url(images/mobile/image-hero.jpg)"
    document.querySelector('header h1').style.color = "hsl(0, 0%, 100%)"
    document.querySelector('header h1').style.border = "solid 2px hsl(0, 0%, 100%)"
    document.querySelector('nav ul').style.display = "none";
}

const mobileIcons = document.querySelector('.mobileIcons');
const hamburger = document.createElement('img');
hamburger.id = 'hamb';
hamburger.src = 'images/icon-hamburger.svg'

const close = document.createElement('img');
close.id = 'close';
close.src = 'images/icon-close.svg';


const breakpoint = 720;

function resizer() {
    const currentWidth = window.innerWidth;
    const hamburgerImage = document.getElementById('hamb')
    if(currentWidth <= breakpoint) {
        if(!hamburgerImage) {
            mobileIcons.append(hamburger, close)
            document.querySelector('nav ul').style.display = "none";
            document.querySelector('header').style.backgroundImage = "linear-gradient(hsla(0, 0%, 0%, 0.25), hsl(0, 0%, 0%, 0.25)), url(images/mobile/image-hero.jpg)"        
            hamburger.addEventListener('click', hamburgerClick)
            close.addEventListener('click', closeClick)
        }
    } else{
        if (hamburgerImage) {
            closeClick()
            document.querySelector('nav ul').style.display = "flex";
            document.querySelector('header').style.backgroundImage = "linear-gradient(hsla(0, 0%, 0%, 0.35), hsl(0, 0%, 0%, 0.35)), url(images/desktop/image-hero.jpg)"
            hamburger.removeEventListener('click', hamburgerClick)
            close.removeEventListener('click', closeClick)
            hamburger.remove()
            close.remove() 
        }
    }
}

window.addEventListener('resize', resizer)

resizer()