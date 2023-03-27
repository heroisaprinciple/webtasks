const imageInput = document.querySelector("#file");

imageInput.addEventListener('change', (e) => {
  const pic = document.querySelector('#frame');
  pic.style.display = 'block';
  pic.src=URL.createObjectURL(e.target.files[0]);
})

function addNews() {
  const newsInput = document.querySelector("#news");
  const headlineInput = document.querySelector("#headline");

  const allNews = document.querySelector("#allNews");
  const time = new Date().toDateString();
  const listItem = document.createElement('li');

  const headline = headlineInput.value.trim();
  const news = newsInput.value.trim();
  const image = imageInput.value;

  if (!checkValue(headline, news)) {
    alert("Your news should have minimum 1 symbol length.");

    return;
  }
  allNews.innerHTML += `<li class="list-group-item">
                            ${headline}:<br>
                            "${news}" <br>
                            ${image} <br>
                            was added on <em style="color: #28B5B5;">${time}</em>
                        </li>`;
  headlineInput.value = '';
  newsInput.value = '';
  imageInput.value = '';
}

const checkValue = (headline, news) => {
  return !!(headline && news);
}
