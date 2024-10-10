import Navbar from '../components/Navbar'
import Features from '../components/Features'
import Footer from '../components/Footer'
import Link from 'next/link';

{/* Icones */}
import { FaArrowRight } from "react-icons/fa";


export default function Home() {
  return (
    <div className='h-screen'>
      <section></section>
      <Navbar />

      <div className='flex flex-col text-center items-center justify-center h-5/6 gap-6'>
        
        {/* News */}
        <Link href={'/projetos'} className='flex border-[1px] border-slate-600 p-2 rounded-full items-center gap-2'>
          <p className='bg-orange-500 p-3 rounded-full font-bold animate-pulse'>NOVO!</p>
          <p className='flex items-center justify-center gap-1 font-bold text-slate-600'>Temos novos projetos! <FaArrowRight className='text-xl mx-3' /></p>
        </Link>
        
        {/* Headline */}
        <div>
          <h1 className='text-5xl'>Projetos Fictícios</h1>
          <h1 className='text-5xl font-bold'>com desafios reais!</h1>
        </div>
        
        {/* Subtitle */}
        <div>
          <p className='text-slate-400 text-base'>As idéias de projetos para destravar<br></br> o seu portfólio de programador!</p>
        </div>
        
        {/* Call to Action */}
        <div className='flex gap-4'>
          <button className='border-[1px] border-orange-500 p-4 rounded-xl w-40 hover:border-orange-800 transition ease-in-out'>Fazer Login</button>
          <button className='bg-orange-500 p-4 rounded-xl w-40 hover:bg-orange-800 transition ease-in-out'>Criar conta</button>
        </div>
      </div>

      <Features />

      <Footer /> 

    </div>
  );
}
