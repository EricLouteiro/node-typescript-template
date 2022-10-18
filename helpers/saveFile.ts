import { Request } from "express";
import { UploadedFile } from "express-fileupload";
import moment from "moment";
import path from 'node:path';

export const saveFile = ( files: UploadedFile | any, folder: string ): Promise<{ nombreTemp:string, folder:string, extention:string }> => {
 
    return new Promise((resolve, reject) => {

        const [ extention ] = files.name.split('.').reverse();

        // Validar extension
        
        if (!['csv', 'xlsx'].some(val => val === extention)) {
            return reject(`La extension ${extention} no es valida`)
        }

        const nombreTemp =`${ moment().toISOString().trim() }.${extention}`;
        const uploadPath = path.join(__dirname, '../assets', folder, nombreTemp)
        // console.log(uploadPath)
        files.mv(uploadPath, (err:any) => {
            if (err) {
                reject( err );
            }
            resolve({ nombreTemp, folder, extention }  );
        });
    })

};