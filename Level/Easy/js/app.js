let count=0;
let timecounter=60;

setInterval(() => {
    if(timecounter==0){
       alert("Total Score :"+ count +"\n Reload the tab to play again ")
    }else{
        document.getElementById("currtimerid").innerHTML=timecounter--;
    }
}, 1000);


function hideBird(clicked_id){
    document.getElementById("currscoreid").innerHTML= ++count;
    document.getElementById("shoot").play();
   document.getElementById(clicked_id).style.display="none";
   let x = Math.floor((Math.random()*10)+1);
   setTimeout(() => {
    document.getElementById(clicked_id).style.display="block";
   },x*1000);
}