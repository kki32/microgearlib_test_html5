<script src="https://netpie.io/microgear.js"></script>
<script>
    const APPKEY    = "mRN6Oh3bO3kZTJI";
    const APPSECRET = "DqVtJx9lbf4UhMOBI42TN2FZDfuxHk";
    const APPID     = "testHtml";


    var firefox_gearname = "firefox";
    var destination = "chrome";
 
    var microgear = Microgear.create({
        gearkey: APPKEY,
        gearsecret: APPSECRET
    });
 
    microgear.on('message',function(topic,msg) {
        confirm(msg);

        //document.getElementById('console').innerHTML += '<br>'+msg;
    });
 
    microgear.on('connected', function() {
        console.log('netpie connected');
        microgear.setalias(firefox_gearname);
    //     setInterval(function(){
    // microgear.publish('/topic', 'morning');
// }, 1000);

        //or you may use subscribe
        //microgear.subscribe("/any/topic/here");
    });
 
    // microgear.resettoken(function(err) {
        microgear.connect(APPID);

    // });
</script>


<input type="text" id="text" size=40>
<input type="button" value="send" onClick="send()">
 
<script>
    function send() {
        microgear.chat("k","hi,this is what"+firefox_gearname);
        microgear.chat(destination,"hi,this is"+firefox_gearname);
    
        // microgear.publish('/topic', 'morning');
        console.log("hello");
        //or you may use publish
    }
    // Hint : you can access a text content from document.getElementById('text').value
</script>

<div id="console"></div>
 
