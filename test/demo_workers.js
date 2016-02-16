// var i = 0;

function timedCount() {

onmessage = function(e) {
  console.log('Message received from main script');
  var workerResult = 'Result: ' + (e.data[0] * e.data[1]);
  console.log('Posting message back to main script');
  // postMessage(workerResult);
}
	window = self;
importScripts("microgear.js");
    	const APPKEY	= "mRN6Oh3bO3kZTJI";
	const APPSECRET = "DqVtJx9lbf4UhMOBI42TN2FZDfuxHk";
	const APPID 	= "testHtml";
 
	var microgearname = "myMicrogear";
 
	var microgear = Microgear.create({
    	gearkey: APPKEY,
    	gearsecret: APPSECRET
	});
microgear.on('message',function(topic,msg) {
        document.getElementById("data").innerHTML = msg;
	});
 
	microgear.on('connected', function() {

    	microgear.setname(microgearname);
    
    	setInterval(function() {
            microgear.chat(microgearname,"Hello from myself at "+Date.now());
    	},5000);
	});
 
	microgear.resettoken(function(err) {
    	microgear.connect(APPID);
	});
}

timedCount();