export type AuthRequestParams = {
  email: string;
  password: string;
};

export type AuthResponseParams = {
  access_token: string;
  refresh_token: string;
};

export type RefreshRequestParams = {
  refresh_token: string | null;
}

export type RefreshResponseParams = Omit<AuthResponseParams, 'refresh_token'>
