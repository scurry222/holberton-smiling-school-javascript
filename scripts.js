$(document).ready(() => {
    $.get("https://smileschool-api.hbtn.info/quotes", (data) => {
      $("#comment-loader").hide();
      data.forEach((d, i) => $("#comment-carousel").append(createComment(d, i)));
    })
    const createComment = (d, i) => {
        return `
            <div class="carousel-item ${i == 0 ? 'active' : ''}">
                <div class="row flex-wrap justify-content-center mb-5">
                    <div class="col col-sm-4 col-md-2 mt-5 d-flex justify-content-xs-end justify-content-center">
                    <img class="img rounded-circle" src="${d.pic_url}" alt="${d.name}">
                    </div>
                    <div class="col-11 col-md-6 col-lg-8 item-content mt-5">
                    <h6 class="content-title pb-3 mr-sm-2">${d.text}</h6>
                    <p class="m-0 font-weight-bold">${d.name}</p>
                    <p class="m-0 font-italic">${d.title}</p>
                    </div>
                </div>
            </div>

        `
    }
})