const S3_BASE_URL = import.meta.env.VITE_S3_BASE_URL || 'https://bmw-x6.s3.ap-south-1.amazonaws.com/assets';

export const getS3FrameUrl = (frameIndex) => {
  const frameString = String(frameIndex).padStart(3, '0');
  if (frameIndex <= 151) {
    return `${S3_BASE_URL}/batch-1/ezgif-frame-${frameString}.jpg`;
  }
  return `${S3_BASE_URL}/batch-2/ezgif-frame-${frameString}.jpg`;
};

const S3_CONFIG = {
  baseUrl: S3_BASE_URL,
  getFrameUrl: getS3FrameUrl
};

export default S3_CONFIG;
