const hamburger=document.getElementById("hamburger");
const close=document.getElementById("close");
const nav=document.getElementById("nav");

hamburger.addEventListener("click",()=>{
    nav.style.display="block";
    close.style.display="block";
    hamburger.style.display="none";
});

close.addEventListener("click",()=>{
    nav.style.display="none";
    close.style.display="none";
    hamburger.style.display="block";
})