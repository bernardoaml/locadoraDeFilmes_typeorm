import app from "./app";
import { AppDataSource } from "./data-source";


AppDataSource.initialize()
.then(():void =>{
    console.log('Database Connected.')

    const PORT : number = Number(process.env.PORT)  || 3000;
    
    app.listen(PORT, (): void => 
    console.log(`Server is running on port ${PORT}`)
    );
})
    .catch((error:unknown):void=> console.error(error))


