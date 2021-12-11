const like = async (id) => {
  const likeBtn = document.querySelector(`#like-btn-${id}`);

  if (likeBtn.classList.contains('disabled')) {
    return;
  }

  const currentLikes = parseInt(likeBtn.children[0].innerHTML);

  const res = await fetch(`/like-post/${id}`, {
    method: 'POST',
  });

  if (res.status === 200) {
    likeBtn.children[0].innerHTML = currentLikes + 1;
    likeBtn.classList.add('disabled');
  } else {
    alert('Something went wrong');
  }
};
