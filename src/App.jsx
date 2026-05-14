import ButtonLink from './components/ButtonLink.jsx';
import Footer from './components/Footer.jsx';
import { data } from './utils/data.js';


const App = () => {

  return (
    <>
      <div className='min-h-screen relative flex flex-col items-center justify-center overflow-hidden'>
        <div className="absolute top-[-20%] left-[-10%] w-75 h-100 sm:w-150 sm:h-150 bg-[#B591B2]/30 rounded-full blur-[100px] pointer-events-none"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-50 h-50 sm:w-125 sm:h-125 bg-[#B591B2]/30 rounded-full blur-[80px] pointer-events-none"></div>
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
