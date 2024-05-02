const tempList = document.getElementById('tempList');

const cities = ["Калининград", "Москва", "Санкт-Петербург", "Сочи", "Южно-Сахалинск"];
const temp = [];

for (i=0; i<cities.length; i++) {
    let cityTemp = prompt(`Введите температуру для города ${cities[i]}`, 0);
    temp.push(parseFloat(cityTemp));
    console.log(temp);
}

for (let i = 0; i < temp.length; i++) {
    const tempItem = document.createElement('li');
    tempItem.textContent = `${cities[i]}: ${temp[i]}°C`;
    tempList.appendChild(tempItem);   
}

function findMaxTemp() {
    const maxTemp = Math.max.apply(null, temp);
    const maxTempItem = document.createElement('li');
    maxTempItem.textContent = `Максимальная температура: ${maxTemp}°C`
    tempList.appendChild(maxTempItem);
}

function findMinTemp() {
    const minTemp = Math.min.apply(null, temp);
    const minTempItem = document.createElement('li');
    minTempItem.textContent = `Минимальная температура: ${minTemp}°C`
    tempList.appendChild(minTempItem);
}

findMaxTemp();
findMinTemp();