import { Column, Model, Table } from 'sequelize-typescript';

@Table
export class User extends Model {

    @Column({ primaryKey: true })
    id: string;

    @Column
    firstName: string;

    @Column
    lastName: string;
    
    @Column
    userName: string;

    @Column({ defaultValue: true })
    isActive: boolean;

    @Column
    age: Number
}