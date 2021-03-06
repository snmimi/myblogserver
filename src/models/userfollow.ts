/*
 * @Description: 用户互相关注表
 * @Version: 1.0
 * @Date: 2021-08-22 21:17:46
 * @LastEditTime: 2021-08-27 21:18:43
 */
import {
	BaseEntity,
	Column,
	CreateDateColumn,
	Entity,
	PrimaryGeneratedColumn,
	UpdateDateColumn,
} from 'typeorm';

@Entity()
export class UserFollow extends BaseEntity {
	@Column()
	@PrimaryGeneratedColumn()
	id!: number;

	@Column({
		type: 'varchar',
		length: 50,
	})
	followUsername!: string;

	@Column({
		type: 'varchar',
		length: 50,
	})
	fansUsername!: string;

	@Column()
	status!: boolean;

	@CreateDateColumn()
	createtime!: Date;

	@UpdateDateColumn()
	updatetime!: Date;
}
