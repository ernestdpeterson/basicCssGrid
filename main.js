 // browser-sync -s -f 'index.html, main.css, main.js'

function addElement(totalNum) {

  $(".grid").remove();

  for (let i = 0; i < totalNum; i++) {
    $("#one").append( `<div class="grid"><img src="https://picsum.photos/75/100?random=${i}"></div>` );
  }
}

function addPhoto(photoNum) {

  $(".photo-grid").remove();

  for (let i = 0; i < photoNum; i++) {

    let imgWidth = Math.floor(Math.random() * 100)+75;
    let imgHeight = Math.floor(Math.random() * 100)+75;

    $("#photo").append(`<div class="photo-grid"><img src="https://picsum.photos/${imgWidth}/${imgHeight}?random=${i}"></div>`);
  }

}