let sea = document.querySelector(".sea");
let text = document.querySelector(".txt");
let seasy = document.querySelector(".seasy");

let poet = ["when the sun dances on the sea, leaving a message through the waves,  for the moon through the waves music  that's when the sky meets the sea  two blues meant to be seperated becoming one just to play a song a song everyone knows  for some it's a token of love for some it's destruction but has the sky fades the blue turns into pink then black everything that was loud slowly becomes lost the sea begins to play to dance to love and the song slowly becomes louder and louder not every sea is in on the beach  some are within us ",
    "you were like the seashell connecting me to the sea's music, you were like the shore always bringing something joyful from the sea , you were like the little waves enough to make you giggle but never hurt , you were my bridge to the sea and I was just a person passing by","The golden shimmer in your eyes during the sun and that red hair flowing in the winds with a hint of the Earth , your shining smile the music of the sea , is all that the string of my hearts connect to even the change couldn't take away the part of me that's your a part of you that lives in me my moon my brown"
]

function yo(params) {
    setInterval(() => {
    seasy.classList.remove('seashell');
},6000);
}


sea.addEventListener("click",() => {  
    seasy.classList.add('seashell');
    let seaAudio = new Audio("./wave_3.mp3");
    seaAudio.play();
    console.log("Sea button clicked");

    text.innerText = poet[Math.floor(Math.random() * poet.length)];
    yo();
});


