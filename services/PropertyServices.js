const propertyModel = require("../model/Property.js")

// add a property
exports.addAProperty = (req, res) =>{
    const property = new propertyModel(req.body)
    property.save()
    .then((property) =>{
        res.json({
            message: `A property was added`,
            data: property
        })
    })
    .catch(err =>{
        res.status(500).json({
            message: err
        })
    })
}

// retrieves all properties
exports.retrieveAllProperties = async (req,res) =>{
    try 
    {
    const properties = await propertyModel.find()

    res.json({
        message: `A list of all properties`,
        data: properties,
        totalProperties: properties.length
    })
    } 
    catch(err){
    res.status(500).json({
        message: err
    })
}
}

// retrieves by specified property type
exports.retrieveAllPropertyByType = (req, res) =>{
    propertyModel.find({type: req.params.type}) 
    .then((property) =>{
        res.json({
            message: `A list of ${req.params.type} property types`,
            data: property
        })
    })
    .catch(err =>{
        res.status(500).json({
            message: err
        })
    })
}

// retrieves by specified property location
exports.retrieveAllPropertyByLocation = (req, res) =>{
    propertyModel.find({location: req.params.location})
    .then((property) =>{
        res.json({
            message: `A list of property locations in ${req.params.location}`,
            data: property
        })
    })
    .catch(err =>{
        res.status(500).json({
            message: err
        })
    })
}

// retrieves all bestsellers
exports.retrieveAllBestsellers = (req, res) =>{
    propertyModel.find({bestsellers: true})
    .then((property) =>{
        res.json({
            message: `A list of bestsellers`,
            data: property
        })
    })
    .catch(err =>{
        res.status(500).json({
            message: err
        })
    })
}

// retrieves array of just the available types
exports.retrieveAllTypes = (req, res) => {
    let propArray = []
    propertyModel.find()
    .then(property =>{
        for(x in property)
        propArray.push(property[x].type)
        //console.log(propArray)
        res.json({
            message: "List of all property types",
            data: propArray.filter((item, index) => propArray.indexOf(item) === index)
        })
    })
    .catch(err =>{
        res.status(500).json({
            message: err
        })
    })
}


// retrieves a property by id
exports.retrievePropertyById = (req,res) =>{

    if(req.params.id.length < 24 || req.params.id.length > 24){
        res.json({
            message: `ID must be 24 characters long, you entered ${req.params.id.length}`
        })
    } else {
    propertyModel.findById(req.params.id)
    .then((property)=>{
    if(property){
        res.json({
            message: `Property with ID ${req.params.id} was found!`,
            data: property
        })
    } else { 
        res.status(404).json({
            message: `No ${req.params.id} property found`,  
        })
    }
    })
    
    .catch(err =>{
        res.status(500).json({
            message: err
        })
    })
}
}

// update property by id
exports.updateAProperty = async (req,res)=>{

    try {
    const property = await propertyModel.findByIdAndUpdate(req.params.id, req.body, {new :false})
    console.log(property)
       
    if(!property)
    {
        res.status(404).json({
            message : `The Property with ID ${req.params.id} was not found`
        })
       
    }
    else
    {
        res.json({
            message : `The Property with the ID ${req.params.id} was updated`,
            data : property
        })

    }
} catch(err) {
    res.status(500).json({
        message :err
    })
}
}


exports.deleteAProperty = (req,res)=>{
    propertyModel.findByIdAndRemove(req.params.id)
    .then((property)=>{

        if(property)
        {
            res.json({
                message: `The Property with the ID ${req.params.id} was deleted`
            })
        }

        else
        {
            res.status(404).json({
                message : `Property with ID ${req.params.id} was not found`
            })
        }
    })
    .catch(err=>{
        res.status(500).json({
            message :err
        })
    })
}