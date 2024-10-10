import Link from "next/link";

export default function Navbar() {
  return (
    <div className="border-b-slate-900 border-b-[1px] flex justify-between">
      <div className="flex items-center justify-center p-6 gap-12 font-semibold">
        <Link className="text-slate-50 text-2xl font-extrabold transition ease-in-out hover:text-slate-400" href={"/"}>
          Port<span className="text-orange-500">Code</span>
        </Link>
      </div>

      <div className="flex items-center justify-center p-6 gap-12 font-semibold">
        <Link className="transition ease-in-out hover:text-slate-400" href={"/"}>Início</Link>
        <Link className="transition ease-in-out hover:text-slate-400"  href={"/projetos"}>Projetos</Link>
        <Link
          className="border-[1px] border-orange-500 p-4 rounded-md transition ease-in-out hover:bg-orange-500"
          href={"/login"}
        >
          Login
        </Link>
      </div>
    </div>
  );
}
