const form = document.getElementById('form');
const container = document.getElementById('container');

// Defining the initial array of data
let dataArray;

// Check if data is already present or not. If the data is not present, then the dataArray will be empty array.
if (JSON.parse(localStorage.getItem('data'))) {
   dataArray = JSON.parse(localStorage.getItem('data'));
} else {
   dataArray = [];
}

// This is the short hand version code of 4-10 lines of code 👇. You can write just the 15 number line of code instead of writing 4-10 lines of code.
// let dataArray = JSON.parse(localStorage.getItem('data')) || [];

// 👉 || 👈 this is the JavaScript operator. It's called Logical OR assignment operator. It's a conditional expression also, like if()...else. It will check is data is exist or not. If data is exist it will keep the data. If data is not exist it will created an empty array.

form.addEventListener('submit', (e) => {
   e.preventDefault();
   const name = e.target["name"].value;
   const className = e.target["class-name"].value;
   const subject = e.target["subject"].value;

   const data = {
      name: name,
      class: className,
      subject: subject
   }

   // push the latest data into the dataArray.
   dataArray.push(data);
   // set the latest data into the localStorage.
   localStorage.setItem('data', JSON.stringify(dataArray));
   displayData(data)
})

// forEach method is like map method. It will work as same as map method works.
// 👉 !! Just keep in mind, map method return a new array on the other hand, forEach method will not return anything. 
dataArray.forEach(data => {
   displayData(data);
});

function displayData(data) {
   const div = document.createElement('div');
   div.classList.add('card');
   div.innerHTML = `
   <div class="card-body">
      <h5 class="card-title">${data.name}</h5>
      <p class="card-subtitle">${data.class}</p>
      <p class="card-text">${data.subject}</p>
   </div>
   `;
   container.appendChild(div);
}

