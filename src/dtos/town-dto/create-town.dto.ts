export class CreateTownDto {
  name: string;
  region_id: number;
  district_id: number;
  address?: string;
  contact_number?: string;
  logo?: string;
}
