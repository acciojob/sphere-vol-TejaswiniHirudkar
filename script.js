function volume_sphere(event) {
    //Write your code here
	event.preventDefault(); // Prevent form submission and page reload

  // Get the value of the radius from the input field
  var radius = parseFloat(document.getElementById('radius').value);

  // Calculate the volume of the sphere using the formula V = (4/3) * π * r^3
  var volume = (4 / 3) * Math.PI * Math.pow(radius, 3);

  // Display the calculated volume in the volume field
  document.getElementById('volume').value = volume.toFixed(4);
} 

window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;
