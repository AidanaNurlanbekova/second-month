const color= prompt("Красный, желтый, зеленый - выбирай себе любой")
switch (color){
    case"red":
        document.querySelector(".red").style.backgroundColor=color
        console.log("STOP")
        break
    case"yellow":
        document.querySelector(".yellow").style.backgroundColor=color
        console.log("WAIT")
        break
    case"green":
        document.querySelector(".green").style.backgroundColor=color
        console.log("GO")
        break
    default:
        alert("DON'T WORK")
        break
}