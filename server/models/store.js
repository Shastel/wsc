import mongoose, { Schema } from 'mongoose';

mongoose.connect('mongodb://prod:prod@ds021036.mlab.com:21036/wsc');
const store = new Schema({ any: {} });

export default mongoose.model('store', store);
