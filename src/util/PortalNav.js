import ReactDOM from 'react-dom';

function PortalNav({ children }) {
  const globalPortal = document.getElementById('nav-portal');
  return ReactDOM.createPortal(children, globalPortal);
}

export default PortalNav;
