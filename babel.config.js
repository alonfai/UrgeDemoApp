module.exports = {
  presets: [
    'next/babel',
    [
      '@babel/preset-env',
      {
        targets: {
          esmodules: true,
        },
      },
    ],
  ],
  plugins: ['istanbul'],
};
