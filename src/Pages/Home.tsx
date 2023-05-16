import React, {useState} from 'react';
import { Button, message } from 'antd';
import { Input,Modal,Image } from 'antd';
import {EnvironmentOutlined} from '@ant-design/icons'
import { url } from 'inspector';

function Home(){
  const [modal1Open, setModal1Open] = useState(false);
  const [modal2Open, setModal2Open] = useState(false);
  return (
   <>
    <div className='shadow-xl' style={{width: "auto", height: "900px", backgroundColor: "white"}}>
    <img src='https://images.deliveryhero.io/image/foodpanda/hero-home-tr.jpg?width=1400&height=896' style={{width: "1400px",height: "896px", position: "absolute", right: "0px",top: "87px"}}/>
    <span className='font-light' style={{fontSize: "40px",position: "absolute",top:"390px",left: "450px",fontFamily:"sans-serif"}}>Yemek, market ve günlük tüm ihtiyaçların için</span>
    <span className='font-light' style={{fontSize: "40px",position: "absolute",top:"450px",left: "450px",fontFamily:"sans-serif"}}>adresini seç, çevrendeki seçenekleri gör!</span>

    <div  className='shadow-xl'style={{width: "1090px",height: "150px", backgroundColor: "white",position: "absolute",top: "540px",left: "450px"}}>
    <Input placeholder="Adresini Belirle veya Seç" prefix={<EnvironmentOutlined/>} style={{fontSize: "30px",width: "600px",height: "80px",position:"absolute",top: "40px",left:"10px"}}/>
    <button  onClick={() => setModal1Open(true)} className="bg-rose-600 hover:bg-rose-700 text-white font-bold py-2 px-4 rounded-xl shadow-2xl "style={{position: "absolute",right: "270px",top:"35px",width: "190px",height:"80px"}}>Restoran</button>
    <Modal
        style={{ top: 70 }}
        open={modal1Open}
        onOk={() => setModal1Open(false)}
        onCancel={() => setModal1Open(false)}
      >
        <span style={{fontSize:"30px"}}>Tam konumunuz nedir ?</span>
        <br/><br/>
        <Input placeholder="Adresini Belirle veya Seç" style={{fontSize: "20px"}}/>
        <br/><br/>
        <div style={{width:"auto",height:"300px",backgroundColor:"lightgray"}}>
        <button  className="bg-gray-500 hover:bg-rose-700 text-white font-bold py-2 px-4 rounded-xl "style={{position: "absolute",right: "120px",top:"380px",width: "290px",height:"60px"}}>Bu Adresi Kullan</button>

        </div>

      </Modal>
    <span className='shadow-2xl' style={{position: "absolute",right:"210px",top: "55px", fontSize:"25px"}}>veya</span>
    <button onClick={()=> setModal2Open(true)} className="bg-rose-600 hover:bg-rose-700 text-white font-bold py-2 px-4 rounded-xl shadow-2xl"style={{position: "absolute",right: "10px",top:"35px",width: "190px",height:"80px"}}>Gel Al</button>
    <Modal
        title="20px to Top"
        style={{ top: 70 }}
        open={modal2Open}
        onOk={() => setModal2Open(false)}
        onCancel={() => setModal2Open(false)}
      >
        <span style={{fontSize:"30px"}}>Tam konumunuz nedir ?</span>
        <br/><br/>
        <Input placeholder="Adresini Belirle veya Seç" style={{fontSize: "20px"}}/>
        <br/><br/>
        <div style={{width:"auto",height:"300px",backgroundColor:"lightgray"}}>
        <button  className="bg-gray-500 hover:bg-rose-700 text-white font-bold py-2 px-4 rounded-xl "style={{position: "absolute",right: "120px",top:"380px",width: "290px",height:"60px"}}>Bu Adresi Kullan</button>

        </div>
      </Modal>
    </div>
    <span style= {{fontSize: "240px",color: "#F5F5F5",position: "absolute",top: "740px",left: "520px"}}>Ortaklar</span>
    <span style={{fontSize: "50px",position: "absolute",top: "910px",left: "530px"}}>İş ortağımız olun</span>
    </div>
    <div>
    <img src='https://images.deliveryhero.io/image/foodpanda/home-vendor-tr.jpg?width=1400&height=896' style={{width: "2560px", height: "1100px", position: "absolute", left: "0px",top: "987px"}}/>
    </div>
    <div className='shadow-xl' style={{width: "800px", height: "750px",backgroundColor:"white",position: "absolute",top: "1050px",left:"450px"}}>
    <span style={{fontSize:"30px",position: "absolute",left:"50px",top:"40px",color:"black"}}>Hemen katılın, Yemeksepeti ile satışlarınızı</span><br/>
    <span style={{fontSize:"30px",position: "absolute",left:"50px",top:"80px",color:"black"}}>katlamaya başlayın</span><br/>

    <span style={{fontSize:"21px",position: "absolute",left:"50px",top:"150px",color:"gray"}}>Binlerce yeni kullanıcıya ulaşabilmek ister misiniz? Sadece kendi</span>
    <span style={{fontSize:"21px",position: "absolute",left:"50px",top:"180px",color:"gray"}}>semtinizdekiler değil, artık çevre semtlerdeki binlerce kullanıcı da</span>
    <span style={{fontSize:"21px",position: "absolute",left:"50px",top:"210px",color:"gray"}}>işletmenizden sipariş verebilecek. Bir ev, bir plaza, bir işyeri ya da</span>
    <span style={{fontSize:"21px",position: "absolute",left:"50px",top:"240px",color:"gray"}}>üniversite kampüsü, hizmet vermek istediğiniz kim varsa artık müşteriniz.</span>

    <span style={{fontSize:"21px",position: "absolute",left:"50px",top:"300px",color:"gray"}}>Gayet basit! Menünüzü listeliyoruz ve sipariş bilgilerini size ulaştırıyoruz.</span>
    <span style={{fontSize:"21px",position: "absolute",left:"50px",top:"330px",color:"gray"}}>Sipariş teslimatını dilerseniz kendiniz yapabiliyorsunuz, dilerseniz</span>
    <span style={{fontSize:"21px",position: "absolute",left:"50px",top:"360px",color:"gray"}}>Yemeksepeti sizin adına kullanıcıya ulaştırıyor.</span>

    <span style={{fontSize:"21px",position: "absolute",left:"50px",top:"410px",color:"gray"}}>Hemen ailemize katılabilir ve muhteşem avantajlara sahip iş</span>
    <span style={{fontSize:"21px",position: "absolute",left:"50px",top:"440px",color:"gray"}}>ortaklarımızdan biri olabilirsiniz.</span>

    <button className="bg-rose-600 hover:bg-rose-700 text-white font-bold py-2 px-4 rounded-xl shadow-2xl"style={{position: "absolute",left: "50px",top:"530px",width: "650px",height:"80px"}}>Başlayalım</button>
    </div>
    <div style={{width:"2560px",height:"800px",backgroundColor:"white",position:"absolute",top:"1700px"}}>
    <span style= {{fontSize: "240px",color: "#F5F5F5",position: "absolute",top: "80px",left: "430px"}}>Şehirler</span>
    <span style={{fontSize: "50px",position: "absolute",top: "240px",left: "450px"}}>İş ortağımız olun</span>
    <figure  style={{position:"absolute",top:"310px",left:"450px"}}>
    <img className='max-w-xs transition duration-300 ease-in-out hover:scale-110' style={{width:"340px",height:"350px"}} src="https://images.deliveryhero.io/image/fd-tr/city-tile-tr/city-tile-ankara.jpg?width=720" alt="image description"/>
  <figcaption className="absolute px-4 text-2xl text-white bottom-6 font-extrabold">
      <p>Ankara</p>
  </figcaption>
</figure>
<figure  style={{position:"absolute",top:"310px",left:"820px"}}>
    <img className='max-w-xs transition duration-300 ease-in-out hover:scale-110' style={{width:"340px",height:"350px"}} src="https://images.deliveryhero.io/image/fd-tr/city-tile-tr/city-tile-antalya.jpg?width=720" alt="image description"/>
  <figcaption className="absolute px-4 text-2xl text-white bottom-6 font-extrabold">
      <p>Antalya</p>
  </figcaption>
</figure>
<figure  style={{position:"absolute",top:"310px",left:"1180px"}}>
    <img className='max-w-xs transition duration-300 ease-in-out hover:scale-110' style={{width:"340px",height:"350px"}} src="https://images.deliveryhero.io/image/fd-tr/city-tile-tr/city-tile-bursa.jpg?width=720" alt="image description"/>
  <figcaption className="absolute px-4 text-2xl text-white bottom-6 font-extrabold">
      <p>Bursa</p>
  </figcaption>
</figure>
<figure  style={{position:"absolute",top:"310px",left:"1540px"}}>
    <img className='max-w-xs transition duration-300 ease-in-out hover:scale-110' style={{width:"340px",height:"350px"}} src="https://images.deliveryhero.io/image/fd-tr/city-tile-tr/city-tile-istanbul.jpg?width=720" alt="image description"/>
  <figcaption className="absolute px-4 text-2xl text-white bottom-6 font-extrabold">
      <p>İstanbul</p>
  </figcaption>
</figure>
<figure  style={{position:"absolute",top:"310px",left:"1900px"}}>
    <img className='max-w-xs transition duration-300 ease-in-out hover:scale-110' style={{width:"340px",height:"350px"}} src="https://images.deliveryhero.io/image/fd-tr/city-tile-tr/city-tile-izmir.jpg?width=720" alt="image description"/>
  <figcaption className="absolute px-4 text-2xl text-white bottom-6 font-extrabold">
      <p>İzmir</p>
  </figcaption>
</figure>
<span style= {{fontSize: "240px",color: "#F5F5F5",position: "absolute",top: "800px",left: "430px"}}>Uygulama</span>
    <span style={{fontSize: "50px",position: "absolute",top: "1000px",left: "430px"}}>Mobil uygulamamızı indirin</span>
    </div>
    <div className='bg-rose-600 bg-opacity-100' style={{width:"2560px",height:"500px",position:"absolute",top:"2760px"}}>
    <span style={{fontSize:"30px",position: "absolute",left:"430px",top:"100px",color:"white"}}>Yemek ve market ihtiyaçlarının tamamı için hemen</span><br/>
    <span style={{fontSize:"30px",position: "absolute",left:"430px",top:"140px",color:"white"}}>İndir!</span><br/>

    <span style={{fontSize:"30px",position: "absolute",left:"430px",top:"210px",color:"white"}}>Yemek, hızlı market ya da çevredeki esnaflardan tüm ihtiyaçların dakikalar içinde</span><br/>
    <span style={{fontSize:"30px",position: "absolute",left:"430px",top:"250px",color:"white"}}>kapında. Yemeksepeti’ni indir, sepetini oluşturup siparişini ver, online ya da kapıda</span><br/>
    <span style={{fontSize:"30px",position: "absolute",left:"430px",top:"290px",color:"white"}}>dilediğin gibi öde.</span><br/>

    <img src='https://images.deliveryhero.io/image/foodpanda/home-yemeksepeti-apps.png?width=1400&height=1113' style={{width: "1200px", height: "1003px", position: "absolute", left: "1340px",bottom: "-150px"}}/>
    </div>

   </>
  );
}
export default Home;