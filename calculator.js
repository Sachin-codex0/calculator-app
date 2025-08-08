let btns = document.querySelectorAll(".box");
let calScreen = document.querySelector(".screen");
let output = document.querySelector(".output");
let outStr = "";
let calStr = "";

for (let btn of btns) {
    btn.addEventListener("click", function () {
        calScreen.style.top = "-10px";
        calScreen.style.opacity = "1";
        calScreen.style.transition = "all 0s linear 0s";
        // output.innerText = ;
        output.style.color = "rgb(160,177,177)";
        output.style.fontSize = "20px";
        output.style.top = "23px";
        calStr = calStr + this.innerText;
        calScreen.innerText = calStr;
        outStr = outStr + this.getAttribute("id");
        for (let i = 0; i < outStr.length; i++) {
            if (outStr[i] === "+" || outStr[i] === "-" || outStr[i] === "/" || outStr[i] === "*") {
                if (outStr[i + 1] == 1 || outStr[i + 1] == 2 || outStr[i + 1] == 3 || outStr[i + 1] == 4
                    || outStr[i + 1] == 5 || outStr[i + 1] == 6 || outStr[i + 1] == 7 || outStr[i + 1] == 8
                    || outStr[i + 1] == 9 || outStr[i + 1] == 0
                ) {
                    output.innerText = eval(outStr);
                }
            }
        }
        this.classList.add("shadow");
        setTimeout(function () {
            btn.classList.remove("shadow");
        }, 250);

    });
}

let eqlBtn = document.querySelector(".equal");
eqlBtn.addEventListener("click", function () {
    calStr[0] = outStr;
    calScreen.style.transition = "all 0.5s linear 0s";
    calScreen.style.top = "-50px";
    calScreen.style.opacity = "0";
    output.style.color = "azure";
    output.style.fontSize = "25px";
    output.style.top = "3px";
    this.classList.add("shadow");
    setTimeout(function () {
        eqlBtn.classList.remove("shadow");
    }, 250);
});

let clearBtn = document.querySelector(".clearBtn");
clearBtn.addEventListener("click", function() {
    calStr = "";
    outStr = "";
    calScreen.innerText = "";
    output.innerText = "";
})