$(function(){
	$(".box>.t").mouseenter(function(){
		$(this).hide();
	})
	$(".box>.t1").mouseleave(function(){
		$(".box>.t").show();
	})
	$(".box>.t1").click(function(){
		
		$(".box>.xiala").show();
	})
	
	$(".box>.xiala>.wz>.jt").click(function(){
		$(".box>.xiala").hide()
	})
//	轮播图
     var index=0;
     var width=$("header>.lb>ul>li").width();
     var time=0;
//   console.log(width);
     function lb(){
     		
     	index=index>9? 0:index;
     	$("header>.lb>ul>li").stop().eq(index).fadeIn(100).siblings().fadeOut(100);
     	$(".box>.gund>ul>li>a").eq(index).show().parent().siblings().children().hide();
     	$(".box>.gund>ul>li").eq(index).next().css("margin-top","50px").siblings().css("margin-top","0px");
     }
     time=setInterval(function(){
     	index++;
     	lb();
     },2000)
     $("header>.lb").hover(function(){
     	clearInterval(time);
     },function(){
     	time=setInterval(function(){
     	index++;
     	lb();
     },2000)
     })
     
      $(".box>.gund>ul").hover(function(){
     	clearInterval(time);
     },function(){
     	 time=setInterval(function(){
     	index++;
     	lb();
     },2000)
     })
      $(".box>.gund>ul>li").mouseenter(function(){
      	index=$(this).index();
      	lb();
      })
      

    $(document).on('scroll',function(){

	var scr=$(document).scrollTop();

	$('.foot').click(function(){
	$(document).scrollTop(0);
	
	});
	if(scr>=200){
		$('.header').show();
	}else{
		$('.header').hide();
	};

})
    
//  中间部分
//  今日热门
    //今日热门
	var wid=$(".over").width();
	var inde=0;
	var mov=function(){
		inde=inde>1?0:inde;
		$(".ul-1").stop().animate({left:-wid*inde},100);
	}
	var mo=function(){
		inde=inde>1?0:inde;
		$(".ul-2").stop().animate({left:-wid*inde},100);
	}
	var m=function(){
		inde=inde>1?0:inde;
		$(".ul-4").stop().animate({left:-wid*inde},100);
	}
	//今日热门-右键
	$(".arrow-r").click(function(){
		$(this).hide();
		
		$(".arrow-l").show()
		inde++;
		if (inde>1) {
			inde=1;
		}
		mov();
	})
	//今日热门-左键
	$(".arrow-l").click(function(){
		$(this).hide();
		$(".arrow-r").show()
		inde--;
		if (inde<0) {
			inde=0;
		}
		mov();
	})
		$(".arrow-r1").click(function(){
		$(this).hide();
		$(".arrow-l1").show()
		inde++;
		if (inde>1) {
			inde=1;
		}
		mo();
	})
	//今日热门-左键
	$(".arrow-l1").click(function(){
		$(this).hide();
		$(".arrow-r1").show()
		inde--;
		if (inde<0) {
			inde=0;
		}
		mo();
	})
			$(".arrow-r2").click(function(){
		$(this).hide();
		$(".arrow-l2").show()
		inde++;
		if (inde>1) {
			inde=1;
		}
		m();
	})
	//今日热门-左键
	$(".arrow-l2").click(function(){
		$(this).hide();
		$(".arrow-r2").show()
		inde--;
		if (inde<0) {
			inde=0;
		}
		m();
	})
			
		
		
	//字体变红
		$(".er-p1>.big-size").hover(function(){
		$(".big-size").css("color","red")
	},function(){
		$(".big-size").css("color","")
	})
	//黑
	$(".er-p1>.small-size").hover(function(){
		$(".small-size").css("color","black")
	},function(){
		$(".small-size").css("color","")
	})
	//
	$(".lunbo-word>li").hover(function(){
		$(this).css("color","orangered")
		$(".lunbo-word>li>img")
		$(this).children("img").attr("src","img/play-hover.png")
	},function(){
		$(this).css("color","")
		$(".lunbo-word>li>img").attr("src","")
	})
	//
	$(".ttuu1").hover(function(){
		$(".lunbo>.right").show();
	},function(){
		$(".lunbo>.right").hide();
	})
	$(".ttuu2").hover(function(){
		$(".lunbo>.left").show();
	},function(){
		$(".lunbo>.left").hide();
	})
	//
	
	$(".bigg-size").hover(function(){
		$(".bigg-size").css("color","red")
	},function(){
		$(".bigg-size").css("color","")
	})
	//
	$(".ii>li").hover(function(){
		$(this).css("background","orangered")
	},function(){
		$(this).css("background","")
	})
	//
	$(".you").click(function(){
		$(".san-gun1").show();
		$(".san-gun").hide();
	})
	$(".zuo").click(function(){
		$(".san-gun1").hide();
		$(".san-gun").show();
	})
	//
	$(".f2>li").hover(function(){
		$(this).css("color","orangered")
	},function(){
		$(this).css("color","")
	})
	//
	$(".si-big").hover(function(){
		$(this).css("color","red")
	},function(){
		$(this).css("color","")
	})
	$(".si-small").hover(function(){
		$(this).css("color","black")
	},function(){
		$(this).css("color","")
	})
	//
	$(".si>.si-gun>.haha").hover(function(){
		$(".si>.si-gun>.xingcunzhe").show();
	})
	$(".si>.si-gun>.haha1").hover(function(){
		$(".si>.si-gun>.xingcunzhe").hide();
	})
	$(".si>.si-gun>.haha2").hover(function(){
		$(".si>.si-gun>.xingcunzhe").hide();
	})
	
		$(".si>.si-gun1>.hahaha").hover(function(){
		$(".si>.si-gun1>.xingcunzhe2").show();
	})
	$(".si>.si-gun1>.hahaha1").hover(function(){
		$(".si>.si-gun1>.xingcunzhe2").hide();
	})
	$(".si>.si-gun1>.hahaha2").hover(function(){
		$(".si>.si-gun1>.xingcunzhe2").hide();
	})
	//
	$(".you1").click(function(){
		$(".si-gun1").show();
		$(".si-gun").hide();
	})
	$(".zuo1").click(function(){
		$(".si-gun1").hide();
		$(".si-gun").show();
	})
	$(".si>.ff2>li").hover(function(){
		$(this).css("color","orangered");
	},function(){
		$(this).css("color","");
	})
		
	$(".wu-p1>.wu-big").hover(function(){
		$(this).css("color","orangered")
	},function(){
		$(this).css("color","")
	})
	$(".wu-p1>.wu-small").hover(function(){
		$(this).css("color","black")
	},function(){
		$(this).css("color","")
	})
	//
	
	//
	$(".liu>.liu-gun>.liuliu>li>img").hover(function(){
		$(this).css("animation","name 0.5s")
	},function(){
		$(this).css("animation","")
	})
	
	$(".qi>.ffr2>li").hover(function(){
		$(this).css("color","orangered");
	},function(){
		$(this).css("color","");
	})
	$(".ba>.ba-gun>.haha2ba").hover(function(){
		$(".ba>.ba-gun>.xingcunzheba").show();
		
	})
	$(".ba>.ba-gun>.hahaba").hover(function(){
		$(".ba>.ba-gun>.xingcunzheba").hide();
	})
	//
	$(".ba>.ffrr2>li").hover(function(){
		$(this).css("color","orangered");
	},function(){
		$(this).css("color","");
	})
	//
	$(".jiu>.jiu-top>.iiijiu>li").hover(function(){
		$(this).css("color","orangered");
	},function(){
		$(this).css("color","");
	})
	
	
	//
	$(".ba>.youba").click(function(){
		$(".ba-gun1").show();
		$(".ba-gun").hide();
	})
	$(".ba>.zuoba").click(function(){
		$(".ba-gun1").hide();
		$(".ba-gun").show();
	})
	//
	
	$(".jiu>.youjiu").click(function(){
		$(".jiu-gun1").show();
		$(".jiu-gun").hide();
	})
	$(".jiu>.zuojiu").click(function(){
	$(".jiu-gun1").hide();
	$(".jiu-gun").show();
})
	
	
	//
	$(".jiu>.f2jiu>li").hover(function(){
		$(this).css("color","orangered")
	},function(){
		$(this).css("color","")
	})
	
	//
	$(".jiu>.jiu-gun>.haha2jiu").hover(function(){
		$(".jiu>.jiu-gun>.xingcunzhejiu").show();
	})
	$(".jiu>.jiu-gun>.hahajiu").hover(function(){
		$(".jiu>.jiu-gun>.xingcunzhejiu").hide();
	})
	
	//
	$(".shi>.ffr2jiu>li").hover(function(){
		$(this).css("color","orangered")
	},function(){
		$(this).css("color","")
	})
	
	$(".shi>.ffr2jiu2>li").hover(function(){
		$(this).css("color","orangered")
	},function(){
		$(this).css("color","")
	})
	
	//
	$(".shi>.tushi>.heihei1").hover(function(){
		$(this).css("color","white")
		$(this).css("background","orangered")
	},function(){
		$(this).css("color","")
		$(this).css("background","")
	})
	$(".shi>.tushi>.heihei2").hover(function(){
		$(this).css("color","white")
		$(this).css("background","orangered")
	},function(){
		$(this).css("color","")
		$(this).css("background","")
	})
	//
	$(".shi>.tushi>.heihei1").toggle(function(){
		$(".shi>.tushi>.biubiu").show();
		$(this).text("点击收起^")
	},function(){
		$(".shi>.tushi>.biubiu").hide();
		$(this).text("展开更多推荐∨")
	})
//	wu

$(".fff2>li").hover(function(){
		$(this).css("color","orangered")
		
	},function(){
		$(this).css("color","")
	})

//心
	a();
	b();
	c();
	d();
	e();
	f();
   
})
function a(){
  	var index=0;
    $(".fff2>li").hover(function(){
      $(this).children("div").show()
    },function(){
      $(this).children("div").hide()
    })
	
	$(".lueluewu").hover(function(){
		if(index==0){
		$(".lueluewu>img").eq(2).hide();
		}else{
			$(".lueluewu>img").eq(1).hide();
		}
	},function(){
		if(index==0){
			$(".lueluewu>img").eq(2).show();
		}else{
			$(".lueluewu>img").eq(0).show();
		}
//		$(".lueluewu>img").eq(2).show();
	})

	$(".lueluewu>img").eq(1).click(function(){
		index=1;
		$(".lueluewu>img").eq(1).hide()
	})
	$(".lueluewu>img").eq(0).click(function(){
		index=0;
		$(".lueluewu>img").eq(0).hide()
		$(".lueluewu>img").eq(1).show()
	})
  }

