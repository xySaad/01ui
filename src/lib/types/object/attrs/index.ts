import z from 'zod';
import { ProjectAttrsSchema } from './project';
import { ExerciseAttrsSchema } from './exercise';

export const ObjectAttrsSchema = z.discriminatedUnion('type', [
	z.object({ type: z.literal('project'), attrs: ProjectAttrsSchema }),
	z.object({ type: z.literal('raid'), attrs: ProjectAttrsSchema }),
	z.object({ type: z.literal('exercise'), attrs: ExerciseAttrsSchema })
]);

export type ObjectAttrs = z.infer<typeof ObjectAttrsSchema>;

export const ObjectAttrsType = ObjectAttrsSchema.options.map((opt) => opt.shape.type.value);
