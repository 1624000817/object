$(function(){
	/*导航子菜单商品分类*/
	$(".nav-ind .open-menu").mouseover(function(){
		$(this).children(".menubox").css("display","block")
	}).mouseout(function(){
		$(".nav-ind .open-menu").children(".menubox").hide()
	});
	/*商品折叠效果*/
	$(".brandInfo h3.active span").toggle(function(){
		$(this).css("background-position","0px 0px")
		$(this).parent("h3.active").next("div").show()
	},function(){
		$(this).css("background-position","0px -16px")
		$(this).parent("h3.active").next("div").hide()
	}
	);
	
	/*热门推荐轮播*/
	$(".hotSaleBox .container .row:gt(0)").hide();
	var number=0;
	var clear;
	function  carousel(){
		if(number==2){
			$(".hotSaleBox .container .row").eq(number).hide();
			number=0;
			$(".hotSaleBox .container .row").eq(number).show();
		}else{
			$(".hotSaleBox .container .row").eq(number).hide();
			$(".hotSaleBox .container .row").eq(number+1).show();
			number++;
		}
	}
	
	clear=setInterval(carousel,2000);
	
	$(".hotSaleBox").mouseover(function(){
		clearInterval(clear);
	}).mouseout(function(){
		clear=setInterval(carousel,2000);
	});
	$(".hotSaleBox .btn-Left").click(function(){
		if(number==0){
			$(".hotSaleBox .container .row").eq(number).hide();
			number=2;
			$(".hotSaleBox .container .row").eq(number).show();
		}else{
			$(".hotSaleBox .container .row").eq(number).hide();
			$(".hotSaleBox .container .row").eq(number-1).show();
			number--;
		}
	});
	
	$(".hotSaleBox .btn-Right").click(function(){
		carousel()
	});
	$(".listUI li.max p a:gt(19)").slideUp();
	$(".listUI li.max p span").toggle(function(){
		$(this).text("收缩产品");
	$(".listUI li.max p a:gt(19)").slideDown(500);
	},function(){
		$(this).text("更多产品");
		$(".listUI li.max p a:gt(19)").slideUp(500);
	})
	
	
})