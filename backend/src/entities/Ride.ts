import { rideStatus } from "src/types/myTypes";
import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";
import User from "./User";

@Entity()
class Ride extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    type: "text",
    enum: ["ACCEPTED", "FINISHED", "CANCLED", "REQUESTING", "ONROUTE"],
  })
  status: rideStatus;

  @Column({ type: "text" })
  pickUpAdress: string;

  @Column({ type: "double precision", default: 0 })
  pickUpLat: number;

  @Column({ type: "double precision", default: 0 })
  pickUpLng: number;

  @Column({ type: "text" })
  dropOffAddress: string;

  @Column({ type: "text" })
  dropOffLat: string;

  @Column({ type: "double precision", default: 0 })
  dropOffLng: number;

  @Column({ type: "double precision", default: 0 })
  price: number;

  @Column({ type: "double precision", default: 0 })
  distance: number;

  @Column({ type: "double precision", default: 0 })
  duration: number;

  @ManyToOne((type) => User, (user) => user.ridesAsPassenger)
  passenger: User;

  @ManyToOne((type) => User, (user) => user.ridesAsDriver)
  driver: User;

  @CreateDateColumn() createdAt: string;
  @UpdateDateColumn() updatedAt: string;
}

export default Ride;
