import Joi from 'joi';

export const registerParticipantSchema = Joi.object({
  fullName: Joi.string()
    .pattern(/^[A-Za-z]+(?:['-]?[A-Za-z]+)*(?: [A-Za-z]+(?:['-]?[A-Za-z]+)*)+$/)
    .min(3)
    .max(50)
    .required()
    .messages({
      'string.base': 'Full name should be a valid string',
      'string.min': 'Full name should have at least 3 characters',
      'string.max': 'Full name should have 50 characters at max',
      'string.pattern.base':
        'Full name must contain both first and last names and only letters, spaces, hyphens, or apostrophes',
      'any.required': 'Full name is required',
      'string.empty': "Full name shouldn't be empty",
    }),
  email: Joi.string().email().required().messages({
    'string.base': 'Email should be a string',
    'string.email': 'Email should have a valid email structure',
    'any.required': 'Email is required',
    'string.empty': "Email shouldn't be empty",
  }),
  birthDate: Joi.string().required().messages({
    'string.base': 'Birth date should be a string',
    'any.required': 'Birth date is required',
    'date.empty': "Birth date shouldn't be empty",
  }),
  heardFrom: Joi.string()
    .valid('social media', 'friends', 'found myself')
    .required()
    .messages({
      'any.required': 'HeardFrom field is required',
      'string.valid':
        'HeardFrom field should be one of: social media, friends, found myself',
    }),
});
