/**
 * A 3x5 bitmap face, in the spirit of the pixel labels on omarchy.org.
 * Everything here runs at build time, so pixel type costs no JavaScript.
 */

const GLYPHS: Record<string, string> = {
  A: '111 101 111 101 101',
  B: '110 101 110 101 110',
  C: '111 100 100 100 111',
  D: '110 101 101 101 110',
  E: '111 100 111 100 111',
  F: '111 100 111 100 100',
  G: '111 100 101 101 111',
  H: '101 101 111 101 101',
  I: '111 010 010 010 111',
  J: '001 001 001 101 111',
  K: '101 101 110 101 101',
  L: '100 100 100 100 111',
  M: '101 111 111 101 101',
  N: '110 101 101 101 101',
  O: '111 101 101 101 111',
  P: '111 101 111 100 100',
  Q: '111 101 101 111 001',
  R: '111 101 110 101 101',
  S: '111 100 111 001 111',
  T: '111 010 010 010 010',
  U: '101 101 101 101 111',
  V: '101 101 101 101 010',
  W: '101 101 111 111 101',
  X: '101 101 010 101 101',
  Y: '101 101 010 010 010',
  Z: '111 001 010 100 111',
  '0': '111 101 101 101 111',
  '1': '010 110 010 010 111',
  '2': '111 001 111 100 111',
  '3': '111 001 111 001 111',
  '4': '101 101 111 001 001',
  '5': '111 100 111 001 111',
  '6': '111 100 111 101 111',
  '7': '111 001 001 001 001',
  '8': '111 101 111 101 111',
  '9': '111 101 111 001 111',
  '.': '000 000 000 000 010',
  '-': '000 000 111 000 000',
  '/': '001 001 010 100 100',
}

export const GLYPH_WIDTH = 3
export const GLYPH_HEIGHT = 5
const TRACKING = 1
const SPACE_WIDTH = 2

export type Cell = { x: number; y: number }

/** Lays `text` out on the 3x5 lattice and returns the lit cells. */
export function layout(text: string): { cells: Cell[]; width: number } {
  const cells: Cell[] = []
  let x = 0
  for (const char of text.toUpperCase()) {
    if (char === ' ') {
      x += SPACE_WIDTH + TRACKING
      continue
    }
    const glyph = GLYPHS[char]
    if (glyph === undefined) {
      x += GLYPH_WIDTH + TRACKING
      continue
    }
    const rows = glyph.split(' ')
    for (let row = 0; row < GLYPH_HEIGHT; row++) {
      for (let col = 0; col < GLYPH_WIDTH; col++) {
        if (rows[row]![col] === '1') cells.push({ x: x + col, y: row })
      }
    }
    x += GLYPH_WIDTH + TRACKING
  }
  return { cells, width: Math.max(0, x - TRACKING) }
}
