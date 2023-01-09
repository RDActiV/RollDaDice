
let username = "";
function submit_form(){
    const x = document.getElementById("usernameIp").value;
    event.preventDefault();
    username = x;
    var popup = document.getElementById("popup");
    let pattern = /[^a-z0-9\_\@]/gi;
    
    
    
    let lengthOK = false;
    let statusOK = false;
    if(username.length > 4 && username.length < 15){
        lengthOK = true;
        popup.style.opacity = "100%";
    }
    
    if(username.match(pattern)+false == 0){
        statusOK = true;
        popup.style.opacity = "100%";
    }
    
    if(statusOK == true && lengthOK == true){
        document.getElementById("userN").innerHTML = username;
        document.getElementById("homePage").style.display = 'none';
    }
    
}
function genRanNum(min, max){
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}
function changeImg(randomNumber){
    var img = document.getElementById("diceImg");
    img.src = "images/1x/"+randomNumber+".png";

}
let executed = false;
function timer(){
    
    var time = document.getElementById("countDown");

    let timeleft = 20;
    let id = setInterval(dis,1000);
    function dis(){
        if(timeleft == 0){
            clearInterval(id);
        }else{
            time.innerHTML = timeleft-1;
            timeleft--;
        }
    }
    executed = true
}
function rollAgain(){
    const randomNumber = genRanNum(1,6);
    changeImg(randomNumber);
    scoreChg(randomNumber);
    if(!executed){
        timer();
    }
    let id_2 = setTimeout(btnDisable, 20000);
    let status = false;
    function btnDisable(){
        if(status == true){
            clearTimeout(id_2);
        }else{
            console.log(id_2);
            document.getElementById("rollButton").disabled = true;
            document.getElementById("rollButton").style.backgroundColor = 'gray';
            status = true;
        }
    }
    
}
var score = 0;
function scoreChg(num){
    score+=num;
    document.getElementById("score").innerHTML = score;
}
function timechange(time){
    document.getElementById("countDown").innerHTML = time;
}

var fun_display = document.getElementById("afterGame");
fun_display.style.display = 'none';

function playAgain(){
    let id_3 = setTimeout(dis_fun, 20000);
    let status = false;
    function dis_fun(){
        if(status == true){
            clearTimeout(id_3);
        }else{
            console.log(id_3);
            fun_display.style.display = 'flex';
            status = true;
        }
        
    }
}
function reset_fun(){
    document.getElementById("score").innerHTML = 0;
    document.getElementById("countDown").innerHTML = 20;
    
    document.getElementById("rollButton").disabled = false;
    document.getElementById("rollButton").style.backgroundColor = 'crimson';
    
    score = 0;
    executed = false;
    document.getElementById("afterGame").style.display = 'none';
    

}
function newuser(){
    location.reload()
}