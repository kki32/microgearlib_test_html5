var webPage = require('webpage');
var page = webPage.create();

page.open('testChat.html', function(status) {
  console.log('Status: ' + status);
  // Do other things here...
});