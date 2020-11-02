// Navbar start
// Change nav style on scroll
window.addEventListener('scroll', event=>{
    let nav = document.querySelector('header');
    const links = [...document.getElementsByName("header nav ul li a")];
    
    if(window.scrollY >= 10){
        nav.classList.add('activeNav')
        // links.classList.add('activeNav');
        for (let i=0; i < links.lenght; i++){
        links[i].style.color = "black";
        links[i].style.fontSize = "400px";
        }
     }
     else{
         nav.classList.remove('activeNav');
        //  links.classList.remove('activeNav')
     }
})