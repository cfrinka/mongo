const mongoose = require('mongoose');
const connectionString = 'mongodb+srv://carlosadmin:litalova1@test-cluster.9zvhq.mongodb.net/development?retryWrites=true&w=majority'



mongoose.connect(connectionString, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});
const db = mongoose.connection;
db.on('error', () => console.log('deu bom'))
db.once('open', () => console.log('deu bom'))
const restaurantShcema = new mongoose.Schema({
    name: String,
    lastName: String,
});
const Restaurant = mongoose.model('Restaurant', restaurantShcema);
async function many() {
    await Restaurant.insertMany([{
            name: 'ric',
            lastname: 'teste'
        },
        {
            name: 'rick',
            lastname: 'teste'
        },
        {
            name: 'mais um rick',
            lastname: 'teste'
        }
    ]);
    const item = await Restaurant.find({});
    return item;
}
many()
    .then(item => console.log(item))

