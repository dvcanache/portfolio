module.exports = {

  images: {
    loader: 'akamai',
    path: '',
  },
  output: "export", // Enables static export
  assetsPrefix: "./almostcode",
  async redirects() {
    return [
      {
        source: "/home",
        destination: "/",
        permanent: true,
      },
    ];
  },
};
