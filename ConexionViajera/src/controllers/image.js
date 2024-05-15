const path = require('path');
const { randomNumber } = require('../helpers/libs');
const fs = require('fs-extra');

const { Image } = require('../models/index');

const ctrl = {};


ctrl.index = async(req, res) => {
const image=await Image.findOne({filename:{$regex:req.params.image_id}});
console.log(image)
res.render('image',{image});
};

ctrl.create = async (req, res) => {
    const saveImage = async () => {
        const imgUrl = randomNumber();
        const images = await Image.find({ filename: imgUrl });
        if (images.length > 0) {
            return saveImage(); // Genera un nuevo nombre si ya existe una imagen con ese nombre
        }
        console.log(imgUrl);
        const imageTempPath = req.file.path;
        const ext = path.extname(req.file.originalname).toLowerCase();
        const targetPath = path.resolve(`src/public/upload/${imgUrl}${ext}`);

        if (ext === '.png' || ext === '.jpg' || ext === '.jpeg' || ext === '.gif') {
            await fs.rename(imageTempPath, targetPath);
            const newImg = new Image({
                place: req.body.title,
                filename: imgUrl + ext,
                description: req.body.description
            });
            await newImg.save();
        } else {
            await fs.unlink(imageTempPath);
            return res.status(500).json({ error: 'Solo imagenes permitidas' });
        }
        res.send('Funciona');
    };

    await saveImage();
};

ctrl.like = (req, res) => {

};

ctrl.comment = (req, res) => {

};

ctrl.remove = (req, res) => {

};
module.exports = ctrl;