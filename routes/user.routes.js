// ******************** Autor ********************
// Autor: Diego Alonso Trujillo
// Webside: https://diego-trujillo-portafolio.herokuapp.com/

// ******************** FIN CODIGO ********************
const {
  Router
} = require("express");
const {
  usuariosGet,
  usuariosPut,
  usuariosPost,
  usuariosDelete,
  usuariosPatch,
  usuariosError,
} = require("../controllers/user.controller");

// const { check } = require('express-validator');
const { check, } = require('express-validator');
const { validarCampos } = require('../middlewares/validar-campos');






const router = Router();



router.get("/", usuariosGet);
router.put("/:id", usuariosPut);

router.post('/',[
  check('nombre', 'El nombre es obligatorio').not().isEmpty(),
  check('password', 'El password debe de ser más de 6 letras').isLength({ min: 6 }),
  check('correo', 'El correo no es válido').isEmail(),
  // check('correo').custom( emailExiste ),
  // check('rol', 'No es un rol válido').isIn(['ADMIN_ROLE','USER_ROLE']),
  // check('rol').custom( esRoleValido ), 
  validarCampos
], usuariosPost );


router.delete("/", usuariosDelete);
router.patch("/", usuariosPatch);
router.get(" ", usuariosError);

module.exports = router;