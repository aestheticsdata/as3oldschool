import { PixelLetter } from "./PixelLetter.js";

interface SquareElement {
  element: HTMLDivElement;
  x: number;
  y: number;
  initialX: number;
  initialY: number;
}

export class Font_v3 {
  private _arrayPixelLetters: PixelLetter[];
  private _arrayStringLetters: string[];
  public xpos: number;
  public ypos: number;
  public container: HTMLElement;
  public dir: number;
  private interval_start: number | null;
  private interval: number | null;
  private ga: number[];
  private ga_pos: (SquareElement | null)[];
  private agl: number;
  private sinRunBool: boolean;
  private animationFrameId: number | null;
  private isAnimating: boolean;

  constructor(container: HTMLElement) {
    this.container = container;
    this.dir = 0;
    this.xpos = 120;
    this.ypos = 40;
    this.sinRunBool = false;
    this.interval_start = null;
    this.interval = null;
    this.animationFrameId = null;
    this.ga = [];
    this.ga_pos = [];
    this.agl = 0;
    this.isAnimating = false;

    this._arrayPixelLetters = [];
    this._arrayStringLetters = [];

    this.initializeLetters();
  }

  private initializeLetters(): void {
    const a = new PixelLetter([
      [0, 1, 1, 0],
      [1, 0, 0, 1],
      [1, 1, 1, 1],
      [1, 0, 0, 1],
      [1, 0, 0, 1],
    ]);

    const b = new PixelLetter([
      [1, 1, 1, 0],
      [1, 0, 0, 1],
      [1, 1, 1, 0],
      [1, 0, 0, 1],
      [1, 1, 1, 0],
    ]);

    const c = new PixelLetter([
      [0, 1, 1, 1],
      [1, 0, 0, 0],
      [1, 0, 0, 0],
      [1, 0, 0, 0],
      [0, 1, 1, 1],
    ]);

    const d = new PixelLetter([
      [1, 1, 1, 0],
      [1, 0, 0, 1],
      [1, 0, 0, 1],
      [1, 0, 0, 1],
      [1, 1, 1, 0],
    ]);

    const e = new PixelLetter([
      [1, 1, 1, 1],
      [1, 0, 0, 0],
      [1, 1, 1, 0],
      [1, 0, 0, 0],
      [1, 1, 1, 1],
    ]);

    const f = new PixelLetter([
      [1, 1, 1, 1],
      [1, 0, 0, 0],
      [1, 1, 1, 0],
      [1, 0, 0, 0],
      [1, 0, 0, 0],
    ]);

    const g = new PixelLetter([
      [1, 1, 1, 1],
      [1, 0, 0, 0],
      [1, 0, 1, 1],
      [1, 0, 0, 1],
      [1, 1, 1, 1],
    ]);

    const h = new PixelLetter([
      [1, 0, 0, 1],
      [1, 0, 0, 1],
      [1, 1, 1, 1],
      [1, 0, 0, 1],
      [1, 0, 0, 1],
    ]);

    const i = new PixelLetter([
      [1, 1, 1, 0],
      [0, 1, 0, 0],
      [0, 1, 0, 0],
      [0, 1, 0, 0],
      [1, 1, 1, 0],
    ]);

    const j = new PixelLetter([
      [0, 1, 1, 1],
      [0, 0, 0, 1],
      [0, 0, 0, 1],
      [1, 0, 0, 1],
      [0, 1, 1, 0],
    ]);

    const k = new PixelLetter([
      [1, 0, 0, 1],
      [1, 0, 0, 1],
      [1, 1, 1, 0],
      [1, 0, 0, 1],
      [1, 0, 0, 1],
    ]);

    const l = new PixelLetter([
      [1, 0, 0, 0],
      [1, 0, 0, 0],
      [1, 0, 0, 0],
      [1, 0, 0, 0],
      [1, 1, 1, 1],
    ]);

    const m = new PixelLetter([
      [1, 1, 1, 1],
      [1, 0, 0, 1],
      [1, 0, 0, 1],
      [1, 0, 0, 1],
      [1, 0, 0, 1],
    ]);

    const n = new PixelLetter([
      [1, 0, 0, 1],
      [1, 1, 0, 1],
      [1, 0, 1, 1],
      [1, 0, 0, 1],
      [1, 0, 0, 1],
    ]);

    const o = new PixelLetter([
      [1, 1, 1, 1],
      [1, 0, 0, 1],
      [1, 0, 0, 1],
      [1, 0, 0, 1],
      [1, 1, 1, 1],
    ]);

    const p = new PixelLetter([
      [1, 1, 1, 1],
      [1, 0, 0, 1],
      [1, 1, 1, 1],
      [1, 0, 0, 0],
      [1, 0, 0, 0],
    ]);

    const q = new PixelLetter([
      [1, 1, 1, 1],
      [1, 0, 0, 1],
      [1, 0, 0, 1],
      [1, 0, 1, 0],
      [1, 1, 0, 1],
    ]);

    const r = new PixelLetter([
      [1, 1, 1, 1],
      [1, 0, 0, 1],
      [1, 1, 1, 1],
      [1, 0, 1, 0],
      [1, 0, 0, 1],
    ]);

    const s = new PixelLetter([
      [1, 1, 1, 1],
      [1, 0, 0, 0],
      [1, 1, 1, 1],
      [0, 0, 0, 1],
      [1, 1, 1, 1],
    ]);

    const t = new PixelLetter([
      [1, 1, 1, 1],
      [0, 0, 1, 0],
      [0, 0, 1, 0],
      [0, 0, 1, 0],
      [0, 0, 1, 0],
    ]);

    const u = new PixelLetter([
      [1, 0, 0, 1],
      [1, 0, 0, 1],
      [1, 0, 0, 1],
      [1, 0, 0, 1],
      [1, 1, 1, 1],
    ]);

    const v = new PixelLetter([
      [1, 0, 0, 1],
      [1, 0, 0, 1],
      [1, 0, 0, 1],
      [1, 0, 1, 1],
      [1, 1, 0, 0],
    ]);

    const w = new PixelLetter([
      [1, 0, 0, 1],
      [1, 0, 0, 1],
      [1, 0, 0, 1],
      [1, 1, 1, 1],
      [1, 0, 0, 1],
    ]);

    const x = new PixelLetter([
      [1, 0, 0, 1],
      [0, 1, 1, 0],
      [0, 1, 1, 0],
      [0, 1, 1, 0],
      [1, 0, 0, 1],
    ]);

    const y = new PixelLetter([
      [1, 0, 0, 1],
      [1, 1, 0, 1],
      [0, 0, 1, 1],
      [0, 0, 0, 1],
      [0, 0, 0, 1],
    ]);

    const z = new PixelLetter([
      [1, 1, 1, 1],
      [0, 0, 0, 1],
      [0, 0, 1, 0],
      [0, 1, 0, 0],
      [1, 1, 1, 1],
    ]);

    const space = new PixelLetter([
      [0, 0, 0, 0],
      [0, 0, 0, 0],
      [0, 0, 0, 0],
      [0, 0, 0, 0],
      [0, 0, 0, 0],
    ]);

    this._arrayPixelLetters = [
      a,
      b,
      c,
      d,
      e,
      f,
      g,
      h,
      i,
      j,
      k,
      l,
      m,
      n,
      o,
      p,
      q,
      r,
      s,
      t,
      u,
      v,
      w,
      y,
      y,
      z,
      space,
    ];
    this._arrayStringLetters = [
      "a",
      "b",
      "c",
      "d",
      "e",
      "f",
      "g",
      "h",
      "i",
      "j",
      "k",
      "l",
      "m",
      "n",
      "o",
      "p",
      "q",
      "r",
      "s",
      "t",
      "u",
      "v",
      "w",
      "y",
      "y",
      "z",
      " ",
    ];
  }

