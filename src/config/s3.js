const baseUrl = import.meta.env.VITE_ASSETS_BASE_URL || 'https://bmw-x6.s3.ap-south-1.amazonaws.com';

export const getFrameUrl = (frameIndex) => {
  const frameString = String(frameIndex).padStart(3, '0');
  const batchFolder = frameIndex <= 151 ? 'batch-1' : 'batch-2';
  return `${baseUrl}/assets/${batchFolder}/ezgif-frame-${frameString}.jpg`;
};

export const getFrameUrls = (totalFrames) => {
  const urls = [];
  for (let i = 1; i <= totalFrames; i++) {
    urls.push(getFrameUrl(i));
  }
  return urls;
};

const S3_CONFIG = {
  getFrameUrl,
  getFrameUrls
};

export default S3_CONFIG;
