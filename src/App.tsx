import Header from "@/components/custom/header";
import { Card } from "@/components/ui/card";

const App = () => {
  return (
    <>
      <Header />
      <div className="py-4 px-10 space-y-4">
        <Card className="hover:scale-101 transition-all duration-500 hover:shadow-lg p-4 flex items-center justify-between cursor-pointer">
          <div>
            <p className="font-bold text-xl">
              <span className="font-normal text-slate-500">#</span> 202502-001
            </p>
            <p>Cliente: Nombre del cliente</p>
          </div>
          <p>$20,500.00</p>
        </Card>
        <Card className="hover:scale-101 transition-all duration-500 hover:shadow-lg p-4 flex items-center justify-between cursor-pointer">
          <div>
            <p className="font-bold text-xl">
              <span className="font-normal text-slate-500">#</span> 202502-001
            </p>
            <p>Cliente: Nombre del cliente</p>
          </div>
          <p>$20,500.00</p>
        </Card>
      </div>
    </>
  );
};

export default App;
