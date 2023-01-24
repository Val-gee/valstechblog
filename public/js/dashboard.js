const newBlog = async (event) => {
    event.preventDefault();

    const name = document.querySelector('#blog-name').value.trim();
    const description = document.querySelector('#blog-text').value.trim();

    if (name && description) {
        const response = await fetch(`/api/blogs`, {
            method: 'POST',
            body: JSON.stringify({ name, description }),
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (response.ok) {
            document.location.replace('/dashboard');
        } else {
            alert('Failed to create blog')
        }
    }
};

const logout = async () => {
    const response = await fetch(`/api/users/logout`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
        document.location.replace('/');
    } else {
        alert(response.statusText)
    }
};

const deleteBlog = async (event) => {
    event.preventDefault();
    console.log('Removing post...');

    const deleteBlogId = event.target.getAttribute("data-deletePost-id");
    console.log(deleteBlogId);

    if (deleteBlogId) {
        console.log("Starting fetch /api/blogs/id")
        const response = await fetch(`/api/blogs/${deleteBlogId}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            }            
        });

        if (response.ok) {
            document.location.replace("/dashboard")
        } else {
            console.log("Status Text: ", response.statusText)
        }
    }

}

document.querySelector('#logout').addEventListener('click', logout);
document.querySelector('.new-blog-form').addEventListener('submit', newBlog);
const deletePostBtns = document.querySelectorAll('.deleteBtn');
deletePostBtns.forEach(btn => {
    console.log('Clicking');
    btn.addEventListener('click', deleteBlog)
});