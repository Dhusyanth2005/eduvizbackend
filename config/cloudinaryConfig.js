const cloudinary = require('cloudinary').v2;

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME || 'duwvhcha4',
  api_key: process.env.CLOUDINARY_API_KEY || '486156634886913',
  api_secret: process.env.CLOUDINARY_API_SECRET || 'LfZ9gxgYgFO10AARUQTWtfrzUDc',
});

module.exports = cloudinary;