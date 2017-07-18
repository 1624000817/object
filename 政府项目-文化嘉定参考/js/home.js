// JavaScript Document
//文化预告
$(function(){
	var arr=["banner/b1.jpg","banner/b2.jpg","banner/b3.jpg","banner/b4.jpg"];
	var arr1=["banner/l1.jpg","banner/l2.jpg","banner/l3.jpg","banner/l4.jpg"]
	var aImg=$(".botImg").find("img");
	var w713=$(".sunwp>.w713");

	$(".botImg>li").click(function(){
		for(var i=0;i<arr.length;i++){
			aImg.eq(i).attr({src:arr[i]});	
		}
		$(this).find("img").attr({src:arr1[$(this).index()]});	
		$(this).addClass("on").siblings().removeClass("on");
		for(var i=0;i<w713.length;i++){
			w713.eq(i).hide();	
		}
		w713.eq($(this).index()).show();
	});
	for(var i=0;i<w713.length;i++){
		showAndHide(w713.eq(i))	
	}
	
	function showAndHide(obj){
		var iNow=0;
		var navOnv=null;
		var navOnvLi=null;
		var navW=null;
		tab2()
		function tab2(){
			 navOnv=obj.find(".navOne");
			 navOnvLi=navOnv.find("li");
			 navW=navOnvLi.eq(0).width();
			
			 navOnv.css({width:navOnvLi.length*navW});
		}
		$(window).resize(function(){
			tab2();
		});
			
			obj.find(".fater>a").eq(1).click(function(){
				
				
				if(iNow==navOnvLi.length-1){
					
					navOnv.stop().animate({left:-iNow*navW});
					iNow=navOnvLi.length-1;
					return false;
				}else{
					iNow++;
					
					if(iNow==navOnvLi.length-1){
						$(this).addClass("on").siblings().removeClass("on");	
					}else{
						obj.find(".fater>a").removeClass("on");		
					}
					
				}
				navOnv.stop().animate({left:-iNow*navW});
			});
			obj.find(".fater>a").eq(0).click(function(){
				iNow--;
				
				if(iNow==-1||iNow==0){
					iNow=0;
					$(this).addClass("on").siblings().removeClass("on");
					navOnv.stop().animate({left:-iNow*navW});
					return false;
				}else{
						obj.find(".fater>a").removeClass("on");
				}
				navOnv.stop().animate({left:-iNow*navW});
			})
	}
});

 /*场馆预定弹层 表格隔行变色*/
 $(function(){
	 $(".table1 tr:even").css("background-color","#ddeaeb");
	  $(".table1 tr:odd").css("background-color","#c8d9db");
	 $(".table1 tr:first").css("background-color","#3c3c3c");
	
	 });

$(function(){
	$("#oneye").find(".olOne>li").click(function(){
		$(this).addClass("on").siblings().removeClass("on");
		$("#oneye").find(".listKnone").hide();
		$("#oneye").find(".listKnone").eq($(this).index()).show();
	});
	
});

//分享
$(function(){
	
	var fenXian=$(".fenxianOne>span");
	var oFenx=$(".fenx");
	for(var i=0;i<$(".fenxianOne").length;i++){
		$(".fenxianOne").get(i).onOff=true;
	}

	fenXian.click(function(){

		if($(this).parent().get(0).onOff){
			$(this).addClass("on")
			$(this).next().show();
		}else{
			$(this).removeClass("on")
			$(this).next().hide();
		}
		$(this).parent().get(0).onOff=!$(this).parent().get(0).onOff;
		return false;
	});
	$(document).click(function(){
		fenXian.removeClass("on")
		oFenx.hide();	
		for(var i=0;i<$(".fenxianOne").length;i++){
			$(".fenxianOne").get(i).onOff=true;
		}
	});
});

/*预定*/
$(function(){
	var yuOne=$(".yuOne");
	var tanc=$(".tanc");
	var yuding=$(".yuding");
	var qd_c=$("culture_qd");
	var qd=$(".qd");
	var su=$(".success");
	var qx=$(".qx");
	var fail=$(".fail");
	yuOne.click(function(){
		tanc.show();
	});
	yuOne.find(".close").click(function(){
		tanc.hide();
	});
	yuding.click(function(){
		tanc.show();
		$("body").append('<div class="body"></div>');
	});
	tanc.find(".close").click(function(){
		
		tanc.hide();
		$(".body").remove();
	});
	//文化预告弹层确定
	qd_c.click(function(){
		tanc.hide();
		su.show();
		$(".body").remove();
		});
	//场馆预定弹层确定
	qd.click(function(){
		tanc.hide();
		su.show();
		});
	su.find(".close").click(function(){
		su.hide();
		$(".body").remove();
		});
	qx.click(function(){
		tanc.hide();
		$(".body").remove();
		});
	fail.find(".close").click(function(){
		fail.hide();
		$(".body").remove();
		});
});

