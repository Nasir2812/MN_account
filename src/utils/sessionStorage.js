const storeInSessionStorage = ({ userData }) => {
  window.sessionStorage.setItem('userData', JSON.stringify(userData));
};
const storeLocalStorage = ({token}) => {
  localStorage.setItem('token',token)
}
export  {storeInSessionStorage,storeLocalStorage};