export class PixelLetter {
  private _contenu: number[][];

  constructor(matrice: number[][]) {
    this._contenu = matrice;
  }

  public getValue(): number[][] {
    return this._contenu;
  }
}
