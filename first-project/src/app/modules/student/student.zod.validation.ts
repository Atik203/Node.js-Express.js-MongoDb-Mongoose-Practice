import { z } from 'zod';

const userNameValidationSchemaZod = z.object({
  firstName: z
    .string()
    .trim()
    .min(1)
    .max(20, 'First Name must not exceed 20 characters'),
  lastName: z
    .string()
    .trim()
    .max(20, 'Last Name must not exceed 20 characters'),
});

const guardianValidationSchemaZod = z.object({
  fatherName: z.string().max(20, 'Father Name must not exceed 20 characters'),
  motherName: z
    .string()
    .trim()
    .max(20, 'Mother Name must not exceed 20 characters'),
});

const studentValidationSchemaZod = z.object({
  id: z.string(),
  name: userNameValidationSchemaZod,
  gender: z.enum(['male', 'female'], {
    message: 'Value must be male or female',
  }),
  dateOfBirth: z.string(),
  address: z.string(),
  guardian: guardianValidationSchemaZod,
  profileImage: z.string().optional(),
  isActive: z.enum(['active', 'blocked']).default('active'),
  phone: z.string(),
});

export default studentValidationSchemaZod;
