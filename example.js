<script src="https://netpie.io/microgear.js"></script>

<script>
	const APPKEY = "mRN6Oh3bO3kZTJI";
	const APPSECRET = "DqVtJx9lbf4UhMOBI42TN2FZDfuxHk";
	const APPID = "testHtml";
	var microgear = Microgear.create({
		gearkey: APPKEY,
		gearsecret: APPSECRET
	});
	microgear.on('message',function(topic,msg) {
		document.getElementById("data").innerHTML = msg;
	});
	microgear.on('connected', function() {
		microgear.setname('htmlgear');
		document.getElementById("data").innerHTML = "Now I am connected with netpie...";
		setInterval(function() {
			microgear.chat("htmlgear","Hello from myself at "+Date.now());
		},5000);
	});
	microgear.on('present', function(event) {
		console.log(event);
	});
	microgear.on('absent', function(event) {
		console.log(event);
	});
	microgear.resettoken(function(err) {
		microgear.connect(APPID);
	});
</script>

<div id="data">_____</div>