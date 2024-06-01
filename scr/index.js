import { configDotenv } from "dotenv";
import connectDB from "./db/database";
import { app } from "./app";

configDotenv({
    path: "./.env"
})

connectDB()
    .then(()=>{
        app.listen(process.env.PORT || 8000, () => {
            console.log(`Server is running on port ${process.env.PORT}`);
        })
    })
    .catch((err)=> {
        console.log("MONGO_DB connection failed !!! ",err)
    })