$(function(){
	$(".Hall li").hover(function(){
		$(this).find(".bgK").css({top:235});
		$(this).find(".bgK").stop().animate({top:0});	
	},function(){
		$(this).find(".bgK").stop().animate({top:235});		
	})
});

//显示隐藏 网上书房右边切换
$(function(){
	dd($(".ul2>li"),$(".jiading>li"),$(".box>img"))
	function dd(obj1,obj2,obj3){
		obj2.click(function(){
			if(obj3){
				obj3.eq($(this).index()).show().siblings().hide();
			}			
			$(this).addClass("on").siblings().removeClass("on");
			obj1.eq($(this).index()).show().siblings().hide();
		});
	}
});


$(function(){
	$(".zise1").hover(function(){
		$(this).find(".hoverShow").animate({left:0});	
	},function(){
		$(this).find(".hoverShow").animate({left:161});	
	})	
});


/*$(function(){
	$(".sun3d>li").hover(function(){
		
	  var bg=$(this).find(".bgOp");
	  var biaoT=$(this).find(".biaoT");
	  bg.stop().animate({bottom:0});
	  biaoT.stop().animate({bottom:0});
	},function(){
		var bg=$(this).find(".bgOp");
		var biaoT=$(this).find(".biaoT");
		bg.stop().animate({bottom:-21});
		biaoT.stop().animate({bottom:-21});	
	});
})
*/
$(function(){
	$(window).scroll(function(){
		
	
		
		gundo();
		
	});
});
function gundo(){
		var soc=$("#topOne");
		if(!soc.parent().offset()) return;
		var top=soc.parent().offset().top;
		
		
		var scrollTop=$(this).scrollTop();
		
		
		if(scrollTop>=top-400){
			
			soc.stop().animate({top:scrollTop-top+$("#top").height()+400});
			soc.show();
		}else{
			
			soc.hide();	
		}	
}


$(function(){
	$(".imgOne").hover(function(){
		
		$(this).find("img").attr({src:"img/jj.jpg"});
	},function(){
		$(this).find("img").attr({src:"img/img1.jpg"});
	});
	var str="查找你感兴趣的内容";
	$(".text").focus(function(){

		if($(this).val()==str){
			$(this).val("");	
		}
	});
	$(".text").blur(function(){
		if($(this).val()==""){
			$(this).val(str);	
		}
	});
});



//我要分享

$(function(){
	
	var fenxianY=$(".fenxianY");
	var fenxianY1=$(".fenxianY1");
	var fenxianY2=$(".fenxianY2");
	var sanjiao=$(".sanjiao");
	var iBtrue=true;
	var aSpan=$(".pImg>span");
	
	$(".cloe").click(function(){
		
		if(iBtrue){
			fenxianY1.stop().animate({bottom:0});
			$(this).html("关闭");
			
		}else{
			fenxianY1.stop().animate({bottom:-133});
			$(this).html("分享");	
		}
		aSpan.find(".sanjiao").hide();
		fenxianY2.hide()
		
		iBtrue=!iBtrue;
	});
	$(".pImg>span").click(function(){
		fenxianY2.show();
		aSpan.find(".sanjiao").hide();
		aSpan.find(".sanjiao").eq($(this).index()).show();
	});
	$(".chaone").click(function(){
		aSpan.find(".sanjiao").hide();
		fenxianY2.hide();	
	})
});


$(function(){
	var nav66=$(".navWo>.nav66");
	var num=0;

	$(".lw").find(".fater>a").eq(1).click(function(){
				if(num==nav66.length-1){
					nav66.hide();
					nav66.eq(num).show();
					iNow=nav66.length-1;
					return false;
				}else{
					num++;
					if(num==nav66.length-1){
						$(this).addClass("on").siblings().removeClass("on");	
					}else{
						$(".lw").find(".fater>a").removeClass("on");		
					}
					
				}
				nav66.hide();
				nav66.eq(num).show();
	});
	$(".lw").find(".fater>a").eq(0).click(function(){
		num--;
				if(num==-1||num==0){
					num=0;
					$(this).addClass("on").siblings().removeClass("on");
					nav66.hide();
					nav66.eq(num).show();
					return false;
				}else{
						$(".lw").find(".fater>a").removeClass("on");
				}
				nav66.hide();
				nav66.eq(num).show();
	});
});

