
function clickcount(parm){
	$.get('/plus/clickcount.php',{parm:parm,url:window.location.href});
	}
document.write ('<script language="javascript" src="/js/click_tj.js"></script\>')
document.write('<script language="javascript" src="/js/jquery1.42.min.js"></script\>');
document.write('<script language="javascript" src="/js/jquery.SuperSlide.2.1.1.js"></script\>');
$(function(){
	jQuery(".xin_swt_right01").slide({mainCell:".xin_swt_right03 ul",autoPage:true,effect:"top",autoPlay:true,vis:2});
});

//右侧
document.writeln("<style>");
document.writeln("		#swt_right{display:none;}");
document.writeln("		.xin_swt_right{width:175px;height:332px;position:fixed;right:15px;top:25%;font-family:微软雅黑;}");
document.writeln("		.xin_swt_right01{width:171px;height:328px;background:#fff;position:relative;border:2px #cfcfcf solid;}");
document.writeln("		.xin_swt_right02{width:;color:#ffffff;font-size:20px;font-weight:bold;line-height:34px;width:171px;height:34px;background:#5e1b03;text-align:center;}");
document.writeln("		.xin_swt_right03{width:170px;height:203px;overflow:hidden;}	");
document.writeln("		.xin_swt_right03 li{width:170px;height:97px;margin-top:3px;}");
document.writeln("		.xin_swt_right05{height:40px;line-height:40px;text-align:center;font-size:14px;color:#5e1b03;}");
document.writeln("		.xin_swt_right05 a{color:#5e1b03;text-decoration:none;}");
document.writeln("		.xin_swt_right06{width:171px;height:52px;background:#5e1b03;}");
document.writeln("		.xin_swt_right07{width:34px;height:34px;background:url(/swt/images/swt_m_close.png);position:absolute;top:-15px;right:-15px;cursor:pointer}");
document.writeln("		.xin_swt_right07:hover{background:url(/swt/images/swt_m_close01.png);}");
document.writeln("");
document.writeln("	</style>");


document.writeln("<div class=\"xin_swt_right\">");
document.writeln("		<div class=\"xin_swt_right01\" id=\"swt_right\">");
document.writeln("			<div class=\"xin_swt_right02\">预 约 挂 号</div>");
document.writeln("			<div class=\"xin_swt_right03\">");
document.writeln("				<ul>");

document.writeln("					<li><a href=\"javascript:void(0)\" onclick=\"onClickSWT(\'pf-yctc-hchys-ljyy\');return false;\"><img src=\"/swt/images/xin_swt_right_hrl.jpg\"></a></li>");

document.writeln("					<li><a href=\"javascript:void(0)\" onclick=\"onClickSWT(\'pf-yctc-hchys-ljyy\');return false;\"><img src=\"/swt/images/xin_swt_right_bsx.jpg\"></a></li>");

document.writeln("					<li><a href=\"javascript:void(0)\" onclick=\"onClickSWT(\'pf-yctc-ybrys- ljyy\');return false;\"><img src=\"/swt/images/xin_swt_right_03.jpg\"></a></li>");
document.writeln("					<li><a href=\"javascript:void(0)\" onclick=\"onClickSWT(\'right_ljr\');return false;\"><img src=\"/swt/images/xin_swt_right_05.jpg\"></a></li>");
//document.writeln("					<li><a href=\"javascript:void(0)\" onclick=\"onClickSWT(\'right_ljr\');return false;\"><img src=\"/swt/images/xin_swt_right_ylac.jpg\"></a></li>");
document.writeln("					<li><a href=\"javascript:void(0)\" onclick=\"onClickSWT(\'right_ljr\');return false;\"><img src=\"/swt/images/xin_swt_right_ylq.jpg\"></a></li>");
document.writeln("				</ul>");
document.writeln("				");
document.writeln("			</div><!--xin_swt_right03-->");
document.writeln("			<div class=\"xin_swt_right05 next\"><a href=\"javascript:;\" target=\"_self\">点击查看更多 >></a>></div>");
document.writeln("			<div class=\"xin_swt_right06\"><a href=\"javascript:void(0)\" onclick=\"onClickSWT(\'pf-yctc-zxdh\');return false;\"><img src=\"/swt/images/xin_swt_right_06.jpg\" class=\"publictel_img\"></a></div>");
document.writeln("			<div class=\"xin_swt_right07\" onclick=\"guan();\"></div>");
document.writeln("		</div><!--xin_swt_right01-->");
document.writeln("	</div><!--xin_swt_right-->");

	function hide_swt(){
		$('.swt_zt04').stop().fadeOut(400);
	}
	
	function guan(){
		$('#swt_right').stop().fadeOut(400);
	}



