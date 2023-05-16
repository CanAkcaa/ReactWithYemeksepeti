import {Routes,Route} from 'react-router-dom'
import Home from './Home'
import Login from './Login';
import Signpage from './Signpage'

function Content(){
    return(
<div>
        <Routes>
            <Route path='/' element={<Home/>}></Route>
            <Route path='/login' element={<Login/>}></Route>
            <Route path='/signpage' element={<Signpage/>}></Route>
        </Routes>
    </div>
    )
}
export default Content;