$(function(){
	var Pages=$(".Pages");
	var pageList=$(".pageList");
	Pages.click(function(){
		pageList.show();
		$(this).addClass("on");
		return false;
	});
	$(document).click(function(){
		Pages.removeClass("on");
		pageList.hide();
	});
});
//回复 如果想开启点击回复，请把注释代码解开
/*$(function(){
	
	var alistplLi=$(".listpl>li");
	for(var i=0;i<alistplLi.length;i++){
		pl(alistplLi.eq(i))
		
	}
	function pl(obj){
		var textOne =obj.find(".textOne");
		obj.find(".d2").click(function(){
			if($(this).attr("onOff")=="true"){
				textOne.hide();
				$(this).attr("onOff",false);
			}else{
				textOne.show();	
				$(this).attr("onOff",true);
			}
			
		});
	}
	
});*/
//为您推荐
$(function(){
	$(".boxOne").hover(function(){
		$(this).animate({opacity:0.8});
		
	},function(){
		$(this).animate({opacity:1});
	});	
});

//弹出层
function getDetail(url){
	$("#showDiv").attr("src",url);
	$("html").css({overflow:"hidden"});		
	$("#danceng").fadeIn();
	$("#topOne").hide();
	$("body").append('<div class="body"></div>');	
	$(".chaToo").click(function(){
			$("html").css({overflow:"auto"});
			$("#danceng").hide();
			$(".body").remove();
			//$("#topOne").show();	
	});		
}

