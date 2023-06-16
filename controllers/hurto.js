const {response} = require('express')

const Hurto = require('../models/hurto')

const getHurto = async(req, res=response) => {
    let mensaje = ''
    try {
        const hurtos = await Hurto.find()
        mensaje = hurtos
    } catch (error) {
        mensaje = error
    }

   res.json({
        hurtos:mensaje
    })
    
}

const postHurto = async(req, res = response) =>{

    const body = req.body
    let mensaje = ''
    const hurto = new Hurto(body) 
    console.log(body)
    try {
        await hurto.save()
        mensaje = 'Hurto registrado exitosamente'
    } catch (error) {
        mensaje = error
    }

    res.json({
        mensaje
    })
   
}

const putHurto = async(req, res = response) =>{
    const body = req.body

    console.log(body)

    let mensaje = ''

    try{
        await Hurto.findOneAndUpdate({_id:body._id}, {direccion:body.direccion, latitud:body.latitud, longitud:body.longitud, descripcion:body.descripcion})
            
        mensaje = 'Hurto modificado exitosamente'

    }catch(error){
        mensaje = error
    }

    res.json({
        mensaje:mensaje
    })
}


const deleteHurto = async(req, res = response) =>{
    const body = req.body
    let mensaje = ''

    try {
        await Hurto.deleteOne({_id:body._id})
        mensaje = 'Eliminado exitosamente'
    } catch (error) {
        mensaje = error
    }

    res.json({
        mensaje
    })
   
}

module.exports = {
    getHurto,
    postHurto,
    putHurto,
    deleteHurto
}