
var kellekord="png/x.png", pildid;
var lopp=false;
function changeImg(pilt){
    pilt.src=kellekord;
    if (vyidukontroll()){
        alert("Sa võitsid!");
        lopp=true;

    }
    if (kellekord==="png/x.png")
    {
        kellekord="png/o.png";
    }
    else{
        kellekord="png/x.png";
    }
    if (ruududKasutatud()){
        lopp=true;
        alert("mäng on läbi");

    }
}
function ruududKasutatud(){
    pildid=document.images;
    //проверяет все картинки и возращает false если найдет пустю картинку
    for (var i=0; i<pildid.length; i++)
    {
        if (pildid[i].src.split("/").pop()==="tuhik.png"){
            return false;
            //split()-делает массив из пути файлов
            //pop()- выбирает из массива последнее значение или имя файла
        }
    }
    return true;
}
//определяем имя файла
function sisu(nr){
    var fnimi=document.getElementById("pilt"+nr).src;
    fnimi=fnimi.split("/").pop();
    return fnimi;
}
function kontrollsisu(a,b,c, sisulopp){
    //a,b,c- номера картинок
    //sisulopp - адрес нужной картинки
    if (sisu(a)===sisulopp && sisu(b)===sisulopp && sisu(c)===sisulopp){return true;}
    else{return false;}
}
function vyidukontroll(){
    if (kontrollsisu(1,2,3,kellekord)){return true;}
    if (kontrollsisu(4,5,6,kellekord)){return true;}
    if (kontrollsisu(7,8,9,kellekord)){return true;}
    if (kontrollsisu(1,4,7,kellekord)){return true;}
    if (kontrollsisu(2,5,8,kellekord)){return true;}
    if (kontrollsisu(3,6,9,kellekord)){return true;}
    if (kontrollsisu(1,5,9,kellekord)){return true;}
    if(kontrollsisu(3, 5, 7, kellekord)){return true;}
    return false;

}