  public getPixelLetter(s: string): number[][] {
    let myIndex: number = -1;
    let myPixelLetterResult: number[][];

    for (let i: number = 0; i < this._arrayStringLetters.length; i++) {
      if (this._arrayStringLetters[i] === s) {
        myIndex = i;
        break;
      }
    }

    if (myIndex === -1) {
      myPixelLetterResult = this._arrayPixelLetters[0].getValue();
    } else {
      myPixelLetterResult = this._arrayPixelLetters[myIndex].getValue();
    }

    return myPixelLetterResult;
  }

  public makeGlobalArray(chaine: string): void {
    const global_array: number[] = [];
    let a: number = 0;

    for (let i: number = 0; i < chaine.length; i++) {
      const lettre_array: number[][] = this.getPixelLetter(chaine.charAt(i));
      for (let j: number = 0; j <= 4; j++) {
        for (let k: number = 0; k <= 3; k++) {
          global_array[a] = lettre_array[j][k];
          a++;
        }
      }
    }

    this.ga = global_array;
  }

  public affiche_alt(): void {
    // Nettoyer le conteneur avant d'afficher
    this.container.innerHTML = "";
    this.ga_pos = [];

    let indice = 0;
    const init_xpos = this.xpos;
    let currentXpos = this.xpos;
    let currentYpos = this.ypos;

    for (let i: number = 0; i < this.ga.length / 20; i++) {
      for (let j: number = 0; j < 5; j++) {
        for (let k: number = 0; k < 4; k++) {
          if (this.ga[indice] === 1) {
            const square = document.createElement("div");
            square.className = "pixel-square";
            square.style.position = "absolute";
            square.style.width = "5px";
            square.style.height = "5px";
            square.style.left = currentXpos + "px";
            square.style.top = currentYpos + "px";
            square.style.backgroundColor = this.getColorForIndex(indice);
            square.id = `carre${indice}`;

            this.container.appendChild(square);

            this.ga_pos[indice] = {
              element: square,
              x: currentXpos,
              y: currentYpos,
              initialX: currentXpos,
              initialY: currentYpos,
            };
          } else {
            this.ga_pos[indice] = null;
          }

          indice++;
          currentXpos += 5;
        }
        currentXpos -= 20;
        currentYpos += 5;
      }
      currentYpos -= 25;
      currentXpos += 22;
    }

    this.ypos = currentYpos;
    this.xpos = currentXpos;
  }

