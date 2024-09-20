import { getEvents } from '../services/events.js';
import parsePaginationParams from '../utils/parsePaginationParams.js';
// import parseSortParams from '../utils/parseSortParams.js';
// import parseFilterParams from '../utils/parseFilterParams.js';

export const getEventsController = async (req, res) => {
  const { page, perPage } = parsePaginationParams(req.query);
  //   const { sortOrder, sortBy } = parseSortParams(req.query);
  //   const filter = parseFilterParams(req.query);
  const events = await getEvents({
    page,
    perPage,
  });

  res.status(200).json({
    events,
  });
};