//中间
var swtM = window.location.href; //获取当前页面的地址

  if(swtM.search(/spzt/i)>-1){

}else{


document.writeln("<style>");
document.writeln("		.swt_m{width:450px;display:none;height:370px;position:fixed;top:50%;left:50%;margin-top:-185px;margin-left:-225px;background:url(/swt/swt_m_bg.gif) no-repeat;z-index:99999;}");
document.writeln("		.swt_m_01{width:450px;height:370px;position:relative;}");
document.writeln("		.swt_m_02{width:42px;height:42px;position:absolute;top:0px;right:0px;cursor:pointer;z-index:2}");
document.writeln("		.swt_m_05{width:372px;height:210px;position:absolute;top:0px;left:0px;cursor:pointer;z-index:1}");

document.writeln("		.swt_m_03{height:40px;bottom:18px;position:absolute;left:0;width:100%;}");
document.writeln("		.swt_m_04{float:right;width:212px;height:38px;margin-right:18px;}");
document.writeln("		.swt_m_04_1{float:right;width:188px;height:38px;margin-right:24px;}");
document.writeln("  .tel0{width:435px;height:35px;position:absolute;bottom:77px;}");
document.writeln(" #telInput{width:294px;height:32px;border:0px solid #666;float:left;margin-left:17px;color:#aaa;font-size:15px;padding-left:2px;}");
document.writeln(" #callBtn{width:122px;height:33px;float:left;cursor:pointer;}");
document.writeln("	</style>");
document.writeln("<div class=\"swt_m\">");
document.writeln("		<div class=\"swt_m_01\">");
document.writeln("			<div class=\"swt_m_02\" onclick=\"closexx();\"><img src=\"/swt/closeBtn_swt.png\" style=\"width:100%;\"></div>");
document.writeln("			<div class=\"swt_m_05\" onclick=\"onClickSWT(\'swt_middle_zx\');return false;\"></div>");
document.writeln("			<div class=\"swt_m_03\">");
document.writeln("				<a href=\"javascript:void(0)\" onclick=\"onClickSWT(\'pf-zjtc-bdzxdh\');return false;\"><div class=\"swt_m_04\"></div></a>");
document.writeln("				<a href=\"javascript:void(0)\" onclick=\"onClickSWT(\'pf-zjtc-cxsyysh\');return false;\"><div class=\"swt_m_04_1\"></div></a>");
document.writeln("			</div>");
document.writeln("		</div>");
document.writeln("  <div class='tel0'><input type='text' id='telInput' value='请输入您的电话号码,点击咨询' onclick=\"phone()\"/><div id='callBtn'></div></div>")
document.writeln("	</div><!--swt_m-->");



var firstTime=5000;//
var againTime=10000;//
function showswt(){
	$(".swt_m").hide();
	$(".swt_m").fadeIn("slow");

}
function showagain(){
	$(".swt_m").fadeIn("slow");

	clearTimeout(T);
}
var T = setTimeout("showswt()",firstTime);
function closexx(){
	$(".swt_m").fadeOut('slow');
	//$(".swt_right").fadeIn('slow');
	T = setTimeout("showagain()",againTime);
	return false;
};	
	

}
//左侧

document.writeln("<style>");
document.writeln("#swt_left{display:none;}");
document.writeln("		.xin_swt_left{width:130px;height:330px;background:url(/swt/images/xin_swt_left.jpg) no-repeat;position:fixed;left:0;top:25%;z-index:10;}");
document.writeln("		.xin_swt_left01{width:130px;height:330px;}");
document.writeln("		.xin_swt_left02{width:130px;height:35px;margin-top:180px;cursor:pointer;position:relative;}");
document.writeln("		.xin_swt_left03{width:130px;height:35px;}");
document.writeln("		.xin_swt_left03 a{width:130px;height:35px;display:block;}");
document.writeln("		.xin_swt_left04{width:414px;height:330px;z-index:999;display:none;position:absolute;top:-180px;left:0;display:inline;border:0px red solid;}");

