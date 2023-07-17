export type Book = {
  id: string;
  name: string;
  author: string;
  description?: string;
  category: 'programming' | 'thriller' | 'fiction' | 'mystery';
};
