declare module "animejs" {
  const anime: {
    (params: any): any
    random(min: number, max: number): number
    stagger(value: number, options?: any): any
    version: string
    speed: number
    running: any[]
    easings: any
    remove(targets: any): void
    get(targets: any, prop: string): any
    path(path: string | HTMLElement, percent?: number): any
    setDashoffset(el: HTMLElement): number
    bezier(x1: number, y1: number, x2: number, y2: number): (t: number) => number
    timeline(params?: any): any
    random(min: number, max: number): number
    tick(time: number): void
    set(targets: any, values: any): void
  }
  export = anime
}
