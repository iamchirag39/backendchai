// const aynkHendler=(fn)=>async(req,res,next)=>{
//     try {
//         fn(req,res,next)
//     } catch (error) {
//         res.status(err.code || 500).json({
//             succsess:false,
//             messege:err.messege
//         })
//     }
// }




const asyncHendler=(requesthendler)=>
       { (req,res,next)=>{
                Promise.resolve(requesthendler(req,res,next)).
                catch((err)=>next.err)
       }
}



export {aynkHendler}