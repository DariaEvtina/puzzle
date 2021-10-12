
var kellekord = "tuhik.png";
function hiireVajutus(pilt){
    pilt.src = kellekord;

}

function pildiValik(pilt){
    kellekord = pilt.src;
    document.getElementById("pilt12").src = kellekord;
}

function checkWin()
{
    var i;
    var score = 0;
    for (i = 1; i < 10; i++)
    {
        var piltX = document.getElementById("pilt"+i).src;
        if(document.getElementById("pilt"+i).src === piltX)
        {
            document.getElementById("pilt1"+i).removeAttribute("onclick");
            document.getElementById("pilt"+i).removeAttribute("onclick");
            score++;
            document.getElementById("pilt1"+i).style.visibility = 'hidden';
        }
        else{

        }

        if(score === 9)
        {
            alert("tubli");
        }
    }
}