// JavaScript Document
(function(){
	"use strict";
	var PUBLICTELIMG=[//包含所有页面中根目录路径图片
			["/swt/images/xin_swt_right_06.jpg","/images/tel/xin_swt_right_06.jpg"],
			["/swt/bot_call.png","/images/tel/bot_call.png"],
			["/images/hch9.jpg","/images/tel/hch9.jpg"],
			["/images/banner01.jpg","/images/tel/banner01.jpg"],
			["/images/right2/right3_18.gif","/images/tel/right3_18.gif"],
			["/images/yyz/main_10.jpg","/images/tel/main_10.jpg"],
			["/images/tel/top_right.gif","/images/tel/top_right.gif"],//一样的是因为已经被改过html这里可以当作记录
			["/image/myyx_2.jpg","/images/tel/myyx_2.jpg"],
			["/image/mid1.jpg","/images/tel/mid1.jpg"],
			["/image/top.jpg","/images/tel/top_1.jpg"],
			["/images/right2/right3_18.gif","/images/tel/right3_18.gif"],
			["/templets/jsk/zt/ceshi/image/index_05.jpg","/images/tel/index_05.jpg"],
			["/image/wzy_tyr_4.jpg","/images/tel/wzy_tyr_4.jpg"],
			["/templets/jsk/zt/zjhz02/images/qq1.jpg","/images/tel/qq1.jpg"],
			["/swt/tc1_zt.gif","/images/tel/tc1_zt.gif"],
			["/swt/new_zt.gif","/images/tel/new_zt.gif"],
			["/images/banner_511.jpg","/images/tel/banner_511.jpg"],
			["/images/jf_02.jpg","/images/tel/jf_02.jpg"],
			["/images/yyz000.gif","/images/tel/yyz000.gif"],
			["/images/jf_06.jpg","/images/tel/jf_06.jpg"],
			["/images/jsfl000.gif","/images/tel/jsfl000.gif"],
			["/images/summer_banner.jpg","/images/tel/summer_banner.jpg"],
			["/images/banner_mt.jpg","/images/tel/banner_mt.jpg"],
			["/templets/jsk/zt/liaofa02/image/top_17.jpg","/images/tel/top_17.jpg"],
			["/templets/jsk/zt/liaofa02/image/top_04.jpg","/images/tel/top_04.jpg"],
		],
	 	PUBLICTELIMGBG=[//包含所有模板中背景图片
			["/swt/images/xin_swt_left.jpg","/images/tel/xin_swt_left.jpg"],
			["/images/yyz/main_27.jpg","/images/tel/main_27.jpg"],
			["/images/banner_511.jpg","/images/tel/banner_511.jpg"],//背景图中有和上面图片其实可以放一个数组里面，但为方便记录仍然分开写，有重复的地方
			["/image/banner01.jpg","/images/tel/banner01_1.jpg"],
			["/swt/bot_call.png","/images/tel/bot_call.png"],
			["/templets/jsk/zt/liaofa02/image/main_40.jpg","/images/tel/main_40.jpg"],
			["/templets/jsk/zt/jsk/image/f_banner_02.jpg","/images/tel/f_banner_02.jpg"],
	],
	   PUBLICTELIMGFORSINGLE=[//包含单页面中的背景图片（其实可以用上面的PUBLICTELIMGBG收录，为了方便记录是单页面的放在了这边）所有页面中（包括单页和模板）的无根目录路径图片
			["/zt/zjhz/images/banner02.jpg","/images/tel/banner02.jpg"],//0
			["/zt/zjhz/images/zhuan_08.jpg","/images/tel/zhuan_08.jpg"],//1
			["/zt/zjhz/images/quan_a_03.jpg","/images/tel/quan_a_03.jpg","/images/tel/quan_03.jpg"],//2
			["/zt/zjhz/images/top.jpg","/images/tel/top.jpg"],//3
			["/zt/zjhz/images/banner.jpg","/images/tel/banner_zjhz.jpg"],//4
			["/zt/smzt/images/top.jpg","/images/tel/top_smzt.jpg"],//5
			["/templets/jsk/zt/zjhz02/images/zj_02.jpg","/images/tel/zj_02.jpg"],//6
			["/zt/mxzt/img/logo.png","/images/tel/logo.png"],//7
			["/zt/mxzt/img/banner.jpg","/images/tel/banner.jpg"],//8
			["/zt/mxzt/img/mxzt_47.gif","/images/tel/mxzt_47.gif"],//9
		    //["/zt/spzt/images/logo.jpg","/images/tel/logo.jpg"],//10
	];
	var _host=window.location.host;
	var _protocol=window.location.protocol;
	var _domainurl=_protocol+"//"+_host;
	function changeimg(){
		function forpublicimgbg1(e){
			$(e.currentTarget).css("backgroundImage","url(\""+_domainurl+PUBLICTELIMGFORSINGLE[$(e.currentTarget).data("publictelimgforsingle")][2]+"\")");
			}		
		function forpublicimgbg(e){
			$(e.currentTarget).css("backgroundImage","url(\""+_domainurl+PUBLICTELIMGFORSINGLE[$(e.currentTarget).data("publictelimgforsingle")][1]+"\")");
			}
		function opacityshow(a){
			function ABC(){
			var imgindex=a.data.index("img");
			if(document.getElementsByTagName("img")[imgindex].complete){
				a.data.css({"opacity":"1"});
				}else{
					setTimeout(ABC,50);
					}
				}
			ABC();
			}		
		for(var i=0;i<$(".publictel_img").length;i++){
			if($(".publictel_img").eq(i).hasClass("forsingle")){
				$(".publictel_img").eq(i).attr("src",PUBLICTELIMGFORSINGLE[$(".publictel_img").eq(i).data("publictelimgforsingle")][1]);
				$(".publictel_img").eq(i).load($(".publictel_img").eq(i),opacityshow);
				}else{
				for(var j=0;j<PUBLICTELIMG.length;j++){
				if($(".publictel_img").eq(i).attr("src")===PUBLICTELIMG[j][0]){
					$(".publictel_img").eq(i).attr("src",PUBLICTELIMG[j][1]);
					$(".publictel_img").eq(i).load($(".publictel_img").eq(i),opacityshow);
					$(".publictel_img").eq(i).data("publictel_img",PUBLICTELIMG[j][1]);
					}
				}
					}
			}
		for(var k=0;k<$(".publictel_imgbg").length;k++){
			if($(".publictel_imgbg").eq(k).hasClass("forsingle")){
				$(".publictel_imgbg").eq(k).css({"backgroundImage":"url(\""+_domainurl+PUBLICTELIMGFORSINGLE[$(".publictel_imgbg").eq(k).data("publictelimgforsingle")][1]+"\")","opacity":"1"});
				if($(".publictel_imgbg").eq(k).hasClass("forhover")){
				   $(".publictel_imgbg").eq(k).hover(forpublicimgbg1,forpublicimgbg);
					}
				}else{
				for(var l=0;l<PUBLICTELIMGBG.length;l++){
				if($(".publictel_imgbg").eq(k).css("backgroundImage")==="url(\""+_domainurl+PUBLICTELIMGBG[l][0]+"\")"||$(".publictel_imgbg").eq(k).css("backgroundImage")==="url("+_domainurl+PUBLICTELIMGBG[l][0]+")"){
					$(".publictel_imgbg").eq(k).css({"backgroundImage":"url(\""+_domainurl+PUBLICTELIMGBG[l][1]+"\")","opacity":"1"});
					$(".publictel_imgbg").eq(k).data("publictel_imgbg","url(\""+_domainurl+PUBLICTELIMGBG[l][1]+"\")");
					break;
					}
				}
				}
			}
		}
	changeimg();
	function searchimg(){
		function dealchange(e){
			if($(e.currenTarget).attr("src")!==$(e.currenTarget).data("publictel_img")){
				for(var i=0;i<PUBLICTELIMG.length;i++){
					if($(e.currenTarget).attr("src")===PUBLICTELIMG[i][0]){
						$(e.currenTarget).attr("src",PUBLICTELIMG[i][1]);
						}
					}
				}
			}
		function dealchange1(e){
			if($(e.currenTarget).css("backgroundImage")!==$(e.currenTarget).data("publictel_imgbg")){
				for(var i=0;i<PUBLICTELIMGBG.length;i++){
					if($(e.currenTarget).css("backgroundImage")===_domainurl+PUBLICTELIMGBG[i][0]){
						$(e.currenTarget).css("backgroundImage",_domainurl+PUBLICTELIMGBG[i][1]);
						}
					}
				}
			}
		$(document).on("change","publictel_img",dealchange);
		$(document).on("change","publictel_imgbg",dealchange1);
		}
	//searchimg();//未测试暂不开放
	})("jsby0561");