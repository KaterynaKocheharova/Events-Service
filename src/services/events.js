import { EventsCollection } from '../db/models/events.js';
import { calculatePaginationData } from '../utils/calculatePaginationData.js';

export const getEvents = async ({ page, perPage }) => {
  const limit = perPage;
  const skip = page > 0 ? (page - 1) * perPage : 0;

  const eventsQuery = EventsCollection.find();
  const [eventsCount, events] = await Promise.all([
    eventsQuery.countDocuments,
    eventsQuery.skip(skip).limit(limit).exec(),
  ]);

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

// !!! pagination
// export const getEvents = async ({
//   page,
//   perPage,
//   sortOrder,
//   sortBy,
//   filter,
//   userId,
// }) => {
//   const limit = perPage;
//   const skip = page > 0 ? (page - 1) * perPage : 0;

//   const query = {
//     userId: userId,
//   };

//   const contactsQuery = ParticipantsCollection.find(query);

//   if (filter.isFavourite) {
//     contactsQuery.where('isFavourite').equals(Boolean(filter.isFavorite));
//   }

//   if (filter.contactType) {
//     contactsQuery.where('contactType').equals(filter.contactType);
//   }

//   const [contactsCount, contacts] = await Promise.all([
//     ParticipantsCollection.countDocuments(query),
//     contactsQuery
//       .skip(skip)
//       .limit(limit)
//       .sort({ [sortBy]: sortOrder })
//       .exec(),
//   ]);

//   const paginationData = calculatePaginationData(contactsCount, page, perPage);

//   return {
//     data: contacts,
//     ...paginationData,
//   };
// };

// !!! get event by participants???
// export const getContactById = async (contactId, userId) => {
//   const data = await UsersCollection.findOne({
//     _id: contactId,
//     userId,
//   });
//   return data;
// };

// !!! update event with a new participant?

// export const upsertContact = async (contactId, userId, newData, options = {}) => {
//   const rawData = await ContactsCollection.findOneAndUpdate(
//     { _id: contactId, userId },
//     newData,
//     {
//       new: true,
//       includeResultMetadata: true,
//       ...options,
//     },
//   );

//   if (!rawData.value) {
//     return null;
//   }

//   return {
//     contact: rawData.value,
//     isNew: rawData?.lastErrorObject?.upserted,
//   };
// };
