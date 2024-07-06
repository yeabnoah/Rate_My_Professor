import { string, z } from "zod";

export const validateProfessor = z.object({
  name: z.string().min(4),
  department: z.string().min(2),
  campus: z.string().min(2),
  details: z.string().min(10),
  uv: z.string(),
  reviews: z.array(
    z.object({
      review: z.string().min(10),
      rate: z.number().min(1).max(5),
    })
  ),
});

export default validateProfessor;
