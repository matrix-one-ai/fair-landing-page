import { customAlphabet } from "nanoid";

// Define a slug-like character set (lowercase letters and numbers, with dashes allowed)
const generateSlug = customAlphabet("abcdefghijklmnopqrstuvwxyz0123456789", 8);

export function generateInvitationCodes(count: number = 5): string[] {
  return Array.from({ length: count }, () => generateSlug());
}
