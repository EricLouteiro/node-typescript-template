
import csv from 'csvtojson';
import path from 'node:path';
import XLSX, { readFile  } from "xlsx";


// Convertimos el CSV a JSON
export const jsonData = async ( fileName: string, folder: string ) => {
    const dirfile = path.join(__dirname, '../assets', folder, fileName )
    try {
        const jsonArray = await csv({ delimiter: "auto", flatKeys: true }).fromFile(dirfile);
        console.log(jsonArray)
    }
    catch (e) {
        console.log(e, 'No se pudo enviar el archivo csv o no existe');
    }
}

export const xlsToJson = ( fileName: string, folder: string ) => {
    const dirfile = path.join(__dirname, '../assets', folder, fileName )
    const sheet = readFile(dirfile).Sheets.Contenido;
    const jsa = XLSX.utils.sheet_to_json( sheet, { range: 8 } );
    
    console.log(jsa)
 
};