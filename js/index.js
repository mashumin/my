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
        $(".erji").eq(num).css({"right":"-87%","transform":"translate(0,0)","transition":"all 2s cubic-bezier(0.58, 0.64, 0.88, 1.22)"});

        $(".erji").eq(nex).css({"right":"0","transform":"translate(0,0)","transition":"all 2s cubic-bezier(0.58, 0.64, 0.88, 1.22)"});
    num=nex;
        $(".erji").eq(0).css("right","0")
    })

    // 音乐
    // var aduio=$(".mus");
    // console.log(aduio)
    // $(".buts").click(function(){
    //     $(".mus").pause();
    // })

    document.querySelector(".buts").onclick=function(){
        document.querySelector(".mus").pause();
    }
    
})