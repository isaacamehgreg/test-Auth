const mongoose = require('mongoose');
const db = async()=>{
return mongoose.connect('mongodb://localhost:27017/Test-Auth', 
	{
	 useNewUrlParser: true,
	 useUnifiedTopology: true,
	})
    .then(()=>{
        console.log('connected');
    }).catch((e)=>{
        console.log("Something went wrong", e);
        })

}
db()