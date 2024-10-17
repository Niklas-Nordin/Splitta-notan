let antalVanner = 0;
let totalsumma = 0;
let dricks = 0;



const btn = document.getElementById("btn");
btn.addEventListener("click", btnClicked);

function btnClicked() {
    antalVanner = document.getElementById("antal-vänner").value
    totalsumma = document.getElementById("totalsumma").value
    dricks = document.getElementById("dricks").value

    console.log("button clicked")

    const summa = Number(totalsumma) + Number(dricks);
    const deladSumma = summa / antalVanner + " kr";
    document.getElementById("vänner").innerHTML = deladSumma

    document.getElementById("form").style.display = "none";
    document.getElementById("btn").style.display = "none";
    document.getElementById("sida2").style.display = "block";
    
}