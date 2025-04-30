import path from 'path';

const nextConfig = {
  sassOptions: {
    includePaths: [path.join('app/_assets/css')],
    additionalData: `
      @use 'variables' as *;
      @use 'mixins' as *;
      @use 'fontfaces' as *;
    `,
  },
};

export default nextConfig;