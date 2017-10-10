# Cifrado César
Crea una web que pida, por medio de un prompt(), una frase al usuario y devuelva el mismo mensaje encriptado según el algoritmo de Cifrado César con el parámetro de desplazamiento de 33 espacios hacia la derecha
## Pseudocódigo

1.	Inicio
2.	Crear una función de cifrado
3.	Crear un prompt() y establecer una variable str
4.	Convertir el string dado en mayúsculas mediante un prototype .toUpperCase y resultarlo en una nueva variable upper
5.	Retornar un .split para separar la cadena
6.	Crear un prototype .map.call para devolver cada carácter con el que va a trabajar la función
7.	Creo una nueva variable i para usar charCodeAt() y recibir el valor Unicode del string
8.	Establezco un if para condicionar los elementos que se brinden en el prompt
  a.	Si el valor Unicode ingresado no pertenece a alguna letra A-Z se devolverá el mismo valor ingresado
  b.	Y si el valor sí pertenece se convertirá el valor mediante la operación establecida
    i.	Se establece un String.fromCharCode() para devolver el string con el valor Unicode resultado anteriormente
9.	Establecer un join() para los nuevos elementos
10.	Retornar resultado según la condición
11.	Fin



## Diagrama de flujo
