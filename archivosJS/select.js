function ShowSelected()
{
/* Para obtener el valor */
var cod = document.getElementById("departamento").value;
alert(cod);
 
/* Para obtener el texto */
var combo = document.getElementById("departamento");
var selected = combo.options[combo.selectedIndex].text;
alert(selected);
}