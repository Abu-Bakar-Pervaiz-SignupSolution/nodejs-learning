import { v2 as cloudinary } from "cloudinary"
import fs from "fs"

const uploadOnCloudinary = async (localFilePath) => {
  try {
    if(!localFilePath) return null
    // upload file on cloudinary
    const uploadResult = await cloudinary.uploader
      .upload(
        localFilePath,
        {
          resource_type: "auto"
        }
      )
      .catch((error) => {
        console.log(error)
      })
    console.log('File Uploaded -> ',uploadResult)
    return response
  } catch (error) {
    // Remove locally save temporary file as upload operation got faild
    fs.unlinkSync(localFilePath)
    return null
  }
}

export {uploadOnCloudinary}

// ;(async function () {
//   // Configuration
//   cloudinary.config({
//     cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
//     api_key: process.env.CLOUDINARY_CLOUD_KEY,
//     api_secret: process.env.CLOUDINARY_CLOUD_SECRET
//   })


//   // Optimize delivery by resizing and applying auto-format and auto-quality
//   const optimizeUrl = cloudinary.url("shoes", {
//     fetch_format: "auto",
//     quality: "auto"
//   })

//   console.log(optimizeUrl)

//   // Transform the image: auto-crop to square aspect_ratio
//   const autoCropUrl = cloudinary.url("shoes", {
//     crop: "auto",
//     gravity: "auto",
//     width: 500,
//     height: 500
//   })

//   console.log(autoCropUrl)
// })()
