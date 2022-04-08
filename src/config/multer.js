const multer = require("multer");
const path = require("path");

module.exports ={
  upload:multer({
  storage: multer.diskStorage({}),
  fileFilter: (req, file, cb) => {
    let ext = path.extname(file.originalname);  
    if (ext !== ".jpg" && ext !== ".jpeg" && ext !== ".png") {
      cb(new Error("File type is not supported try -.jpg .jpeg .png"), false);
    }
    cb(null, true);
  },
}).array("image",5)
}
