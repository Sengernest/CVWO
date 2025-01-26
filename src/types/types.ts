export interface Thread {
  id: number;
  title: string;
  description: string;
  category: string; // Make category optional
  userId?: number; // Make userId optional
  comments: string[]; 
}
