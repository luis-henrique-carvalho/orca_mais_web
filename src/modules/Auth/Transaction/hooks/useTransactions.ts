import { useQuery } from "@tanstack/react-query";
import { transactionService } from "../services/transaction.service";

type UseTransactionsParams = {
  search?: string;
  selectedCategory?: string;
  page?: number;
};

export function useTransactions({
  search = "",
  selectedCategory = "",
  page = 1,
}: UseTransactionsParams) {
  const query = useQuery({
    queryKey: ["transactions", { search, selectedCategory, page }],
    queryFn: () =>
      transactionService.getAll({ search, selectedCategory, page }),
    staleTime: 1000 * 60 * 5,
  });

  // Retorna os dados e os metadados da API
  return {
    ...query,
    data: query.data?.data || [], // Dados da página atual
    meta: query.data?.meta || {}, // Metadados de paginação
  };
}
