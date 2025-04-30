import path from 'path';

const nextConfig = {
  sassOptions: {
    includePaths: [path.join('app/_assets/css')],
    additionalData: `
      @use 'variables';
      @use 'mixins';
      @use 'fontfaces';
    `,
  },
};

export default nextConfig;