const newsInput = document.querySelector("#news");
const headlineInput = document.querySelector("#headline");
const allNews = document.querySelector("#allNews");
const imageInput = document.querySelector("#file");
const pic = document.querySelector('#frame');
// an obj with key news and value ''
localStorage.setItem('news', '');

function isOnline() {
  return window.navigator.onLine;
}

imageInput.addEventListener('change', (e) => {
  pic.style.display = 'block';
  const file = imageInput.files[0]
  const reader = new FileReader();
  reader.addEventListener("load", function(){
    pic.src = reader.result
  })
  // transfers to base64-encoded format
  reader.readAsDataURL(file)
})

const handleNews = (newsHeadline, news, time, pic) => {
  if(isOnline()) {
    sendMessageToServer(newsHeadline, news, time, pic);
  }
  else {
    addToLocalStorage(newsHeadline, news, time, pic);
  }
}

function sendMessageToServer(newsHeadline, news, time, pic) {
  alert('News appeared on news page!')
  console.log(newsHeadline, news, time, pic)
}

function addToLocalStorage(newsHeadline, news, time, pic) {
  let obj = {headline: newsHeadline, news: news, time: time, pic: pic}
  // making a string from an object
  localStorage.news += `${JSON.stringify(obj)}; `;
}

function addNews() {
  const time = new Date().toDateString();

  const headline = headlineInput.value.trim();
  const news = newsInput.value.trim();
  const image = pic.src;

  if (!checkValue(headline, news)) {
    alert("Your news should have minimum 1 symbol length.");

    return;
  }
  handleNews(headline, news, time, image);

  headlineInput.value = '';
  newsInput.value = '';
  pic.src = '';
  pic.style.display = 'none';
}

const checkValue = (headline, news) => {
  return !!(headline && news);
}
