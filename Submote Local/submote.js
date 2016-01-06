/*
|--------------------------------------------------------------------------
| Submote loader
|--------------------------------------------------------------------------
|
| This loader will load the latest version of Submote from GitHub through
| RawGit.
|
*/

function submoteInit()
{
    script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = "http://localhost/Submote/submote.js?"+Math.random();
    head = document.getElementsByTagName('head')[0];
    if(head) head.appendChild(script);
}

submoteInit();