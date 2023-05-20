const { Router } = require("express");
const uploadMiddleWare = require("../middlewares/MulterMiddleWare");
const UploadModel = require("../models/UploadModel");
const router = Router();

router.get( "/api/get" ,async (req ,res) =>{
  const allPhotos = await UploadModel.find().sort({createAt : "descending"});
  res.send(allPhotos);
})

router.post("/api/save", uploadMiddleWare.single("photo"), (req, res) => {
  const photo = req.file.filename;

  console.log(photo);
  UploadModel.create({ photo })
    .then((data) => {
      console.log("uploaded successfully");
      console.log(data);
      res.send(data);
    })
    .catch((err) => console.log("error : " + err));
});

module.exports = router;