function b(){
  	var index=0;
    $(".fff2>li").hover(function(){
      $(this).children("div").show()
    },function(){
      $(this).children("div").hide()
    })
	
	$(".lueluewu1").hover(function(){
		if(index==0){
		$(".lueluewu1>img").eq(2).hide();
		}else{
			$(".lueluewu1>img").eq(1).hide();
		}
	},function(){
		if(index==0){
			$(".lueluewu1>img").eq(2).show();
		}else{
			$(".lueluewu1>img").eq(0).show();
		}
//		$(".lueluewu>img").eq(2).show();
	})

	$(".lueluewu1>img").eq(1).click(function(){
		index=1;
		$(".lueluewu1>img").eq(1).hide()
	})
	$(".lueluewu1>img").eq(0).click(function(){
		index=0;
		$(".lueluewu1>img").eq(0).hide()
		$(".lueluewu1>img").eq(1).show()
	})
  }


function c(){
  	var index=0;
    $(".fff2>li").hover(function(){
      $(this).children("div").show()
    },function(){
      $(this).children("div").hide()
    })
	
	$(".lueluewu2").hover(function(){
		if(index==0){
		$(".lueluewu2>img").eq(2).hide();
		}else{
			$(".lueluewu2>img").eq(1).hide();
		}
	},function(){
		if(index==0){
			$(".lueluewu2>img").eq(2).show();
		}else{
			$(".lueluewu2>img").eq(0).show();
		}
//		$(".lueluewu>img").eq(2).show();
	})

	$(".lueluewu2>img").eq(1).click(function(){
		index=1;
		$(".lueluewu2>img").eq(1).hide()
	})
	$(".lueluewu2>img").eq(0).click(function(){
		index=0;
		$(".lueluewu2>img").eq(0).hide()
		$(".lueluewu2>img").eq(1).show()
	})
  }



