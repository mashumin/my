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

    // $(".mywork>div").each(function(index,obj){
    //     $(".mywork>div").eq(index).css("animation","lis 2s forwards 2s cubic-bezier(0.58, 0.64, 0.88, 1.22)" +index+"s")
    // })
   
    
    $(".erji").css({"right":"-85%","zIndex":"0"}).eq(0).css({"right":"0","zIndex":"1"})
    var num=1;
    var nex=0;

    $(".nav li").click(function(){
        var index=$(this).index();
        nex=index;
        $(".erji").eq(num).css({"right":"-87%","transform":"translate(0,0)","zIndex":"2"});
        $(".erji").eq(nex).css({"right":"0","transform":"translate(0,0)","zIndex":"3"});
        num=nex;
        $(".erji").eq(0).css("right","0")

        $(".erji")[1].addEventListener("webkitTransitionEnd",function(){
            $(".imgbox").css("transform","translate(0,0)")
        })
        $(".erji")[2].addEventListener("webkitTransitionEnd",function(){
            $(".myteg .dh").css({"transform":"rotate(360deg)","opacity":"1"})
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
    


    // 钟表

        var clock=document.querySelector(".clock");
        creatmark();
        var time=new Date();

        var tt=creackposite(8,60,"#fff",time.getHours()*30+time.getMinutes()*6/12);
        var ff=creackposite(6,100,"#fff",time.getMinutes()*6);
        var mm=creackposite(4,120,"#fff",time.getSeconds()*6);

        setInterval(function(){
            var time=new Date();
            console.log(time)
            tt.style.transform="translate("+(300-tt.w)/2+"px,"+(150-tt.h)+"px) rotate("+time.getHours()*30+time.getMinutes()*6/12+"deg)"
            ff.style.transform="translate("+(300-ff.w)/2+"px,"+(150-ff.h)+"px) rotate("+time.getMinutes()*6+"deg)"
            mm.style.transform="translate("+(300-mm.w)/2+"px,"+(150-mm.h)+"px) rotate("+time.getSeconds()*6+"deg)"
        },1000)
        function creatmark(){

            for(var i=0;i<60;i++){
                var w,h;
                if(i%5==0){
                    w=4;
                    h=8;
                }else{
                    w=2;
                    h=6;
                }
                var div=document.createElement("div");
                div.style.cssText=("width:"+w+"px;height:"+h+"px;background:#fff;position:absolute;top:0;left:0");
                div.style.transform="translate("+(300-w)/2+"px,0) rotate("+i*6+"deg)";
                div.style.transformOrigin="center 150px";
                clock.appendChild(div);
            }
        };
        function creackposite(w,h,c,a){
            var div=document.createElement("div");
            div.style.cssText="width:"+w+"px;height:"+h+"px;background:"+c+";position:absolute;top:0;left:0";
            div.style.transform="translate("+(300-w)/2+"px,"+(150-h)+"px) rotate("+a+"deg)";
            div.w=w;
            div.h=h;
            div.style.transformOrigin="center bottom";
            clock.appendChild(div);
            return div;
        }

        var t=setInterval(function(){

        })
})