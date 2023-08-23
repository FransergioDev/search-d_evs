export interface GitRepository {
  id: number,
  node_id: String;
  name: String;
  full_name: String;
  private: boolean;
  git_url?: String;
  html_url: String;
  description: String;
  fork?: Boolean;
  url?: String;
  created_at: string;
  updated_at: string;
  stargazers_count: number;
}
