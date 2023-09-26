export const errorHandlerMiddleware = (err, req, res, next) =>{
    console.log(err);
    if(err.name === 'ValidationError'){
        return res.status(400).json({error:"please Provide Vaild Email"})
    }
    res.status(400).json({error: err})
}