  private getColorForIndex(indice: number): string {
    const redOffset = Math.floor((indice / 255) * 100 + 90);
    const blueOffset = Math.floor((indice / 255) * 100);
    const greenOffset = ((indice % 255) + 1) * 2;

    const r = Math.min(255, Math.max(0, redOffset));
    const g = Math.min(255, Math.max(0, greenOffset));
    const b = Math.min(255, Math.max(0, blueOffset));

    return `rgb(${r}, ${g}, ${b})`;
  }

  private dissolve(ga_pos: (SquareElement | null)[]): void {
    this.isAnimating = true;
    let animationsCompleted = 0;
    const totalAnimations = ga_pos.filter((sq) => sq !== null).length;

    for (let i: number = 0; i < ga_pos.length; i++) {
      if (ga_pos[i] !== null) {
        const square = ga_pos[i]!;
        const duration = Math.floor((Math.random() + 1) * 100 - 100) / 10 + 2;
        const targetY = square.y + 300;
        const targetX = square.x - 100;

        const startTime = Date.now();
        const startX = square.x;
        const startY = square.y;
        const easeInOutBack = (t: number): number => {
          const c1 = 1.70158;
          const c3 = c1 + 1;
          return t < 0.5
            ? (t * t * ((c3 + 1) * 2 * t - c3)) / 2
            : ((t - 1) * (t - 1) * ((c3 + 1) * (t * 2 - 2) + c3) + 2) / 2;
        };

        const animate = () => {
          // Vérifier si l'animation doit continuer
          if (
            !this.isAnimating &&
            this.interval_start === null &&
            this.interval === null
          ) {
            return;
          }

          const elapsed = (Date.now() - startTime) / 1000;
          const progress = Math.min(elapsed / duration, 1);
          const eased = easeInOutBack(progress);

          const currentX = startX + (targetX - startX) * eased;
          const currentY = startY + (targetY - startY) * eased;

          square.element.style.left = currentX + "px";
          square.element.style.top = currentY + "px";

          if (progress < 1) {
            requestAnimationFrame(animate);
          } else {
            // Mettre à jour les positions après l'animation
            square.x = targetX;
            square.y = targetY;
            animationsCompleted++;
            if (animationsCompleted >= totalAnimations) {
              this.isAnimating = false;
            }
          }
        };

        requestAnimationFrame(animate);
      }
    }
  }

  private dissolve_up(ga_pos: (SquareElement | null)[]): void {
    this.isAnimating = true;
    let animationsCompleted = 0;
    const totalAnimations = ga_pos.filter((sq) => sq !== null).length;

    for (let i: number = 0; i < ga_pos.length; i++) {
      if (ga_pos[i] !== null) {
        const square = ga_pos[i]!;
        const duration = Math.floor((Math.random() + 1) * 100 - 100) / 10 + 1;
        // Remonter depuis la position actuelle vers la position initiale
        // Au lieu de remonter de 300px, on remonte vers la position initiale
        const targetY = square.initialY;
        const targetX = square.initialX;

        const startTime = Date.now();
        const startX = square.x;
        const startY = square.y;
        const easeInOutBack = (t: number): number => {
          const c1 = 1.70158;
          const c3 = c1 + 1;
          return t < 0.5
            ? (t * t * ((c3 + 1) * 2 * t - c3)) / 2
            : ((t - 1) * (t - 1) * ((c3 + 1) * (t * 2 - 2) + c3) + 2) / 2;
        };

        const animate = () => {
          // Vérifier si l'animation doit continuer
          if (
            !this.isAnimating &&
            this.interval_start === null &&
            this.interval === null
          ) {
            return;
          }

          const elapsed = (Date.now() - startTime) / 1000;
          const progress = Math.min(elapsed / duration, 1);
          const eased = easeInOutBack(progress);

          const currentX = startX + (targetX - startX) * eased;
          const currentY = startY + (targetY - startY) * eased;

          square.element.style.left = currentX + "px";
          square.element.style.top = currentY + "px";

          if (progress < 1) {
            requestAnimationFrame(animate);
          } else {
            // Mettre à jour les positions après l'animation
            square.x = targetX;
            square.y = targetY;
            animationsCompleted++;
            if (animationsCompleted >= totalAnimations) {
              this.isAnimating = false;
            }
          }
        };

        requestAnimationFrame(animate);
      }
    }
  }

