import { CirclePlus, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useMatches } from "react-router";

const Header = () => {
  const matches = useMatches();
  const currentRoute = matches[matches.length - 1] as {
    handle?: { search?: boolean };
  };
  const shouldShowSearch = currentRoute?.handle?.search ?? true;

  return (
    <div
      className={`grid ${
        shouldShowSearch ? "grid-cols-3" : "grid-cols-2"
      } p-6 items-center`}
    >
      <div className="justify-self-start">
        <p className="font-extrabold text-3xl">{"[[cota"}</p>
      </div>

      {shouldShowSearch && (
        <div className="relative justify-self-center w-full max-w-xs">
          <Search className="text-slate-400 w-4 absolute top-1/2 -translate-y-1/2 left-2" />
          <Input placeholder="Buscar cotización" className="pl-8 w-full" />
        </div>
      )}

      <div className="justify-self-end">
        <Button className="flex items-center gap-2">
          <CirclePlus /> Crear Cotización
        </Button>
      </div>
    </div>
  );
};

export default Header;
