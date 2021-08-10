const { ConnectionCheckedInEvent, Collection } = require("mongodb");

function revealMessage(){

    document.getElementById("hiddenMessage").style.display='block';
}
//Database Connection
const uri="mongodb+srv://Sit-725-2021:Nijjar1993@sit-725-prac4.t2u3p.mongodb.net/sit725-t2-prac4?retryWrites=true&w=majority"
const client= new Mongoclient(uri,{ useNewUrlParser: true})

const createCollection = (CollectionName)=> {
    client.connect((err,db) =>{
    projectCollection = client.db().Collection(CollectionName);
    if(!err){
        console.log("MongoDB Connected")
    }
    else{
        console.log("DB Error: ",err);
        process.exit(1);
        }
    })
}