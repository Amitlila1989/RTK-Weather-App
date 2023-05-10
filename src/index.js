import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import App from './view/App.view'
import store from './state/configure.store';
import { GlobalStyles } from './styles/reset.css'
import { BrowserRouter as Router } from 'react-router-dom';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <Provider store={store}>
    <Router>
    <App />
    </Router>
    </Provider>
    <GlobalStyles />
  </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

