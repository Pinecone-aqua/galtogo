export class CreateUserDto {
  lastName: string;
  firstName: string;
  readonly userEmail: string;
  readonly phone: number;
  readonly role: string;
}
