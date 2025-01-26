export interface Thread {
  id: number;
  title: string;
  description: string;
  category: string; 
  userId?: number; 
  comments: string[]; 
}
