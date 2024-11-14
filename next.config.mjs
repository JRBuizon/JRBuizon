/** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV === 'production'
const nextConfig = {
    basePath: "", //remember to add the check for production and the /JRBuizon basePath back if ever u decide to host on github again
    output: "export",
    images: {
        unoptimized: true,
    }
};

export default nextConfig;
