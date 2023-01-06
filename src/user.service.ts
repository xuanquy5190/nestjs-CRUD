import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { UserEntity } from "./user";
@Injectable()
export class UserService {
    constructor(
        @InjectRepository(UserEntity)
        private userRespository: Repository<UserEntity>,
    ) { }

    findAll(): Promise<UserEntity[]> {
        //Get all user
        return this.userRespository.find();
    }

    findOne(id: number): Promise<UserEntity> {
        return this.userRespository.findOne({
            where: {
                id: id
            }
        });
    }

    create(user: UserEntity): Promise<UserEntity> {
        return this.userRespository.save(user)
    }

    async update(id: number, user: UserEntity) {
        await this.userRespository.update(id, user);
    }

    async remove(id: number): Promise<void> {
        await this.userRespository.delete(id);
    }
}

export { UserEntity };

