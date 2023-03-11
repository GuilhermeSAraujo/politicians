export interface IDeputados{
  dados: IDeputado[],
}

export interface IDeputado {
  id: string,
  uri: string,
  nome: string,
  siglaPartido: string,
  uriPartido: string,
  siglaUf: string,
  idLegislatura: number,
  urlFoto: string,
  email: string | null
}
