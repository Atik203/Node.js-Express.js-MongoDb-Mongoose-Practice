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
  isDeleted: boolean;
}

export interface TGuardian {
  fatherName: string;
  motherName: string;
}

export interface TUserName {
  firstName: string;
  lastName: string;
}

export interface StudentModel extends Model<TStudent> {
  isUserExist(id: string): Promise<TStudent | null>;
}

// export type TStudentMethods = {
//   isUserExist(id: string): Promise<TStudent | null>;
// };

// export type StudentModel = Model<
//   TStudent,
//   Record<string, never>,
//   TStudentMethods
// >;
