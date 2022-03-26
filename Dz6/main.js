const q="1";
const w="2";
const e="3";
const r="4";
const t="5";

const vsevmeste={
    ...q,w,e,r,t,
}
console.log(vsevmeste)

const obj={
    key1:"Aidana",
    key2:"Aidana",
    key3:"Aidana",
    key4:"Aidana",
    key5:"Aidana",
}
const obj2={
    ...obj,
    key11:"Aidana",
    key22:"Aidana",
    key33:"Aidana",
}
console.log(obj2)

const list = [];

const name = document.querySelector("#name")
const knopka = document.querySelector("#knopka")

function render() {
    const MainDiv = document.createElement('div');
    MainDiv.setAttribute("class", "list");
    for(let i = 0; i < list.length; i++ ) {
        const divList = document.createElement('div');
        divList.setAttribute("class", "block");
        const p = document.createElement("p");
        p.innerHTML = list[i].text;
        divList.append(p);
        MainDiv.append(divList);
    }

    const form = document.querySelector(".inner");

    document.querySelector(".list").remove();
    form.append(MainDiv)

}
knopka.onclick = function() {
    const obj = {
        id: list.length,
        text: name.value+" hello"
    }
    this.append(list);
    list.push(obj);
    render()
}


