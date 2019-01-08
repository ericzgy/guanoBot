const API_AI_TOKEN = '403facdbc5a14a559c8a7f7c244c7abc';
const apiAiClient = require('apiai')(API_AI_TOKEN);
const FACEBOOK_ACCESS_TOKEN = 'EAAE3Bqrj0qsBAFSZAPIjPSn3M6UWzzOHQM647ZCn6akRZA0xHyNJZACsqDJ9AajmYCELjvkf7Um4TmddVzIqHiCa1yRm2utWiIgrDSbmIheozmNI1ca2l72DJi1ElDjsN4l2olgZBVrnWNiaR4LdibV2CeZCDtunguNxFngaANswZDZD';
const request = require('request');
const sendTextMessage = (senderId, text) => {
 request({
 url: 'https://graph.facebook.com/v2.6/me/messages',
 qs: { access_token: FACEBOOK_ACCESS_TOKEN },
 method: 'POST',
 json: {
 recipient: { id: senderId },
 message: { text },
 }
 });
};
module.exports = (event) => {
 const senderId = event.sender.id;
 const message = event.message.text;
const apiaiSession = apiAiClient.textRequest(message, {sessionId: 'crowdbotics_bot'});
apiaiSession.on('response', (response) => {
 const result = response.result.fulfillment.speech;
sendTextMessage(senderId, result);
 });
apiaiSession.on('error', error => console.log(error));
 apiaiSession.end();
};
