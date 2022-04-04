let obj = { name: "Sorting Pictures" }
let h1Elem = document.createElement("h1");
h1Elem.innerText = obj.name;
document.body.append(h1Elem);
document.write("After Sorting:");
document.write("<br> <br>");


let likes;
let images = [
    { name: 'Safari', likes: 12, url: 'https://toppng.com/uploads/preview/apple-safari-logo-11549680208swuyqxp97v.png'},
    { name: 'Chrome', likes: 14, url: 'https://www.freepnglogos.com/uploads/google-chrome-png-logo/google-chrome-logo-png-0.png' },
    { name: 'Explorer', likes: 5, url: 'https://pngimg.com/uploads/ie_logo/ie_logo_PNG2.png' },
    { name: 'Mozilla', likes: 13, url: 'https://upload.wikimedia.org/wikipedia/commons/e/e7/Mozilla_Firefox_3.5_logo_256.png' }
];


images.sort(compare);
function compare(a, b) {
    if (parseInt(a.likes)  < parseInt(b.likes)) {
        return -1;
    }
    else if (parseInt(a.likes) > parseInt(b.likes)) {
        return 1;
    }
    else {
        return 0;
    }
}
for (imageItem of images) {
    let imgElem = document.createElement("img");
    imgElem.src = imageItem.url;
    document.body.append(imgElem);
}