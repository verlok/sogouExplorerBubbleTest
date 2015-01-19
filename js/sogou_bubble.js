/*
NOTE:
THE FOLLOWING SCRIPT, FOUND ON GOOGLE CODE, DOESN'T WORK!!! THAT'S BECAUSE THE USER AGENT HAS CHANGED SINCE SOGOU V.2
SOGOU 5.1.7 USER AGENTS ARE THE FOLLOWING:

- Webkit mode
  "Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/35.0.1916.153 Safari/537.36 SE 2.X MetaSr 1.0"

- Trident mode
  "Mozilla/5.0 (Windows NT 6.1; WOW64; Trident/7.0; SLCC2; .NET CLR 2.0.50727; .NET CLR 3.5.30729; .NET CLR 3.0.30729; Media Center PC 6.0; .NET4.0C; .NET4.0E; CMNTDFJS; SE 2.X MetaSr 1.0; rv:11.0) like Gecko"
*/
var client_ua = navigator.userAgent;
if ((client_ua.indexOf('SE 2.X') != -1) && (client_ua.indexOf('Trident') != -1)) {
	var sg_tip = document.createElement('div');
	sg_tip.setAttribute('id', 'sg_tip');
	var sg_tip_img = document.createElement('img');
	sg_tip_img.setAttribute('alt', '搜狗浏览器用户请切换为“高速”模式');
	sg_tip_img.setAttribute('title', '搜狗浏览器用户请切换为“高速”模式');
	sg_tip_img.setAttribute('src', 'http://sogou-explorer-bubble.googlecode.com/files/sg_tip.gif');
	sg_tip.appendChild(sg_tip_img);
	var sg_tip_br = document.createElement('br');
	sg_tip.appendChild(sg_tip_br);
	var sg_tip_a = document.createElement('a');
	sg_tip_a.setAttribute('title', '隐藏提示');
	sg_tip_a.setAttribute('href', 'javascript:sg_tip_hide();');
	sg_tip_a.innerHTML = '点击隐藏此提示';
	sg_tip.appendChild(sg_tip_a);
	sg_tip.style.cssText = 'display:block;position:absolute;top:0;right:250px;width:160px;height:77px;background:url(http://sogou-explorer-bubble.googlecode.com/files/sg_tip_bg.gif) no-repeat transparent;z-index:20;padding:15px 5px 0;text-align:center;margin:0;line-height:normal;border:0 none;';
	sg_tip_img.style.cssText = 'padding:0;margin:0;border:0 none;float:none;';
	sg_tip_a.style.cssText = 'text-decoration:none;font-size:12px;color:#888;margin:0;padding:0;float:none;';
	document.body.appendChild(sg_tip);

	function sg_tip_hide() {
		sg_tip.style.display = 'none'
	}
}