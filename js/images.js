function sectionNull() {
    const section = document.getElementById('images');
    section.innerHTML = '';
}
function commentGet() {
    sectionNull();
    fetch('https://jsonplaceholder.typicode.com/comments')
        .then(response => response.json())
        .then(comments => showThumnail(comments, false))
}

function imageGet() {
    sectionNull();
    fetch('https://jsonplaceholder.typicode.com/photos')
        .then(response => response.json())
        .then(images => showThumnail(images, true))
}

function showThumnail(imagesOrComments, value) {

    const section = document.getElementById('images');
    for (const imageOrComment of imagesOrComments) {
        const div = document.createElement('div');
        if (value == true) {
            div.innerHTML = '';
            div.innerHTML = `<img src="${imageOrComment.thumbnailUrl}" alt="">`;
        }
        else {

            div.innerHTML = `<h3>Comments are: ${imageOrComment.body}</h3?`
        }
        section.appendChild(div);
    }
}




// function showComments(comments) {
//     const section = document.getElementById('images');
//     for (const comment of comments) {
//         const div = document.createElement('div');
//         div.innerHTML = `<p> comments are: ${comment.body}`;
//         section.appendChild(div);
//     }
// }

