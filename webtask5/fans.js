const commentInput = document.querySelector("#comment");
const usernameInput = document.querySelector("#username");
const allComments = document.querySelector("#allComments");
localStorage.setItem('fans', '');

addEventListener("online", (e) => {
  for (const message of localStorage.fans.split(';')) {
    const msg = JSON.parse(message);
    sendMessageToServer(msg.username, msg.comment, msg.time);
  }
});

function isOnline() {
  return window.navigator.onLine;
}

const handleMessage = (username, comment, time) => {
  if(isOnline()) {
    sendMessageToServer(username, comment, time);
  }
  else {
    addToLocalStorage(username, comment, time);
  }
}

function sendMessageToServer(username, comment, time) {
  // like sending to the server...
  addToBlock(username, comment, time);
}

function addToBlock(username, comment, time) {
  allComments.innerHTML += `<li class="list-group-item">
                              Username <strong style="color: #8FD9A8;">${username}</strong> added: <br>
                              "${comment}" <br> on <em style="color: #28B5B5;">${time}</em>
                            </li>`;

}

function addToLocalStorage(username, comment, time) {
  let obj = {username: username, comment: comment, time: time}
  // making a string from an object
  localStorage.fans += `${JSON.stringify(obj)};`;
}

function addComment() {
  const time = new Date().toDateString();
  const listItem = document.createElement('li');

  const username = usernameInput.value.trim();
  const comment = commentInput.value.trim();

  if (!checkValue(username, comment)) {
    alert("Your comment should have minimum 1 symbol length.");

    return;
  }
  handleMessage(username, comment, time);

  usernameInput.value = '';
  commentInput.value = '';
}

const checkValue = (username, comment) => {
  return !!(username && comment);
}
