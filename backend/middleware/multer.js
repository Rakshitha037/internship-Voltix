// // multer.js
// const aws = require('aws-sdk');
// const multer = require('multer');
// const multerS3 = require('multer-s3');

// aws.config.update({
//     secretAccessKey: process.env.WASABI_SECRET,
//     accessKeyId: process.env.WASABI_KEY,
//     endpoint: 's3.wasabisys.com',
//     s3ForcePathStyle: true,
//     signatureVersion: 'v4',
//     region: process.env.REGION,
// });

// const BUCKET = process.env.WASABI_BUCKET;
// const s3 = new aws.S3();

// const upload = multer({
//     storage: multerS3({
//         s3: s3,
//         acl: 'public-read',
//         bucket: BUCKET,
//         key: function (req, file, cb) {
//             console.log(file);
//             cb(null, file.originalname);
//         },
//     }),
// });

// module.exports = { upload };




const { upload } = require('../controller/awsController');

const multerMiddleware = upload.single('file');

module.exports = multerMiddleware;

