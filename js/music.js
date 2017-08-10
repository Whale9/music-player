$(function(){


var x = $("audio")[0];

//播放按钮
$(".btn3").click(function(){
    if (x.paused){
        x.play();
        $(".btn3").css("background","url('images/btn4.png') no-repeat center");
    } else {
        x.pause()
        $(".btn3").css("background","url('images/btn3.png') no-repeat center");
    }
});

    var music = new Array();
    music = ["马雨阳 - 离家的少年","孙子涵 - 回忆那么伤","张晓棠 - 苏幕遮","纵贯线 - 给自己的歌 (Live) - live"];//歌单
    var num = 0;
    var name = $("#name");


    <!--上一首-->
    var btn1 = $("#m-prev");
    btn1.click(function (){
        num = (num + 3)%4;
        x.src = "images/"+music[num]+".mp3";
        name.html(music[num]);
        x.play;
    });

    <!--下一首-->
    var btn2 = $("#m-next");
    btn2.click(function(){
        num = (num +1)%4;
        x.src = "images/"+music[num]+".mp3";
        name.html(music[num]);
        x.play();
    });

//进度条
setInterval(present,500)
function present(){
    var length = x.currentTime/x.duration*100; //计算进度条百分比
    $(".progressbar").width(length+"%");
    //自动下一首
    if(x.currentTime == x.duration){
        num = (num +1)%4;
        x.src = "images/"+music[num]+".mp3";
        name.html(music[num]);
        x.play();
    }

}
setInterval(times,1000)
function times(){
    var l1 = x.currentTime;
    var m = parseInt(l1/60);
    var s = parseInt(l1%60);
    if(s<10){
        s= "0"+s;
    }
    $(".time1").html('0'+m+':'+s);
}
setInterval(time2,0)
 function time2(){
     var l2 = x.duration;
     var m = parseInt(l2/60);
     var s = parseInt(l2%60);
     $(".time2").html('0'+m+':'+s);
 }



});