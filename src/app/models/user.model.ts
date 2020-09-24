export interface CurrentUser {
  jwt: string;
  user: User;
}

export interface User {
  id: number;
  username: string;
  email: string;
  provider: string;
  confirmed: boolean;
  blocked: boolean;
  role: Role;
  created_at: Date;
  updated_at: Date;
  fullname: string;
  schoolname: string;
  taluk: string;
  district: string;
  state: string;
  phone: string;
}

export interface Role {
  id: number;
  name: string;
  description: string;
  type: string;
}
