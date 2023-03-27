function addComment() {
  const commentInput = document.querySelector("#comment");
  const usernameInput = document.querySelector("#username");

  const allComments = document.querySelector("#allComments");
  const time = new Date().toDateString();
  const listItem = document.createElement('li');

  const username = usernameInput.value.trim();
  const comment = commentInput.value.trim();
  if (!checkValue(username, comment)) {
    alert("Your comment should have minimum 1 symbol length.");

    return;
  }
  allComments.innerHTML += `<li class="list-group-item">
                              Username <strong style="color: #8FD9A8;">${username}</strong> added: <br>
                              "${comment}" <br> on <em style="color: #28B5B5;">${time}</em>
                            </li>`;
  usernameInput.value = '';
  commentInput.value = '';
}

const checkValue = (username, comment) => {
  return !!(username && comment);
}
