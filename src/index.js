module.exports = function check(str, bracketsConfig) {
  let openSymbol = '';
  let closeSymbol = '';
  let result;

  for (let i = 0; i < bracketsConfig.length; i++) {
      openSymbol = bracketsConfig[i][0];
      closeSymbol = bracketsConfig[i][1];
          // console.log(`Open symbol: ${openSymbol}\nClose symbol:${closeSymbol}`);
          // console.log(checkString(str, openSymbol, closeSymbol));
              if (str.includes(openSymbol) && str.includes(closeSymbol)) {
                  result =  checkString(str, openSymbol, closeSymbol);
              };

          if (!result) return false;
      }
  return(result);
}

function checkString(str, openSymbol, closeSymbol) {
  let strIsOpen;
  let strIsClose;

  for (let i = 0; i < str.length; i++) {
      if (str[i] === openSymbol) {
          strIsOpen = true;
          strIsClose = false;
      }
      if (str[i] === closeSymbol && strIsOpen) {
          strIsOpen = false;
          strIsClose = true;
      }
  }
  if (strIsClose) {
      let openSymbol1 = closeSymbol;
      let closeSymbol1 = openSymbol;

      for (let i = 0; i < str.length; i++) {
          if (str[i] === openSymbol1) {
              strIsOpen = true;
              strIsClose = false;
          }
          if (str[i] === closeSymbol1 && strIsOpen) {
              strIsOpen = false;
              strIsClose = true;
          }
      }
  }
  return strIsClose;
}// function checkString

