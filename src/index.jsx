import { StrictMode } from 'react';
import { render } from 'react-dom';
import { RecoilRoot } from 'recoil';
import { ToastContainer } from 'react-toastify';
import { App } from './Pages';
import reportWebVitals from './reportWebVitals';
import 'react-toastify/dist/ReactToastify.css';
import './index.css';


render(
  <StrictMode>
    <RecoilRoot>
        <ToastContainer
          position={'top-right'}
          autoClose={4000}
          hideProgressBar={true}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss={true}
          pauseOnHover={true}
          draggable={true}
          theme={'light'}
        />
        <App />
    </RecoilRoot>
  </StrictMode>,
  document.getElementById('root')
);

// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
