const { response, request } = require("express");

const usuariosGet = (req = request, res = response) => {
  const { busqueda } = req.query;
  res.json({
    msg: "Petición GET Controller",
    query: busqueda,
  });
};

const usuariosPost = (req, res = response) => {
  res.json({
    msg: "Petición POST Controller",
  });
};

const usuariosPut = (req, res = response) => {
  res.json({
    msg: "Petición PUT Controller",
    id: req.params.id,
  });
};

const usuariosPatch = (req, res = response) => {
  res.json({
    msg: "Petición Patch Controller",
  });
};

const usuariosDelete = (req, res = response) => {
  res.json({
    msg: "Petición Delete Controller",
  });
};

module.exports = {
  usuariosGet,
  usuariosPost,
  usuariosPut,
  usuariosPatch,
  usuariosDelete,
};
