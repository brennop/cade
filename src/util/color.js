function getColor() {
  return `hsl(${Math.random() * 360}, ${Math.random() * 40 +
    20}%, ${Math.random() * 10 + 60}%)`;
}

export default getColor;
