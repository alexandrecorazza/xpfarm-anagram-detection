const anagram = (firstStg, secondStg) => {
  firstStg = firstStg.toLowerCase()

  secondStg = secondStg.toLowerCase()
  secondStg = [...secondStg]

  if (firstStg.length != secondStg.length)
    return false;
  else
    for (let i = 0; i < firstStg.length; i++) {
      return secondStg.includes(firstStg[i])
    }
};
  
module.exports = {
  anagram,
};