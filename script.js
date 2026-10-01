let crd = document.querySelector("#card1");
let h1 = document.querySelector(".h1");
let p = document.querySelector(".msg");
let btn = document.querySelector(".btn");

crd.addEventListener("click",()=>{
    crd.style.width = "700px"; 
    crd.style.fontFamily = "Rubik Puddles"; 
    crd.style.color = "rgb(50, 52, 135)";
    h1.innerText = "Happy Birthday";
    p.innerText = "Happiest Birthay, I hope all your wishes come true. Every country you wanted to visit, every little dream may come true. Your each day will be filled with sunshines and full of happiness . I hope you meet wonderful people in your life with whom you can share a piece of your soul. Every little sorrow word I said to you till today I am sorry for that. I wish I can write these small letters to you every birthday. In this 15th Birthday I hope every obstacle you faced till now would have taught you a lesson , every bad memory would have been healed if not I hope you do has quickly as possible. Every candle in your cake may reprensent the dreams that are gonna be true in future. May the sweetness of cake always remain by your side everytime you fall i wish there will be someone to pick you up if it not me then someone better. I know I am not your bestfriend but just a close friend but I still truly wish to stay in every birthday of your life good or bad doesn't matter just you and a piece of cake and a jar full of memories instead of toffees just like our schooltime now sharing those toffes those memories with each path we meet and encounter."
})

btn.addEventListener('click', ()=>{
    window.location.href = "cake.html";
})