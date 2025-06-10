const storeInSessionStorage = ({ userData }) => {
  window.sessionStorage.setItem('userData', JSON.stringify(userData));
};
export default storeInSessionStorage;