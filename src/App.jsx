import ButtonLink from './components/ButtonLink.jsx';
import Footer from './components/Footer.jsx';
import { data } from './utils/data.js';


const App = () => {

  return (
    <>
      <div className="fixed inset-0 z-20 pointer-events-none overflow-hidden">
        <img 
          src={data.hero}
          alt="shadow-decor"
          className="absolute top-0 right-0 h-full sm:h-auto object-cover opacity-[0.1] mix-blend-multiply animate-[breathe_8s_ease-in-out_infinite]"
        />

        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]"></div>
      </div>
      <div className='min-h-screen relative flex flex-col items-center justify-center overflow-hidden z-30'>
        <div class="absolute top-[-10%] left-[-10%] w-100 h-100 bg-[#B591B2]/15 rounded-full blur-[60px] pointer-events-none"></div>
        <div class="absolute bottom-[10%] right-[-5%] w-75 h-75 bg-[#B591B2]/10 rounded-full blur-[60px] pointer-events-none"></div>
        <div className="flex-1 w-full flex items-center justify-center">
          <div className='w-full flex flex-col items-center justify-center px-8 gap-4'>
            <img 
              src={data.logo} 
              alt="lahoa-logo"
              className='w-48 sm:w-64 object-cover'  
            />

            <div className='w-full mt-3 flex flex-col items-center justify-center gap-4 max-w-96'>
              {data.socials.map((social) => (
                <ButtonLink 
                  key={social.id} 
                  data={social}
                />
              ))}
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </>
  )
}

export default App
