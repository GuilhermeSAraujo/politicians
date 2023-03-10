export interface IPartidos{
    dados: IPartido[];
}

export interface IPartido{
    id: number;
    sigla: string;
    nome: string;
    url: string;
}