// app/signup/page.js (ou pages/signup.js)
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function Signup() {
  return (
    <div>
      <Navbar />

      <div className="h-auto">
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-white border-[1px] border-slate-800 rounded-3xl shadow-lg p-8 max-w-md w-full">
            <h1 className="text-3xl font-bold mb-4">Criar Conta</h1>
            <p className="text-gray-400 mb-8">Preencha as informações abaixo para criar uma nova conta</p>
            <form>
              <div className="mb-4">
                <label htmlFor="name" className="block text-sm font-medium">Nome Completo</label>
                <input
                  type="text"
                  id="name"
                  className="mt-1 w-full px-3 py-2 border rounded-md text-black"
                  placeholder="Seu nome"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-sm font-medium">Email</label>
                <input
                  type="email"
                  id="email"
                  className="mt-1 w-full px-3 py-2 border rounded-md text-black"
                  placeholder="Seu email"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="password" className="block text-sm font-medium">Senha</label>
                <input
                  type="password"
                  id="password"
                  className="mt-1 w-full px-3 py-2 border rounded-md text-black"
                  placeholder="**********"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="confirmPassword" className="block text-sm font-medium">Confirme sua Senha</label>
                <input
                  type="password"
                  id="confirmPassword"
                  className="mt-1 w-full px-3 py-2 border rounded-md text-black"
                  placeholder="**********"
                  required
                />
              </div>
              <button className="w-full bg-gradient-to-r from-orange-500 to-orange-600 text-white py-2 rounded-md font-bold hover:opacity-90">
                Criar Conta
              </button>
            </form>
            <div className="text-center mt-6">
              <p className="text-gray-400">
                Já tem uma conta?{" "}
                <a href="/login" className="text-orange-500 hover:underline">
                  Entrar
                </a>
              </p>
            </div>
            <div className="flex justify-center mt-8 text-sm text-gray-400">
              <a href="#" className="hover:underline">Termos & Condições</a>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}