  private animateSquare(
    element: HTMLDivElement,
    startX: number,
    startY: number,
    targetX: number,
    targetY: number,
    duration: number,
    squareElement?: SquareElement
  ): void {
    const startTime = Date.now();
    const easeInOutBack = (t: number): number => {
      const c1 = 1.70158;
      const c3 = c1 + 1;
      return t < 0.5
        ? (t * t * ((c3 + 1) * 2 * t - c3)) / 2
        : ((t - 1) * (t - 1) * ((c3 + 1) * (t * 2 - 2) + c3) + 2) / 2;
    };

    const animate = () => {
      const elapsed = (Date.now() - startTime) / 1000;
      const progress = Math.min(elapsed / duration, 1);
      const eased = easeInOutBack(progress);

      const currentX = startX + (targetX - startX) * eased;
      const currentY = startY + (targetY - startY) * eased;

      element.style.left = currentX + "px";
      element.style.top = currentY + "px";

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        // Mettre à jour les positions après l'animation
        if (squareElement) {
          squareElement.x = targetX;
          squareElement.y = targetY;
        }
      }
    };

    requestAnimationFrame(animate);
  }

  public move(): void {
    // Empêcher les animations de se chevaucher
    if (this.isAnimating) {
      return;
    }

    if (this.dir === 0) {
      this.dissolve(this.ga_pos);
      this.dir = 1;
    } else if (this.dir === 1) {
      this.dissolve_up(this.ga_pos);
      this.dir = 0;
    }
  }

  public setIntervalStart(n: number): void {
    if (this.interval_start !== null) {
      clearInterval(this.interval_start);
    }
    this.interval_start = window.setInterval(() => this.move(), n);
  }

  public setIntervalRunning(n: number): void {
    if (this.interval !== null) {
      clearInterval(this.interval);
    }
    this.interval = window.setInterval(() => this.move(), n);
  }

  public clearIntervals(): void {
    if (this.interval_start !== null) {
      clearInterval(this.interval_start);
      this.interval_start = null;
    }
    if (this.interval !== null) {
      clearInterval(this.interval);
      this.interval = null;
    }
    // Réinitialiser le flag d'animation
    this.isAnimating = false;
    // Réinitialiser les positions des carrés à leur position initiale
    for (let i: number = 0; i < this.ga_pos.length; i++) {
      if (this.ga_pos[i] !== null) {
        const square = this.ga_pos[i]!;
        square.x = square.initialX;
        square.y = square.initialY;
        square.element.style.left = square.x + "px";
        square.element.style.top = square.y + "px";
      }
    }
  }

  private sined(): void {
    let myAgl: number = this.agl;

    for (let k: number = 0; k < 20; k += 4) {
      for (let j: number = k; j < this.ga_pos.length; j += 20) {
        for (let i: number = 0; i < 4; i++) {
          if (this.ga_pos[i + j] !== null) {
            const square = this.ga_pos[i + j]!;
            const offsetY = Math.sin(myAgl) * 0.01;
            square.y = square.initialY + offsetY;
            square.element.style.top = square.y + "px";
            myAgl += 0.015 * 4;
          } else {
            myAgl += 0.015 * 4;
          }
        }
      }
    }
  }

  public launchSin(angle: number): void {
    this.agl = angle;
    this.sinRunBool = true;
    this.startAnimationLoop();
  }

  public stopSin(): void {
    this.sinRunBool = false;
    if (this.animationFrameId !== null) {
      cancelAnimationFrame(this.animationFrameId);
      this.animationFrameId = null;
    }
  }

  private startAnimationLoop(): void {
    const animate = () => {
      if (this.sinRunBool) {
        this.sined();
        this.agl += 0.4;
        this.animationFrameId = requestAnimationFrame(animate);
      }
    };
    this.animationFrameId = requestAnimationFrame(animate);
  }

  public destroy(): void {
    this.clearIntervals();
    this.stopSin();
    this.container.innerHTML = "";
  }
}
