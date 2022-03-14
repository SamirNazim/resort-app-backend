const express = require('express')
const propertyServices = require("../services/PropertyServices.js")
const { createPropertyValidation} = require ("../middleware/validation.js")
const router = express.Router()

// get all properties
router.get("/properties", propertyServices.retrieveAllProperties)

// add a property
router.post("/properties", createPropertyValidation, propertyServices.addAProperty)

// return array of all property types
router.get("/properties/type", propertyServices.retrieveAllTypes)  

// get all specific types of property 
router.get("/properties/type/:type", propertyServices.retrieveAllPropertyByType) 

// get all specific locations of property
router.get("/properties/location/:location", propertyServices.retrieveAllPropertyByLocation)

// get property by id
router.get("/properties/id/:id", propertyServices.retrievePropertyById)

// update a property
router.put("/properties/id/:id", createPropertyValidation, propertyServices.updateAProperty)

// get all best selling properties
router.get("/properties/bestsellers", propertyServices.retrieveAllBestsellers)

// delete a property by id
router.delete("/properties/id/:id", propertyServices.deleteAProperty)

module.exports = router