function d(){
  	var index=0;
    $(".fff2>li").hover(function(){
      $(this).children("div").show()
    },function(){
      $(this).children("div").hide()
    })
	
	$(".lueluewu3").hover(function(){
		if(index==0){
		$(".lueluewu3>img").eq(2).hide();
		}else{
			$(".lueluewu3>img").eq(1).hide();
		}
	},function(){
		if(index==0){
			$(".lueluewu3>img").eq(2).show();
		}else{
			$(".lueluewu3>img").eq(0).show();
		}
//		$(".lueluewu>img").eq(2).show();
	})

	$(".lueluewu3>img").eq(1).click(function(){
		index=1;
		$(".lueluewu3>img").eq(1).hide()
	})
	$(".lueluewu3>img").eq(0).click(function(){
		index=0;
		$(".lueluewu3>img").eq(0).hide()
		$(".lueluewu3>img").eq(1).show()
	})
  }


function e(){
  	var index=0;
    $(".fff2>li").hover(function(){
      $(this).children("div").show()
    },function(){
      $(this).children("div").hide()
    })
	
	$(".lueluewu4").hover(function(){
		if(index==0){
		$(".lueluewu4>img").eq(2).hide();
		}else{
			$(".lueluewu4>img").eq(1).hide();
		}
	},function(){
		if(index==0){
			$(".lueluewu4>img").eq(2).show();
		}else{
			$(".lueluewu4>img").eq(0).show();
		}
//		$(".lueluewu>img").eq(2).show();
	})

	$(".lueluewu4>img").eq(1).click(function(){
		index=1;
		$(".lueluewu4>img").eq(1).hide()
	})
	$(".lueluewu4>img").eq(0).click(function(){
		index=0;
		$(".lueluewu4>img").eq(0).hide()
		$(".lueluewu4>img").eq(1).show()
	})
  }


