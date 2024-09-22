import { EventsCollection } from '../db/models/events.js';
import { calculatePaginationData } from '../utils/calculatePaginationData.js';

export const getEvents = async ({ page, perPage }) => {
  const limit = perPage;
  const skip = page > 0 ? (page - 1) * perPage : 0;

  const eventsCountPromise = EventsCollection.countDocuments();
  const eventsPromise = EventsCollection.find().skip(skip).limit(limit).exec();
  const [eventsCount, events] = await Promise.all([eventsCountPromise, eventsPromise]);

  const paginationData = calculatePaginationData(eventsCount, page, perPage);

  return {
    items: events,
    ...paginationData,
  };
};

export const getEventById = (id) => EventsCollection.findById(id);

export const updateEventParticipants = (participantId, eventId) =>
  EventsCollection.findByIdAndUpdate(
    eventId,
    {
      $addToSet: { registeredUsers: participantId },
    },
    { new: true },
  );
