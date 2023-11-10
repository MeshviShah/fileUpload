// Import bcrypt library
import * as bcrypt from 'bcrypt';

// Function to compare a password with a hash
export async function passwordBcrypt(password: string, hash: string): Promise<boolean | undefined> {
  try {
    // Compare the password with the hash asynchronously
    const value: boolean = await bcrypt.compare(password, hash);
    
    // Return the result of the comparison
    return value;
  } catch (error) {
    // Handle errors and return undefined
    return undefined;
  }
}
