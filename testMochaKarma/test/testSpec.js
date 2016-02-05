define(['../microgear.js'], function(MicroGear) {
describe('Array', function(){
  describe('#indexOf()', function(){
    it('should return -1 when the value is not present', function(){
           microgear = MicroGear.create({
               key: appkey,
               secret: appsecret
           });
           console.log(microgear)
      assert.equal(-1, [1,2,3].indexOf(5));
      assert.equal(-1, [1,2,3].indexOf(0));
    })
  })
})
});