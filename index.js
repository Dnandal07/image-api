var b= document.getElementById("i");
async function fetchData() {
    let response = await fetch('https://api.flickr.com/services/rest/?method=flickr.galleries.getPhotos&api_key=d98f34e2210534e37332a2bb0ab18887&gallery_id=66911286-72157647277042064&format=json&nojsoncallback=1%27&extras=url_n')
    let body = await response.json();
    let ph= body.photos.photo;
    for (let i=0; i<ph.length; i++){
        let a=ph[i].url_n;
            var img = document.createElement('img');
            img.src = "" + a;
            b.appendChild(img);
            console.log(a);
    }
}
fetchData();


