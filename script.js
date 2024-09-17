// let a = +prompt('vvedite pervoye chislo a')
// let b = +prompt('vvedite vtoroye chislo b')

// if (a > b) {
//     console.log(`${a} bolshe ${b}`);
// } else if(a == b) {
//     console.log("oni ravni");
// } else {
//     console.log(`${b} bolshe ${a}`);
// }


// for (let i = 5; i <= 10; i++) {
//     console.log(i); 
// }


// const obj = {
//     name: 'rhs',
//     job: 'smth'
// }


// const arr = ['apple', 'melon', 'grape']
// console.log(arr[1]);


document.getElementById('telegramForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const phone = document.getElementById('phone').value;
    const token = '7214727437:AAHRrSuEadIqOb4YDCkgB8EZW0lcYzGUlYE';  // Замените на ваш токен
    const chat_id = '-4571562933';  // Замените на ваш chat_id
    const url = `https://api.telegram.org/bot${token}/sendMessage`;

    // Формируем сообщение
    const message = `Name: ${name}\nPhone: ${phone}`;

    const data = {
      chat_id: chat_id,
      text: message
    };

    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(data => {
      if (data.ok) {
        // alert("Message sent!");
       
        const thanks = document.querySelector('#thanks')
        thanks.innerText = 'spasibo chto otpravil danniye'

        setTimeout(() => {
             location.reload()
        }, 3000);
      } else {
        alert("Error sending message.");
      }
    })
    .catch(error => {
      console.error('Error:', error);
      alert("Error sending message.");
    });
  });
