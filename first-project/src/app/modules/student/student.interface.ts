export interface Student {
  id: string;
  name: UserName;
  gender: 'male' | 'female';
  dateOfBirth: string;
  address: string;
  guardian: Guardian;
  profileImage?: string;
  isActive: 'active' | 'blocked';
  phone: string;
}

export interface Guardian {
  fatherName: string;
  motherName: string;
}

export interface UserName {
  firstName: string;
  lastName: string;
}
