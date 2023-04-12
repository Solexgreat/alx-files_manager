const r = require('redis')
const { promisify } = require('util')

class RedisClient{
    constructor() {
        this.client = r.createClient();

        this.client.on('error', (err) => {
            console.log(err);
        })
    }

    isAlive() {
        return this.client.connected;
    }
    
    async get(key) {
        return r.get(key);
    }
}