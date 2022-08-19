import '../src/style/globals.css';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

import Image from 'next/image';

Image.propTypes = {
  unoptimized: null,
};

Image.defaultProps = {
  unoptimized: true,
};
