import { model, Schema } from 'mongoose';

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
      type: Date,
      required: true,
    },
    organize: {
      type: String,
      required: true,
    },
    registeredUsers: [
      {
        type: String,
        ref: 'participants',
        required: true,
      },
    ],
  },
  { timestamps: true, versionKey: false },
);

export const EventsCollection = model('events', eventsSchema);
