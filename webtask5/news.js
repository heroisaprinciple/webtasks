const allNews = document.querySelector("#allNews");

addEventListener("online", (e) => {
  for (const message of localStorage.news.split('; ')) {
    if(message.length > 0) {
      const msg = JSON.parse(message);
      addToBlock(msg.headline, msg.news, msg.time, msg.pic);
    }
  }
  localStorage.clear();
});

function addToBlock(newsHeadline, news, time, pic) {
  allNews.innerHTML += `<li class="list-group-item">
                              <strong style="color: #8FD9A8;">${newsHeadline}</strong>: <br>
                              "${news}" <br> on <em style="color: #28B5B5;">${time}</em> with  <br>
                              <img src="${pic}" height="200px" width="200px">
                            </li>`;
}
