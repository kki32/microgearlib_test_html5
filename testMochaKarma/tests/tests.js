// tests.js

var expect = chai.expect;
var MicroGear = Microgear;

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
           microgear = MicroGear.create({
               key: appkey,
               secret: appsecret
           });
           //check that microgear is an object and gearkey & gearsecret is saved to the object
           chai.assert.equal(-1, -1);
           expect(microgear).to.be.an('object');
           expect(microgear.gearkey).to.equal(appkey);
           expect(microgear.gearsecret).to.equal(appsecret);
       });
   });
