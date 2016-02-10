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

var connectTimeout = 10000;
var messageTimeout = 13000;
var itTimeout = 60000;
var beforeTimeout = 60000;
//var connectTimeout = 5000;
//var messageTimeout = 6000;
//var itTimeout = 40000;
//
//var beforeTimeout = 20000;
var chatInterval = 1000;
var afterTimeout = 20000;


define(['Microgear'], function(microgear) {
describe('Code 1: Create', function() {
   var microgear;
   var message
   var appkey;
   var appsecret;
   var appid;
   var gearname;
   var connected;
   var code;
   var child_processes;
   var spawn;

   describe('Code 1: Case 1: Create microgear with gearkey and gearsecret parameter', function () {
       beforeEach(function () {
           //initialise variables
           microgear = undefined;
           appkey = 'jX2viqgprq3XRhv';
           appsecret = '3uscc5uX4Hh6lYkmtKJbljxMtMl1tL';
       });

       it('Code 1: Case 1 should save gearkey and gearsecret', function () {
           //ensure microgear is undefined before create
           expect(microgear).to.be.undefined;
           microgear = Microgear.create({
               key: appkey,
               secret: appsecret
           });
           //check that microgear is an object and gearkey & gearsecret is saved to the object
           expect(microgear).to.be.an('object');
           expect(microgear.gearkey).to.equal(appkey);
           expect(microgear.gearsecret).to.equal(appsecret);
       });
   

   });
});



   // describe('Code 1: Case 2 and Case 3 Create with invalid input', function () {
   //     beforeEach(function (done) {
   //             this.timeout(beforeTimeout);
   //         //initialise variables
   //         microgear = undefined;
   //             appkey = 'jX2viqgprq3XRhv';
   //             appsecret = '3uscc5uX4Hh6lYkmtKJbljxMtMl1tL';
   //             appid = 'testNodeJs';
   //             connected = false;

   //             //clear cache file
   //             data = fs.writeFileSync(filePath, '{"_":null}');
   //             console.log(data);
   //         done();
   //         });
   //     afterEach(function () {
   //         if(connected){
   //             microgear.client.end();
   //         }
   //     });
   //     it('Code 1: Case 2.1 should ignore empty gearkey', function () {
   //         //ensure microgear is undefined before create
   //         expect(microgear).to.be.undefined;
   //         //if appkey to empty
   //         appkey = '';
   //         microgear = Microgear.create({
   //             key: appkey,
   //             secret: appsecret
   //         });
   //         //should not generate microgear object
   //         expect(microgear).to.be.null;
   //     });

   //     it.skip('Code 1: Case 2.2 should throw error when appkey change its case', function (done) {
   //         this.timeout(itTimeout);

   //             //change appkey to lowercase
   //             var loweredAppkey = appkey.toLowerCase();
   //             expect(loweredAppkey).to.equal('jX2viqgprq3XRhv');

   //             //ensure microgear is undefined before create
   //             expect(microgear).to.be.undefined;
   //             microgear = Microgear.create({
   //                 key: loweredAppkey,
   //                 secret: appsecret
   //             });
   //             //ensure loweredAppkey and appsecret is saved
   //             expect(microgear.gearkey).to.equal(loweredAppkey);
   //             expect(microgear.gearsecret).to.equal(appsecret);

   //             //stub event to variable. this is to remove event being called after this it block
   //             var stubConnect = sinon.stub();
   //             microgear.on('connected', stubConnect);
   //             var stubError = sinon.stub();
   //             microgear.on('error', stubError);

   //             microgear.connect(appid);

   //             //after sometime, ensure error and connected event are being called
   //             setTimeout(function () {
   //                 expect(stubConnect.called).to.be.false;
   //                 expect(stubError.called).to.be.true;
   //                 expect(stubConnect.calledBefore(stubError)).to.be.true;
   //                 done();
   //             }, connectTimeout);
   //         });

   //     it.skip('Code 1: Case 2.3 should throw error when appkey is trimmed', function (done) {
   //         this.timeout(itTimeout);
   //         var trimmedGearKey = appkey.substring(0, appkey.length - 2);
   //         expect(trimmedGearKey).to.equal('NLc1b8a3UZPMh');
   //         //ensure microgear is undefined before create
   //         expect(microgear).to.be.undefined;
   //         microgear = Microgear.create({
   //             key: trimmedGearKey,
   //             secret: appsecret
   //         });

   //         expect(microgear.gearkey).to.equal(trimmedGearKey);
   //         expect(microgear.gearsecret).to.equal(appsecret);

   //         var stubConnect = sinon.stub();
   //         microgear.on('connected', stubConnect);

   //         var stubError = sinon.stub();
   //         microgear.on('error', stubError);

   //         microgear.connect(appid);
   //         setTimeout(function () {
   //             expect(stubConnect.called).to.be.false;
   //             expect(stubError.called).to.be.true;
   //             expect(stubConnect.calledBefore(stubError)).to.be.true;
   //             done();
   //         }, connectTimeout);

   //     });

   //     it.skip('Code 1: Case 2.3 should throw error when appkey is added', function (done) {
   //         this.timeout(itTimeout);
   //         var addedGearKey = appkey + "xx";
   //         expect(addedGearKey).to.equal('jX2viqgprq3XRhvxx');
   //         //ensure microgear is undefined before create
   //         expect(microgear).to.be.undefined;
   //         microgear = Microgear.create({
   //             key: addedGearKey,
   //             secret: appsecret
   //         });

   //         expect(microgear.gearkey).to.equal(addedGearKey);
   //         expect(microgear.gearsecret).to.equal(appsecret);

   //         var stubConnect = sinon.stub();
   //         microgear.on('connected', stubConnect);

   //         var stubError = sinon.stub();
   //         microgear.on('error', stubError);

   //         microgear.connect(appid);

   //         setTimeout(function () {
   //             expect(stubConnect.called).to.be.false;
   //             expect(stubError.called).to.be.true;
   //             expect(stubConnect.calledBefore(stubError)).to.be.true;
   //             done();
   //         }, connectTimeout);
   //     });

   //     it.skip('Code 1: Case 2.4 should throw error when uses another appkey', function (done) {
   //         this.timeout(itTimeout);
   //         var anotherGearKey = "9O0xiA2lHXz01iE";
   //         //ensure microgear is undefined before create
   //         expect(microgear).to.be.undefined;
   //         microgear = Microgear.create({
   //             key: anotherGearKey,
   //             secret: appsecret
   //         });

   //         expect(microgear.gearkey).to.equal(anotherGearKey);
   //         expect(microgear.gearsecret).to.equal(appsecret);

   //         var stubConnect = sinon.stub();
   //         microgear.on('connected', stubConnect);

   //         var stubError = sinon.stub();
   //         microgear.on('error', stubError);

   //         microgear.connect(appid);

   //         setTimeout(function () {
   //             expect(stubConnect.called).to.be.false;
   //             expect(stubError.called).to.be.true;
   //             expect(stubConnect.calledBefore(stubError)).to.be.true;
   //             done();
   //         }, connectTimeout);


   //     });

   //     it('Code 1: Case 3.1 should ignore empty gearsecret', function () {
   //         //ensure microgear is undefined before create
   //         expect(microgear).to.be.undefined;
   //         appsecret = '';
   //         microgear = Microgear.create({
   //             key: appkey,
   //             secret: appsecret
   //         });
   //         //should not generate microgear object
   //         expect(microgear).to.be.null;
   //     });

   //     it.skip('Code 1: Case 3.2 should throw error when appsecret change its case', function (done) {
   //         this.timeout(itTimeout);
   //         var loweredGearSecret = appsecret.toLowerCase();

   //         expect(loweredGearSecret).to.equal('3uscc5uX4Hh6lYkmtKJbljxMtMl1tLxx');
   //         //ensure microgear is undefined before create
   //         expect(microgear).to.be.undefined;
   //         microgear = Microgear.create({
   //             key: appkey,
   //             secret: loweredGearSecret
   //         });

   //         expect(microgear.gearkey).to.equal(appkey);
   //         expect(microgear.gearsecret).to.equal(loweredGearSecret);

   //         var stubConnect = sinon.stub();
   //         microgear.on('connected', stubConnect);

   //         var stubError = sinon.stub();
   //         microgear.on('error', stubError);

   //         microgear.connect(appid);

   //         setTimeout(function () {
   //             expect(stubConnect.called).to.be.false;
   //             expect(stubError.called).to.be.true;
   //             expect(stubConnect.calledBefore(stubError)).to.be.true;
   //             done();
   //         }, connectTimeout);
   //     });

   //     it.skip('Code 1: Case 3.3 should throw error when appsecret is trimmed', function (done) {
   //         this.timeout(itTimeout);
   //         var trimmedGearSecret = appsecret.substring(0, appsecret.length - 2);


   //         expect(trimmedGearSecret).to.equal('tLzjQQ6FiGUhOX1LTSjtVKsnSExu');
   //         //ensure microgear is undefined before create
   //         expect(microgear).to.be.undefined;
   //         microgear = Microgear.create({
   //             key: appkey,
   //             secret: trimmedGearSecret
   //         });

   //         expect(microgear.gearkey).to.equal(appkey);
   //         expect(microgear.gearsecret).to.equal(trimmedGearSecret);

   //         var stubConnect = sinon.stub();
   //         microgear.on('connected', stubConnect);

   //         var stubError = sinon.stub();
   //         microgear.on('error', stubError);

   //         microgear.connect(appid);

   //         setTimeout(function () {
   //             expect(stubConnect.called).to.be.false;
   //             expect(stubError.called).to.be.true;
   //             expect(stubConnect.calledBefore(stubError)).to.be.true;
   //             done();
   //         }, connectTimeout);

   //     });

   //     it.skip('Code 1: Case 3.3 should throw error when appsecret is added', function (done) {
   //         this.timeout(itTimeout);
   //         var addedGearSecret = appsecret + "xx";

   //         expect(addedGearSecret).to.equal('3uscc5uX4Hh6lYkmtKJbljxMtMl1tLxx');
   //         //ensure microgear is undefined before create
   //         expect(microgear).to.be.undefined;
   //         microgear = Microgear.create({
   //             key: addedGearSecret,
   //             secret: appsecret
   //         });

   //         expect(microgear.gearkey).to.equal(appkey);
   //         expect(microgear.gearsecret).to.equal(addedGearSecret);

   //         var stubConnect = sinon.stub();
   //         microgear.on('connected', stubConnect);

   //         var stubError = sinon.stub();
   //         microgear.on('error', stubError);

   //         microgear.connect(appid);

   //         setTimeout(function () {
   //             expect(stubConnect.called).to.be.false;
   //             expect(stubError.called).to.be.true;
   //             expect(stubConnect.calledBefore(stubError)).to.be.true;
   //             done();
   //         }, connectTimeout);
   //     });

   //     it.skip('Code 1: Case 3.4 should throw error when uses another appsecret', function (done) {
   //         this.timeout(itTimeout);

   //         var anotherGearSecret = "VqHTfrj8QlI3ydc1nWQCDK0amtt9aV";
   //         //ensure microgear is undefined before create
   //         expect(microgear).to.be.undefined;
   //         microgear = Microgear.create({
   //             key: appkey,
   //             secret: anotherGearSecret
   //         });

   //         expect(microgear.gearkey).to.equal(appkey);
   //         expect(microgear.gearsecret).to.equal(anotherGearSecret);

   //         var stubConnect = sinon.stub();
   //         microgear.on('connected', stubConnect);

   //         var stubError = sinon.stub();
   //         microgear.on('error', stubError);

   //         microgear.connect(appid);
   //         setTimeout(function () {
   //             expect(stubConnect.called).to.be.false;
   //             expect(stubError.called).to.be.true;
   //             expect(stubConnect.calledBefore(stubError)).to.be.true;
   //             done();
   //         }, connectTimeout);
   //     })
   // })

// })

   describe('Code 4: Chat', function () {
    var microgear;
    var message
    var appkey;
    var appsecret;
    var appid;
    var gearname;
    var helperGearname;
    var connected;
    var code;
    var modified;
    var child_processes;
    var spawn;

    describe('Code 4: Case 1 Chat with itself', function () {

        beforeEach(function (done) {
            this.timeout(beforeTimeout);
            microgear = undefined;
            gearname = 'main';
            message = "Hello";
            appkey = 'mRN6Oh3bO3kZTJI';
            appsecret = 'DqVtJx9lbf4UhMOBI42TN2FZDfuxHk';
            appid = 'testHtml';
            connected = false;

            expect(microgear).to.be.undefined;

            microgear = Microgear.create({
                key: appkey,
                secret: appsecret,
                alias: gearname
            });
            expect(microgear.gearalias).to.equal(gearname);

            //clear cache file
            // var data = fs.writeFileSync(filePath, '{"_":null}');
            // console.log(data);
            done();
        });

        afterEach(function () {
            if (connected) {
                microgear.client.end();
            }
        });

        it('should receive message', function (done) {
          console.log("yes in")
            this.timeout(itTimeout);
            var stubConnect = sinon.stub();
            microgear.on('connected', stubConnect);

            var stubMessage = sinon.stub();
            microgear.on('message', stubMessage);

            //chat
            setTimeout(function () {
                expect(stubConnect.called).to.be.true;
                connected = true;
                microgear.chat(gearname, message);
                setTimeout(function () {
                    expect(stubMessage.called).to.be.true;
                    expect(stubConnect.callCount).to.equal(1);
                    expect(stubMessage.callCount).to.equal(1);
                    expect(stubConnect.calledBefore(stubMessage)).to.be.true;
                    expect("" + stubMessage.args[0][1]).to.equal(message);
                    //expect(topic).to.be(appid + "/" + "gearname" + "/" + microgear.gearalias);
                    microgear.removeListener('connected', stubConnect);
                    microgear.removeListener('message', stubMessage);
                    done();
                }, messageTimeout);
            }, connectTimeout);
            microgear.connect(appid);
        });
    });
});
});