function sayHello(name) {
  console.log(`Hola ${name}`);
}
sayHello('sheila');

function calculateSquareArea(side) {
  const area = side * side;
  console.log(`El área del cuadrado es: ${area}`);
}

calculateSquareArea(5);

function calculateTriangleArea(base, height) {
  const area = (base * height) / 2;
  console.log(`El área del triángulo es: ${area}`);
}
calculateTriangleArea(5, 3);

function calculateCicleArea(radio) {
  const area = 3.14 * (radio * radio);
  /* const area = Math.PI * Math.pow(radio, 2); */
  console.log(`El área del círculo es: ${area}`);
}
calculateCicleArea(5);

function celsiusToFahrenheit(grades) {
  const fahrenheit = grades * 1.8 + 32;
  console.log(fahrenheit);
}
celsiusToFahrenheit(25);

function fahrenheitToCelsius(grades) {
  const celsius = (grades - 32) / 1.8;
  console.log(celsius);
}
fahrenheitToCelsius(25);

function totalPrice(price) {
  const total = price + price * 0.21;
  console.log(total);
}
totalPrice(25);

function writeMessage(name, material, size, note) {
  console.log(
    `${name} ha pedido una caja de ${material} de tamaño ${size}. ${note} `
  );
}
writeMessage('Sheila', 'madera', 'mediana', 'Gracias 😊');
