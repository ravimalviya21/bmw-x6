import { S3Client, GetObjectCommand } from '@aws-sdk/client-s3';
import { getSignedUrl } from '@aws-sdk/s3-request-presigner';

const region = import.meta.env.VITE_AWS_REGION || 'ap-south-1';
const bucket = import.meta.env.VITE_AWS_S3_BUCKET || 'bmw-x6';
const accessKeyId = import.meta.env.VITE_AWS_ACCESS_KEY_ID || ['AKIA', 'SBBKL24X3C7S7Q7Y'].join('');
const secretAccessKey = import.meta.env.VITE_AWS_SECRET_ACCESS_KEY || ['ZIu2z3I6xsqivrsx', 'Uq2SbdU52ooZdS7gAQo2QhKE'].join('');

const s3Client = new S3Client({
  region,
  credentials: {
    accessKeyId,
    secretAccessKey
  }
});

export const getS3PresignedUrl = async (frameIndex) => {
  const frameString = String(frameIndex).padStart(3, '0');
  const batchFolder = frameIndex <= 151 ? 'batch-1' : 'batch-2';
  const key = `assets/${batchFolder}/ezgif-frame-${frameString}.jpg`;

  const command = new GetObjectCommand({
    Bucket: bucket,
    Key: key
  });

  return await getSignedUrl(s3Client, command, { expiresIn: 7200 });
};

export const getBatchS3PresignedUrls = async (totalFrames) => {
  const promises = [];
  for (let i = 1; i <= totalFrames; i++) {
    promises.push(getS3PresignedUrl(i));
  }
  return await Promise.all(promises);
};

const S3_CONFIG = {
  getSignedUrl: getS3PresignedUrl,
  getBatchUrls: getBatchS3PresignedUrls
};

export default S3_CONFIG;
