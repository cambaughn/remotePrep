function color(color, property) {
  if (color === 'grey' || color === 'gray') {
    $('body').css(property, '#ecf0f1')
  }
}

let background = {
  color: function(color) {
    if (color === 'grey' || color === 'gray') {
      $('body').css('background-color', '#ecf0f1')
    }
    if (color === 'purple') {
      $('body').css('background-color', '#9b59b6')
    }
    if (color === 'midnight') {
      $('body').css('background-color', '#2c3e50')
    }
  }
}
