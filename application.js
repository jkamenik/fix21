config = {
  types: [{
    // "red - Protein - 6", "green - Veg - 6", "purple - Fruit - 4", "yellow - Carb - 4", "orange - - 1", "blue - Fats - 1", "tsp - - 6"
    color: 'red',
    name:  'Protein',
    count: 6,
    checkboxes: [1,2,3,4,5,6]
  },{
    color: 'green',
    name:  'Veg',
    count: 6,
    checkboxes: [1,2,3,4,5,6]
  },{
    color: 'purple',
    name:  'Fruit',
    count: 4,
    checkboxes: [1,2,3,4]
  },{
    color: 'yellow',
    name:  'Carb',
    count: 4,
    checkboxes: [1,2,3,4]
  },{
    color: 'orange',
    name:  '???',
    count: 1,
    checkboxes: [1]
  },{
    color: 'blue',
    name:  'Fat',
    count: 1,
    checkboxes: [1]
  },{
    color: 'tsp',
    name:  'Teaspoon',
    count: 6,
    checkboxes: [1,2,3,4,5,6]
  }],
}

$(document).ready(function(){
  $.Mustache.addFromDom();

  var rendered = $.Mustache.render('template',config);

  $('body').html(rendered);

  $('input').each(getState).click(saveState)

  $('button').click(reset);
});

function reset(){
  $.localStorage().clear();
  window.location = window.location;
}

function getState(){
  var self  = $(this);
  var key   = self.attr('id');
  var value = $.localStorage(key) || false;

  self.attr('checked', value);
}

function saveState(){
  var self  = $(this);
  var value = self.is(':checked');
  var key   = self.attr('id');

  $.localStorage(key,value);
  console.log($.localStorage(key));
}
