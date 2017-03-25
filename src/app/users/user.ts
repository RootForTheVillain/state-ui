import { Vehicle }              from '../vehicles/vehicle';

export class User {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  birthDate: Date;
  licenseNumber: string;
  streetAddress: string;
  city: string;
  state: string;
  zipCode: string;
  phoneNumber: string;
  vehicles: Vehicle[];
}
