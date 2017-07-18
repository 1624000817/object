$(function(){
	$("#banji li").on("mouseenter",function(){
		$(this).css({"background-color":"red","color":"#fff"}).siblings().css({"background-color":"#fff","color":"red"});
		var v=$(this).index();
		var a=$(".xk ul");
		$(a).eq(v).css("display","block").siblings(a).css("display","none");
		$(".son1 li").on("mouseenter",function(){
			$(this).css({"background-color":"red","color":"#fff"}).siblings().css({"background-color":"#fff","color":"red"});
			var b=$(this).index();
			$(".language").eq(b).css("display","block").siblings().css("display","none");
		});
	
	});
	
	
	$(".weixin").on("mouseenter",function(){
		$(".saomao").css("display","block")
	});
	$(".shiting").on("click",function(){
		$(".mask").css("display","block")
		var c=$("#user").val();
		var d=$("#phone").val();
		var reg=/^\W{2,4}$/;
		var rg=/^1\d{10}$/;
		if(reg.test(c)){
			$(".mtk").css("display","block");
		}
		if(reg.test(c)==false){
			$(".mtk").css("display","block").children(".box").html("信息不完整！");
		}
		if(rg.test(d)==false){
			$(".mtk").css("display","block").children(".box").html("信息不完整！");
		}
	});
	
	
	$("#close").on("click",function(){
		$(".mtk").css("display","none");
		$(".mask").css("display","none");
	});
	
	
	$(".mtk a").on("click",function(){
		$(".mtk").css("display","none");
		$(".mask").css("display","none");
	});
	
	$(".back").on("click",function(){
		$("body,html").animate({"scrollTop":0},1000)
	});


})

