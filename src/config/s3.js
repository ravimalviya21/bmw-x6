import { S3Client, GetObjectCommand } from '@aws-sdk/client-s3';
import { getSignedUrl } from '@aws-sdk/s3-request-presigner';

const region = import.meta.env.VITE_AWS_REGION;
const bucket = import.meta.env.VITE_AWS_S3_BUCKET;
const accessKeyId = import.meta.env.VITE_AWS_ACCESS_KEY_ID;
const secretAccessKey = import.meta.env.VITE_AWS_SECRET_ACCESS_KEY;

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
