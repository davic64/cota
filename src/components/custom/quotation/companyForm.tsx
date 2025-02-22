import { Input } from "@/components/ui/input";
import { Upload } from "lucide-react";

const CompanyForm = () => {
  return (
    <div className="grid grid-cols-2 gap-6">
      <div className="w-full h-full border-dashed border-2 hover:border-primary cursor-pointer transition-colors bg-slate-100 rounded-lg flex flex-col gap-2 items-center justify-center text-slate-400">
        <Upload className="w-8 h-8" />
        <p className="text-sm">
          Arrastra tu logo aquí o <br />
          <span className="text-primary">selecciona un archivo</span>
        </p>
      </div>
      <div className="space-y-2">
        <div>
          <p className="text-sm">Empresa</p>
          <Input placeholder="Nombre de la empresa" />
        </div>
        <div>
          <p className="text-sm">Correo electrónico</p>
          <Input placeholder="mail@mail.com" />
        </div>
        <div>
          <p className="text-sm">Teléfono</p>
          <Input placeholder="0123456789" />
        </div>
        <div>
          <p className="text-sm">RFC</p>
          <Input placeholder="ABCD1234561A2" />
        </div>
      </div>
    </div>
  );
};

export default CompanyForm;
