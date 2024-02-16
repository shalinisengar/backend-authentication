function send(){
$('#list').empty();
  $.get("/todo", (data) => {
    console.log(data);
    for (let todo of data) {
      $("#list").append(`<li> ${todo} </li>`);
    }
  });
  
}
send();
$("#btn").on("click", () => {
    let value = $("#inp").val();
    $.post('/todo',{value},()=>{
      $('#inp').val('')
        send()
    })
    console.log(value, "ssssssssss");

  });

