export function Header() {
  const header = document.createElement("header");
  header.innerHTML = `
    <h1>Number Counter</h1>
    <p>A simple counter. Press increment to increase the count by one and press decrement to decrease the count by one.</p>
  `;
  return header;
}

