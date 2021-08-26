function loadComments(){
    fetch('https://jsonplaceholder.typicode.com/comments')
    .then(get => get.json())
    .then(data => displayComments(data))
}
loadComments();
function displayComments(comments){
    const commentContainer = document.getElementById('comment');
    for(const comment of comments){
        const p = document.createElement('p');
        p.classList.add('commentStyle');
        p.innerHTML = `
        <p>${comment.body}</p>
        `;
        commentContainer.appendChild(p);
    }
}