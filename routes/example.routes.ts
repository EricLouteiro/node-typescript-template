
import {Router} from 'express';
import { check } from 'express-validator'
// import { createAdmin } from '../controllers/admin.controller';
// import { adminLogin } from '../controllers/login.controller';
// import { emailExiste } from '../db/dbValidations';
// import { validarCampos } from '../middlewares/fieldsValidator';
const router = Router();

router.post('/', [
    // check('nombre', 'No se incluye el nombre').not().isEmpty(),
    // check('email', 'El email es obligatorio').isEmail().not().isEmpty(),
    // check('password', 'El password debe ser mayor a 6 caracteres').isLength({min: 6}),
    // check('email').custom( emailExiste ),
    // validarCampos
], /* createAdmin */)

export default router;