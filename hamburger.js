// jQuery( function( $ ){
//   $( ".c-button-open" ).on( "click", function() {
//     $( "aside" ).toggleClass( "is-open" );
//     $( this ).toggleClass( "is-open" );
//   } );
// } );


$(window).on('load resize', function(){
  var w = $(window).width();
  var x = 768;
  if (w <= x) {
//画面サイズが768px以下のときの処理
    $( ".c-button-open" ).on( "click", function() {
      $( ".l-aside" ).toggleClass( "is-open" );
      $( this ).toggleClass( "is-open" );
    } );
  }
});