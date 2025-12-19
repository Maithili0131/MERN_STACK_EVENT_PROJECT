import mongoose from "mongoose";

export const dbConnection = async () => {
   mongoose
   .connect(process.env.MONGOURI,{dbname:"MERN_STACK_EVENT_MESSAGE" })
   .then(()=>{
   
    console.log("Connected to database!");
  } )
  .catch ((err) => {
    console.error("Error connecting to database:", err);
  
});
};
