import { Buildings } from "src/entity/buildings.entity";

export class CreateApartmentDto {
  building_id: Buildings;
  entrance: number
  floor: number
  room_number: number;
  cells: number
  room_space: number;
}
