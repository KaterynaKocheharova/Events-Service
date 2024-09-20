// import { getEvents } from '../services/events.js';
// import createHttpError from 'http-errors';
// import parsePaginationParams from '../utils/parsePaginationParams.js';
// import parseSortParams from '../utils/parseSortParams.js';
// import parseFilterParams from '../utils/parseFilterParams.js';

// export const getContactsController = async (req, res) => {
//   const userId = req.user._id;
//   const { page, perPage } = parsePaginationParams(req.query);
//   const { sortOrder, sortBy } = parseSortParams(req.query);
//   const filter = parseFilterParams(req.query);
//   const contacts = await getEvents({
//     page,
//     perPage,
//     sortOrder,
//     sortBy,
//     filter,
//     userId,
//   });

//   res.status(200).json({
//     status: 200,
//     message: 'Successfully found events',
//     data: contacts,
//   });
// };

// export const getContactByIdController = async (req, res) => {
//   const userId = req.user._id;
//   const { contactId } = req.params;
//   const contact = await getContactById(contactId, userId);
//   if (!contact) {
//     throw createHttpError(404, 'Contact not found');
//   }
//   res.status(200).send({
//     status: 200,
//     message: `Successfully found contact with id ${contactId}`,
//     data: contact,
//   });
// };
