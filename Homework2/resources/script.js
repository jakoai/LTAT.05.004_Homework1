$(() => {
  $.ajax({
    //CORS probleemid
    dataType: 'json',
    url: 'https://api.jsonbin.io/b/61753cc09548541c29c7c0d5',
    headers: {
      'Content-Type': 'application/json',
    },
    success: renderPosts,
  });

  function renderPosts(data) {
    const posts = [];

    $.each(data.posts, (_idx, obj) => {
      const content = `
        <div class="post">
          <div class="post-header">
            <img class="profile_pic" src="https://miro.medium.com/max/256/0*vuQRIjTuwmZ7r6em.jpg" alt="profiilikas">
            <p>${obj.time_created}</p>
          </div>
          <div class="post-content">
            ${obj.image ? '<img src="' + obj.image + '">' : ''}
            <h3>${obj.content}</h3>
            <button>&#128077;</button>
          </div>
        </div>
      `;

      posts.push(content);
    });

    $('.container').html(posts.join(''));
  }

  $('#account-circle').click(() => {
    $('#account-dropdown').toggleClass('visible');
  });
});
