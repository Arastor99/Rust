
export const objCopy = <T>(obj: T): T => {
  return JSON.parse(JSON.stringify(obj));
}

export const greenColor = '#648f1b';
export const redColor = '#bb492d';
export const redGenes = ['W', 'X'];
export const greenGenes = ['Y', 'G', 'H'];
export const possibleGenes = ['Y', 'G', 'H', 'W', 'X'];
