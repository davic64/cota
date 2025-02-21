import { useState, useEffect } from "react";
import { QuoteData } from "@/types/quotation.types";
import { getTotal } from "@/lib/getTotal";
import { Ellipsis, Eye, File, Pencil, Trash2 } from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { format } from "date-fns";
import { es } from "date-fns/locale";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

export const Home = () => {
  const [quotes, setQuotes] = useState<QuoteData[]>([]);

  const handleGetQuotes = async () => {
    const allQuotes = await window.electronAPI.readData("get-quotes");
    setQuotes(allQuotes);
  };

  const handleRemoveQuote = async (id: string) => {
    await window.electronAPI.removeData("remove-quote", id);
    const allQuotes = quotes.filter((item) => item.no !== id);
    setQuotes(allQuotes);
  };

  useEffect(() => {
    handleGetQuotes();
  }, []);

  return (
    <>
      <div className="space-y-4">
        {quotes.length > 0 ? (
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-44"># Cotización</TableHead>
                <TableHead>Cliente</TableHead>
                <TableHead>Empresa</TableHead>
                <TableHead>Fecha de emisión</TableHead>
                <TableHead>Total</TableHead>
                <TableHead />
              </TableRow>
            </TableHeader>

            <TableBody>
              {quotes.map((quote) => (
                <TableRow key={quote.no}>
                  <TableCell># {quote.no}</TableCell>
                  <TableCell>{quote.customerData.name}</TableCell>
                  <TableCell>{quote.customerData.company}</TableCell>
                  <TableCell>
                    {format(quote.customerData.dateQuote, "PPP", {
                      locale: es,
                    })}
                  </TableCell>
                  <TableCell>
                    $ {getTotal(quote.productsData).toFixed(2)}
                  </TableCell>
                  <TableCell>
                    <Popover>
                      <PopoverTrigger>
                        <Ellipsis />
                      </PopoverTrigger>
                      <PopoverContent className="w-44 p-2" side="left">
                        <div className="flex items-center gap-2 hover:bg-slate-100/80 p-2 rounded cursor-pointer transition-colors duration-500">
                          <Eye className="w-4 h-4" /> <p>Ver</p>
                        </div>
                        <div className="flex items-center gap-2 hover:bg-slate-100/80 p-2 rounded cursor-pointer transition-colors duration-500">
                          <Pencil className="w-4 h-4" /> <p>Editar</p>
                        </div>
                        <div
                          className="flex items-center gap-2 hover:bg-slate-100/80 p-2 rounded cursor-pointer transition-colors duration-500"
                          onClick={() => handleRemoveQuote(quote.no)}
                        >
                          <Trash2 className="w-4 h-4" /> <p>Eliminar</p>
                        </div>
                      </PopoverContent>
                    </Popover>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        ) : (
          <div className="flex flex-col justify-center items-center gap-6 text-slate-300 h-[70vh]">
            <div className="flex flex-col items-center gap-2">
              <File className="w-12 h-12" />
              <p className="text-3xl">No tienes cotizaciones</p>
            </div>
          </div>
        )}
      </div>
    </>
  );
};
