interface IBrandAll {
  brand: string
  path: string
  colors: IColors
}

interface IColors {
  background?: string
  primary?: string
  secondary?: string
  text?: string
}

export { IBrandAll }
