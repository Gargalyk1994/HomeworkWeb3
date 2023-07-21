// Из цельсия в фаренгейт

const celcius = prompt('Введите температуру по Цельсию: ');
const faren = + ((9 / 5) * celcius + 32).toFixed(1);
alert(`Температура по Фаренгейту ${faren}`);

