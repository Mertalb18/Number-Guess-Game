// ! Yakın-Uzak Oyunu

let number = 50;
let tries = 3;

let btn = document.getElementById("btn-guess");
let result = document.getElementById("result");
let retry = document.getElementById("retry");

let winner = document.querySelector(".pyro");
let loser = document.querySelector(".error");

btn.onclick = function () {
    let guess = document.getElementById("guess");
    let calculate = Math.abs(parseInt(number) - parseInt(guess.value));

    while (tries > 0 || calculate > 0) {
        if (tries > 0 && calculate > -1) {
            tries--;
            game();
            break;
        }

        else {
            result.style.display = "none";
            retry.style.display = "none";
            guess.style.display = "none";
            btn.style.display = "none";
            loser.style.display = "flex";

        }
        break;
    }

    // while (tries > 0 || calculate > 0) {
    //     tries--;
    //     game();

    //     break;
    // }

    // result.innerHTML = "Kaybettiniz.";
    // retry.innerHTML = "Kalan deneme: " + tries;

    // if (tries > 0) {
    //     tries --;
    //     game();
    // }

    // else {
    //     result.innerHTML = "Kaybettiniz.";
    //     retry.innerHTML = "Kalan deneme: " + tries;
    // }

    function game() {
        if (calculate == 0) {
            result.innerHTML = "Tebrikler, doğru tahmin."
            retry.innerHTML = "Kalan deneme: " + tries;
            winner.style.display = "block";
            document.querySelector("body").style.backgroundColor = "lightgrey";
            btn.disabled = true;
        }

        else if (calculate <= 10) {
            result.innerHTML = "Çok yakın.";
            retry.innerHTML = "Kalan deneme: " + tries;
        }

        else if (calculate <= 20) {
            result.innerHTML = "Yakın.";
            retry.innerHTML = "Kalan deneme: " + tries;
        }

        else if (calculate <= 30) {
            result.innerHTML = "Uzak.";
            retry.innerHTML = "Kalan deneme: " + tries;
        }

        else if (calculate > 30) {
            result.innerHTML = "Çok uzak.";
            retry.innerHTML = "Kalan deneme: " + tries;
        }

        else {
            result.innerHTML = "Hatalı değer girdiniz.";
            retry.innerHTML = "Kalan deneme: " + tries;
        }
    }
}