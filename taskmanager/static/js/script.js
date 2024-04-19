$(document).ready(function(){
    $('.sidenav').sidenav();
  });

let footerText = `<a class="grey-text text-lighten-4 right" href="https://github.com/leonp84" target="_blank">Leon A. Potgieter</a>`
$('#current-year').html(new Date().getFullYear() + ' © Leon Potgieter / Code Institude' + footerText);
