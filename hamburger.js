jQuery( function( $ ){
  $( ".p-gnavi__title" ).on( "click", function() {
    $( ".p-gnavi__list" ).addClass( "is-open" );
  } );
  $( ".c-button-close" ).on( "click", function() {
    $( ".p-gnavi__list" ).removeClass( "is-open" );
  } );
} );