/*导航*/
$(function(){
	var aLs=$(".ls");
	var aNavminLi=$(".navmin>li");
	aNavminLi.click(function(){
		aLs.animate({left:"-100%"},100);
		aLs.eq($(this).index()).animate({left:0},100);
		$(this).addClass("on").siblings().removeClass("on");
	});
	
});
/*login*/
$(function(){
	$(".login").click(function(){
		var visHeight=document.documentElement.clientHeight;
		$("body").append('<div class="logPop" style="display:block; top:100px;"><div class="lineH2"><span class="welcome">欢迎登录</span><span class="logPopCloe">&times;</span></div><div class="box7"><form><ul class="listUser tUser"><li class="cle"> <span class="user">用户名：</span><input type="text" value="12345678cc56xxx5" /></li><li class="cle"> <span class="user">登录密码：</span><input type="text" /></li><li class="cle"> <span class="user">验证码：</span><input style="width:103px;" type="text" /><img src="img/uu_03.jpg" class="l" /> <span class="huan">换一换</span> </li></ul><div class="cle"> <span class="user"></span><div class="l userInfo"><input class="oksbimit" type="submit" value="登录" /><div class="mt17"> <a class="info" href="###">找回账号</a>&nbsp;|&nbsp; <a class="info" href="###">忘记密码</a>&nbsp;|&nbsp; <a class="info" href="###">立即登录</a> </div></div></div></form></div></div>');
		$("body").append('<div class="body"></div>');
		var h=$(".logPop").height();
	
		$(".logPop").css({top:(visHeight-h)/2});
		$(".logPopCloe").click(function(){
			$(".body,.logPop").remove();
		});
	});
	
	
});
/*地图*/
 $(function(){
	 var H=document.documentElement.clientHeight-$("#footer").height()-$("#top").height();
	 var oMapMo=$(".mapMo");
	 var oRollMap=$(".rollMap");
	 var oRoll=$(".roll");
	 var oUpMouse=$("#UpMouse");
	 var oMapList=$(".mapList");
	 var mapPd=$(".mapPd");
	 var wheelnum=0;

	// alert(oUpMouse.height())
	$(".expCon").css({top:H/2});
	$("#map,.mapHeight").css({height:H});	 
	oUpMouse.css({height:H-mapPd.innerHeight()});
	oRollMap.css({height:H-mapPd.innerHeight()});
	
	if(oMapList.height()<oUpMouse.height()){
		
		//oRoll.css({height:oRollMap.height()-oRoll.height()});
		oRollMap.hide();
		return false;
	}else{
		
		oRoll.css({height:oUpMouse.height()/oMapList.height()*oRollMap.height()})
		//oRollMap.show();	
	}
	var oRH=oRollMap.height()-oRoll.height();
	var xH=oUpMouse.height()-oMapList.height();
	if(!oRoll.get(0)) return
	oRoll.get(0).onmousedown=function(ev){
			var ev=ev||event;
			var disY=ev.clientY-this.offsetTop;
			if(oRoll.get(0).setCapture){
				oRoll.get(0).setCapture();	
			}
			document.onmousemove=function(ev){
				var ev=ev||event;	
				var T=ev.clientY-disY;
				wheelnum=T
				wheelmove(wheelnum);
			}
			document.onmouseup=function(ev){
				document.onmousemove=document.onmouseup=null;
				if(oRoll.get(0).releaseCapture){
					oRoll.get(0).releaseCapture();	
				}
			}
			return false;
	}
	bind(oMapMo.get(0),"DOMMouseScroll",gunUp)
	bind(oMapMo.get(0),"mousewheel",gunUp)
	function gunUp(ev){
		var ev=ev||event;
		var b=true;
		if(ev.wheelDelta){
			b=ev.wheelDelta<0?true:false
		}else{
			b=ev.detail>0?true:false	
		}
		if(b){
			
			wheelnum+=30;
			if(oRH<wheelnum){
				wheelnum=oRH;
			}
			
			wheelmove(wheelnum)
		}else{
			
			wheelnum-=30;
			if(wheelnum<0){
				wheelnum=0;	
			}	
			wheelmove(wheelnum)
		}
		if(ev.preventDefault)
		{
			ev.preventDefault();	
		}
		return false;
			
	}
	function wheelmove(T){
			if(T<0){
				wheelnum=T=0;
			
			}else if(T>oRH){
				wheelnum=T=oRH;	
	
			}
		
			oRoll.get(0).style.top=T+"px";
			var iScale=T/(oRollMap.height()-oRoll.height())
			oMapList.css({top:iScale*(xH)});
	}
	
/*地图右侧下拉导航 */
	$(".listSear>li").hover(function(){
		$(this).find(".ol,.boxBg").show();
		$(this).addClass("active");
	},function(){
		$(this).find(".ol,.boxBg").hide();
		$(this).removeClass("active");	
	});
	var qBtrue=true;
	$(".listSear>li").eq(2).click(function(){
		
		if(qBtrue){
			
			$("#map").css({height:""});
			$(".bw33").hide();
			$(".bw63").css({marginLeft:0});
			
			$("html,body").css({height:"100%"});
			$("#top").hide();
			$("#footer").hide();
			$("#map").css({paddingTop:0});
			$(".mapHeight").css({height:document.documentElement.clientHeight})
			
		}else{
			
			$("html,body").css({height:""});
			$(".bw33").show();
			
			if($(".bw33").css("left")=="-345px"){
					
			}else{
				$(".bw63").css({marginLeft:345});
			}
			$("#top").show();
			$("#footer").show();
			$("#map").css({paddingTop:""});
			 var H=document.documentElement.clientHeight-$("#footer").height()-$("#top").height();
			$(".mapHeight").css({height:H})
		}
		
		qBtrue=!qBtrue;
	});
	var expTrue=true;
	$(".expCon").click(function(){
		if(expTrue){
		
			$(".bw33").animate({left:-$(".bw33").width()});
			$(".bw63").animate({marginLeft:0});
			$(this).children().addClass("on")
		}else{
			$(".bw33").animate({left:0});
			$(".bw63").animate({marginLeft:$(".bw33").width()});
			$(this).children().removeClass("on")
		}
		expTrue=!expTrue;
	});
	
 });
 
 function bind(obj,evname,fn){
	 if(obj.attachEvent){
		obj.attachEvent("on"+evname,fn);	 
	 }else{
		obj.addEventListener(evname,fn,false);	 	 
	 }
 }
 /*评论页效果*/
 $(function(){
	 var newMak=$("#newMak");
	 var bBtrue=true;
 	$(".toPl").click(function(){
		if(bBtrue){
			newMak.fadeIn();
		}else{
			newMak.fadeOut();	
		}
		var numTop=$(this).offset().top+$(this).height()+20;
		var numLeft=$(this).offset().left;
		newMak.css({top:numTop,left:numLeft-447});
		$(".fd").css({left:numLeft-newMak.offset().left});
			bBtrue=!bBtrue;
	});
 });
	 


