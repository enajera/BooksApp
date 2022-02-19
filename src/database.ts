import mongoose from 'mongoose';
import { mongodb } from './keys';

mongoose.connect(mongodb.URI)
  .then((db) => console.log('Db Is connected'))
  .catch((err) => console.error(err));
