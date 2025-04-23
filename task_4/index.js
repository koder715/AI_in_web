// 1. Получение данных с API (GET)
async function fetchData() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        const data = await response.json();
        displayData(data);  // Отображаем полученные данные
    } catch (error) {
        console.error("Ошибка при получении данных: ", error);
    }
}

// 2. Отправка данных на сервер (POST)
async function postData() {
    const newPost = {
        title: 'New Post',
        body: 'This is a new post sent via POST request.',
        userId: 1
    };

    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newPost)
        });

        const result = await response.json();
        console.log('Отправленные данные: ', result);
    } catch (error) {
        console.error("Ошибка при отправке данных: ", error);
    }
}

// 3. Отображение данных на странице
function displayData(data) {
    const container = document.getElementById('data-container');
    data.forEach(post => {
        const postElement = document.createElement('div');
        postElement.classList.add('post');
        postElement.innerHTML = `
            <h2>${post.title}</h2>
            <p>${post.body}</p>
        `;
        container.appendChild(postElement);
    });
}


// Вызов функций
fetchData(); 
postData();   
