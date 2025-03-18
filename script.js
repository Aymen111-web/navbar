const navbarE1 = document.querySelector(".navbar");
const contaE2 = document.querySelector(".buttom-container");

console.log(navbarE1);



window.addEventListener("scroll", ()=>{
if(window.scrollY>contaE2.offsetTop-navbarE1.offsetHeight - 50 )
{
    navbarE1.classList.add("active");

}else{
    navbarE1.classList.remove("active");
}


});