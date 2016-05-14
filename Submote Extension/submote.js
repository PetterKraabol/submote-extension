function submoteInit()
{
    date = new Date();
	script = document.createElement('script');
	script.type = 'text/javascript';
	script.src = "https://rawgit.com/Zarlach/Submote/master/submote.js?"+date.getTime();
	head = document.getElementsByTagName('head')[0];
	if(head) head.appendChild(script);
}

submoteInit();