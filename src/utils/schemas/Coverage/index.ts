import mongoose from 'mongoose';

export default new mongoose.Schema({
  type: {
    type: String,
    enum: ['MultiPolygon'],
    required: true,
  },
  coordinates: {
    type: [[[[Number]]]],
    required: true,
  },
});
