import express, {Express} from 'express';
import Routers from './routers';
import Middlewares from './middlewares';

export class Server {
    private readonly app: Express;

    constructor() {
        this.app = express();
        this.app.set('port', process.env.PORT || 3000);
        Routers(this.app);
        Middlewares(this.app);
    }

    public start() {
        this.app.listen(this.app.get('port'), () => {
            console.log(`Listen on http://localhost:${this.app.get('port')}`);
        });
    }
}
