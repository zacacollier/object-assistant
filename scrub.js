// Takes any 'name' string
// Returns it in properly capitalized form

const scrub = (str) => {
  return str.replace(/[^-\s]+/g, function(txt) {
    return txt.charAt(0).toUpperCase()
         + txt.substr(1).toLowerCase();
  });
}

//Works with diacritics and hyphenated names
//not yet compatible with exceptions like 'von Frankenstein / de Gamba'
//or 'd'avola'
console.log(scrub('anders ångström'), scrub('jean-michel jarre'))


module.exports = scrub
