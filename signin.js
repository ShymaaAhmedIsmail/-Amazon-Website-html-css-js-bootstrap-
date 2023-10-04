// sign in 
let count3=0;
let click3 = document.querySelector(".click3");

click3.addEventListener("click", function () {
    console.log("clickkkk")
    count3++;

    count3 = count3 % 2;
    console.log(count3)

    if (count3 == 1) {
        document.querySelector(".div4").style.display = "block"
       
     }

    else {

        document.querySelector(".div4").style.display = "none"
       
    }
   
})

