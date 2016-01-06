function submoteInit()
{
	script = document.createElement('script');
	script.type = 'text/javascript';
	script.src = "https://rawgit.com/Zarlach/Submote/develop/submote.js";
	head = document.getElementsByTagName('head')[0];
	if(head) head.appendChild(script);
}

submoteInit();