import path from 'path';

const nextConfig = {
  sassOptions: {
    includePaths: [path.join('app/_assets/css')],
    additionalData: `
      @import 'variables';
      @import 'mixins';
      @import 'fontfaces';
    `,
  },
};

export default nextConfig;