import { v2 as cloudinary } from "cloudinary";
import fs from "fs/promises";

const cloudinaryUpload = async (files) => {
  const fileUrl = [];

  for (let file of files.images) {
    const result = await cloudinary.uploader.upload(file.path, {
      folder: "travelsite/file-Uploading",
      type: "private",
    });
    console.log(result);
    fileUrl.push({
      url: result.secure_url,
      publicId: result.public_id,
    });
    await fs.unlink(file.path);
  }

  return fileUrl;
};

export { cloudinaryUpload };
