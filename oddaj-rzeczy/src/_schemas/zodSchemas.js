import { z } from "zod";

export const loginSchema = z
  .object({
    email: z
      .string()
      .email({
        message: "Zły adres email. Upewnij się, że wpisałeś go poprawnie",
      })
      .min(1),
    password: z.string().min(6, {
      message: "Złe hasło. Upewnij się, że wpisujesz je poprawnie.",
    }),
  })
  .required();

  
export const registerSchema = z
  .object({
    email: z
      .string()
      .email({
        message: "Zły adres email. Upewnij się, że wpisałeś go poprawnie",
      })
      .min(1),
    password: z.string().min(6, {
      message: "Hasło musi mieć minimum 6 znaków",
    }),
    password2: z.string().min(6, {
      message: "Hasło musi mieć minimum 6 znaków",
    }),
  })
  .required()
  .refine((data) => data.password === data.password2, {
    message: "Hasła muszą być takie same",
    path: ["password2"],
  });
