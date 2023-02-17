import mongoose from "mongoose";

const livrosSchema = new mongoose.Schema(
    {
        id: {type: String},
        titulo: {type: String, required: true},
        autor: {type: mongoose.Schema.Types.ObjectId, ref: 'autores', required: true},
        editora: {type: String, required: true},
        numeroPaginas: {type: Number}
    }
)

const livros = mongoose.model('livros', livrosSchema);

export default livros;