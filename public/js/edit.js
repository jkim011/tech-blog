const postId = document.querySelector('input[name="post-id"]').value;

const editFormHandler = async (event) => {
  event.preventDefault();
  // Grabs values from text inputs for post title and content
  const postTitle = document.querySelector('input[name="post-title"]').value;
  const postContent = document.querySelector('textarea[name="post-body"]').value;

  // Updates post
  const response = await fetch(`/api/post/${postId}`, {
    method: 'PUT',
    body: JSON.stringify({
      postTitle,
      postContent,
    }),
    headers: {
      'Content-Type': 'application/json'
    }
  });

  console.log(response);
  // Takes user back to dashboard after updating post
  if (response.ok) {
    document.location.replace('/dashboard');
  } else {
    alert('Failed to update your post');
  }
  document.location.replace('/dashboard');
};

// Deletes post
const deleteClickHandler = async () => {
  await fetch(`/api/post/${postId}`, {
    method: 'DELETE'
  });
  document.location.replace('/dashboard');
};

document
  .querySelector('#edit-post-form')
  .addEventListener('submit', editFormHandler);
document
  .querySelector('#delete-btn')
  .addEventListener('click', deleteClickHandler);