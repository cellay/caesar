function cipher(str) {
//Convierto las minùsculas en mayùsculas
str = prompt('Introduzca el texto a cifrar');
  var upper = str.toUpperCase();
  return upper.split('');
//Creo un prototype .map.call para devolver cada carácter con el que va a trabajar la función
    .map.call(upper, function(char) {
//Coloco .charCodeAt para definir el valor unicode de los elementos de char
      var i = char.charCodeAt(0);
//Utilizo if para determinar si está dentro de los valores unicode de mayúsculas
      if (i < 65 || i > 90) {
        return String.fromCharCode(i);
      }
        else if (i < 91 || i > 64) {
//Retorno el resultado solo si cumple con la condición
          return String.fromCharCode((i + 46)%26 + 65);
      }
//Uso .join para unir los elementos del array en un string
    }).join('');
}
cipher("ABCDEFGHIJKLMNOPQRSTUVWXYZ");

//Establezco una nueva función con cambios para que haga lo contrario
function decipher(str) {
//Convierto las minùsculas en mayùsculas
str = prompt('Introduzca el texto descifrar');
  var upper = str.toUpperCase();
  return upper.split('');
    .map.call(upper, function(char) {
      var i = char.charCodeAt(0);
      if (i < 65 || i > 90) {
        return String.fromCharCode(i);
      }
        else if (i < 91 || i > 64) {
// Invertí la operación de la función de cipher
          return String.fromCharCode((i - 46)%26 + 65);
      }
    }).join('');
}
decipher("HIJKLMNOPQRSTUVWXYZABCDEFG");
