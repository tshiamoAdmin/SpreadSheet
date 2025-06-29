export interface Bank {
    bank_id: number; // Unique identifier for the bank
    bank_name: string; // Full name of the bank
    short_name: string; // Abbreviated name of the bank
    registration_number: string; // Registration number of the bank
    country: string; // Country where the bank is located
    created_at: string; // ISO timestamp when the bank was created
    updated_at: string; // ISO timestamp when the bank was last updated
  }