$(function(){
    $(".imgbox div").css("opacity","0").eq(0).css("opacity","1");

    var nex=0;
    var t=setInterval(move,3000)
    function move(){
        nex++;
        if(nex>4){
            nex=0;
        }
        $(".imgbox div").css("opacity","0").eq(nex).css("opacity","1");
    }
    $(".imgbox div").hover(function(){
        clearInterval(t);
    },function(){
        t=setInterval(move,3000)
    })


    $(".jianjie p").eq(0).css("animation","p 2s forwards cubic-bezier(0.58, 0.64, 0.88, 1.22) 3s")
    $(".jianjie p").eq(1).css("animation","p 2s forwards cubic-bezier(0.58, 0.64, 0.88, 1.22) 3s")
    $(".jianjie p").eq(2).css("animation","p 2s forwards 1s cubic-bezier(0.58, 0.64, 0.88, 1.22) 3s")
    $(".jianjie p").eq(3).css("animation","p 2s forwards 2s cubic-bezier(0.58, 0.64, 0.88, 1.22) 3s")
    $(".jianjie p").eq(4).css("animation","p 2s forwards 3s cubic-bezier(0.58, 0.64, 0.88, 1.22) 3s")
    $(".jianjie p").eq(5).css("animation","p 2s forwards 4s cubic-bezier(0.58, 0.64, 0.88, 1.22) 3s")
    $(".jianjie p").eq(6).css("animation","p 2s forwards 5s cubic-bezier(0.58, 0.64, 0.88, 1.22) 3s")
    $(".jianjie p").eq(7).css("animation","p 2s forwards 6s cubic-bezier(0.58, 0.64, 0.88, 1.22) 3s");

    $(".mywork>div").hover(function(){
        var index=$(this).index();
        // alert(index)
        $(".zhaoz a").eq(index).css("transform","translate(0,0)");
        // $(".mywork>div img").css("transform","scale(0.5,0.5)")
    },function(){
        var index=$(this).index();
        // alert(index)
        $(".zhaoz a").eq(index).css("transform","translate(0,300px)");
    })


    $(".erji").css("right","-85%").eq(0).css("right","0")
    var num=1;
    var nex=0;

    $(".nav li").click(function(){
        var index=$(this).index();
        nex=index;
        $(".erji").eq(num).css({"right":"-87%","transform":"translate(0,0)"});
        $(".erji").eq(nex).css({"right":"0","transform":"translate(0,0)"});
        num=nex;
        $(".erji").eq(0).css("right","0")

        $(".erji")[nex].addEventListener("webkitTransitionEnd",function(){

        })
    })
    // 音乐

    document.querySelector(".clos").onclick=function(){
        document.querySelector(".mus").pause();
        document.querySelector(".clos").style.display="none";
        document.querySelector(".open").style.display="block";
    }
    document.querySelector(".open").onclick=function(){
        document.querySelector(".mus").play();
        document.querySelector(".clos").style.display="block";
        document.querySelector(".open").style.display="none";
    }

    var audio=document.querySelector("audio");
    var canvas=document.querySelector("canvas");
    var cobj=canvas.getContext("2d");
    var audioObj=new AudioContext();
    var sources=audioObj.createMediaElementSource(audio);  //音频源
    var analyser=audioObj.createAnalyser();                //分析器
    //音频源-分析器-与输出设备连接
    sources.connect(analyser);
    analyser.connect(audioObj.destination);

    setInterval(function(){
        cobj.clearRect(0,0,300,250);
        var array=new Uint8Array(analyser.frequencyBinCount);
        analyser.getByteFrequencyData(array);
        var rate=array.length/canvas.width;
        cobj.save();
        cobj.translate(0,300);
        cobj.beginPath();
        for(var i=0;i<array.length;i++){
            cobj.lineTo(i,-array[i]);
        }
        cobj.strokeStyle="#fff";
        cobj.lineWidth=2;
        cobj.stroke();
        cobj.restore();
    },40)
})