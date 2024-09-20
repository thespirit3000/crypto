const ts = window.Telegram.WebApp;

export const getUserInfo = () => {
  return ts.initDataUnsafe.user;
};
