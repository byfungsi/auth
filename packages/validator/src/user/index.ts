import { z } from "zod";
import { zDateType } from "../utils/zDateTypes";

/**
 * model User {
  id            String        @id @default(uuid())
  email         String        @unique
  emailVerified Boolean       @default(false)
  phoneNumber   String?       @unique
  password      String
  AccessToken   AccessToken[]
  deletedAt     DateTime?
  createdAt     DateTime      @default(now())
  updatedAt     DateTime      @updatedAt
}

 */

export const ZUser = z.object({
  id: z.string(),
  email: z.string().transform((e) => e.toLowerCase()),
  name: z.string(),
  emailVerified: z.boolean(),
  phoneNumber: z.string().optional().nullable(),
  deletedAt: zDateType.optional().nullable(),
  createdAt: zDateType,
  updatedAt: zDateType,
});

export const ZUserSensitive = ZUser.extend({
  clientId: z.string(),
  password: z.string(),
});

export const ZUserCreate = ZUserSensitive.pick({
  email: true,
  password: true,
  name: true,
  clientId: true,
});

export type TUser = z.infer<typeof ZUser>;
export type TUserSensitve = z.infer<typeof ZUserSensitive>;

export type TUserCreate = z.infer<typeof ZUserCreate>;
