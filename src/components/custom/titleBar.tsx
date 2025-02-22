import { Cog } from "lucide-react";
import ModalCompany from "./ModalCompany";

const TitleBar = () => {
  return (
    <div className="drag h-10 w-full bg-white fixed top-0 left-0 z-20 flex items-center justify-end px-4">
      <ModalCompany
        trigger={
          <div className="flex items-center gap-2 text-slate-500 cursor-pointer z-30 no-drag select-none">
            <p className="text-xs">Configuración</p>
            <Cog />
          </div>
        }
      />
    </div>
  );
};

export default TitleBar;
