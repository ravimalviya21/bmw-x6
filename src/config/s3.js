const baseUrl = import.meta.env.VITE_ASSETS_BASE_URL || '';

export const getFrameUrl = (frameIndex) => {
  const frameString = String(frameIndex).padStart(3, '0');
  const batchFolder = frameIndex <= 116 ? 'batch-1' : 'batch-2';
  return `${baseUrl}/${batchFolder}/ezgif-frame-${frameString}.avif`;
};

export const getFrameUrls = (totalFrames) => {
  const urls = [];
  for (let i = 1; i <= totalFrames; i++) {
    urls.push(getFrameUrl(i));
  }
  return urls;
};

const ASSETS_CONFIG = {
  getFrameUrl,
  getFrameUrls
};

export default ASSETS_CONFIG;
