import { model, Schema, Types } from 'mongoose';

const eventsSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    eventDate: {
      type: String,
      required: true,
    },
    organize: {
      type: String,
      required: true,
    },
    registeredUsers: [
      {
        type: Types.ObjectId,
        ref: 'participants',
        required: true,
      },
    ],
  },
  { timestamps: true, versionKey: false },
);

export const EventsCollection = model('events', eventsSchema);
