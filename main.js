// Explorer

// getChirp();
// function getChirp() {

//
// $.getJSON('https://shielded-taiga-17184.herokuapp.com/posts')
// .then(function(response) {
  // $('#chirpy').html('<table class="table table-striped"></table>')
  // $('#chirpy table').append('<tr><th>Avatar</th><th>User</th><th>Chirp</th></tr>')
  //
  // response.forEach(function(chirp){
  //     $('#chirpy table').append(`
  //       <tr><td><img class="img-circle" src="${chirp.user.photo_url}"></td><td> ${chirp.user.username} </td><td>  ${chirp.body}<p><small>Created At: ${moment(chirp.created_at).format('LLLL')}</small></p></td></tr>
  //     `)
  //   })
  // })
// }

//Adventure

$.getJSON('https://shielded-taiga-17184.herokuapp.com/posts')
.done(function(chirps) {
  var source   = $("#chirps-template").html();
  var template = Handlebars.compile(source);
  var context = {chirp: chirps};
  var newHtml    = template(context);
  $("#chirpy").append(newHtml)})

  Handlebars.registerHelper('formatTime', function(time) {
    return moment(time).format('LLLL')
  })
