export class CreateTableDto {
  readonly name: string;
  readonly capacity: number;
  readonly isActive: boolean;
  readonly size: string;
  readonly shape: string;
  readonly coords: {
    posX: number;
    posY: number;
  };
}
