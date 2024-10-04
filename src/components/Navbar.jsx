import Link from "next/link";

export default function Navbar() {
  return (
    <div className="border-b-slate-900 border-b-[1px] flex justify-between">
      <div className="flex items-center justify-center p-6 gap-12 font-semibold">
        <Link className="text-slate-50 text-2xl" href={"/"}>
          Portcode
        </Link>
      </div>

      <div className="flex items-center justify-center p-6 gap-12 font-semibold">
        <Link href={"/"}>Início</Link>
        <Link
          className="border-[1px] border-orange-500 p-4 rounded-md transition ease-in-out hover:bg-orange-500"
          href={"/projetos"}
        >
          Projetos
        </Link>
      </div>
    </div>
  );
}
