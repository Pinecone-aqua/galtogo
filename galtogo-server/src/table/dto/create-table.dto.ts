export class CreateTableDto {
  readonly name: string;
  readonly capacity: number;
  readonly isActive: boolean;
  readonly coords: {
    posX: number;
    posY: number;
  };
}
