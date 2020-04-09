/*! index.ts */

import {addi500} from './calcul_sub';

export function add1000(x: number): number {
  let res: number;
  res = addi500(x);
  res += 500;
  return res;
}

export function mult1000(x: number): number {
  let res: number = x;
  res *= 1000;
  return res;
}
