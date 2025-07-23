import { PatrocinadorStatus } from "../../shared/enums/patrocinador/patrocinadorStatus"

export interface Patrocinador {
    id: number,
    nome: string,
    representanteNome: string,
    status: PatrocinadorStatus
};
