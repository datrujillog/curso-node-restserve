const mongooose = require('mongoose');
const Schema = mongooose.Schema;

const RoleSchema = new Schema({
    rol: {
        type: String,
        required: [true, 'El rol es obligatorio ']
    },
});



module.exports = mongooose.model('Role', RoleSchema);
