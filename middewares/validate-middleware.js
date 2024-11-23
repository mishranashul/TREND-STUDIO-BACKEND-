const validate = (schema) => async(req, res, next) =>{
    try {
        const pareboday= await schema.parseAsync(req.body);
        req.body= pareboday;
        next();
    } catch (err) {      
        next(err);
    }
}
 
module.exports = validate;