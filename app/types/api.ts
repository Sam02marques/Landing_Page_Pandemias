// DEFININDO OS TIPOS DE CADA ROTA GET
export interface Pandemia {
    id: number;
    nomePandemia: string;
    período: string;
    sintomas: string;
    descricao: string;
    regiao: string;
    transmissao: string;
    numeroMortos: string;
    prevencoes: string[];
}

export interface Vacina {
    id: number,
    nome: string,
    doenca: string,
    ano_criacao: number,
    doses: string,
    via_administracao: string;
}

export interface FakeNews {
  id: number;
  mentira: string;
  verdade: string;
}