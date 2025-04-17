// src/store/transactionStore.ts
import { create } from "zustand";

type TransactionState = {
  search: string;
  setSearch: (value: string) => void;
  selectedCategory: string;
  setSelectedCategory: (value: string) => void;
  page: number;
  setPage: (value: number) => void;
  resetFilters: () => void; // Para resetar os filtros
};

export const useTransactionStore = create<TransactionState>((set) => ({
  // Estado inicial
  search: "",
  selectedCategory: "",
  page: 1,

  // Atualiza o estado de busca
  setSearch: (value) => set({ search: value }),

  // Atualiza a categoria selecionada
  setSelectedCategory: (value) => set({ selectedCategory: value }),

  // Atualiza a página
  setPage: (value) => set({ page: value }),

  // Reseta os filtros para os valores iniciais
  resetFilters: () =>
    set({
      search: "",
      selectedCategory: "",
      page: 1,
    }),
}));
