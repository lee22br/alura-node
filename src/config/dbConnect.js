import mongoose from "mongoose"

mongoose.connect("mongodb+srv://@alura.dfkkgnr.mongodb.net/alura-node");
// mongoose.connect('mongodb+srv://alura:<password>@alura.dfkkgnr.mongodb.net/?retryWrites=true&w=majority');

let db = mongoose.connection;

export default db;
