let pluse=document.querySelector("#pluse")
let minus=document.querySelector("#minus")
let nul=document.querySelector("#nul")
let reset=document.querySelector("#reset")

let Aidana =0

pluse.onclick=function (){
    Aidana++;
    nul.innerHTML=Aidana;
}
minus.onclick=function (){
    Aidana--;
    if(Aidana<1){
        Aidana=0;
    }
    nul.innerHTML=Aidana;
}
reset.onclick=function (){
    Aidana=0;
    if(Aidana<1){
        Aidana=0;
    }
    nul.innerHTML=Aidana
}