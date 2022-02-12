
var allWord = [

    "bizzy","quick","crazy","bonze","chuck",
    "joker","chick","buffy","knock","first",
    "zingy","banjo","bonza","comix","close",
    "table","robot","mouse","phone","bored"
];


rndWord = allWord[Math.floor(Math.random()* allWord.length)];
document.write(rndWord);
numGuess = 6;
num = 1;

function doGuess() {
    numCorrect = 0;
    hist = document.getElementById("hist");
    elmGuessWord = document.getElementById("guestWord")
    guestWord = elmGuessWord.value;
    s = "<div>";
    for(i = 0; i < guestWord.length; i++){
        if(rndWord[i]==guestWord[i]){
            s += "<span class ='green'>" + guestWord[i] + "</span>";
            numCorrect++;
        }else{
            c=0;
            for(j = 0; j < guestWord.length; j++){
                
                if(guestWord[i]==rndWord[j]){
                    s +="<span class ='yellow'>"+guestWord[i] + "</span>";
                    break;
                }else{
                    c++;


                }
            }
            if(c== guestWord.length){
                s += "<span class ='red'>"+ guestWord[i] + "</span>";
            }

        }
    }
    s += "</div>";
    hist.innerHTML += s;
    num++;
    elmGuessWord.select();
    if(numCorrect == 5) hist.innerHTML +="Win!!";
    if(num > 6 && numCorrect != 5) hist.innerHTML += "Game Over!!!";
};


   






