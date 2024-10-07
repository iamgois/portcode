import Image from "next/image";
import Developer from "../public/developer.jpg"

/* Icons */
import { RiPlantFill } from "react-icons/ri";
import { IoPeopleSharp } from "react-icons/io5";
import { FaProjectDiagram } from "react-icons/fa";

export default function Features() {
  return (
    <div className="w-full flex items-center justify-center font-sans">
      <div className="max-w-7xl border-[1px] border-slate-800 grid grid-cols-2 gap-6 justify-center items-center px-24 py-16 rounded-lg">
        
        <div className="w-full h-full">
          <Image className="object-cover w-full h-full rounded-xl" src={Developer} />
        </div>

        <div className="grid grid-cols-1 gap-4">
          <p className="bg-slate-800 max-w-fit px-6 py-2 rounded-md text-xs font-bold text-zinc-400">
            Em desenvolvimento
          </p>

          <p className="text-xl font-bold text-slate-200">
            PortCode <span className="text-orange-500">Projects</span>
          </p>

          <div>
            <h1 className="text-4xl font-bold">Use os nossos projetos</h1>
            <h1 className="text-4xl font-bold text-orange-500">no seu portfólio</h1>
          </div>

          <p className="text-zinc-300">O "Portcode" é um projeto inovador criado para ajudar programadores a aprimorarem suas habilidades de desenvolvimento ao trabalhar com cenários fictícios.</p>

          <p className="flex items-center gap-2">
            <RiPlantFill className="bg-orange-500 w-8 h-8 p-2 rounded-md" />
            Aprimore o seu portfólio
          </p>
          <p className="flex items-center gap-2">
            <IoPeopleSharp className="bg-orange-500 w-8 h-8 p-2 rounded-md" />
            Ajude a comunidade
          </p>
          <p className="flex items-center gap-2">
            <FaProjectDiagram className="bg-orange-500 w-8 h-8 p-2 rounded-md" />
            Compartilhe o seu projeto
          </p>
        </div>
      </div>
    </div>
  );
}
