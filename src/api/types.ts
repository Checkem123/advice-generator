import { z } from "zod";
// import axios from "axios";
// const url = "https://api.adviceslip.com/advice";

export const adviceSchema = z.object({
    slip: z.object({
        id: z.number().nonnegative(),
        advice: z.string(),
    }),
});

export type Advice = z.infer<typeof adviceSchema>;

// export const fetchAdvices = async (): Promise<Advice> => {
//     const response = await axios.get<{ slip: Advice }>(url);
//     const result = adviceSchema.safeParse(response.data.slip);
//     if (!result.success) {
//         throw new Error("Parsing failed");
//     }
//     return result.data;
// };
