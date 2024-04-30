
import ReactDOM from 'react-dom/client';
import Header from './Layout/Header';
import MainBody from './MainBody';
import Footer from './Layout/Footer';
const root = ReactDOM.createRoot(document.getElementById('root'));  

root.render(
<div className='container'>
    <Header/>
    <MainBody/>            
    <Footer/>
  </div>
);

