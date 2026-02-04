const cointainer=document.querySelectorAll(".cointainer");
cointainer.forEach((el)=>{
    el.lastElementChild.style.display="none";
});

cointainer.forEach((el)=>{el.firstElementChild.addEventListener("click",()=>{
    el.lastElementChild.style.display=
     el.lastElementChild.style.display===  "none" ? "block" :"none";
    
}) ;
});

