
function mclose(id)
{
	document.getElementById(id).style.display="none";
}
//http://crm2.qq.com/page/portalpage/wpa.php?uin=4000540567&f=1&ty=1&aty=0&a=&from=6
//商务通部分
document.write('<style type="text/css">');
document.write('.nextpage { bottom: -20px;margin: 0 auto; position: fixed; height:1px;width: 215px;right:0; z-index: 99999; _bottom:auto; _width: 100%; _position: absolute;  _top:expression(eval(document.documentElement.scrollTop+document.documentElement.clientHeight-this.offsetHeight-(parseInt(this.currentStyle.marginTop, 10)||0)-(parseInt(this.currentStyle.marginBottom, 10)||0)));');
//document.write('background:#3f230c;');
document.write('}');
document.write('.nextpage_foot{');
document.write('	width:980px;');
document.write('	height:42px;');
document.write('	margin-left:auto;');
document.write('	margin-right:auto;');
document.write('	overflow:hidden;');
document.write('}');
document.write('.nextpage_qq{');
//document.write('	position:absolute;z-index:103;width:320px;height:313px;margin-top:-313px;right:0px;');
document.write('	position:absolute;z-index:103;width:220px;height:130px;margin-top:-140px;right:0px;');
document.write('}');
document.write('#nextpage_qq_but{');
document.write('	position:absolute;z-index:104;width:30px;height:30px;right:6px;cursor:pointer;background:url(/swt/qq_but.gif);');
document.write('}');
document.write('.nextpage_tel{');
document.write('	position:absolute;z-index:103;width:38px;height:140px;margin-top:-600px;left:0px; background:url(/swt/2.jpg); cursor:pointer;');
document.write('}');
document.write('.tel_foot{')
document.write('	position:absolute;margin-left:auto;margin-right:auto;margin-top:-10px;z-index:103;width:980px;height:65px;background:url(/swt/foot.gif);');
document.write('}');
document.write('.tel_iframe{background-color:transparent;margin-top:16px;margin-left:750px;}');
document.write('</style>');

document.write('<div class="nextpage">');


//document.write('	<div class="nextpage_foot">');//底部横条
//document.write('    	<div class="tel_foot"><iframe src="http://www.rksjk.com/js/tel_iframe.html" width="400" height="80" allowtransparency="true" class="tel_iframe" frameborder="0"></iframe></div>');
//document.write('    </div>');


document.write('    <div class="nextpage_qq" id="qq">');
document.write('<div style="width:30px;height:30px;z-index:99999;background:url(/swt/dian.gif);cursor:pointer;position:absolute;margin-left:180px;" onClick="closeqq()"></div>');
document.write('<a onclick="onClickSWT(\'QQdoudong\');return false;" href="javascript:void(0)"  onmousedown="_czc.push([\'_trackEvent\', \'商务通\', \'点击\', \'QQ\']);" target="_blank"><img src="/swt/qq_js.gif" border="0" /></a></div>');
//document.write('<div class="nextpage_qq" id="nextpage_qq"> <div id="nextpage_qq_but" onclick="mclose(\'nextpage_qq\');" title="点击关闭"></div><a href="/swt/" target="_blank"><img src="/swt/qq_js_x.gif" border="0" /></a></div>');  
//(11.25)document.write('    <div class="nextpage_tel" id="telone"></div>');
//document.write('    <div class="nextpage_tel"><a href="/mfdh/" target="_blank"><img src="/swt/tel.gif" width="145" height="271" border="0" /></a></div>');
function showQQ(){
	$("#qq").hide();
	$("#qq").fadeIn("slow");
}
function showagainQQ(){
	$("#qq").fadeIn("slow");
	clearTimeout(T);
}
var T = setTimeout("showQQ()","0");
function closeqq(){
	$("#qq").fadeOut('slow');
	T = setTimeout("showagainQQ()","5000");
	return false;
};

document.write('<div id="sysp" style="width: 190px;height: 249px;margin-top: -249px;left: 0;position: absolute;z-index: 104;background:url(/swt/sysp.gif) no-repeat;display: none;">');
document.write('<a onClick="mclose(\'sysp\')" style="width:190px; height:10px; display:block;"></a>');
document.write('<a href="/mtbd.html" style="width:190px; height:239px; display:block;"></a>');
document.write('</div>');
document.write('</div>');


//商务通部分//免费电话部分
//document.write('<script src="/swt/tel.js" type="text/javascript"></script>');

/*漂浮*/
//$("#telone").mouseover(function(){$("#JF_BirthCode14").fadeIn();$("#telone").fadeOut("slow");});
//$("#gb").click(function(){$("#JF_BirthCode14").fadeOut();$("#telone").fadeIn("slow");});
function showtel(){
	$("#tel").hide();
	$("#tel").fadeIn("slow");
}
function showagaintel(){
	$("#tel").fadeIn("slow");
	clearTimeout(T);
}
var T = setTimeout("showtel()","0");
function closetel(){
	$("#tel").fadeOut('slow');
	T = setTimeout("showagaintel()","8000");
	return false;
};