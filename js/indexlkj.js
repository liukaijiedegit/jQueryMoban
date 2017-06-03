/**
 * Created by 49580 on 2017/5/31.
 */
var slide =document.getElementsByClassName("slide-lkj");
var wid =document.documentElement.clientWidth;
var hei=document.documentElement.clientHeight;
console.log(slide)
for (var i=0;i<slide.length;i++)
{

    //slide[i].style.width=wid+"px";
    slide[i].style.height=hei-65+"px";
    // console.log(atr.style.width);
}
var slideb =document.getElementsByClassName("slide-bj");


var body =document.getElementsByName("body")[0]

    ;(function () {
    $(".bg-load").css({
        width: document.documentElement.clientWidth || document.body.clientWidth,
        height: document.documentElement.clientHeight || document.body.clientHeight
    });
    setTimeout(function () {
        $(".bg-load").css({
            opacity: "0",
            display: "none"
        });
        $(".content-load").css({
            opacity: "1",
            display: "block"
        })
    }, 2000)
    setTimeout(function () {
        //body.style.overflow-y=scoll;

        $(".navbar-top-lkj").css({
            opacity: "1",
            display: "block"
        })
        $("body").css({

            overflowY: "scroll"

        })
    }, 2000)

})();


$("a").onclick=function(){
    $(".bg-load").css({
        width: document.documentElement.clientWidth || document.body.clientWidth,
        height: document.documentElement.clientHeight || document.body.clientHeight
    });
    setTimeout(function () {
        $(".bg-load").css({
            opacity: "0",
            display: "none"
        });
        $(".content-load").css({
            opacity: "1",
            display: "block"
        })
    }, 2000)
    setTimeout(function () {

        $(".navbar-top-lkj").css({
            opacity: "1",
            display: "block"
        })
        $("body").css({

            overflowY: "scroll"

        })
    }, 2000)

}
