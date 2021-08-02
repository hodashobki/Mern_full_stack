const Author=require("../models/author.model");


module.exports.findAllAuthors=(req,res)=>{
    Author.find()
    .then(allauthors=>res.json({authors:allauthors}))
    .catch(err=>res.json({message:"Somthing went Rong in retrieving all Authors" ,error:err}))
};

module.exports.findOneAuthor=(req,res)=>{
    Author.findOne({_id:req.params.id})
    .then(oneAuthor=>res.json({author:oneAuthor}))
    .catch(err=>res.json({message:"somthing went Wrong in  finding one Author" ,error:err}))
};
 
module.exports.createAuthor=(req,res)=>{
    Author.create(req.body)
    .then(newAuthor=>res.json({author:newAuthor}))
    .catch(err=>res.status(400).json({message:"Somthing went wrong at creating new Author" ,error:err}))
};

module.exports.updateAuthor=(req,res)=>{
    creatProduct.findOneAndUpdate({_id:req.params.id},req.body,{new:true})
    .then(updatedauthor=>res.json({author:updatedauthor}))
    .catch(err=>res.status(400).json({message:"somthing went wron in updating",error:err}))
};

module.exports.deleteAuthor=(req,res)=>{
    Author.deleteOne({_id:req.params.id})
    .then(result=>res.json({result:result}))
    .catch(err=>res.json({message:"Somthing went wron in deletion",error:err}))
};