const postId = document.querySelector('input[name="post-id"]').value;

const commentFormHandler = async (event) => {
  event.preventDefault();
  // Takes value from comment form
  const commentContent = document.querySelector('textarea[name="comment-body"]').value;

  // Attaches new comment to post by postId
  if(commentContent) {
    const response = await fetch('/api/comment', {
      method: 'POST',
      body: JSON.stringify({
        postId,
        commentContent
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    });
    if (response.ok) {
      document.location.reload();
    } else {
      alert(response.statusText);
    }
  };
}

document
  .querySelector('#new-comment-form')
  .addEventListener('submit', commentFormHandler);
