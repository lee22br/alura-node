import mongoose from "mongoose"

mongoose.connect("mongodb+srv://alura:1234@alura.dfkkgnr.mongodb.net/alura-node");
// mongoose.connect('mongodb+srv://alura:1234@alura.dfkkgnr.mongodb.net/?retryWrites=true&w=majority');
mongoose.set('strictQuery', true);

let db = mongoose.connection;

export default db;