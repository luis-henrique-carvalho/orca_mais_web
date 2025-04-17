// types/api.ts (ou algo global se tiver)
export interface PaginatedResponse<T> {
  data: T[];
  meta: {
    total: number;
    per_page: number;
    current_page: number;
    total_pages: number;
  };
}
