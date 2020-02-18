//
// This is only a SKELETON file for the 'RNA Transcription' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

let rnaToDnaMapping = {
  "G": "C",
  "C": "G",
  "T": "A",
  "A": "U"
}

export const toRna = (dnaStrands) => {
  let rnaStrands = '';
  if(dnaStrands) {
    for(let dnaStrand of dnaStrands) {
      rnaStrands = rnaStrands + rnaToDnaMapping[dnaStrand];
    }
  }
  return rnaStrands;
};
