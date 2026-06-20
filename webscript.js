function searchProduct() {
  const query = document.getElementById("searchBox").value.toLowerCase().trim();
  const resultsTable = document.getElementById("resultsTable");
  const resultsBody = document.getElementById("resultsBody");

  resultsBody.innerHTML = "";

  fetch("https://fakestoreapi.com/products")
    .then(res => res.json())
    .then(data => {
      const filtered = data.filter(item =>
        item.title.toLowerCase().includes(query)
      );

      if (filtered.length === 0) {
        alert("No results found.");
        resultsTable.style.display = "none";
        return;
      }

      filtered.forEach(item => {
        const row = `
          <tr>
            <td>${item.title}</td>
            <td>$${item.price}</td>
            <td><a href="#" target="_blank">View</a></td>
            <td><button onclick="saveItem('${item.title}', '${item.price}', '#')">Save</button></td>
          </tr>`;
        resultsBody.innerHTML += row;
      });

      resultsTable.style.display = "table";
    })
    .catch(err => {
      console.error("API Error:", err);
      alert("Something went wrong while fetching products.");
    });
}
const mockData = {
  "iphone 13": [
    { store: "Croma", price: "?44,990/-", link: "https://www.croma.com/searchB?q=iphone%2013%3Arelevance&text=iphone%2013" },
    { store: "Reliance Digital", price: "?45,400/-", link: "https://www.reliancedigital.in/collection/apple-iphones?internal_source=navigation&page_no=1&page_size=12&page_type=number&model=13&q=iphone%2013" },
    { store: "Meesho", price: "?57,500/-", link: "https://www.meesho.com/search?q=iphone+13" }
  ],
  "iphone 15": [
    { store: "Croma", price: "?62,990/-", link: "https://www.croma.com/searchB?q=iphone%2015%3Arelevance&text=iphone%2015" },
    { store: "Reliance Digital", price: "?64,899/-", link: "https://www.reliancedigital.in/collection/apple-iphone-15-mobiles?q=iphone%2015&page_no=1&page_size=12&page_type=number" },
  ],
  "samsung galaxy s24 ultra": [
    { store: "Croma", price: "?1,19,000/-", link: "https://www.croma.com/searchB?q=samsung%20s24%20ultra%3Arelevance&text=samsung%20s24%20ultra" },
    { store: "Reliance Digital", price: "?1,16,000/-", link: "https://www.reliancedigital.in/collection/samsung-mobiles?internal_source=navigation&page_no=1&page_size=12&page_type=number&model=S24%20Ultra&q=samsung%20galaxy%20s24%20ultra" }
  ],
  "tops": [
    { store: "Myntra", price: "?999/-", link: "https://www.myntra.com/tops" },
    { store: "Meesho", price: "?199/-", link: "https://www.meesho.com/search?q=tops&searchType=manual&searchIdentifier=text_search" }
  ],
  "jeans": [
    { store: "Ajio", price: "?1,499/-", link: "https://www.ajio.com/search/?text=jeans" },
    { store: "Meesho", price: "?299/-", link: "https://www.meesho.com/search?q=jeans" }
  ],
  "laptops": [
    { store: "Croma", price: "?60,000/-", link: "https://www.croma.com/searchB?q=laptops%3Arelevance&text=laptops" },
    { store: "Reliance Digital", price: "?58,500/-", link: "https://www.reliancedigital.in/collection/laptops?internal_source=navigation&page_no=1&page_size=12&page_type=number&q=laptops" }
  ],
  "bluetooth earbuds": [
    { store: "Croma", price: "?2,999/-", link: "https://www.croma.com/searchB?q=bluetooth%20earbuds%3Arelevance&text=bluetooth%20earbuds" },
    { store: "Reliance Digital", price: "?2,799/-", link: "https://www.reliancedigital.in/products?q=bluetooth%20earbuds" }
  ],
  "home essentials": [
    { store: "Amazon", price: "?299/-", link: "https://www.amazon.in/s?k=home+essentials" },
    { store: "Meesho", price: "?199/-", link: "https://www.meesho.com/search?q=home+essentials" }
  ]
};
window.onload = function () {
  const username = localStorage.getItem("username") || "Guest";
  document.getElementById("greetText").innerHTML = `Namaste, ${username}! Are you ready to save?`;
}

function searchProduct() {
  const query = document.getElementById("searchBox").value.toLowerCase().trim();
  const resultsTable = document.getElementById("resultsTable");
  const resultsBody = document.getElementById("resultsBody");
  resultsBody.innerHTML = "";

  if (mockData[query]) {
    mockData[query].forEach(item => {
      const row = `
        <tr>
          <td>${item.store}</td>
          <td>${item.price}</td>
          <td><a href="${item.link}" target="_blank">View</a></td>
          <td><button onclick="saveItem('${item.store}', '${item.price}', '${item.link}')">Save</button></td>
        </tr>
      `;
      resultsBody.innerHTML += row;
    });
    resultsTable.style.display = "table";
  } else {
    resultsTable.style.display = "none";
    alert("No data found for the entered product.");
  }
}

function saveItem(store, price, link) {
  const username = localStorage.getItem("username");
  if (!username) return;

  const savedItems = JSON.parse(localStorage.getItem(`${username}_savedItems`) || "[]");
  savedItems.push({ store, price, link });
  localStorage.setItem(`${username}_savedItems`, JSON.stringify(savedItems));
  alert("Item saved to wishlist!");
}
