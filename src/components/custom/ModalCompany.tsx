import { Button } from "../ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTrigger,
  DialogDescription,
  DialogTitle,
  DialogFooter,
} from "../ui/dialog";
import CompanyForm from "./quotation/companyForm";

const ModalCompany = ({ trigger }: { trigger: React.ReactElement }) => {
  return (
    <Dialog>
      <DialogTrigger asChild>{trigger}</DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Mi Empresa</DialogTitle>
          <DialogDescription>
            Agrega la información de tu empresa que aparecerá en las
            cotizaciones.
          </DialogDescription>
        </DialogHeader>
        <div className="mt-4">
          <CompanyForm />
        </div>
        <DialogFooter className="mt-4">
          <Button>Guardar</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default ModalCompany;
