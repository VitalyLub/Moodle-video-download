javascript:(function()%7Bvar link%3Ddocument.createElement("a")%3Blink.download%3D"yo"%3Blink.href%3Ddocument.querySelector("%23two > source").src%3Bdocument.body.appendChild(link)%3Blink.click()%3Bdocument.body.removeChild(link)%3Bdelete link%7D)()

javascript:(function(){
var link=document.createElement("a");
link.download="yo";
link.href=document.querySelector("#two > source").src;
document.body.appendChild(link);
link.click();
document.body.removeChild(link);
delete link})()