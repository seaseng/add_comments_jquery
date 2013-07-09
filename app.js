$(document).ready(function () {

  $('#new_comment_button').on('click', function(e) {
    $(this).hide();
    $("form#new_comment").toggleClass("hidden");
  });

  function clearContents(){
    $('#new_comment textarea').val('');
    $('#new_comment input[name="user_name"]').val('');
  };

  $('#new_comment').on('submit', function(e) {
    e.preventDefault();
    var $comment =  $('#new_comment textarea').val();
    var $username = $('#new_comment input[name="user_name"]').val();
    
    $newComment = $('#template').clone();
    $newComment.html($comment + '<span class="author">' + $username + '</span>');
    $('#comment_list').append($newComment);
    $("form#new_comment").toggleClass("hidden");
    clearContents();
    $('#new_comment_button').show();
  });
});