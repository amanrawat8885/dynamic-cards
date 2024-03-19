function createCard(img, name, desc) {
    let html = `
    <div class="col-lg-4 col-md-6 mt-3">
        <div class="card ms-3 border-0 rounded shadow" style="width: 18rem;">
            <img src="${img}" class="card-img-top" alt="">
            <div class="card-body">
                <h5 class="card-title">${name}</h5>
                <p class="card-text">${desc}</p>
                <a href="#" class="btn btn-primary">Details</a>
            </div>
        </div>
    </div>`
    
    document.querySelector(".row").innerHTML = document.querySelector(".row").innerHTML + html;

}

createCard("./img2.jpg", "Sumit Rawat", "I am a Software Developer");
createCard("./img1.jpg", "Ashok Rawat", "I am a Frontend Developer");
createCard("./img3.webp", "Anil Rawat", "I am a PHP Developer");
