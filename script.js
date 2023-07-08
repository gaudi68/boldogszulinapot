let button = document.getElementById("emoji");
let clicks = document.getElementById("clicks");
let text = document.getElementById("text");
let number = 0;

button.addEventListener("click", () => {    
    number++;
    clicks.innerText = number;
    if (number==0)
    {
        text.innerText = "Annyiszor nyomj az ajándékra, ahány éves vagy!";
        button.innerText = "🎁";
    }    
    if (number==72)
    {        
        text.innerText = "Boldog Születésnapot, Erzsi! ❤️❤️❤️";
        button.innerText = "🎂";
        number = -1;
    }
});
clicks.addEventListener("click", () => {
    number=0;
    clicks.innerText = number;
});