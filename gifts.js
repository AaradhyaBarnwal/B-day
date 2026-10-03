let card = document.querySelectorAll(".column");

card.forEach((card)=>{
    card.addEventListener("click", ()=>{
        window.location.href = "poet.html";
    })
})