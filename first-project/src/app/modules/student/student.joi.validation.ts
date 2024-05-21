import Joi from 'joi';

const userNameValidationSchema = Joi.object({
  firstName: Joi.string()
    .trim()
    .regex(/^[a-zA-Z]+$/)
    .min(1)
    .max(20)
    .required()
    .messages({
      'string.empty': 'First Name is required',
      'string.pattern.base': 'First Name must contain only letters',
      'string.max': 'First Name must not exceed 20 characters',
    }),
  lastName: Joi.string().trim().alphanum().min(1).max(20).required().messages({
    'string.empty': 'Last Name is required',
    'string.max': 'Last Name must not exceed 20 characters',
  }),
});

const guardianValidationSchema = Joi.object({
  fatherName: Joi.string()
    .trim()
    .alphanum()
    .min(1)
    .max(20)
    .required()
    .messages({
      'string.empty': 'Father Name is required',
      'string.max': 'Father Name must not exceed 20 characters',
    }),
  motherName: Joi.string()
    .trim()
    .alphanum()
    .min(1)
    .max(20)
    .required()
    .messages({
      'string.empty': 'Mother Name is required',
      'string.max': 'Mother Name must not exceed 20 characters',
    }),
});

const studentValidationSchema = Joi.object({
  id: Joi.string().required().messages({ 'string.empty': 'ID is required' }),
  name: userNameValidationSchema.required(),
  gender: Joi.string().valid('male', 'female').required().messages({
    'string.empty': 'Gender is required',
    'any.only': 'Gender must be either male or female',
  }),
  dateOfBirth: Joi.string()
    .required()
    .messages({ 'string.empty': 'Date of Birth is required' }),
  address: Joi.string()
    .required()
    .messages({ 'string.empty': 'Address is required' }),
  phone: Joi.string()
    .required()
    .messages({ 'string.empty': 'Phone number is required' }),
  guardian: guardianValidationSchema.required(),
  profileImage: Joi.string(),
  isActive: Joi.string()
    .valid('active', 'blocked')
    .default('active')
    .required()
    .messages({
      'string.empty': 'Status is required',
      'any.only': 'Status must be either active or blocked',
    }),
});

export default studentValidationSchema;
