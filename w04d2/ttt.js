function playerHasWon($clickedTD, turn){
  console.log(`victory check: turn=${turn}`);
  let returnValue = true; //

  $clickedTD.parent().children().each(function(){ // this was the bug fix for row-win detection
    if (!$(this).hasClass(turn)){
      returnValue = false;
    }
  });
  return returnValue;
}

$(document).ready(function(){
  $('td').click(function(event){
    console.log('event',event);
    let turn = $('#turn').html();
    console.log(`it is ${turn}'s turn.`);
    $(this).addClass(turn);

    if (playerHasWon($(this),turn)){
      alert(`${turn} won!!`);
    }
    console.log(`turn=${turn} has just been checked for victory`);
    $(this).unbind();
    if ('O' === turn){
      $('#turn').html('X');
    } else {
      $('#turn').html('O');
    }
  });  
});
