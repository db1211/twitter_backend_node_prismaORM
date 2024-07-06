import express  from "express"

const router =  express.Router()


//create tweets
router.post('/',(req,res)=>{
    res.status(501).json({error:'Not Implemented'})
})


//list tweets
router.get('/',(req,res)=>{
    res.status(501).json({error:"Not Implemented"})
})

//get one tweets
router.get('/:id',(req,res)=>{
    const {id} =req.params;  
     
    res.status(501).json({error:`Not implemented : ${id}`})
    
})

//update tweets
router.get('/:id',(req,res)=>{
    const {id} =req.params;  
     
    res.status(501).json({error:`Not implemented : ${id}`})
    
})

//delete tweets
router.delete('/:id',(req,res)=>{
    const {id} =req.params;  
     
    res.status(501).json({error:`Not implemented : ${id}`})
    
})

export default router