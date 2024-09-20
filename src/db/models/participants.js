import { Schema, model, Types } from 'mongoose';

const participantsSchema = new Schema(
  {
    fullName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    birthDate: {
      type: Date,
      required: true,
    },
    heardFrom: {
      type: String,
      enum: ['social media', 'friends', 'found myself'],
      required: true,
    },
    registeredForEvents: [
      {
        type: Types.ObjectId,
        ref: 'users',
        required: true,
      },
    ],
  },
  { timestamps: true, versionKey: false },
);

export const ParticipantsCollection = model('participants', participantsSchema);
