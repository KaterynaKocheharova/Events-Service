import createHttpError from 'http-errors';
import { ParticipantsCollection } from '../db/models/participants.js';
import { updateEventParticipants } from './events.js';
import { getEventById } from './events.js';

export const getParticipantByEmail = (email) =>
  ParticipantsCollection.findOne({ email });

export const getParticipantById = (id) => ParticipantsCollection.findById(id);

export const createParticipant = (participantData) =>
  ParticipantsCollection.create(participantData);

export const registerParticipant = async (participantData, eventId) => {
  let participantId;
  let participant;

  participant = await getParticipantByEmail(participantData.email);
  if (participant) {
    participantId = participant.id;
  } else {
    participant = await createParticipant(participantData);
    participantId = participant.id;
  }

  const event = await getEventById(eventId);

  if (!event) {
    throw createHttpError(404, 'Event not found');
  }

  const alreadyExistingParticipant =
    event.registeredUsers.includes(participantId);
  if (alreadyExistingParticipant) {
    throw createHttpError(400, 'Already registered for this event!');
  }

  await updateEventParticipants(participantId, eventId);
  return participant;
};

export const getParticipantsByEventId = async (eventId) => {
  const event = await getEventById(eventId);
  const participantsIds = event.registeredUsers;

  const participants = await Promise.all(
    participantsIds.map((id) => getParticipantById(id)),
  );

  return participants;
};
