function drawChart() {
  const canvas = document.getElementById("chart");
  const ctx = canvas.getContext("2d");

  ctx.beginPath();
  ctx.moveTo(0, 100);

  for (let x = 0; x < 300; x++) {
    let y = 100 + Math.sin(x * 0.05) * 50;
    ctx.lineTo(x, y);
  }

  ctx.stroke();
}
