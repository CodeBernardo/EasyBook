export const isCSSMeasure = (measure: string) => {
  return /^[-+]?[0-9]*\.?[0-9]+(px|rem|em|%|ch|vh|vw)$/.test(measure || "")
}

