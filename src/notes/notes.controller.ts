import {
	Body,
	Controller,
	Delete,
	Get,
	Param,
	ParseIntPipe,
	Patch,
	Post,
} from '@nestjs/common';
import { NotesService } from './notes.service';
import { CreateNoteDto, UpdateNoteDto } from './dto/note.dt';
import { Note } from './notes.entity';
('./notes.service');

@Controller('notes')
export class NotesController {
	constructor(private notesService: NotesService) {}

	@Post()
	createNote(@Body() newNote: CreateNoteDto): Promise<Note> {
		return this.notesService.createNote(newNote);
	}

	@Get()
	getNotes(): Promise<Note[]> {
		return this.notesService.getNotes();
	}

	@Get(':id')
	getNote(@Param('id', ParseIntPipe) id: number): Promise<Note> {
		return this.notesService.getNoteById(id);
	}

	@Delete(':id')
	deleteNote(@Param('id', ParseIntPipe) id: number) {
		this.notesService.deleteNote(id);
	}

	@Patch(':id')
	updateNote(
		@Param('id', ParseIntPipe) id: number,
		@Body() note: UpdateNoteDto,
	) {
		return this.notesService.updateNote(id, note);
	}

	@Patch(':id/archive')
	archiveNote(@Param('id') id: number, @Body() note: UpdateNoteDto) {
		return this.notesService.archiveNote(id, note);
	}
}
