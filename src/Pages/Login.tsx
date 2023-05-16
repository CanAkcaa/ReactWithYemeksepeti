import { Button, message } from 'antd';
import { Input } from 'antd';
import {Card,Space} from 'antd'
import {FacebookOutlined,GoogleOutlined} from '@ant-design/icons'
import {Link, useNavigate} from 'react-router-dom'

function Login() {

  return (
  <> 
  <div className='shadow-2xl border-solid border-2 border-dark-600 rounded-xl' style={{width:"500px", height:"552px",backgroundColor:"white",textAlign:"justify",position: "relative",margin: "auto",top:"300px"}}>
  <span className='font-bold' style={{fontSize: "32px",position: "absolute",top:"30px",left: "40px",fontFamily:"sans-serif"}}>Hoş geldiniz!</span>
  <span className='font-light' style={{fontSize: "18px",position: "absolute",top:"90px",left: "40px",fontFamily:"sans-serif"}}>Devam etmek için kayıt ol ya da giriş yap</span>
  <Button icon={<FacebookOutlined style={{position:"absolute",left:"60px",top:"18px"}}/>} className="bg-blue-600 hover:bg-blue-700 rounded-xl text-white font-bold py-2 px-4 shadow-2xl"style={{position: "absolute",right: "50px",top:"155px",width: "400px",height:"50px"}}>Facebook ile Devam Et</Button>
  <Button icon={<GoogleOutlined style={{position:"absolute",left:"60px",top:"16px"}}/>} className="bg-white-600 hover:bg-white-700 rounded-xl text-dark font-bold py-2 px-4 shadow-2xl border-4 border-slate-200"style={{position: "absolute",right: "50px",top:"235px",width: "400px",height:"50px"}}>Google ile Devam Et</Button>
  <span style={{position: "absolute",top:"300px",left:"210px",fontSize:"22px",fontFamily:"sans-serif",color:"gray"}}>ya da</span>
  <button className="bg-rose-600 hover:bg-rose-700 text-white font-bold py-2 px-4 rounded-xl shadow-2xl"style={{position: "absolute",right: "50px",top:"355px",width: "400px",height:"60px"}}>Giriş Yap</button>
  <Link to='/Signpage'><button className="bg-white-600 hover:bg-white-700 text-rose-600 font-bold py-2 px-4 rounded-xl shadow-2xl border-2 border-rose-600"style={{position: "absolute",right: "50px",top:"455px",width: "400px",height:"60px"}}>Kayıt Ol</button></Link>


  </div>
</>
)
}
export default Login;