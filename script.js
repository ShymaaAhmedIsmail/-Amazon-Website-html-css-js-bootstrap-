console.log("jjjjjjjjjj")

var count = 0;
var click = document.querySelector(".click");

click.addEventListener("click", function () {
    console.log("clickkkk")
    count++;

    count = count % 2;
    console.log(count)

    if (count == 1) {
        document.querySelector(".div2").style.display = "block"
        click.innerHTML = "See less"
        
        
      


     }

    else {

        document.querySelector(".div2").style.display = "none"
        click.innerHTML = "See All 14 Categories"
      
    }
});

let count2=0;
var click2 = document.querySelector(".click2");

click2.addEventListener("click", function () {
    console.log("clickkkk")
    count2++;

    count2 = count2 % 2;
    console.log(count2)

    if (count2 == 1) {
        document.querySelector(".div3").style.display = "block"
        click2.innerHTML = "See less"
     }

    else {

        document.querySelector(".div3").style.display = "none"
        click2.innerHTML = "See more"
    }
   
})










