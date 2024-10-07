import { error } from "console";
import mongoose from "mongoose";
const connectToDb =async ()=>{
    const connectionUrl="mongodb://localhost:27017/NextJs";
    mongoose.connect(connectionUrl)
    .then(()=>console.log("blog database connection is succefull"))
    .catch((error)=> console.log(error));
}
export default connectToDb;