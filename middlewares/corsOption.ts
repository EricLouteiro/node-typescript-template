
import { CorsOptions } from "cors";
import { env } from 'process';

const envOrigins: string = env.ORIGIN_WHITELIST || '';

export const whiteList: any [] = envOrigins.split(';');
console.log(whiteList)

export const origin = (origin: string | undefined, callback: Function) => {

    // console.log(origin)
    if (whiteList.indexOf(origin) !== -1 || !origin) {
        callback(null, true);
        return whiteList           
    }
    else{
        callback (new Error('Not allowed by CORS'));
    }
}

export const options: CorsOptions = {
    origin,
    credentials: true,
    allowedHeaders: ['Authorization', 'Content-Type', 'PaxId' ]
}


export const handlePreflightRequest = (req:any, res:any) => {
    Reflect.ownKeys(req).find( s => {
        return String(s) === 'Symbol(kHeaders)'
    });

    // console.log(req.headers);
    const origin = req.headers.origin;

    res.writeHead(200, {
      "Access-Control-Allow-Origin": `${origin}`,
      "Access-Control-Allow-Methods": "GET,POST",
      "Access-Control-Allow-Headers": ["token", "paxid"],
      "Access-Control-Allow-Credentials": true,
      "Connection": "Upgrade",
      "Upgrade": "websocket"
    });
    res.end();
}