/************banner 和网上书房动画特效*************/
$(function(){
	var oBaner=$("#banner");
	var aImg=oBaner.find(".ulOne>li>img");
	var oulOne=$(".ulOne");
	var aLi=oulOne.find("li");
	var aLiW=aLi.eq(0).width();
	var timer=null;
	var iNow=0;
	oulOne.css({width:aLiW*aLi.length})
	$(".olOne>li").click(function(){
		iNow=$(this).index();
		tab()
	})
	timer=setInterval(function(){
			iNow++;
			iNow%=aLi.length;
			tab()
	},5000)
	oBaner.hover(function(){
		clearInterval(timer)	
	},function(){
		timer=setInterval(function(){
			iNow++;
			iNow%=aLi.length;
			tab()
	},5000)
	})
		function tab(){
		
			oulOne.animate({left:-aLiW*iNow});
			$(".ulOne>li").eq(iNow).addClass("on").siblings().removeClass("on");
			$(".olOne>li").eq(iNow).addClass("on").siblings().removeClass("on");
		}
/*幻灯切换的效果*/	
$('#mybanner').bxSlider({
        infiniteLoop: true,
        mode: 'horizontal',
        pause: 4000,
        auto: true,
        pager: true,
		autoHover:true
    })
	
$('#mybanner_6').bxSlider({
        infiniteLoop: true,
        mode: 'horizontal',
        pause: 4000,
        auto: true,
        pager: true,
		autoHover:true
    })
$('#mybanner_4').bxSlider({
        infiniteLoop: true,
        mode: 'horizontal',
        pause: 4000,
        auto: true,
        pager: true,
		autoHover:true
    })
$('#mybanner_7').bxSlider({
        infiniteLoop: true,
        mode: 'horizontal',
        pause: 4000,
        auto: true,
        pager: true,
		autoHover:true
    })

/*hover 图片效果*/
$(".threePic li a").hover(function(){
	//alert($(this).find(".des-txt").html());
	$(this).find(".des").removeClass("overf");
	$(this).find(".des-txt").stop().animate({bottom:"0px"});
	
	},function(){$(this).find(".des").addClass("overf");
	$(this).find(".des-txt").stop().animate({bottom:"-191px"});})
/*hover 图片效ed果*/
	function reImgLeft(){
	
		var keshi=document.documentElement.clientWidth;
		if(keshi>1000){
		  for(var i=0;i<aImg.length;i++){
			  var w=(aImg.eq(i).width()-keshi)/2;
			  aImg.eq(i).css({left:-w});
		  }
		}
	}
});
/***********banner 和网上书房动画特效 end*************/
 /**场馆预定弹层**/
function time_bg_turn(n){
	for(var i=1;i<6;i++){
		if(n!=i){
			$(".h_time li .tLi"+i).css("background-color","#666");
			$(".h_time li .tLi"+n).css("background-color","#333");
		}
		
	}
};
	/*焦点图*/
	$(function(){
		
var flag=true;
      var speed = 20;     
      var list = 1;
    	var MyMarL;
	  var MyMar;
	  
      demo2.innerHTML = demo1.innerHTML;
      var h = parseInt(demo1.getElementsByTagName("li")[0].offsetWidth);
	  var step =Math.round(h/20);
	  var dis=h;
      function Marquee() {		
          if (demo1.offsetWidth - demo.scrollLeft <= 0) {			
            demo.scrollLeft =0; list = 1;         }
         else {
             demo.scrollLeft += step;
			 dis-=step;
             // if (demo.scrollLeft == list * h) {
				 if (dis<=0) {
				    clearInterval(MyMar);
				  flag=true;
				  dis=h;
                  list++;             
                  }
				   }
				      }
	 function MarqueeL() {
          if (demo.scrollLeft<=0) {			
              demo.scrollLeft+= demo1.offsetWidth; list = 1;          }
          else {
             demo.scrollLeft -= step;
			 dis-=step;
             // if (demo.scrollLeft == list * h) {
				 if (dis<=0) {
				    clearInterval(MyMarL);
				  flag=true;
				  dis=h;
                  list++;             
                  }
				   }
				      }
    
     
	 pre.onclick=function(){		
		 if(flag){
			  step=Math.abs(step);
		 flag=false;
		  MyMar = setInterval(Marquee, speed) 		
		  }
		 }
next.onclick=function(){
		 if(flag){
		 flag=false;		
		  MyMarL = setInterval(MarqueeL, speed) 		
		  }
		 }
		 
$("#demo li img").click(function(){
	var srcA=$(this).attr("src");
	
	$("#demo li img").removeClass("active");
	$(this).addClass("active");
	
	if($(".pic ul li img").attr("src")!=srcA){
	
	$(".pic ul li img").fadeTo(200,.2,function(){
$(".pic ul li img").attr("src",srcA).fadeTo(400,1);
});

	
	}
	})		 
});
	/*焦点图结束*/	