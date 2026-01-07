export default {
    dbURL: 'mongodb://127.0.0.1:27017',
    dbName: 'marshmelloDB',
    cloudinary: {
        cloudName: process.env.CLOUDINARY_CLOUD_NAME || '',
        apiKey: process.env.CLOUDINARY_API_KEY || '',
        apiSecret: process.env.CLOUDINARY_API_SECRET || ''
    }
}
