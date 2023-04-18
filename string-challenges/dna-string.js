/* Deoxyribonucleic acid (DNA) is a chemical found in the nucleus of cells and carries the "instructions" for the development and functioning of living organisms.



In DNA strings, symbols "A" and "T" are complements of each other, as "C" and "G".You have function with one side of the DNA(string, except for Haskell); you need to get the other complementary side.DNA strand is never empty or there is no DNA at all(again, except for Haskell).

DNAStrand ("ATTGC") // return "TAACG"

DNAStrand ("GTAT") // return "CATA"  */

function DNAStrand(dna) {
// Returns a new dna string with the replaced characters
//The replacing characters are the values in the DNAStrand.pairs object
    return dna.replace(/./g, function (c) {
        return DNAStrand.pairs.c
    })
}

//The DNAStand.pairs object with the DNA pairs
DNAStrand.pairs = {
    A: 'T',
    T: 'A',
    C: 'G',
    G: 'C',
}

console.log(DNAStrand('AACTG'))