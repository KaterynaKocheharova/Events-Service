import app from "./app.js";
import { env } from './utils/env.js';

export const setUpServer = () => {
  const PORT = env('PORT', 3000);
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
};
