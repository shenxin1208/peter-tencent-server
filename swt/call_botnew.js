var new_bottom_str = '\
<style>\
	.new_bottom_area{\
		position:fixed;\
		bottom:0;\
		width:100%;\
		height:309px;\
		background: rgba(0,0,0,0.8);\
		background-clip: content-box;\
		display: none;\
		padding-top: 91px;\
		z-index:999;\
	}\
	.new_bottom{\
		width:1181px;\
		height: 309;\
		margin:0 auto;\
		position:relative;\
	}\
	.new_bottom_left{\
		margin-top:-90px;\
		display: inline-block;\
	}\
	.new_bottom_center{\
		display: inline-block;\
		margin-left: 60px;\
	}\
	.new_bottom_center p:nth-child(1){\
		font-size:35px;\
		color:#fbf2e3;\
	}\
	.new_bottom_center p:nth-child(1) span{\
		font-size:70px;\
		color:#ffa35b;\
		font-weight: 700;\
		margin-left: 10px;\
	}\
	.new_bottom_center p:nth-child(2){\
		font-size:20px;\
		color:#ffffff;\
		margin-top:-5px;\
	}\
	.new_bottom_center p:nth-child(3){\
		margin-top:13px;\
	}\
	.new_bottom_center p:nth-child(3) img:nth-child(2){\
		margin-left: 20px;\
	}\
	.new_bottom_right{\
		display:inline-block;\
		margin-left: 80px;\
		margin-top: 87px;\
    	vertical-align: top;\
	}\
	.new_bottom_right a{\
		display:inline-block;\
		width:280px;\
		line-height: 55px;\
		background: url(/images/bottom_btn1.png) no-repeat 0 0/100%;\
		font-size:24px;\
		color:#fff;\
		text-indent: 84px;\
	}\
	.new_bottom_right a:nth-child(3){\
		background: url(/images/bottom_btn2.png) no-repeat 0 0/100%;\
		margin-top: 20px;\
	}\
	.new_bottom_close{\
		position:absolute;\
		top:20px;\
		right:100px;\
	}\
	a.new_bottom_close:hover img{\
		transform: rotate(180deg);\
	}\
	a.new_bottom_close img{\
		transition: all 0.2s linear;\
	}\
</style>\
<div class="new_bottom_area">\
	<div class="new_bottom">\
		<div class="new_bottom_left">\
			<img src="/images/bottom_zj.png">\
		</div>\
		<div class="new_bottom_center">\
			<p><span>??????</span></p>\
			<p></p>\
			<p class="clearfix"><img src="/images/bottom_zj_pic1.jpg"><img src="/images/bottom_zj_pic2.jpg"></p>\
		</div>\
		<div class="new_bottom_right">\
			<a onclick="onClickSWT(\'pcpf-dbtc-zxzxys\')" href="javascript:void(0)" target="_self">????ԤԼ?Һ?</a><br><a>400-8941-120</a>\
		</div>\
		<a class="new_bottom_close">\
			<img src="/images/new_bottom_close.png">\
		</a>\
	</div>\
</div>\
';

$("body").append(new_bottom_str);

$(function(){
	$('.new_bottom_area').slideDown();
});
$('.new_bottom_close').click(function(){
	$('.new_bottom_area').slideUp();
	setTimeout(function(){
		$('.new_bottom_area').slideDown();
	}, 9000);
});
