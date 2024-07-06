import { z } from "zod";

const universityValidator = z.object({
  name: z.string().min(4),
  description: z.string().min(10),
  city: z.string().min(2),
});

export default universityValidator;
