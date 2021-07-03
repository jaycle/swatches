
export interface SwatchModel {
  id: number;
  hue: number;
  saturation: number;
  value: number;
}

export interface HSL {
  hue: number;
  saturation: number; // [0 - 100]
  lightness: number; // [1 - 100]
}

export function HSLToHex(h: number, s: number, l: number) {
  // https://css-tricks.com/converting-color-spaces-in-javascript/

  s /= 100;
  l /= 100;

  let c = (1 - Math.abs(2 * l - 1)) * s,
      x = c * (1 - Math.abs((h / 60) % 2 - 1)),
      m = l - c/2,
      r = 0,
      g = 0,
      b = 0;

  if (0 <= h && h < 60) {
    r = c; g = x; b = 0;
  } else if (60 <= h && h < 120) {
    r = x; g = c; b = 0;
  } else if (120 <= h && h < 180) {
    r = 0; g = c; b = x;
  } else if (180 <= h && h < 240) {
    r = 0; g = x; b = c;
  } else if (240 <= h && h < 300) {
    r = x; g = 0; b = c;
  } else if (300 <= h && h < 360) {
    r = c; g = 0; b = x;
  }
  // Having obtained RGB, convert channels to hex
  let rStr = Math.round((r + m) * 255).toString(16);
  let gStr = Math.round((g + m) * 255).toString(16);
  let bStr = Math.round((b + m) * 255).toString(16);

  // Prepend 0s, if necessary
  if (rStr.length === 1)
    rStr = "0" + rStr;
  if (gStr.length === 1)
    gStr = "0" + gStr;
  if (bStr.length === 1)
    bStr = "0" + bStr;

  return "#" + rStr + gStr + bStr;
}

export const getFilterFn = (filter: string) => {
  const params = getParams(filter);

  return (color: {hue: number, saturation: number, value: number}) => {
    let hueInRange: boolean
    if (params.hueStart + params.hueDegs > 360) {
      // Must check both ends of the wheel
      const hueEnd = (params.hueStart + params.hueDegs) % 360;
      hueInRange = (color.hue >= params.hueStart && color.hue <= 360) || (color.hue >= 0 && color.hue <= hueEnd);
    } else {
      hueInRange = color.hue >= params.hueStart && color.hue <= params.hueStart + params.hueDegs;
    }

    if (!hueInRange) {
      return false;
    }

    if (params.satMax || params.satMin) {
      const satMax = params.satMax || 100;
      const satMin = params.satMin || 0;

      if (color.saturation > satMax || color.saturation < satMin) {
        return false;
      }
    }

    if (params.valueMax || params.valueMin) {
      const valueMax = params.valueMax || 100;
      const valueMin = params.valueMin || 0;

      if (color.value > valueMax || color.value < valueMin) {
        return false;
      }
    }

    return true;
  }
}

export const getHsl = (color: {hue: number, saturation: number, value: number}): HSL => {
  const sat = color.saturation / 100;
  const val = color.value / 100;

  const lightness = (2 - sat) * val / 2;
  let outSat = sat;

  if (lightness !== 0) {
    if (lightness === 1) {
      outSat = 0
    } else if (lightness < 0.5) {
      outSat = sat * val / (lightness * 2)
    } else {
      outSat = sat * val / (2 - lightness * 2)
    }
  }

  return ({
    hue: color.hue,
    saturation: outSat * 100,
    lightness: lightness * 100
  });
}

interface Params {
  hueStart: number;
  hueDegs: number;
  satMax?: number;
  satMin?: number;
  valueMax?: number;
  valueMin?: number;
}

const getParams = (color: string): Params => {
  switch (color) {
    case 'red':
      return {hueStart: 330, hueDegs: 50, valueMin: 70, satMin: 50};
    case 'orange':
      return {hueStart: 25, hueDegs: 30, satMin: 60, valueMin: 80};
    case 'yellow':
      return {hueStart: 55, hueDegs: 10, satMin: 70};
    case 'green':
      return {hueStart: 65, hueDegs: 95, satMin: 70};
    case 'blue':
      return {hueStart: 160, hueDegs: 100, satMin: 70};
    case 'purple':
      return {hueStart: 265, hueDegs: 30, satMin: 70};
    case 'brown':
      return {hueStart: 20, hueDegs: 20, valueMax: 70, satMin: 70};
    case 'gray':
      return {hueStart: 0, hueDegs: 360, satMax: 10, valueMax: 70};
    default:
      return {hueStart: 0, hueDegs: 0};
  }
}
