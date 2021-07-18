import ReactDOM from 'react-dom';

function PortalNavi({ children }) {
  const globalPortal = document.getElementById('navi-portal');
  return ReactDOM.createPortal(children, globalPortal);
}

export default PortalNavi;
