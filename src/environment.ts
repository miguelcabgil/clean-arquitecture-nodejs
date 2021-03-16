class Environment {
    production: false;
    dbConfig: {
        host: string,
        port: number,
        name: string
    };

    constructor() {
        this.production = false;
        this.dbConfig = {
            host: 'localhost',
            port: 27017,
            name: 'test'
        };
    }

    isProduction(): boolean {
        return this.production;
    }

    isDevelopment(): boolean {
        return this.production;
    }
}

export default new Environment();
