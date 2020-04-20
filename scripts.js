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
    $.get("https://smileschool-api.hbtn.info/popular-tutorials", (data) => {
        createVideoCard(data, "#tutorial-loader", "#popular-carousel", 'popular');
      })

      const calcQuerySize = () => {
        const width = $(window).innerWidth();
        console.log(width);
        let items = 0;
        (width < 375) ? items = 1 : (width < 768) ? items = 2 : items = 4;

        return items;
    }
    const createVideoCard = (data, loader, carousel, id) => {
        $(loader).hide()
        for (let i = 0; i < data.length; i++) {
            $(carousel).append(
              `
              <div class="carousel-item ${i === 0 ? "active" : ""}">
                <div id="${id}${i}">
                </div>
              </div>
              `
            )
          $(`#${id}${i}`).append(createTutorial(data[i]))
        }

        $('#carousel2 .carousel-item').each(function () {
            var minPerSlide = 2;
            var next = $(this).next();
            if (!next.length) {
              next = $(this).siblings(':first');
            }
            next.children(':first-child').clone().appendTo($(this));
      
            for (var i = 0; i < minPerSlide; i++) {
              next = next.next();
              if (!next.length) {
                next = $(this).siblings(':first');
              }
      
              next.children(':first-child').clone().appendTo($(this));
            }
          });

    }


    const createTutorial = (e) => {
        return `
                <div class="card-body">
                    <div class="img-wrap d-flex align-items-center justify-content-center">
                        <img src=${e.thumb_url} alt="" class="img-fluid"/>
                        <div class="play-button row justify-content-center">
                            <img class="purple-text" src="images/play.png" alt="" />
                        </div>
                    </div>
                    <h4>${e.title}</h4>
                    <p class="text-muted">
                    ${e["sub-title"]}
                    </p>
                    <div class="row align-items-center">
                        <div class="col-2 col-md-4">
                            <img src=${e.author_pic_url} alt="" class="img profile-img rounded-circle">

                        </div>
                        <div class="col purple-text">
                            ${e.author}
                        </div>
                    </div>
                    <div class="row justify-content-between pt-3">
                        <div class="col stars">
                            <img src="images/star_on.png" alt="" class="stars" />
                            <img src="images/star_on.png" alt="" class="stars" />
                            <img src="images/star_on.png" alt="" class="stars" />
                            <img src="images/star_on.png" alt="" class="stars" />
                            <img src="images/star_off.png" alt="" class="stars" />
                        </div>
                    <div class="col-4">
                        <p class="purple-text text-right">${e.duration}</p>
                    </div>
                </div>`
    }

})
