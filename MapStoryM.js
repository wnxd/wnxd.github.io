const myStatus = "HTTP/1.1 200 OK";
//const myHeaders = {"Access-Control-Allow-Origin": "*", "Content-Type": "text/html; charset=UTF-8", "errorCode": "0"};
//const myData = '{"errorCode":0,"result":{"service":{"title":"MapleStory M Global","buildVer":"2","policyApiVer":2,"termsApiVer":2,"useTPA":0,"useGbNpsn":0,"useGbKrpc":0,"useGbArena":0,"useToyBanDialog":0,"grbRating":"","loginUIType":"1","useNxo":"0","clientId":"MTY3MDg3NDAy","useMemberships":[101,103,102,110,9999],"useMembershipsInfo":{"nexonNetSecretKey":"","nexonNetProductId":"","nexonNetRedirectUri":""}},"endBanner":{},"basePlate":[{"group":0,"title":"MapleStory M","items":[{"code":"notice","index":10887,"meta":{},"title":"Notice"},{"code":"cc","index":10890,"meta":{},"title":"Customer Center"},{"code":"faq","index":10888,"meta":{},"title":"FAQ"},{"code":"terms","index":10891,"meta":{},"title":"Terms"},{"code":"account","index":10892,"meta":{},"title":"Account Link Status"},{"code":"push_sms","index":11686,"meta":{"push_label":"Allow Push Notification","phone_label":"Allow Push Notification","email_label":"Allow Push Notification"},"title":"Push Notification"}]},{"group":1,"title":"MapleStory M","items":[{"code":"notice","index":10893,"meta":{},"title":"Notice"},{"code":"cc","index":10896,"meta":{},"title":"Customer Center"},{"code":"faq","index":10894,"meta":{},"title":"FAQ"},{"code":"url","index":11689,"meta":{"url":"https://m.nexon.com/forum/board/695","query":""},"title":"Game Guide"},{"code":"terms","index":10897,"meta":{},"title":"Terms"},{"code":"account","index":10898,"meta":{},"title":"Account Link Status"},{"code":"push_sms","index":11687,"meta":{"push_label":"Allow Push Notification","phone_label":"Allow Push Notification","email_label":"Allow Push Notification"},"title":"Push Notification"}]},{"group":2,"title":""},{"group":3,"title":""},{"group":4,"title":""},{"group":5,"title":""},{"group":6,"title":""},{"group":7,"title":""},{"group":8,"title":""},{"group":9,"title":""}],"country":"HK","useLocalPolicy":["0","0"],"enableLogging":false,"offerwall":{"id":0,"title":""}},"errorText":"1","errorDetail":""}';
var myHeaders = $response.headers;
var myData = JSON.parse($response.body);

myHeaders["errorCode"] = "0";
myData["errorCode"] = 0;
myData["errorText"] = "1";
myData["result"]["country"] = "HK";

const myResponse = {
    status: myStatus,
    headers: myHeaders,
    body: JSON.stringify(myData)
};

$done(myResponse);
