// JavaScript Document
(function () {
	"use strict";
	var VIDEOBOX = {
		Videoplay: function (e) {
			e.stopPropagation();
			var src = $(this).children("img").attr("vsrc");
			createvideo();

			function createvideo() {
				var w;
				if ($(window).width() > 640) {
					w = 640;
				} else {
					w = $(window).width();
				}
				var h = 0.75 * w;
				if ($(".showvideoboxstyle").length > 0) {
					$(".showvideobox video").remove();
					$(".showvideobox").append("<video style=\"width:100%;height:100%;background:#000;\" controls autoplay><source src=\"" + src + "\"></source></video>");
				} else {
					$("body").append("<style class='showvideoboxstyle'>.showvideobox div{cursor:pointer;}.showvideobox div .rotate{ -moz-transform:rotate(45deg); -webkit-transform:rotate(45deg); -o-transform:rotate(45deg); transform:rotate(45deg);}.showvideobox div .rotation{  -moz-animation: ratation 1s;-webkit-animation: ratation 1s;-o-animation: ratation 1s;animation: ratation 1s;}@keyframes ratation{100% {-ms-transform:rotate(45deg);-moz-transform:rotate(45deg);-webkit-transform:rotate(45deg);-o-transform:rotate(45deg); transform:rotate(45deg);}0%{-ms-transform:rotate(0);-moz-transform:rotate(0);-webkit-transform:rotate(0);-o-transform:rotate(0);  transform:rotate(0);}}@-moz-keyframes 	ratation{100% {-ms-transform:rotate(45deg);-moz-transform:rotate(45deg);-webkit-transform:rotate(45deg);-o-transform:rotate(45deg); transform:rotate(45deg);}0%{-ms-transform:rotate(0);-moz-transform:rotate(0);-webkit-transform:rotate(0);-o-transform:rotate(0);  transform:rotate(0);}}@-webkit-keyframes 	ratation{100% {-ms-transform:rotate(45deg);-moz-transform:rotate(45deg);-webkit-transform:rotate(45deg);-o-transform:rotate(45deg); transform:rotate(45deg);}0%{-ms-transform:rotate(0);-moz-transform:rotate(0);-webkit-transform:rotate(0);-o-transform:rotate(0);  transform:rotate(0);}}@-o-keyframes 	ratation{100% {-ms-transform:rotate(45deg);-moz-transform:rotate(45deg);-webkit-transform:rotate(45deg);-o-transform:rotate(45deg); transform:rotate(45deg);}0%{-ms-transform:rotate(0);-moz-transform:rotate(0);-webkit-transform:rotate(0);-o-transform:rotate(0);  transform:rotate(0);}}</style><div class=\"showvideobox\" style=\"width:" + w + "px;height:" + h + "px;position:fixed;z-index:999999;top:50%;left:50%;margin-top:-" + 0.5 * h + "px;margin-left:-" + 0.5 * w + "px;\"><div style=\"position:absolute;right:0px;top:-50px;width:50px;height:50px;border-radius:50%;background:#199790;z-index:98;\"><div style=\"width:4px;height:40px;position:absolute;top:5px;left:23px;background:#fff;\"></div><div style=\"width:40px;height:4px;position:absolute;top:23px;left:5px;background:#fff;\"></div></div><video style=\"width:100%;height:100%;background:#000;\" controls autoplay><source src=\"" + src + "\"></source></video></div>");
				}
				$(".showvideobox div div").addClass("rotate rotation");
				$(".showvideobox video").get(0).play();

				function removevideo(e) {
					e.stopPropagation();
					$(".showvideobox,.showvideoboxstyle").remove();
					$(".showvideobox div div").removeClass("rotate rotation");
					//clearTimeout(showvideoboxT);
				}
				$(".showvideobox").children("div").click(removevideo);
				//var showvideoboxT=setTimeout(function(){$(".showvideobox").children("div").fadeOut();},3000);
				function buttonshow() {
					//clearTimeout(showvideoboxT);
					$(".showvideobox").children("div").show();
					/*
					showvideoboxT=setTimeout(function(){
						$(".showvideobox").children("div").fadeOut();
						},3000);
						*/
				}
				$(".showvideobox").click(buttonshow);
				$(".showvideobox video").get(0).onpause = buttonshow;
			}
		},
		
		/*AddVideoCon: function (e) {
			var playcon="<div class=\"playcon\" style=\"z-index:0;position:absolute;top:50%;left:50%;width:50px;height:50px;border:2px solid white;border-radius:50%;margin-top: -25px;margin-left:-25px;\"><div style=\"border-left: 30px solid white;border-top:15px dashed transparent;border-right:30px dashed transparent;border-bottom:15px dashed transparent;position:absolute;top:50%;left:50%;margin-top:-15px;margin-left:-10px;\"></div></div>";
			if(e){
				e.addClass("videobox");
				if(e.css("position")==="static"){
					e.css("position", "relative");
				}
				e.append(playcon);
			}else{
				var video = $(".videobox");
				for (var i = 0; i < video.length; i++) {
					if (video.eq(i).css("position") === "static") {
						video.eq(i).css("position", "relative");
					}
					if (video.eq(i).children(".playcon").length < 1) {
						video.eq(i).append(playcon);
					}
				}
			}
		},
		
		*/
		
/*		RemoveVideoCon: function (e) {
			if(e){
				e.removeClass("videobox");
				e.children(".playcon").remove();
			}else{
				var playcon=$(".playcon");
				for(var i=0;i<playcon.length;i++){
					if(!playcon.eq(i).parent().hasClass("videobox")){
						playcon.eq(i).remove();
					}
				}
			}
		},*/
	/*	VideoControl:function(){
			var _this=$(this).get(0);
			if(_this.paused){
				_this.play();
			}else{
				_this.pause();
			}
		},*/
		LoopPlay:function(id,array){
			var srccount=0;
			function listenEle(condition,callback){
				var lT=setInterval(function(){
					if(condition()){
						clearInterval(lT);
						callback();
					}
				},50);
			}
			function initplaynext(){
				srccount=0;
				playnext();
			}
			function playnext(){
				listenEle(cfun,fun1);
				function cfun(){
					return $(".showvideobox video").length>0;
				}
				function fun1(){
					var v=$(".showvideobox video").get(0);
					function cfun(){
						return v.readyState===4;
					}
					function fun1(){
						function cfun(){
							return v.currentTime>v.duration-10;
						}
						function fun1(){
							function cfun(){
								return v.ended;
							}
							function fun1(){
								if(srccount<array.length){
									v.setAttribute("src",array[srccount]);
									playnext();
									srccount++;
								}else{
									
								}
							}
							listenEle(cfun,fun1);
						}
						listenEle(cfun,fun1);
					}
					listenEle(cfun,fun1);
				}
			}
			$(document).on("click",id,initplaynext);
		}
	};
	$(document).on("click", ".videobox", VIDEOBOX.Videoplay);
	$(document).on("click", "video", VIDEOBOX.VideoControl);
	//VIDEOBOX.AddVideoCon();
	window.VIDEOBOX = VIDEOBOX;
/*	var videoarray1=[],videoarray2=[];
	for(var i=2;i<=22;i++){
		videoarray1.push("video/1/"+i+".mp4");
	}
	videoarray1.push("video/1.mp4");
	for(var j=2;j<=23;j++){
		videoarray2.push("video/2/"+j+".mp4");
	}
	videoarray2.push("video/1.mp4");
	VIDEOBOX.LoopPlay("#video1",videoarray1);
	VIDEOBOX.LoopPlay("#video2",videoarray2);*/
})("jsby0561", "use to create videobox", window,jQuery);