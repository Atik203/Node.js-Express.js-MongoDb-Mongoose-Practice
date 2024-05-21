import { Schema } from 'mongoose';
import { Student } from './student.interface';

const studentSchema = new Schema<Student>({
  id: { type: String },
  name: {
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
  },
  gender: ['male', 'female'],
  dateOfBirth: { type: String },
  address: { type: String },
  phone: { type: String, required: true },
  guardian: {
    fatherName: { type: String },
    motherName: { type: String },
  },
  profileImage: { type: String },
  isActive: ['active', 'blocked'],
});
