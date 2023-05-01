import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Note } from './notes.entity';
import { CreateNoteDto, UpdateNoteDto } from './dto/note.dt';

@Injectable()
export class NotesService {
	constructor(
		@InjectRepository(Note) private noteRepository: Repository<Note>,
	) {}

	createNote(note: CreateNoteDto) {
		const newNote = this.noteRepository.create(note);
		return this.noteRepository.save(newNote);
	}

	getNotes() {
		return this.noteRepository.find();
	}

	getNoteById(id: number) {
		return this.noteRepository.findOne({
			where: {
				id,
			},
		});
	}

	deleteNote(id: number) {
		return this.noteRepository.delete({ id });
	}

	updateNote(id: number, note: UpdateNoteDto) {
		return this.noteRepository.update({ id }, note);
	}

	archiveNote(id: number, note: UpdateNoteDto) {
		return this.noteRepository.update({ id }, note);
	}
}
