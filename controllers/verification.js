/*module.exports=(req,res)=>{
    const hubChallenge = req.query['hub.challeng'];

    const hubMode = req.query['hub.mode'];
    const verifyTokenMatches = (req.query['hub.verify_token']==='crowdbotics');

    if(hubMode && verifyTokenMatches){
        res.status(200).send(hubChallenge);
    }
    else{
        res.status(403).end();
    }
};*/
module.exports=(req,res)=>{

    if (req.query['hub.verify_token'] === 'tokentoken') {
       res.send(req.query['hub.challenge']);
    } else {
       res.send('Error, wrong validation token');    
    }
 };