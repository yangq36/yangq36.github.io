function addCookie(name,value,expiresHours){ 
var cookieString=name+"="+escape(value); 
//判断是否设置过期时间 
if(expiresHours>0){ 
var date=new Date(); 
date.setTime(date.getTime+expiresHours*3600*1000); 
cookieString=cookieString+"; expires="+date.toGMTString(); 
} 
document.cookie=cookieString; 
} 

function fn() {
    var sha = hex_sha1(form1.pw.value);
    if(sha=="9835cb2d43d04db168a82b6d3c1e055095f222c1")//love
	{
		addCookie("name","love",0);
		window.location.href="/vip_entry/love";
	}
}
