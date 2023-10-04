const Work = require("../models/Work");

const CREATE = async (req, res) => {
    const params = req.body;
    const work = new Work(params);
    try {
        await work.save();
        return res.status(200).json({message: "Work saved"})
    } catch (error) {
        return res.status(400).json({Error: "Work not saved"})
    }
}

const READ_BY_ID = async (req, res) => {
    const idparam = req.params.id
    try {
        let query = await Work.find({id: idparam})
        query = query [0]
        if(!query)throw new Error("No se encontro el trabajo buscado")
        return res.status(200).send(query)
    }catch (error){
        return res.status(404).json({Error: "No se encontro el trabajo buscado"})
    }
}

const READ = async (req, res) => {
    try {
        const query = await Work.find({})
        return res.status(200).send(query)
    }catch (error){
        return res.status(404).json({Error: "No se encontro el trabajo buscado"})
    }
}

const UPDATE = async (req, res) => {
    const id = req.params.id
    const params = req.body
    try {
        await Work.findByIdAndUpdate(id, params)
        return res.status(200).json({message: "Se actualizo correctamente"})
    } catch (error) {
        return res.status(400).json({Error: "No se pudo actualizar"})
    }
}

const DELETE =async (req, res) => {
    const id = req.params.id
    try {
        const work = await Work.findByIdAndDelete(id)
        return res.status(200).send(work)
    }catch (error){
        return res.status(400).json({Error: "No se pudo eliminar"})
    }
}

module.exports = {
    CREATE,
    READ_BY_ID,
    READ,
    UPDATE,
    DELETE
}