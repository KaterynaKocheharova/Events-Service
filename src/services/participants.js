// import path from 'node:path';
// import fs from 'node:fs/promises';
// import { env } from '../utils/env.js';
// import { ParticipantsCollection } from '../db/models/participants.js';

// !!! get participants

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


// !!! get a participant

// export const registerParticipant = async (userData) => {
//   const alreadyExistingUser = await User.findOne({ email: userData.email });
//   if (alreadyExistingUser !== null) {
//     throw createHttpError(409, 'Email in use');
//   }
//   const encryptedPassword = await bcrypt.hash(userData.password, 10);
//   return User.create({ ...userData, password: encryptedPassword });
// };
