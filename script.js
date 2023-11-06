// javascript
// // API-ni chaqirish uchun fetch() funksiyasidan foydalanamiz
// fetch('https://example.com/api?key=your_api_key')
//   .then(response => response.json()) // JSON formatdagi javobni olish
//   .then(data => {
//     // API javobini ishlaymiz
//     console.log(data);
//   })
//   .catch(error => {
//     // Xatoliklar uchun xatolik xabarlarni ko'rsatamiz
//     console.error('Error:', error);
//   });

// // So'rov tayyorlash
// const url = 'https://example.com/api';
// const apiKey = 'your_api_key';
// const query = 'search_query';

// // API so'rovini yuborish
// fetch(`${url}?key=${apiKey}&q=${query}`)
//   .then(response => response.json())
//   .then(data => {
//     // Javobni ishlaymiz
//     console.log(data);
//   })
//   .catch(error => {
//     console.error('Error:', error);
//   });



function appendToDisplay(value) {
  document.getElementById('display').value += value;
}

function clearDisplay() {
  document.getElementById('display').value = '';
}

function calculate() {
  var expression = document.getElementById('display').value;
  var result = eval(expression);
  document.getElementById('display').value = result;
}

