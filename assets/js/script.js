fetch('https://wolnelektury.pl/api/authors/adam-mickiewicz/kinds/liryka/parent_books/')
    .then(res => res.json())
    .then(res => fun(res))
let div = document.querySelector('.root')
function fun(res) {
    for (let index = res.length - 4; index < res.length; index++) {
        div.innerHTML += `
        <div class="card card1 p-3 m-3 " style="width: 18rem;">
            <img src="${res[index].simple_thumb}" class="card-img-top" alt="...">
            <div class="card-body">
            <p class="card-text">${res[index].title}</p>
            <h5 class="card-title text-black-50">${res[index].author}</h5>
            </div>
        </div>`
    }
}
fetch('https://wolnelektury.pl/api/books/studnia-i-wahadlo/')
    .then(result => result.json())
    .then(result => fun2(result))
let section = document.getElementById('section4')
function fun2(result) {
    section.innerHTML = `
            <div class="container row d-flex justify-content-center align-items-center">
                <div class="col-lg-5 col-md-12 col-sm-12 d-flex justify-content-center">
                <div class="imgs w-75 h-auto my-5 p-3">
                    <img class="w-100" src="${result.cover}" alt="">
                </div>
                </div>
                <div class=" col-lg-6 w-50 " >
                    <h3 class="fw-bold fs-1">Best Selling Book</h3>
                    <div class="line2 rounded bg-black my-3"></div>
                    <p class="text-black-50 my-3">By ${result.authors[0].name}</p>
                    <h4>${result.title}</h4>
                    ${result.fragment_data.html}
                    <button type="button" class="btn btn-outline-dark border-0 ">Shop It Now <i
                            class="fa-solid fa-arrow-right ms-1"></i></button>
                </div>
            </div>`
}
fetch('https://wolnelektury.pl/api/authors/adam-mickiewicz/kinds/liryka/parent_books/')
    .then(res => res.json())
    .then(res => fun3(res))
let section5 = document.querySelector('#section5')
function fun3(res) {
    for (let index = 8; index < res.length - 30; index++) {
        section5.innerHTML += `
        <div class="card card1 p-3 m-3 " style="width: 18rem;">
            <img src="${res[index].simple_thumb}" class="card-img-top" alt="...">
            <div class="card-body">
            <p class="card-text">${res[index].title}</p>
            <h5 class="card-title text-black-50">${res[index].author}</h5>
            </div>
        </div>`
    }
}
function setActive(button) {
    const activeButton = document.querySelector('.active-btn');
    if (activeButton) {
        activeButton.classList.remove('active-btn');
    }
    button.classList.add('active-btn');
}