import { Model } from 'mongoose';

export interface TStudent {
  id: string;
  name: TUserName;
  gender: 'male' | 'female';
  dateOfBirth: string;
  address: string;
  guardian: TGuardian;
  profileImage?: string;
  isActive: 'active' | 'blocked';
  phone: string;
}

export interface TGuardian {
  fatherName: string;
  motherName: string;
}

export interface TUserName {
  firstName: string;
  lastName: string;
}

export type TStudentMethods = {
  isUserExist(id: string): Promise<TStudent | null>;
};

export type StudentModel = Model<
  TStudent,
  Record<string, never>,
  TStudentMethods
>;
