export interface Category {
  id: string;
  name: string;
  created_at: string;
  updated_at: string;
}

export interface CategoryPaginated {
  content: Category[];
  total_pages: number;
  current_page: number;
  total_items: number;
  offset: number;
  limit: number;
  prev_page: number | null;
  next_page: number | null;
  has_next: boolean;
  has_prev: boolean;
}
