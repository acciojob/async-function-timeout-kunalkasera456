//your JS code here. If required.
document.getElementById('btn').addEventListener('click', async function () {
  const textInput = document.getElementById('text');
  const delayInput = document.getElementById('delay');
  const outputDiv = document.getElementById('output');

  const text = textInput.value;
  const delay = parseInt(delayInput.value);

  // Validate inputs
  if (!text || isNaN(delay)) {
    alert('Please enter valid text and delay values.');
    return;
  }

  outputDiv.innerText = 'Loading...';

  try {
    // Use async/await to simulate delay
    await new Promise(resolve => setTimeout(resolve, delay * 1000));

    // Display the text after the delay
    outputDiv.innerText = text;
  } catch (error) {
    console.error('An error occurred:', error);
    outputDiv.innerText = 'Error occurred.';
  }
});