import { Request, Response, NextFunction } from 'express';


export const validateFile = (req: Request, res: Response, next: NextFunction) => {
    if (!req.files || Object.keys(req.files).length === 0 ) {
        return res.status(400).json({
            msg: 'No hay archivo para subir'
        });
        
    }
    next();
};