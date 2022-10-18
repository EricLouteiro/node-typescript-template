import express, { Application } from 'express';
import cors from 'cors';

// import { PrismaClient } from '@prisma/client';

import { options } from '../middlewares';
import { defautlRoute } from '../controllers';
import fileUpload from 'express-fileupload';

// import uploadRouter from '../routes/upload.routes';

// const prisma = new PrismaClient()

class AppServer {

    private app: Application;
    private server: any;
    private port: string;

    private apiPaths = {
        login:        '/api/login',
        upload:       '/api/upload'
    };

    constructor() {
        this.app = express();
        this.port = process.env.PORT || '4000';

        // database conecction
        // this.dbConnection();

        // middlewares
        this.middelwares();

        //  routes
        this.routes();
    }

    middelwares() {

        this.app.use( cors() );
        this.app.use( express.json() );
        this.app.use( express.urlencoded({extended: true}) );
        this.app.use( express.static('public'))

        this.app.use( fileUpload({
            useTempFiles : true,
            tempFileDir : '/tmp/',
            createParentPath: true
        }))
    }

    // async dbConnection () {
    //     await prisma.$connect();
    // }

    routes() {
        // this.app.use(this.apiPaths.login,         incomingData    );
        // this.app.use(this.apiPaths.upload, uploadRouter );

        this.app.get('*', defautlRoute)
        // this.app.use(this.apiPaths.client, clientRouter );
        // this.app.use(this.apiPaths.user,   adminRouter  );
    }

    listen() {
        this.app.listen( this.port, () => {
            console.log(`Server en puerto ${this.port}`  )
        });
    } 
}

export default AppServer;