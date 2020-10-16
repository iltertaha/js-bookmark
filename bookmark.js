var element = document.evaluate( '//*[@id="playback-video-playback-video"]/div[3]' ,document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null ).singleNodeValue;
if (element != null) {
   
  document.evaluate( '//*[@id="playback-video-playback-video"]/div[3]' ,document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null ).singleNodeValue.innerText = "Current Playback Rate: " + String(document.querySelector("video").playbackRate) +  "        ";
document.evaluate( '//*[@id="playback-video-playback-video"]/div[3]' ,document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null ).singleNodeValue.style.color = "white";  
var x = document.createElement("BUTTON");
  var y = document.createElement("BUTTON");
  x.style.opacity = 0.2;
  y.style.opacity = 0.2;
  element.style.opacity = 0.3;
element.onmouseover = function(){element.style.opacity = 0.5;};
element.onmouseout = function(){element.style.opacity = 0.02;};



  x.innerHTML = "slower";
  y.innerHTML = "faster";

 
x.setAttribute(
   "style", "background-color: #f44336; border: none; color: white; padding: 10px 24px; text-align: center; text-decoration: none; display: inline-block; font-size: 16px;");


y.setAttribute(
   "style", "background-color: #4CAF50; border: none; color: white; padding: 10px 24px; text-align: center; text-decoration: none; display: inline-block; font-size: 16px;");

x.onclick = function(){
document.querySelector("video").playbackRate = document.querySelector("video").playbackRate - 0.25;
document.evaluate( '//*[@id="playback-video-playback-video"]/div[3]' ,document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null ).singleNodeValue.innerText = "Current Playback Rate: " + String(document.querySelector("video").playbackRate) +  "        ";
element.appendChild(x);
element.appendChild(y);



};

y.onclick = function(){
document.querySelector("video").playbackRate = document.querySelector("video").playbackRate + 0.25;
document.evaluate( '//*[@id="playback-video-playback-video"]/div[3]' ,document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null ).singleNodeValue.innerText = "Current Playback Rate: " + String(document.querySelector("video").playbackRate) +  "        ";
element.appendChild(x);
element.appendChild(y);



};


element.appendChild(x)
element.appendChild(y)

}


