const User = require("../models/User");
const Work = require("../models/Work");

const CREATE = async (req, res) => {
    const params = req.body;
    const work = (await Work.find({id: params.work_id}))[0]
    if(!work) return res.status(400).json({Error: "User not saved"})
    const user = new User({firstname: params.firstname, lastname: params.lastname, work: work, type_document: params.type_document, document_number: params.document_number});
    try {
        await user.save();
        return res.status(200).json({message: "User saved"})
    } catch (error) {
        return res.status(400).json({Error: "User not saved"})
    }
}

const READ = async (req, res) => {
    try {
        const query = await User.find({})
        return res.status(200).send(query)
    }catch (error){
        return res.status(404).json({Error: "No se encontro el usuario buscado"})
    }
}

const UPDATE = async (req, res) => {
    const id = req.params.id
    const params = req.body
    try {
        await User.findByIdAndUpdate(id, params)
        return res.status(200).json({message: "Se actualizo correctamente"})
    } catch (error) {
        return res.status(400).json({Error: "No se pudo actualizar"})
    }
}

const DELETE =async (req, res) => {
    const id = req.params.id
    try {
        const user = await Work.findByIdAndDelete(id)
        return res.status(200).send(user)
    }catch (error){
        return res.status(400).json({Error: "No se pudo eliminar"})
    }
}

module.exports = {
    CREATE,
    READ,
    UPDATE,
    DELETE
}