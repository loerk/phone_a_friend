import $ from 'jquery';

export default function createUser(newUser) {
  console.log('createUser called ' + JSON.stringify(newUser));
  if (newUser) {
    console.log('calling register endpoint');
    $.ajax({
      url: '/api/users',
      type: 'POST',
      contentType: 'application/json',
      data: JSON.stringify(newUser),
      success: function () {
        alert('Register implemented. Woohoo!'); // remove this
      },
      error: function (result) {
        if (result.status === 404) {
          alert("POST '/api/users/' endpoint not implemented or an error occurred.");
        } else {
          alert(result.responseText);
        }
      }
    });
  }
}
