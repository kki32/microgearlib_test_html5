// var pathToFile = __dirname + "/helpers/receiver.txt";
// var pathToFile2 = __dirname + "/helpers/receiver2.txt";

// var topModule = module;

// while(topModule.parent) {
//     topModule = topModule.parent;
// }

// var appdir = require('path').dirname(topModule.filename);
// var filePath = appdir + "/microgear.cache";

// console.log("inside testing file~~~~~~~~");
// console.log("filePath to cache file: "+filePath);
// console.log("receiver file: " +pathToFile);
// console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~");

// var connectTimeout = 10000;
// var messageTimeout = 13000;
var itTimeout = 60000;
var beforeTimeout = 60000;
var connectTimeout = 5000;
var messageTimeout = 6000;

//var itTimeout = 40000;
//
//var beforeTimeout = 20000;
var chatInterval = 1000;
var afterTimeout = 20000;

if(typeof(Worker) !== "undefined") {
    if(typeof(w) !== "undefined") {
  w = new Worker("count.js");
    // Yes! Web worker support!
    // Some code.....
} else {
    // Sorry! No Web Worker support..
    console.log('no worker');
}

} else {
    // Sorry! No Web Worker support..
      console.log('no worker2');
}



// define(['Microgear'], function(microgear) {
  describe('Code 1: Create', function () {
    var microgear;
    var message
    var appkey;
    var appsecret;
    var appid;
    var gearname;
    var connected;
    var code;
    var appid;
  
    beforeEach(function () {
            //initialise variables
            microgear = undefined;
            appkey = 'mRN6Oh3bO3kZTJI';
            appsecret = 'DqVtJx9lbf4UhMOBI42TN2FZDfuxHk';
          });
    it('Code 1: Case 1 should save gearkey and gearsecret', function (done) {
      this.timeout(500000);
            //ensure microgear is undefined before create
            expect(microgear).to.be.undefined;
            // microgear = Microgear.create({
            //   key: appkey,
            //   secret: appsecret,

            // });
          microgear = Microgear.create({
        key: appkey,
        secret: appsecret,
        alias: "s"
      });

            //check that microgear is an object and gearkey & gearsecret is saved to the object
            // expect(microgear).to.be.an('object');
            // expect(microgear.gearkey).to.equal(appkey);
            // expect(microgear.gearsecret).to.equal(appsecret);
  
            setTimeout(function(){
              console.log("he");
                      // microgear.setalias('po');
              microgear.connect(appid);
      
                   setTimeout(function(){
                    console.log("qe");
                    done();
                          }, 7000);
            }, 7000);
          });

  });

  // describe('Code 4: Chat', function () {


// describe('Code 4: Case 1 Chat with itself', function () {
//      var microgear;
//      var message
//      var appkey;
//      var appsecret;
//      var appid;
//      var gearname;
//      var helperGearname;
//      var connected;
//      var code;
//      var modified;
//      var child_processes;
//      var spawn;

//      beforeEach(function (done) {
//       console.log("hello");
//       this.timeout(beforeTimeout);
//       microgear = undefined;
//       gearname = 'main';
//       message = "Hello";
//       appkey = 'mRN6Oh3bO3kZTJI';
//       appsecret = 'DqVtJx9lbf4UhMOBI42TN2FZDfuxHk';
//       appid = 'testHtml';
//       connected = false;

//       expect(microgear).to.be.undefined;

//       microgear = Microgear.create({
//         key: appkey,
//         secret: appsecret,
//         alias: gearname
//       });
//       expect(microgear.gearalias).to.equal(gearname);
//                     spawn = child_process.spawn;
//                 child_processes = spawn('node', ["specs/helpers/helper.js", " " + 10]);


//       done();
//     });

//      afterEach(function () {
//         if(connected){
//           microgear.client.disconnect();
//         }
//     });

//    it('should receive message', function (done) {
//       this.timeout(itTimeout);
//       var stubConnect = sinon.stub();
//       microgear.on('connected', stubConnect);

//       var stubMessage = sinon.stub();
//       microgear.on('message', stubMessage);

//       expect(stubConnect.called).to.be.false;
//       expect(stubMessage.called).to.be.false;
//       microgear.connect(appid);

//       //chat
//       setTimeout(function () {
//         console.log(stubConnect.called);
//         expect(stubConnect.called).to.be.true;
//         connected = true;
//         microgear.chat(gearname, message);
//         setTimeout(function () {
//          expect(stubMessage.called).to.be.true;
//          console.log(stubMessage.called);
//          expect(stubConnect.callCount).to.equal(1);
//          console.log(stubConnect.callCount);
//          expect(stubMessage.callCount).to.equal(1);
//          console.log(stubMessage.callCount);
//          expect(stubConnect.calledBefore(stubMessage)).to.be.true;
//          expect("" + stubMessage.args[0][1]).to.equal(message);
//           // expect(topic).to.be(appid + "/" + "gearname" + "/" + microgear.gearalias);
//           microgear.removeListener('connected', stubConnect);
//           microgear.removeListener('message', stubMessage);
//           done();
//         }, messageTimeout);
//       }, connectTimeout);
//     });

//    it('should receive message2', function (done) {
//       this.timeout(itTimeout);
//       var stubConnect = sinon.stub();
//       microgear.on('connected', stubConnect);

//       var stubMessage = sinon.stub();
//       microgear.on('message', stubMessage);
//       console.log("should not connect@");
//       expect(stubConnect.called).to.be.false;
//       expect(stubMessage.called).to.be.false;
//       microgear.connect(appid);

//       //chat
//       setTimeout(function () {
//         console.log(stubConnect.called);
//         expect(stubConnect.called).to.be.true;
//         connected = true;
//         microgear.chat(gearname, message);
//         setTimeout(function () {
//          expect(stubMessage.called).to.be.true;
//          console.log(stubMessage.called);
//          expect(stubConnect.callCount).to.equal(1);
//          console.log(stubConnect.callCount);
//          expect(stubMessage.callCount).to.equal(1);
//          console.log(stubMessage.callCount);
//          expect(stubConnect.calledBefore(stubMessage)).to.be.true;
//          expect("" + stubMessage.args[0][1]).to.equal(message);
//           // expect(topic).to.be(appid + "/" + "gearname" + "/" + microgear.gearalias);
//           microgear.removeListener('connected', stubConnect);
//           microgear.removeListener('message', stubMessage);
//           done();
//         }, messageTimeout);
//       }, connectTimeout);
//     });
// });