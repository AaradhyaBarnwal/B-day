let button = document.querySelector(".btnn");
let cake = document.querySelector(".cake");


button.addEventListener("click", ()=>{
    cake.innerHTML = `<h1>You ate the cake </h1> <p>I hope all your dreams come true . And I hope you enjoyed it.</p>`
    button.innerText = "Next";
let h = false;
if (h === false) {
    button.addEventListener("click", () => {
        window.location.href= "./gifts.html";
    })
} else {
    console.log("Button text is not 'Next'");
}
});

