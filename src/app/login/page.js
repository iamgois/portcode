import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

// app/login/page.js
export default function Login() {
    return (
        <div>
            <Navbar />

            <div className="h-auto">
                <div className="min-h-screen flex items-center justify-center">
                    <div className="text-white border-[1px] border-slate-800 rounded-3xl shadow-lg p-8 max-w-md w-full">
                        <h1 className="text-3xl font-bold mb-4">Login</h1>
                        <p className="text-gray-400 mb-8">Seja bem vindo(a) novamente!</p>
                        <form>
                            <div className="mb-4">
                                <label htmlFor="username" className="block text-sm font-medium">Username</label>
                                <input
                                    type="text"
                                    id="username"
                                    className="mt-1 w-full px-3 py-2 border rounded-md text-black"
                                    placeholder="Username"
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
                            <div className="flex items-center justify-between mb-4">
                                <label className="inline-flex items-center">
                                    <input type="checkbox" className="form-checkbox" />
                                    <span className="ml-2 text-sm">Lembrar de mim</span>
                                </label>
                                <a href="#" className="text-sm text-orange-500 hover:underline">Esqueceu a senha?</a>
                            </div>
                            <button className="w-full bg-gradient-to-r from-orange-500 to-orange-600 text-white py-2 rounded-md font-bold hover:opacity-90">
                                Entrar
                            </button>
                        </form>
                        <div className="flex items-center my-4">
                            <hr className="flex-grow border-t border-gray-600" />
                            <span className="mx-2 text-gray-400">Ou</span>
                            <hr className="flex-grow border-t border-gray-600" />
                        </div>
                        <div className="text-center mt-6">
                            <p className="text-gray-400">
                                Não tem uma conta?{" "}
                                <a href="/registro" className="text-orange-500 hover:underline">
                                    Criar agora
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