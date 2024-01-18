const anagram = (firstStg, secondStg) => {
  if (firstStg.length != secondStg.length)
    return false;
  else
    for (let i = 0; i < firstStg.length; i++) {
      return secondStg.toLowerCase().includes(firstStg[i].toLowerCase())
    }
};
  
module.exports = {
  anagram,
};