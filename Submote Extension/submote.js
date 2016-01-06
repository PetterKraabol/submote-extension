function submoteInit()
{
	script = document.createElement('script');
	script.type = 'text/javascript';
	script.src = "https://rawgit.com/Zarlach/Submote/master/submote.js?"+Math.random();
	head = document.getElementsByTagName('head')[0];
	if(head) head.appendChild(script);
}

submoteInit();