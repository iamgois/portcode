import Link from "next/link"

export default function Footer() {
    return (
        <div className="border-t-[1px] border-slate-800 h-24 mt-12">

            <div className="flex gap-12 items-center justify-center py-12">
                
                <div className="flex flex-col gap-8 max-w-96">
                    <h1 className="text-3xl font-black">Port<span className="text-orange-500">Code</span></h1>
                    <p>As ideias de projetos que você precisa para o seu portfólio de programador.</p>
                    <p>email: <Link className="transition ease-in-out hover:text-slate-400" href={"mailto:thiagogoisjunior@gmail.com"}>thiagogoisjunior@gmail.com</Link></p>
                </div>

                <div className="flex flex-col gap-2 max-w-96">
                    <p className="text-slate-600">Comece agora</p>
                    <Link className="transition ease-in-out hover:text-slate-400" href={'/registrar'}>Criar minha conta</Link>
                    <Link className="transition ease-in-out hover:text-slate-400" href={'/login'}>Entrar agora</Link>
                </div>

                <div className="flex flex-col gap-2 max-w-96">
                    <p className="text-slate-600">Atalhos</p>
                    <Link className="transition ease-in-out hover:text-slate-400" href={'/'}>Pagina inicial</Link>
                    <Link className="transition ease-in-out hover:text-slate-400" href={'/faq'}>FAQ</Link>
                </div>

                <div className="flex flex-col gap-2 max-w-96">
                <p className="text-slate-600">Ajuda</p>
                    <Link className="transition ease-in-out hover:text-slate-400" href={'/politica-de-privacidade'}>Política de Privacidade</Link>
                    <Link className="transition ease-in-out hover:text-slate-400" href={'/ajuda'}>Central de ajuda</Link>
                </div>
            </div>

            <div>
                <div></div>
            </div>
        </div>
    )
}