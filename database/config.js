const {mongoose} = require('mongoose')

dbConection = async () => {
    try {
        await(mongoose.connect(process.env.MONGO_CNN))
        console.log('Conexión establecida')
    }catch(error){
        console.log(error)
    }
}

module.exports = dbConection