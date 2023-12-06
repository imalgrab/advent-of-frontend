export interface Lokalizacja {
  x: number;
  y: number;
  z: number;
  czas: number;
}

export type MapaCzasoprzestrzenna = (
  x: number,
  y: number,
  z: number,
  czas: number
) => number;

export function znajdzWorek(
  lokalizacje: Lokalizacja[],
  mapa: MapaCzasoprzestrzenna
): Lokalizacja | null {
  let max = -1;
  let maxLocation = null;

  for (const l of lokalizacje) {
    const value = mapa(l.x, l.y, l.z, l.czas);
    if (!Number.isNaN(value)) {
      max = Math.max(max, value);
      maxLocation = l;
    }
  }

  return maxLocation;
}
