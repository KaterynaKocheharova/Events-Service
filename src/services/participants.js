import createHttpError from 'http-errors';
import { ParticipantsCollection } from '../db/models/participants.js';
import { updateEventParticipants } from './events.js';
import { getEventById } from './events.js';

export const findParticipantByEmail = (email) =>
  ParticipantsCollection.findOne({ email });

export const createParticipant = (participantData) =>
  ParticipantsCollection.create(participantData);

export const registerParticipant = async (participantData, eventId) => {
  let participantId;
  let participant;

  // CHECKING IF THE PARTICIPANT ALREADY EXISTS IN THE DB
  participant = await findParticipantByEmail(participantData.email);
  if (participant) {
    participantId = participant.id;
  } else {
    participant = await createParticipant(participantData);
    participantId = participant.id;
  }

  // CHECK IF THE EVENT EXISTS
  const event = await getEventById(eventId);

  if (!event) {
    throw createHttpError(404, 'Event not found');
  }

  // CHECK IF THE EVENT ALREADY HAS THE PARTICIPANT
  const alreadyExistingParticipant =
    event.registeredUsers.includes(participantId);
  if (alreadyExistingParticipant) {
    throw createHttpError(400, 'Already registered for this event!');
  }

  // ADDING A PARTICIPANT ID TO EVENTS COLLECTION
  await updateEventParticipants(participantId, eventId);
  return participant;
};
