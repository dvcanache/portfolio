/** @type {import('next').NextConfig} */
module.exports = {
  output: "export", // Static export — no server needed

  images: {
    loader: "akamai", // Required for static export in Next.js 12
    path: "",
  },
};
