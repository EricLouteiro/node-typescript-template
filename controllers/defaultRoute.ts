import { Request, Response } from "express"

import path from "node:path";

export const defautlRoute = (req: Request, res: Response) => {
    const defaultDir = path.resolve(__dirname, '../public/index.html')
    res.sendFile(defaultDir)
}