document.writeln("  .tel5{width:130px;height:50px;position:absolute;bottom:0;}")

document.writeln("");
document.writeln("	</style>");
document.writeln("<div class=\"xin_swt_left publictel_imgbg\" id=\"swt_left\">");
document.writeln("		<div class=\"xin_swt_left01\">");
document.writeln("			<div class=\"xin_swt_left02\">");
document.writeln("				<div class=\"xin_swt_left04\" style=\"display:none;\">");
document.writeln("					 <iframe src=\"http://qlm_gh.xlzx999.com/Reg/index/tid/rk_xin_left/sid/595w1EZWmFvfUx4n587/from_str/bdpcgh\" allowtransparency=\"true\" frameborder=\"0\" scrolling=\"no\" width=\"100%\" height=\"100%\"></iframe>");
document.writeln("");
document.writeln("				</div>");
document.writeln("			</div>");
document.writeln("			<div class=\"xin_swt_left03\"><a onclick=\"onClickSWT('swt_left');return false;\" href=\"javascript:void(0)\"></a></div>");
document.writeln("		</div><!--xin_swt_left01-->");
document.writeln("  <a href=\"javascript:void(0)\" onclick=\"onClickSWT(\'pf-zctc-mfzxzx\');return false;\"><div class='tel5'></div></a>")
document.writeln("	</div>");
$(document).ready(function(e) {


$(".gq1").click(function(){
	$(".guoqi").animate({left:'0px',top:'540px',width:'180px',height:'80px'},"slow");
	$(".guoqi").css("background","url(/swt/images/gqxiao.jpg) no-repeat left");
	$(".gq4").css({'display':'block',})
	$(".guoqi").css({'margin':'0 0 0 0px',})
});

$(".gq4").click(function(){
	//$(".guoqi").css("display","none");
	$(".guoqi").animate({left:'50%',top:'200px',width:'1206px',height:'338px'},"slow");
	$(".guoqi").css("background","url(/swt/images/gqda1.png) no-repeat left");
	$(".gq4").css({'display':'none',})
	$(".guoqi").css({'margin':'0 0 0 -513px',})
});

var guoqi=setInterval(function(){
		$(".guoqi").animate({left:'50%',top:'200px',width:'1206px',height:'338px'},"slow");
	$(".guoqi").css("background","url(/swt/images/gqda1.png) no-repeat left");
	$(".gq4").css({'display':'none',})
	$(".guoqi").css({'margin':'0 0 0 -513px',})
	},30000)



		$(".xin_swt_left02").hover(
			function(){
				$(".xin_swt_left04").stop(true,true).animate({width:'toggle'});
			}
		);
	});


document.write('<script type="text/javascript" src="/swt/foot_x.js"></script\>');


document.write('<script src="/swt/call_botnew.js" language="JavaScript"></script\>');

document.write('<script type="text/javascript" src="/js/publictel_img.js"></script\>');
//域名判断
var cnzz = window.location.href; //获取当前页面的地址

  if(cnzz.search(/zzitat.com/i)>-1){
	  document.write('<script src="http://s23.cnzz.com/stat.php?id=5819117&web_id=5819117" language="JavaScript"></script\>'); }        
	else if(cnzz.search(/wdacca.com/i)>-1){
	   document.write('<script src="http://s19.cnzz.com/stat.php?id=5923480&web_id=5923480" language="JavaScript"></script\>');} 	
	else if(cnzz.search(/zk0311.com/i)>-1){
	   document.write('<script src="http://s9.cnzz.com/stat.php?id=5679805&web_id=5679805" language="JavaScript"></script\>');

	   } 
	else if(cnzz.search(/hechxm.com/i)>-1){
	   document.write('<script src="http://s9.cnzz.com/stat.php?id=5688831&web_id=5688831" language="JavaScript"></script\>');} 
	else if(cnzz.search(/wnwzjs.com/i)>-1){
	   document.write('<script src="http://s4.cnzz.com/stat.php?id=5946841&web_id=5946841" language="JavaScript"></script\>');} 
	 else if(cnzz.search(/hospital0431.com/i)>-1){
	    document.write('<script src="http://s95.cnzz.com/stat.php?id=1254608788&web_id=1254608788" language="JavaScript"></script\>');
	    document.write('<script src="http://s4.cnzz.com/stat.php?id=5923509&web_id=5923509" language="JavaScript"></script\>');
	}

	 else if(cnzz.search(/sos114.net/i)>-1){
	    document.write('<script src="http://s11.cnzz.com/stat.php?id=1255092673&web_id=1255092673" language="JavaScript"></script\>');
	    
	}
	 else if(cnzz.search(/120good.net/i)>-1){
	    document.write('<script src="http://s95.cnzz.com/stat.php?id=1255092760&web_id=1255092760" language="JavaScript"></script\>');
	    
	}



