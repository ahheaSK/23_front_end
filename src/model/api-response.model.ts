export interface ApiResponse<T> {
  status: number;
  title: string;
  timestamp: number;
  data: T;
}