const test = document.querySelector(".test");

const dodaj = (msg) => {
  const el = document.createElement("p");
  el.innerText = `${msg}`;
  test.appendChild(el);
};

for (let i = 1; i <= 100; i++) {
  if (i % 15 == 0) {
    dodaj("Trojka in petka");
  } else if (i % 5 == 0) {
    dodaj("Petka");
  } else if (i % 3 == 0) {
    dodaj("Trojka");
  } else {
    dodaj(i);
  }
}
