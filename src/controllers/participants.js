import { registerParticipant } from '../services/participants.js';

export const registerParticipantController = async (req, res) => {
  const { eventId } = req.params;
  const userData = {
    fullName: req.body.fullName,
    email: req.body.email,
    birthDate: req.body.birthDate,
    heardFrom: req.body.heardFrom,
  };

  const participant = await registerParticipant(userData, eventId);

  res.status(201).json({
    participant,
  });
};