document.writeln("</div>");

$(function(){
	$(".gq1").click(function(){
	$(".guoqi").animate({left:'0px',top:'540px',width:'180px',height:'80px'},"slow");
	$(".guoqi").css("background","url(/swt/images/gqxiao.jpg) no-repeat left");
	$(".gq4").css({'display':'block',})
	$(".guoqi").css({'margin':'0 0 0 0px',})
});

$(".gq4").click(function(){
	//$(".guoqi").css("display","none");
	$(".guoqi").animate({left:'50%',top:'100px',width:'809px',height:'450px'},"slow");
	$(".guoqi").css("background","url(/swt/images/gqda1.png) no-repeat left");
	$(".gq4").css({'display':'none',})
	$(".guoqi").css({'margin':'0 0 0 -404px',})
});

var guoqi=setInterval(function(){
		$(".guoqi").animate({left:'50%',top:'100px',width:'809px',height:'450px'},"slow");
	$(".guoqi").css("background","url(/swt/images/gqda1.png) no-repeat left");
	$(".gq4").css({'display':'none',})
	$(".guoqi").css({'margin':'0 0 0 -404px',})
	},30000)
	
	//离线宝
	document.getElementById("callBtn").onclick = function () { 
lxb.call(document.getElementById("telInput"));
};

	
})

document.write('<script type="text/javascript"  data-lxb-uid="5555633" data-lxb-gid="145062" src="http://lxbjs.baidu.com/api/asset/api.js?t=\' + new Date().getTime() + \'" charset="utf-8"></scr\' + \'ipt>' );




function phone(){
	document.getElementById("telInput").value="";
};


 window.onscroll=function(){
			var mytel=document.getElementById('swt_right');
			 var RTfloatx=document.getElementById('swt_left'); 
			if (window.ActiveXObject) {
				  var ua = navigator.userAgent.toLowerCase();
				  var ie=ua.match(/msie ([\d.]+)/)[1]
				  if(ie==6.0){
					  mytel.style.position='absolute';
					  document.getElementById('swt_right').style.top =  document.documentElement.scrollTop + document.documentElement.clientHeight - 50 + 'px';
				  }
			}	
			if((document.documentElement.scrollTop || document.body.scrollTop)<300){
					mytel.style.display='none';
				 RTfloatx.style.display='none'; 
			 } 
			
			if((document.documentElement.scrollTop || document.body.scrollTop)>300 ){
				
				mytel.style.display='block';
				 RTfloatx.style.display='none'; 
				
				}
				
	}


//文章图片修改

$(".main2_L07 a img").attr("src","/images/667-138.gif");
$(".left_title_pic a img").attr("src","/images/667-138.gif");

if (cnzz.search(/cdz|ddz/i) > -1) {
                $(".left_title_pic a img").attr("src", "/images/xin667.gif");
                $(".left_title_pic a").attr("onclick", "onClickSWT('ek-banner');return false;");
            } else if (cnzz.search(/jsfl/i) > -1) {
                $(".main2_L07 a img").attr("src", "/images/jsfl000.gif");
                $(".left_title_pic a img").attr("src", "/images/jsfl000.gif");
            } else if (cnzz.search(/sm/i) > -1) {
                $(".main2_L07 a img").attr("src", "/images/sm000.gif");
                $(".mainLeft03 a img").attr("src", "/images/sm000.gif");
                $(".left_title_pic a img").attr("src", "/images/sm000.gif");
            } else if (cnzz.search(/yyz/i) > -1) {
                $(".main2_L07 a img").attr("src", "/images/yyz000.gif");
                $(".left_title_pic a img").attr("src", "/images/yyz000.gif");
            }
