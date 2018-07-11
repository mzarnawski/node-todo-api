
const {MongoClient, ObjectId} = require('mongodb')


MongoClient.connect('mongodb://localhost:27017/TodoApp', { useNewUrlParser: true }, (err, client) => {
    if(err) {
        return console.log('Unable to connect to MongoDB server')
    }
    console.log('Connected to MongoDB server')
    const db = client.db('TodoApp')

    //deleteMany
    // db.collection('Users').deleteMany({name:'Mike'}).then((res) => {
    //     console.log(res)
    // })

    //deleteOne
    // db.collection('Todos').deleteOne({text:'Eat lunch'}).then((res) => {
    //         console.log(res)
    //     })

    //findOneAndDelete
    db.collection('Users').findOneAndDelete({_id:123}).then((res) => {
            console.log(res)
        })

    //client.close()
})