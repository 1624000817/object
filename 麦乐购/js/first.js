$(function() {
    /*首页顶部关闭*/
    $(".adTop span").click(function () {
        $(".adTop").css("display", "none");
    });
    /*遮罩层*/
    var $h = $(window).height();
    $(".mask").height($h);
    $(".cart-nav").height($h);
    $(".model i").click(function () {
        $(".mask").hide();
        $(".model").hide();
    });
        /*搜索*/
    $("#search").keyup(function () {
        var _seaV=$("#search").val();
        $.ajax({
            url:"https://suggest.taobao.com/sug?code=utf-8&callback=?",
            type:"post",
            dataType:"jsonp",
            data:{
                q:_seaV,
            },
            success:function (response) {
                /*console.log(response),*/
                $(".concent").empty();
                $.each(response.result,function (index,value) {
                    var $li=$("<li>");
                    $li.text(value[0]);
                    $(".concent").css("display","block").append($li);
                    var $span=$("<span>");
                    $span.text("约"+value[1]+"件商品");
                    $($li).append($span);

                });
            }
        });
    });
    
    /*头部搜索*/
    $("#sousuo").keyup(function () {
        var _souV=$("#sousuo").val();
        $.ajax({
            url:"https://suggest.taobao.com/sug?code=utf-8&callback=?",
            type:"post",
            dataType:"jsonp",
            data:{
                q:_souV,
            },
            success:function (response) {
                /*console.log(response),*/
                $(".flysearch ul").empty();
                $.each(response.result,function (index,value) {
                    var $li=$("<li>");
                    $li.text(value[0]);
                    $(".flysearch ul").css("display","block").append($li);
                    var $span=$("<span>");
                    $span.text("约"+value[1]+"件商品");
                    $($li).append($span);

                });
            }
        });
    });
   
   
   
    /*未来元素li悬浮改变背景颜色*/
    $(".concent").on("mouseover","li",function () {
        $(this).css("background-color","#f3f3f3")
    }).on("mouseout","li",function () {
        $(this).css("background-color","#fff")
    });

    /*导航列表悬浮动画*/
    $(".nav-ind #ul-list li").mouseover(function () {
        var _left=$(this).offset().left;
        var _w=$(this).children("a").width();
        $(".nav-ind ul li.onBg").css("width",_w+"px").animate({"left":(_left-265)+"px"},10)
        $(".nav-ind ul li.onBg div.up").animate({"left":(_w-4)/2+"px"},10);
    })
   
   
   /*首页下拉列表*/
  $("div.mygou").hover(function(){

  	$("div.mygou").css({"border":"1px solid #ccc","border-bottom":"none","background-color":"#fff"});
  	$("div.mygou").children("ul").slideDown();
  },function(){
  	$("div.mygou").css({"border":"1px solid #f5f5f5","border-bottom":"none","background-color":"#f5f5f5"});
  	$("div.mygou").children("ul").slideUp()
  }
  );
  $("div.mygou ul li").hover(function(){
  	$(this).children("a").css("color","#EF0000");
  },function(){
  	$(this).children("a").css("color","#999");
  });
  
  /*首页轮播*/
  $(".banner>div:gt(0)").hide();
  
  var index=0;
   var s;
  function lb(){
  	if(index==4){
  		$(".banner>div").eq(index).hide();
  		index=0;
  		$(".banner>div").eq(index).show();
  		$(".banner .con img").animate({"width":"810px"},3000,function(){
  			$(".banner .con img").width(850)
  		});
  		
  	}else{
  		$(".banner>div").eq(index).hide();
  		$(".banner>div").eq(index+1).show();
  		$(".banner .con img").animate({"width":"810px"},3000,function(){
  			$(".banner .con img").width(850)
  		});
  		index++;
  	}
  }
  setInterval(lb,3000);
  /*左侧子菜单*/
  $(".menubox ul li").mouseenter(function(){
  	var ll=$(this).index();
  	$(this).css("background-color","#a90000").animate({"padding-left":"7px"});
  	$(this).children(".menu-pannel").css("top",-ll*53.3+"px").show();
  }).mouseleave(function(){
  	$(".menubox ul li").css("background-color","").animate({"padding-left":"0px"});
  	$(this).children(".menu-pannel").hide();
  });
  
   
  /*幻灯片按钮切换*/
 var timer=0;
 function slide(){
 	if(timer==4){
 		$(".slide li").eq(timer).animate({"top":"0px"});
 		timer=0;
 		$(".slide li").eq(timer).animate({"top":"-8px"});
 	}else{
 		$(".slide li").eq(timer).animate({"top":"0px"});
 		$(".slide li").eq(timer+1).animate({"top":"-8px"});
 		timer++;
 	}
 }
 	s=setInterval(slide,2000);

 
/*tab 切换*/


	$(".container .row:gt(0)").hide();
$(".time-list ul li").click(function(){
	var Index=$(this).index();
	$(".container .row").eq(Index).show().siblings(".row").hide();
	$(this).addClass("color").siblings("li").removeClass("color");
	$(this).children("i").addClass("sanjiao");
	$(this).siblings("li").children("i").removeClass("sanjiao");
});
$(".car-bot ul li").mouseover(function(){
	if($(this).children(".dd").is(":animated")){
		return
	}
		$(this).children(".dd").animate({"width":"80px","opacity":"1"})
	}).mouseout(function(){
		$(this).children(".dd").animate({"width":"0px","opacity":"0"})
	})
$(".car-bot ul li").mouseover(function(){
	if($(this).children(".dd2").is(":animated")){
		return
	}
	$(this).children(".dd2").animate({"width":"240px","opacity":"1","right":"35px"})
}).mouseout(function(){
		$(this).children(".dd2").animate({"width":"0px","opacity":"0"})
	});

	$(window).scroll(function(){
		var sT=$(window).scrollTop();
		if(sT>=2600){
			$(".headerfly").show()
		}else{
			$(".headerfly").hide()
		}
	});
	
	
	/*晒单专区轮播*/
	var sun=0;
	function  sunc(){
		if(sun==2){
			sun=0;
			$(".sunAear .sunCon").css("margin-left",-sun*230+"px");	
		}else{
			sun++;
			$(".sunAear .sunCon").css("margin-left",-sun*230+"px");
		}
	}
	setInterval(sunc,2000);
	
});
