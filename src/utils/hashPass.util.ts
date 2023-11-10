// Import bcrypt library
import * as bcrypt from 'bcrypt';

// Define salt rounds as a number
const saltRounds: number = 10;

// Password hashing function
export async function passwordHash(password: string): Promise<string | undefined> {
  try {
    // Generate salt asynchronously
    const salt: string = await bcrypt.genSalt(saltRounds);

    // Hash password with the generated salt
    const hash: string = await bcrypt.hash(password, salt);

    return hash;
  } catch (error) {
    // Handle errors and return undefined
    return undefined;
  }
}