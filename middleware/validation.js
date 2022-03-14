//Validates JSON to ensure all MANDATORY fields are present. 
//If not, the missing fields are pushed into an array and displayed to the interface detailing all missing items.

exports.createPropertyValidation = (req, res, next) =>{
    const errors = []
    if(!req.body.title ||  req.body.title === ""){
        errors.push({field: "title", message: "You must provide a title"})
    }

    if (!req.body.pricePerNight ||  req.body.pricePerNight === "") {
        errors.push({field: "pricePerNight", message: "You must provide a pricePerNight"})
    }
    if (!req.body.type ||  req.body.type === "") {
        errors.push({field: "type", message: "You must provide a type"})
    }
    if (!req.body.amenities ||  req.body.amenities === "") {
        errors.push({field: "amenities", message: "You must provide a amenities"})
    }
    if (!req.body.location ||  req.body.location === "")  {
        errors.push({field: "location", message: "You must provide a location"})
    }
    if (!req.body.bestseller ||  req.body.bestseller === "") {
        errors.push({field: "bestseller", message: "You must provide a bestseller"})
    }

    if(errors.length > 0){
        res.status(400).json({
            message: "You did not successfully update a property",
            data: errors
        })
    } else {
        next()
    }
}


exports.validateNewUser = (req, res, next) =>{
    const errors = []
    if(!req.body.firstName ||  req.body.firstName === ""){
        errors.push({field: "firstName", message: "You must provide a first name"})
    }

    if (!req.body.lastName ||  req.body.lastName === "") {
        errors.push({field: "lastName", message: "You must provide a last name"})
    }
    if (!req.body.email ||  req.body.email === "") {
        errors.push({field: "email", message: "You must provide a email"})
    }
    if (!req.body.password ||  req.body.password === "") {
        errors.push({field: "password", message: "You must provide a password"})
    }
   
    if(errors.length > 0){
        res.status(400).json({
            message: "You did not successfully create a user",
            data: errors
        })
    } else {
        next()
    }
}