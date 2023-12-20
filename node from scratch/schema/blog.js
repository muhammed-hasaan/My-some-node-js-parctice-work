const mongoose = require('mongoose');

const blogSchema = new mongoose.Schema(
    {
        title: {type: mongoose.SchemaType.String, required: true },
        description: {type: mongoose.SchemaType.String, unique: true, required: true },
        user: {type: mongoose.SchemaType.ObjectId, ref: "user" , required: true },
    },
    {timestamps : true}
);


const blog = mongoose.model("Blog" , blogSchema);

module.exports = blog;