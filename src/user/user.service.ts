import { Injectable, MaxFileSizeValidator } from '@nestjs/common';
import { AnyFilesInterceptor } from '@nestjs/platform-express';
import { InjectModel } from '@nestjs/sequelize';
import e from 'express';
import { mainModule } from 'process';
import { stringify } from 'querystring';
import { Sequelize } from 'sequelize-typescript';
import { User } from 'src/user/models/user.model';

@Injectable()
export class UserService {

  constructor(@InjectModel(User) private userModel: typeof User) {

   
  }
  getUsers(): Promise<User[]> {
    return this.userModel.findAll()

  }

  createUser(data) {
    const newUser = new this.userModel({
      id: data.id,
      firstName: data.name,
    })
    newUser.save()
    return newUser;
  }

  findOne(id: string) {
   let user =this.userModel.findOne({
    where:{id:id}
  })
  return user;
  }
  
  async login(body) {
    let user = await this.userModel.findOne({
      where:{userName:body.userName}});
      
    if (user.lastName == body.lastName
    ) return "Amjilttai";
  else 
  return "Incorrect userName or password"
  }

  async findOldest(body) {
    let users = await this.userModel.findAll()
    let oldestPerson = users[0].age
    for (let i=0; i < users.length; i++) {
    if (users[i].age>oldestPerson) {
  
      oldestPerson = users[i].age
    }

 }
 return "Oldest person is "+oldestPerson

}
}