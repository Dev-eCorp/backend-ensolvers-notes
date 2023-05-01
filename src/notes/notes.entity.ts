import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'notes' })
export class Note {
	@PrimaryGeneratedColumn()
	id: number;

	@Column()
	title: string;

	@Column()
	content: string;

	@Column({ default: true })
	status: boolean;

	@Column('simple-array', { nullable: true })
	tags: string[];

	@Column({
		type: 'datetime',
		default: () => 'CURRENT_TIMESTAMP',
	})
	creationDate: Date;

	@Column({
		type: 'datetime',
		default: () => 'CURRENT_TIMESTAMP',
		onUpdate: 'CURRENT_TIMESTAMP',
	})
	updateDate: Date;
}
