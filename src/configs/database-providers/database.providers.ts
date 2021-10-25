import * as mongoose from 'mongoose';

export const databaseProviders = [
  {
    provide: 'DATABASE_CONNECTION',
    useFactory: (): Promise<typeof mongoose> =>
      mongoose.connect('mongodb+srv://<username>:<password>@cluster0.vud2m.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'),
  },
];
