import { Cog } from "lucide-react";

const TitleBar = () => {
  return (
    <div className="drag h-10 w-full bg-white fixed top-0 left-0 z-20 flex items-center justify-end px-4 gap-2 text-slate-500">
      <p>Configuración</p>
      <Cog />
    </div>
  );
};

export default TitleBar;
