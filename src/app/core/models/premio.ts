import { PremioCategoria } from "../../shared/enums/premio/premioCategoria";
import { PremioStatus } from "../../shared/enums/premio/premioStatus";

export interface Premio {
  id: number,
  descricao: string,
  ordemPremiacao: number,
  categoria: PremioCategoria,
  status: PremioStatus
};