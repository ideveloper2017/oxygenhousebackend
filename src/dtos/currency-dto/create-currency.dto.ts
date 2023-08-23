import { ApiProperty } from '@nestjs/swagger';

export class CreateCurrencyDto {
  @ApiProperty({ example: 'pul birligi nomi', description: 'RUB USD' })
  name: string;

  @ApiProperty({
    example: 'true yoki false',
    description: "pul birligi tanlanganmi yoki yo'qligi",
  })
  is_selected: boolean;
}
