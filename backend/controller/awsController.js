
// require("dotenv").config();
// const express = require('express');
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

// // const uploadFile = async (req, res) => {
// //     try {
// //         if (!req.file) {
// //             return res.status(400).send('No file uploaded.');
// //         }
// //         res.send('Successfully uploaded ' + req.file.location + ' location!');
// //     } catch (error) {
// //         console.error(error);
// //         res.status(500).send('Internal Server Error');
// //     }
// // };
// const uploadFile = async (req, res, next) => {
//     try {
//         console.log(req.file);  // Add this line for debugging

//         if (!req.file) {
//             return res.status(400).send('No file uploaded.');
//         }
//         res.send('Successfully uploaded ' + req.file.location + ' location!');
//     } catch (error) {
//         console.error(error);
//         res.status(500).send('Internal Server Error');
//     }
// };

// const listFiles = async (req, res) => {
//     try {
//         let r = await s3.listObjectsV2({ Bucket: BUCKET }).promise();
//         let x = r.Contents.map((item) => item.Key);
//         res.send(x);
//     } catch (error) {
//         res.status(500).json({ message: error.message });
//     }
// };

// const downloadFile = async (req, res) => {
//     try {
//         const filename = req.params.filename;
//         let x = await s3.getObject({ Bucket: BUCKET, Key: filename }).promise();
//         res.send(x.Body);
//     } catch (error) {
//         res.status(500).json({ message: error.message });
//     }
// };

// const deleteFile = async (req, res) => {
//     try {
//         const filename = req.params.filename;
//         await s3.deleteObject({ Bucket: BUCKET, Key: filename }).promise();
//         res.send('File Deleted Successfully');
//     } catch (error) {
//         res.status(500).json({ message: error.message });
//     }
// };

// module.exports = { uploadFile, listFiles, downloadFile, deleteFile };




const aws = require('aws-sdk');
const multer = require('multer');
const multerS3 = require('multer-s3');

aws.config.update({
    secretAccessKey: process.env.WASABI_SECRET,
    accessKeyId: process.env.WASABI_KEY,
    endpoint: 's3.wasabisys.com',
    s3ForcePathStyle: true,
    signatureVersion: 'v4',
    region: process.env.REGION,
});

const BUCKET = process.env.WASABI_BUCKET;
const s3 = new aws.S3();

const upload = multer({
    storage: multerS3({
        s3: s3,
        acl: 'public-read',
        bucket: BUCKET,
        key: function (req, file, cb) {
            console.log(file);
            cb(null, file.originalname);
        },
    }),
});

const uploadFile = async (req, res, next) => {
    try {
        if (!req.file) {
            return res.status(400).send('No file uploaded.');
        }
        res.send('Successfully uploaded ' + req.file.location + ' location!');
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
};



const listFiles = async (req, res) => {
    try {
        let r = await s3.listObjectsV2({ Bucket: BUCKET }).promise();
        let x = r.Contents.map((item) => item.Key);
        res.send(x);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const downloadFile = async (req, res) => {
    try {
        const filename = req.params.filename;
        let x = await s3.getObject({ Bucket: BUCKET, Key: filename }).promise();
        res.send(x.Body);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const deleteFile = async (req, res) => {
    try {
        const filename = req.params.filename;
        await s3.deleteObject({ Bucket: BUCKET, Key: filename }).promise();
        res.send('File Deleted Successfully');
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = { upload, uploadFile, listFiles, downloadFile, deleteFile };
