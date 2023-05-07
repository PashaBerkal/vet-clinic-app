type TokenObject = {
    acces_token: string;
    refresh_token: string;
};

const storageUtil = {
  setTokens: (tokenObj: TokenObject): void => {
    localStorage.setItem('accessToken', tokenObj.acces_token);
    localStorage.setItem('refreshToken', tokenObj.refresh_token);
  },
  getAccessToken: (): string | null => localStorage.getItem('accessToken'),
  getRefreshToken: (): string | null => localStorage.getItem('refreshToken'),
  clearTokens: (): void => {
    localStorage.removeItem('accessToken');
    localStorage.removeItem('refreshToken');
  },
};

export default storageUtil;
