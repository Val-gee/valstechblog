console.log(window.location.href);
console.log(window.location.pathname.split('/'));

const comment = async (event) => {
    event.preventDefault();

    const comment = document.querySelector('#comment-text').value.trim();
    console.log(comment);

    const blogId = window.location.pathname.split('/')[2];

    if (comment) {
        const response = await fetch(`/api/comments/${blogId}`, {
            method: 'POST',
            body: JSON.stringify({ comment: comment}),
            headers: { 'Content-Type': 'application/json' }
        });

        if (response.ok) {
            document.location.replace(`/blog/${blogId}`);
        } else {
            alert('Failed to create comment')
        }
    }
};

document.querySelector('.new-comment-form').addEventListener('submit', comment);