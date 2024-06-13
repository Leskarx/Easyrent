/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [{
          hostname: "res.cloudinary.com",
       
        },{

            hostname: "lh3.googleusercontent.com",
           
        }
    ]
    }
};

export default nextConfig;

// hostname:["res.cloudinary.com","lh3.googleusercontent.com"]