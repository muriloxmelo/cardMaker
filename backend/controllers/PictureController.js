const Picture = require("../models/Picture");
const fs = require("fs");

exports.create = async (req, res) => {
  try {
    const { name } = req.body;
    const file = req.file;

    const picture = new Picture({
      name,
      src: file.path,
    });

    await picture.save(); // Save the picture instance

    res.json({ status: "ok" });
  } catch (error) {
    res.status(500).json({ status: "error", message: error.message });
  }
};

exports.findAll = async (req, res) => {
  try {
    const pictures = await Picture.find();
    res.json(pictures);
  } catch (error) {
    res.status(500).json({ msg: "Erro ao buscar imgs" });
  }
};

exports.deletePhoto = async (req, res) => {
  try {
    const picture = await Picture.findById(req.params.id);
    if (!picture) {
      return res.status(404).json({ msg: "Imagem não existe." });
    } else {
      fs.unlinkSync(picture.src); // remove o arquivo
      await picture.deleteOne(); // remove do banco de dados
      res.json({ msg: "img removida com sucesso" });
    }
  } catch (error) {
    res.status(500).json({ msg: "foto não foi deletada" });
  }
};
