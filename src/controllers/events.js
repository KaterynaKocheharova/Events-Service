import { getEvents } from '../services/events.js';
import parsePaginationParams from '../utils/parsePaginationParams.js';

export const getEventsController = async (req, res) => {
  const { page, perPage } = parsePaginationParams(req.query);
  const events = await getEvents({
    page,
    perPage,
  });

  res.status(200).json({
    events,
  });
};
