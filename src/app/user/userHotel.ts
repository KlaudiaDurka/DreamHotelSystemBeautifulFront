export class UserHotel {
  id: number;
  name: string;
  surname: string;
  telephone: string;
  dateOfBirth: Date;
  access: string;


  constructor(id: number, name: string, surname: string, telephone: string, dateOfBirt: Date, access: string) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.telephone = telephone;
    this.dateOfBirth = dateOfBirt;
    this.access = access;
  }
}
