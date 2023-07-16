fetch('https://jsonplaceholder.typicode.com/posts')
.then(response => response.json())
.then(data => {
    const tbl = document.querySelector('#tbl');
    const tb = tbl.getElementsByTagName('tbody')[0];
    data.forEach(post => {
        const row=tb.insertRow();
        const id=row.insertCell();
        const title=row.insertCell();
        const userId=row.insertCell();
        id.innerHTML = post.id;
        title.innerHTML = post.title;
        userId.innerHTML = post.userId;
    });
})