
const {MongoClient, ObjectId} = require('mongodb')


MongoClient.connect('mongodb://localhost:27017/TodoApp', { useNewUrlParser: true }, (err, client) => {
    if(err) {
        return console.log('Unable to connect to MongoDB server')
    }
    console.log('Connected to MongoDB server')
    const db = client.db('TodoApp')

    db.collection('Users').findOneAndUpdate({
        _id: new ObjectId("5b45c825cb0e67049cf629f7")
    }, {
        $set: {
            name:'Mike'
        },
        $inc: {
            age:1
        }
    }, {
        returnOriginal: false
    }).then((res) => {
        console.log(res)
    })

    //client.close()
})