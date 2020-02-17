//
// This is only a SKELETON file for the 'Resistor Color Duo' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const decodedValue = ([a, b]) => {
  return +(''.concat(COLORS.indexOf(a), COLORS.indexOf(b)));
};

export const COLORS = ["black","brown","red","orange","yellow","green","blue","violet","grey","white"];
