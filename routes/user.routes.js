// ******************** Autor ********************
// Autor: Diego Alonso Trujillo
// Webside: https://diego-trujillo-portafolio.herokuapp.com/

// ******************** FIN CODIGO ********************
const { Router } = require("express");
const {
  usuariosGet,
  usuariosPut,
  usuariosPost,
  usuariosDelete,
  usuariosPatch,
  usuariosError,
} = require("../controllers/user.controller");
// const { check } = require("express-validator");
const { check } = require('express-validator');


const router = Router();



router.get("/", usuariosGet);
router.put("/:id", usuariosPut);

router.post('/', [
  check('nombre').notEmpty().withMessage('El nombre es obligatorio'),
  check('correo', 'El correo no es válido').isEmail()
], usuariosPost);


router.delete("/", usuariosDelete);
router.patch("/", usuariosPatch);
router.get(" ", usuariosError);

module.exports = router;



