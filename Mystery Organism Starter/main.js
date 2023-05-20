// Returns a random DNA base
const returnRandBase = () => {
    const dnaBases = ['A', 'T', 'C', 'G'];
    return dnaBases[Math.floor(Math.random() * 4)];
  };
  
  // Returns a random single stand of DNA containing 15 bases
  const mockUpStrand = () => {
    const newStrand = [];
    for (let i = 0; i < 15; i++) {
      newStrand.push(returnRandBase());
    }
    return newStrand;
  };

  function pAequorFactory(specimenNum, dna){
    return{
        _specimenNum: specimenNum,
        _dna: dna,
        mutate(){
            let base = Math.floor(Math.random() * this._dna.length);
            let newBase = returnRandBase();
            while (this._dna[base] === newBase)
                newBase = returnRandBase();
            this._dna[base] = newBase;
            return this._dna;
        },
        compareDNA(spec){
          let newpAequor = spec;
          let count = 0;
          for(let i = 0; i<= this._dna.length; i++){
            if(this._dna[i] === newpAequor[i] )
              count++;
          }
          let perct = (count / this._dna.length) * 100;
          return `Specimen #1 and Specimen #2 have ${perct}% DNA in common`;
        },
        willLikelySurvive(){
          let count = 0;
          for(let i = 0; i <= this._dna.length; i++){
            if(this._dna[i] === 'C' || this._dna[i] === 'G')
              count++;
          }
          let perct = (count / this._dna.length) * 100;
          //console.log(`P.aequor survival chance: ${perct}%`);
          if(perct >= 60)
            return true;
          else
            return false;
        },
        complementStrand(){
          let complementStrand = [];
          for(let i = 0; i < this._dna.length; i++){
            switch(this._dna[i]){
              case 'T' :
                complementStrand.push('A');
                break;
              case 'A' :
                complementStrand.push('T');
                break;
              case 'C' :
                complementStrand.push('G');
                break;
              case 'G' :
                complementStrand.push('C');
                break;
              default:
                break;
            }
          }
          console.log(this._dna);
          return complementStrand;
        }
    }
  }

let createSpecies = function(){
  let newSpec= [];
    let count = 0;
    while(count < 30){
    let x = pAequorFactory(count, mockUpStrand());
      if(x.willLikelySurvive()){
          //console.log(`Species No: ${count}`);
          //console.log(x._dna);
          newSpec.push(x._dna);
          count++;
      }       
    }
}

createSpecies();  
