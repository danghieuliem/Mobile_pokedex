type IGetAllResolve = {
  count: number
  next?: string
  previous?: string
  results: IGetAllResolveItem[]
}

type IGetAllResolveItem = {
  name: string
  url: string
}
