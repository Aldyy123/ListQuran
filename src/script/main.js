import jquery from 'jquery'
import Audio from "./audio.js";

$.ajax({
  type: "GET",
  url: "https://al-quran-8d642.firebaseio.com/data.json?print=pretty",
  success: function(response) {
    getQuran(response);
  }
});


const getQuran = (qurans) => {
  $.each(qurans, function(i, quran) {
    $(".row").append(`
            <div class="col-md-4 col-lg-3 col-sm-6">
                <div class="card text-dark bg-light mb-3" style="max-width: 18rem;">
                <div class="card-header text-center bg-primary">${quran.nama}</div>
                <div class="card-body">
                <p class="card-text">Artinya : ${quran.arti}</p>
                <p class="card-text">Asma : ${quran.asma}</p>
                <audio class="audio" src="${quran.audio}"></audio>
                <button class="play float-left ml-3 btn btn-dark" data-id="${i}" type="button">Play</button>
                <button class="pause  ml-3 btn btn-dark" data-id="${i}" type="button">Pause</button>
                </div>
                </div>
            </div>
        `);
  });
};


// Event Click

$(".row").on("click", ".play", async function() {
  const id = $(this).data("id");
  const data = $(".audio")[id];
  try {
    const result = await Audio.play(data);
  } catch (error) {
    // console.log(error);
  }
});

$(".row").on("click", ".pause", async function() {
  const id = $(this).data("id");
  const data = $(".audio")[id];

  try {
    const result = await Audio.pause(data);
  } catch (error) {
    // console.log(error);
  }
});
