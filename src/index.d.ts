export declare interface Circle {
  cx: number
  cy: number
  fill: string
  r: number
}
export declare interface Options {
  isAlternative: boolean
  size?: number
}

export declare function renderCircle(
  { cx, cy, fill, r }: Circle,
  key: number,
): string
export declare function renderPolkadotIdenticon(
  address: string,
  className: string,
  isAlternative: boolean,
  size: number,
  style: string,
): string
export declare function renderBeachballIdenticon(
  address: string,
  isAlternative: boolean,
  size: number,
): string
