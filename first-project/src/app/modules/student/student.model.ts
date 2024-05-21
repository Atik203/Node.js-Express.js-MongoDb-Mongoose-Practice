import { model, Schema } from 'mongoose';
import { Guardian, Student, UserName } from './student.interface';

const userSchema = new Schema<UserName>({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
});

const guardianSchema = new Schema<Guardian>({
  fatherName: { type: String },
  motherName: { type: String },
});

const studentSchema = new Schema<Student>({
  id: { type: String },
  name: userSchema,
  gender: {
    type: String,
    enum: ['male', 'female'],
    required: true,
  },
  dateOfBirth: { type: String },
  address: { type: String },
  phone: { type: String, required: true },
  guardian: guardianSchema,
  profileImage: { type: String },
  isActive: {
    type: String,
    enum: ['active', 'blocked'],
    default: 'active',
  },
});

export const StudentModel = model<Student>('Student', studentSchema);
