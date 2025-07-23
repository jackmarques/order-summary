let payBtn = document.getElementById ('pay');
let cancelBtn = document.querySelector(".cancel");

payBtn.addEventListener ('click', function(){
  // Adiciona a classe 'active'
  pay.classList.add('active');

});

cancelBtn.addEventListener("click", function() {
    payBtn.classList.remove("active");

});
