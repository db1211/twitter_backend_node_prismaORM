import express  from "express"

const router =  express.Router()


//create user
router.post('/',(req,res)=>{
    res.status(501).json({error:'Not Implemented'})
})


//list user
router.get('/',(req,res)=>{
    res.status(501).json({error:"Not Implemented"})
})

//get one user
router.get('/:id',(req,res)=>{
    const {id} =req.params;  
     
    res.status(501).json({error:`Not implemented : ${id}`})
    
})

//update user
router.get('/:id',(req,res)=>{
    const {id} =req.params;  
     
    res.status(501).json({error:`Not implemented : ${id}`})
    
})

//delete user
router.delete('/:id',(req,res)=>{
    const {id} =req.params;  
     
    res.status(501).json({error:`Not implemented : ${id}`})
    
})

export default router