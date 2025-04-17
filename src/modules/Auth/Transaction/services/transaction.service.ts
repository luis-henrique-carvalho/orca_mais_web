import { PaginatedResponse } from "@/types/api";
import {
  GetAllTransactionsParams,
  Transaction,
} from "../model/transaction.model";
import api from "@/lib/api";

export const transactionService = {
  getAll: async ({
    search = "",
    selectedCategory = "",
    page = 1,
  }: GetAllTransactionsParams): Promise<PaginatedResponse<Transaction>> => {
    const response = await api.get<PaginatedResponse<Transaction>>(
      "/api/v1/transactions",
      {
        params: {
          search,
          "q[category_id_eq]": selectedCategory,
          page,
        },
      }
    );

    return response.data;
  },
};
