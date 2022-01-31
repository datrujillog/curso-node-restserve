const { Router } = require("express");
const {
  usuariosGet,
  usuariosPut,
  usuariosPost,
  usuariosDelete,
  usuariosPatch,
  usuariosError,
} = require("../controllers/user.controller");

const router = Router();

router.get("/", usuariosGet);
router.put("/:id", usuariosPut);
router.post("/", usuariosPost);
router.delete("/", usuariosDelete);
router.patch("/", usuariosPatch);
router.get(" ", usuariosError);

module.exports = router;



