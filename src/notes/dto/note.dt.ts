export class CreateNoteDto {
	title: string;
	content: string;
	tags?: string[];
}

export class UpdateNoteDto {
	title?: string;
	content?: string;
	status?: boolean;
	tags?: string[];
}
