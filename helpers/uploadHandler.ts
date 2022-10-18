import { UploadedFile } from "express-fileupload";
import { jsonData, xlsToJson } from "./convertHandler";
import { saveFile } from "./saveFile";


export const uploadHandler = async( files: UploadedFile | any ) => {

    for (const [ key, value ] of Object.entries(files)) {
        if (['bancard', 'itau'].some( val => val === key )) {
            const { nombreTemp, extention, folder } = await saveFile( value, key )
            if (extention === 'csv') {
                jsonData(nombreTemp, folder )
            }else if (extention === 'xlsx') {
                xlsToJson( nombreTemp, folder )
            }
        }
    }
};