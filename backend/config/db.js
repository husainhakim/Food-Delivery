// import mongoose from "mongoose";
// export default function connectDB(){
//     mongoose.connect("mongodb://localhost:27017/Swiggy_Mern")
//     .then(()=>{
//         console.log("Database Up and Running");
//     })
//     .catch((error)=>{
//         console.log("Error in connecting to Database", error);
//     })
// }
import mongoose from "mongoose";

export const  connectDB = async () =>{
    await mongoose.connect('mongodb://localhost:27017/Swiggy_Mern ').then(()=>console.log("Database Up And running")).catch(()=>console.log("Some problem"));
}