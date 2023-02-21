const newFormHandler = async function(event) {
  event.preventDefault();

  // Grabs value from text input from new post form
  const postTitle = document.querySelector('input[name="post-title"]').value;
  const postContent = document.querySelector('textarea[name="post-body"]').value;

  // Creates new post and returns user to dashboard
  await fetch(`/api/post`, {
    method: 'POST',
    body: JSON.stringify({
      postTitle,
      postContent,
    }),
    headers: { 'Content-Type': 'application/json' },
  });
  document.location.replace('/dashboard');
};

document
  .querySelector('#new-post-form')
  .addEventListener('submit', newFormHandler);