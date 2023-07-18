export type Book = {
  id: string;
  title: string;
  author: string;
  description?: string;
  category: 'programming' | 'thriller' | 'fiction' | 'mystery';
  createdBy: string;
};
