import { ApiProperty } from '@nestjs/swagger';

export class CreateOrderDto {
  @ApiProperty({ example: 1, description: "ro'yxatdan o'tgan mijoz idisi" })
  client_id: number;

  @ApiProperty({
    example: 1,
    description: 'buyurtma rasmiylashtirgan xodim idisi',
  })
  user_id: number;

  @ApiProperty({
    example: false,
    description: 'buyurtma qabul qilingan yoki yoqligi',
  })
  is_accepted: boolean;
}
