import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity('movies')

export default class Movie{
    @PrimaryGeneratedColumn('increment')
    id:number;

    @Column({length: 60, unique:true })
    name:string;

    @Column({type: 'text' , nullable:true})
    description?:string | undefined | null;

    @Column()
    duration:number;

    @Column()
    price:number;
}


// class Movie {}

// export default Movie;
