import Joi from 'joi';

export const registerParticipantSchema = Joi.object({
  fullName: Joi.string()
    .pattern(/^[A-Za-z]+(?:['-]?[A-Za-z]+)*(?: [A-Za-z]+(?:['-]?[A-Za-z]+)*)+$/)
    .min(3)
    .max(50)
    .required()
    .trim()
    .messages({
      'string.base': 'Full name should be a valid string',
      'string.min': 'Full name should have at least 3 characters',
      'string.max': 'Full name should have 50 characters at max',
      'string.pattern.base': 'Full name must contain both first and last names and only letters, spaces, hyphens, or apostrophes',
      'any.required': 'Full name is required',
      'string.empty': "Full name shouldn't be empty",
    }),
});
