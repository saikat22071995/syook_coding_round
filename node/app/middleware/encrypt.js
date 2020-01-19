
// var key = 'secret1234saikat1234sunny3421';

// // Create an encryptor:
// var encryptor = require('simple-encryptor')(key);

// const personHash=function(req,res,next){
//     let source=req.body
//     var objEnc = encryptor.encrypt(source);
//     // Should print gibberish:
//     console.log('obj encrypted: %s',objEnc);
//     next()
// }
const crypto = require('crypto')

const personHash=function(req,res,next){


        //Encrypt Data

        algorithm = 'aes-256-ctr',
        password = PROCESS.env.password
        // iv = '79b67e539e7fcadf'
        var length=16
        var result = '';
        var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        var charactersLength = characters.length;
        for ( var i = 0; i < length; i++ ) {
           result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }

        let typedRequest = req.body

        let cipher = crypto.createCipheriv(algorithm, password,result);
        let hashRequest = cipher.update(JSON.stringify(typedRequest),
            'utf8', 'hex')+cipher.final('hex');
        //hashRequest +='|'+ result.toString('hex') + cipher.final('hex');
        console.log('\n')
        console.log('aes-256-ctr-',hashRequest)


        //Decrypt data//

        function decrypt(hashRequest) {
            let algorithm = 'aes-256-ctr',
            password = PROCESS.env.password
            console.log(typeof hashRequest)
            var cipher = crypto.createDecipheriv(algorithm, password,result);
            return cipher.update(hashRequest, 'hex', 'utf8') + cipher.final('utf8');
          }
          console.log('decrypt',decrypt(hashRequest))
        next()
}

module.exports={
    personHash
}