function f(){
  	var index=0;
    $(".fff2>li").hover(function(){
      $(this).children("div").show()
    },function(){
      $(this).children("div").hide()
    })
	
	$(".lueluewu5").hover(function(){
		if(index==0){
		$(".lueluewu5>img").eq(2).hide();
		}else{
			$(".lueluewu5>img").eq(1).hide();
		}
	},function(){
		if(index==0){
			$(".lueluewu5>img").eq(2).show();
		}else{
			$(".lueluewu5>img").eq(0).show();
		}
//		$(".lueluewu>img").eq(2).show();
	})

	$(".lueluewu5>img").eq(1).click(function(){
		index=1;
		$(".lueluewu5>img").eq(1).hide()
	})
	$(".lueluewu5>img").eq(0).click(function(){
		index=0;
		$(".lueluewu5>img").eq(0).hide()
		$(".lueluewu5>img").eq(1).show()
	})
  }

//返回顶部
//返回顶部
$(function(){
//	获取滚轮
$(document).on('scroll',function(){
//	滚动距离
var scr=$(document).scrollTop();
//console.log(scr);查看
$('.zbgd>.er4>.fanh').click(function(){
	$(document).scrollTop(0);
	
});
if(scr>=600){
		$('.zbgd>.er4>.fanh').show();
	}else{
		$('.zbgd>.er4>.fanh').hide();
	};


})
});
