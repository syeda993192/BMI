// Function to calculate BMI based on weight and height
function calculateBMI(weight, height) {
    return weight / (height * height);
  }
  
  // Function to determine BMI category
  function getBMICategory(bmi) {
    if (bmi < 18.5) {
      return 'Underweight';
    } else if (bmi >= 18.5 && bmi < 24.9) {
      return 'Normal weight';
    } else if (bmi >= 25 && bmi < 29.9) {
      return 'Overweight';
    } else {
      return 'Obesity';
    }
  }

   // Event listener for the Calculate BMI button
   document.getElementById('calculateBtn').addEventListener('click', function () {
    // Retrieve input values
    const weight = parseFloat(document.getElementById('weight').value);
    const height = parseFloat(document.getElementById('height').value);
    
     // Validate inputs
     if (isNaN(weight) || isNaN(height) || weight <= 0 || height <= 0) {
            document.getElementById('bmiOutput').textContent = "Please enter valid, positive numbers for weight and height.";
            return;
          }