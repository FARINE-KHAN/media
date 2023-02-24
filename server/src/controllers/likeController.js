const {like, user}=require("../models/db")


const createLikes =async(req,res)=>{
    try {
        let data =req.body
        req.body.userId=req.params.userid
        req.body.postId=req.params.postId
        let findUser= await user.findByPk(req.params.userid)
        req.body.likeBy=findUser.userName
        // console.log(findUser)
        let savedata = await like.create(data)
        return res.status(201).json(savedata)
    } catch (error) {
        res.status(500).json(error.message)
    }
}

module.exports={createLikes}