function calculateBiorhythm() {
  const birthDate = new Date(document.getElementById("birthdate").value);
  const today = new Date();

  const diffDays = Math.floor((today - birthDate) / (1000 * 60 * 60 * 24));

  const physical = Math.sin((2 * Math.PI * diffDays) / 23);
  const emotional = Math.sin((2 * Math.PI * diffDays) / 28);
  const intellectual = Math.sin((2 * Math.PI * diffDays) / 33);

  document.getElementById("result").innerHTML = `
    Physical: ${physical.toFixed(2)} <br>
    Emotional: ${emotional.toFixed(2)} <br>
    Intellectual: ${intellectual.toFixed(2)}
  `;
}
