import multer from "multer";
import path from "path";

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "public/uploads");
  },
  filename: (req, file, cb) => {
    const uniqueName =
      Date.now() + "-" + Math.random().toString(36).substring(7) +
      path.extname(file.originalname);

    cb(null, uniqueName);
  }
});

export const upload = multer({ storage });