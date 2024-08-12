const productData = require("../model/productModel")

const Cheking = (req,res)=>{
    res.json("Added Page Are Show")
}
const addData = async(req,res)=>{
    const data = await productData.create({
        name:req.body.name,
        price:req.body.price,
        size:req.body.size,
        image:req.body.image,
        rating:req.body.rating,
        category:req.body.category,
    })
    res.status(201).json(data);
}

const getData = async(req,res)=>{
    const data = await productData.find()

    res.status(201).json(data)
}

const deleteData = async(req,res)=>{
    const id = req.params.id;

    const dataDeleted = await productData.findByIdAndDelete(id);

    res.json(dataDeleted)
    
}
const updateData = async(req,res)=>{
    const id = req.params.id;

    const data = await productData.findByIdAndUpdate(id,{
        name:req.body.name,
        price:req.body.price,
        size:req.body.size,
        image:req.body.image,
        rating:req.body.rating,
        category:req.body.category
    });

    res.json(data);
    console.log("updated data");
    
    console.log(data);
    
}

module.exports = {
    Cheking,
    addData,
    getData,
    deleteData,
    updateData
}