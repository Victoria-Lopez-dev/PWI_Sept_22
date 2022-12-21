import{BrowserRouter,Routes,Route} from 'react-router-dom';
import Home from '../components/Home/Home';
import Characters from '../components/Characters/Characters';
import Contact from '../components/Contact/Contact';

export default function Router(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/characters' element={<Characters/>}/>
                <Route path='/contact' element={<Contact/>}/>
            </Routes>
        </BrowserRouter>
    )
}