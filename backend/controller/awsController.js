

const AWS = require('aws-sdk');

// Wasabi credentials
const wasabiAccessKey = process.env.WASABI_KEY;
const wasabiSecretKey = process.env.WASABI_SECRET;
const wasabiBucketName = process.env.WASABI_BUCKET;

// Configure the AWS SDK
AWS.config.update({
  secretAccessKey: wasabiSecretKey,
  accessKeyId: wasabiAccessKey,
  endpoint: 's3.wasabisys.com',
  s3ForcePathStyle: true,
  signatureVersion: 'v4',
  region: process.env.REGION,
});

// Create an S3 instance
const s3 = new AWS.S3();

// Function to upload a file to the Wasabi S3 bucket
exports.uploadFile = (buffer, objectName) => {
  const params = {
    Bucket: wasabiBucketName,
    Key: objectName,
    Body: buffer,
  };

  return new Promise((resolve, reject) => {
    s3.upload(params, (err, data) => {
      if (err) {
        console.error("Error uploading file:", err);
        reject(err);
      } else {
        console.log("File uploaded successfully:", data.Location);
        resolve(data);
      }
    });
  });
};
// Function to delete a file from the Wasabi S3 bucket
exports.deleteFile = (objectName) => {
    const params = {
      Bucket: wasabiBucketName,
      Key: objectName,
    };
  
    return new Promise((resolve, reject) => {
      s3.deleteObject(params, (err, data) => {
        if (err) {
          console.error("Error deleting file:", err);
          reject(err);
        } else {
          console.log("File deleted successfully");
          // Respond with a meaningful JSON response
          resolve({ message: 'File deleted successfully', deletedObject: objectName });
        }
      });
    });
  };
  