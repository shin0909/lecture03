var helloWorld = function(){
	var message = document.getElementById("helloWorld");
	message.setAttribute("class", "");
};

var showHelloWorldButton = document.getElementById("showHelloWorld");
showHelloWorldButton.addEventListener("click", helloWorld);


var helloWorld2 = function(){
	var message2 = document.getElementById("helloWorld2");
	message2.setAttribute("class", "");
};

var showHelloWorldButton2 = document.getElementById("showHelloWorld2");
showHelloWorldButton2.addEventListener("click", helloWorld2);
