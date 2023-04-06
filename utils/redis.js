import { createClient } from 'redis';

class RedisClient {
    constructor() {
        this.client = createClient();
        this.client.on('error', (err) => console.log('Redis client error: ', err.message));
    }

    isAlive() {
        return this.client.connected;
    }

    async get(key) {
        const getClientInfo = promisify(this.client.get).bind(this.client);
        try {
            const value = await getClientInfo(key);
            return value;
        }

    }

    async set(key, value, duration) {
        const setAsync = promisify(this.client.set).bind(this.client);
        try {
	         await setAsync(key, value, 'EX', duration);
        } catch (err) {
            throw new Error(`Failed to set ${key}: ${err.meessage}`);
        }
    }

    async del(key) {
        const delAsync = promisify(this.client.del).bind(this.client);
        try {
            await delAsync(key);
        } catch (err) {
            console.log(`Failed to delete ${key}: ${err.message}`)
        }
    }
}
const redisClient = new RedisClient();
export default redisClient;
