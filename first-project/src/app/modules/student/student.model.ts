import { model, Schema } from 'mongoose';
import {
  StudentModel,
  TGuardian,
  TStudent,
  TUserName,
} from './student.interface';

const userSchema = new Schema<TUserName>({
  firstName: {
    type: String,
    trim: true,
    required: [true, 'First Name is required'],
    maxlength: [20, 'First Name must not exceed 20 characters'],
    validate: {
      validator: function (value: string) {
        const nameRegex = /^[a-zA-Z]+$/;
        const str = value.charAt(0).toUpperCase() + value.slice(1);
        return str === value && nameRegex.test(value);
      },
      message: '{VALUE} is not valid format',
    },
  },
  lastName: {
    type: String,
    trim: true,
    required: [true, 'Last Name is required'],
    maxlength: [20, 'Last Name must not exceed 20 characters'],
  },
});

const guardianSchema = new Schema<TGuardian>({
  fatherName: {
    type: String,
    trim: true,
    required: [true, 'Father Name is required'],
    maxlength: [20, 'Father Name must not exceed 20 characters'],
  },
  motherName: {
    type: String,
    trim: true,
    required: [true, 'Mother Name is required'],
    maxlength: [20, 'Mother Name must not exceed 20 characters'],
  },
});

const studentSchema = new Schema<TStudent, StudentModel>({
  id: { type: String, unique: true, required: [true, 'ID is required'] },
  name: {
    type: userSchema,
    required: [true, 'Name is required'],
  },
  gender: {
    type: String,
    enum: {
      values: ['male', 'female'],
      message: 'Gender must be either male or female',
    },
    required: [true, 'Gender is required'],
  },
  dateOfBirth: { type: String, required: [true, 'Date of Birth is required'] },
  address: { type: String, required: [true, 'Address is required'] },
  phone: { type: String, required: [true, 'Phone number is required'] },
  guardian: {
    type: guardianSchema,
    required: [true, 'Guardian information is required'],
  },
  profileImage: { type: String },
  isActive: {
    type: String,
    enum: ['active', 'blocked'],
    default: 'active',
    required: [true, 'Status is required'],
  },
});

// instance method
/*
studentSchema.methods.isUserExist = async function (id: string) {
  return this.model('Student').findOne
    ? this.model('Student').findOne({ id })
    : null;
};
*/

// static method

studentSchema.statics.isUserExist = async function (id: string) {
  return this.findOne ? this.findOne({ id }) : null;
};

export const Student = model<TStudent, StudentModel>('Student', studentSchema);
