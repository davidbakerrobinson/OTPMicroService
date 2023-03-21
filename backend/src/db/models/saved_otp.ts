import {
	BaseEntity,
	Column,
	Entity,
	PrimaryColumn,

} from "typeorm";

@Entity()
export class OTP extends BaseEntity {
    @PrimaryColumn()
    id: string;
    @Column()
    validated: boolean = false;
}