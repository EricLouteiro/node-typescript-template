import { Response, Request } from 'express';
import { saveFile } from '../helpers/saveFile';
import { uploadHandler } from '../helpers/uploadHandler';


export const uploadFiles = async(req: Request, res: Response) => {

    try {
        console.log(req.files)

        uploadHandler( req.files )

        res.status(200).json({
            status: 'ok',
            msg: 'Archivo cargado'
        })
    } catch (error) {
        console.log(error)
        res.status(500).json({
            msg: 'error en servidor'
        })
    }
};