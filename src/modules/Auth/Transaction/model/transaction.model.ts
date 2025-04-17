export interface Transaction {
  id: string;
  amount: string;
  category?: Category;
  created_at: string;
  category_id: string;
  description: string;
  name: string;
  transaction_type: "income" | "expense";
}

export interface Category {
  id: string;
  name: string;
}

export interface CreateTransactionDTO {
  amount: number;
  date: string;
  description: string;
  category: string;
  type: "income" | "expense";
  userId: string;
}

export interface GetAllTransactionsParams {
  search?: string;
  selectedCategory?: string;
  page?: number;
}
