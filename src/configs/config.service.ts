import * as dotenv from 'dotenv';

export class ConfigService {
    private readonly envConfig: Record<string, string>;
    constructor() {
        const result = dotenv.config();

        if (result.error) {
            this.envConfig = process.env;
        } else {
            this.envConfig = result.parsed;
        }
    }

    public get(key: string): string {
        return this.envConfig[key];
    }

    public async getPortConfig() {
        return this.get('PORT');
    }

    public async getMongoConfig() {
        return {
            uri:
                'mongodb://' +
                'admin_ob' +
                ':' +
                'pio-tech@2021' +
                '@' +
                'cluster0.vud2m.mongodb.net' +
                '/' +
                'OnboardingDb' +
                '?retryWrites=true&w=majority',
        };
    }
    //'mongodb+srv://admin_ob:pio-tech@2021@cluster0.vud2m.mongodb.net/OnboardingDb?retryWrites=true&w=majority',
}
