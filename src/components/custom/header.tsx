import { CirclePlus, Eye, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useMatches, Link, useLocation } from "react-router";

const Header = () => {
  const matches = useMatches();
  const location = useLocation();

  const currentRoute = matches[matches.length - 1] as {
    handle?: { search?: boolean; title?: string };
  };
  const shouldShowSearch = currentRoute?.handle?.search;
  const title = currentRoute?.handle?.title;

  return (
    <div className="grid grid-cols-3 pt-12 pb-6 px-6 items-center bg-white fixed w-full leading-0 z-10">
      <div className="justify-self-start">
        <p className="font-extrabold text-3xl">{"[[cota"}</p>
      </div>

      {shouldShowSearch ? (
        <div className="relative justify-self-center w-full max-w-xs">
          <Search className="text-slate-400 w-4 absolute top-1/2 -translate-y-1/2 left-2" />
          <Input placeholder="Buscar cotización" className="pl-8 w-full" />
        </div>
      ) : (
        <h1 className="font-bold justify-self-center text-center text-2xl">
          {title}
        </h1>
      )}

      <div className="justify-self-end flex items-center gap-2">
        {location.pathname === "/" ? (
          <Link to="/new">
            <Button className="flex items-center gap-2">
              <CirclePlus /> Crear Cotización
            </Button>
          </Link>
        ) : (
          <Link to="/">
            <Button className="flex items-center gap-2">
              <Eye /> Ver Cotizaciones
            </Button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Header;
