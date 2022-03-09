const color = prompt("Выберите цвет: красный, желтый, зеленый");

switch(color) {
    case "красный":
        alert("Стоп!")
        break;
    case "желтый":
        alert("Ждем")
        break;
    case "зеленый":
        alert("Идем")
        break;
    default:
        alert("Надо выбирать!")
        break;
}
