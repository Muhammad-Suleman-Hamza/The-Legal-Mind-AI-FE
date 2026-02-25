export const api = {
  uploadFile: async (file: File) => {
    return new Promise((resolve) => {
      setTimeout(() => resolve({ url: URL.createObjectURL(file), status: 'indexed' }), 2000);
    });
  },
  getPresignedUrl: async (fileName: string) => {
    return new Promise((resolve) => {
      setTimeout(() => resolve({ url: `https://mock-s3.com/${fileName}` }), 500);
    });
  },
};
