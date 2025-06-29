export interface table1_Data {
    id: number; // Primary key
    bank_id: number; // Foreign key referencing the bank
    line_no: number; // Line number in the report
    category: string; // Description of the category
    cheque: number | null; // Amount in cheques, nullable
    savings: number | null; // Amount in savings, nullable
    up_to_1_day: number | null; // Amount for up to 1 day, nullable
    more_than_1_day: number | null; // Amount for more than 1 day, nullable
    more_than_1_month: number | null; // Amount for more than 1 month, nullable
    more_than_6_months: number | null; // Amount for more than 6 months, nullable
    total: number | null; // Total amount, nullable
    ncds_pns: number | null; // NCDs/PNs amount, nullable
  }