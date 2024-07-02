const API_KEY = "211cb43d38084a57a85ac9d6e9d5e84f";
const url="https://newsapi.org/v2/everything?q=";

window.addEventListener('load', ()=> fetchNews("India"));

async function fetchNews(query){
  const res = await fetch('${url}${query}&apiKey=${API_KEY')
  const data = await res.json();
  console.log(data);
}
