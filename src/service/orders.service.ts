import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateOrderDto } from 'src/dtos/order-dto/create-order.dto';
import { UpdateOrderDto } from 'src/dtos/order-dto/update-order.dto';
import { Clients } from 'src/entity/clients.entity';
import { Orders } from 'src/entity/orders.entity';
import { Users } from 'src/entity/users.entity';
import { Repository } from 'typeorm';

@Injectable()
export class OrdersService {
    constructor(@InjectRepository(Orders) private readonly ordersRepository: Repository<Orders>){}

    async createOrder(createOrderDto: CreateOrderDto) {
        // const order = new Orders()
        // order.client_id = await this.ordersRepository.manager.getRepository(Clients).findOne({where: {id: createOrderDto.client_id}})
        // order.user_id = await this.ordersRepository.manager.getRepository(Users).findOne({where: {id: createOrderDto.user_id}})
        // order.is_accepted = false
        
        // const newOrder = await this.ordersRepository.save(order)
        // return newOrder

        const user = new Users()
        user.id = createOrderDto.user_id

        const client = new Clients()
        client.id = createOrderDto.client_id
        
        const order = new Orders()
        order.user_id = user.id
        order.client_id = client.id
        order.is_accepted = createOrderDto.is_accepted

        return  await this.ordersRepository.save(order)


    }

    async getOrderList(id?: number) {
        let order
        if(id == 0){
             order = await this.ordersRepository.find()
        }else {
            order = await this.ordersRepository.findOne({where: {id: id}});
        }

        return order
    }

    async updateOrder( id:number, updateOrderDto: UpdateOrderDto) {
        const order = await this.ordersRepository.update({id: id}, updateOrderDto)
        return order
    }
   
    async deleteOrder(arrayOfId: number[]) {
        for(let id of arrayOfId) {
            await this.ordersRepository.delete({id: id})
        }

        return arrayOfId.length
    }

    async chooseOrder(id: number ) {
        const order = await this.ordersRepository.update({id: id}, {is_accepted: true})
        return order
    }
}