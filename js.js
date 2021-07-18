const btn = document.querySelector("button");
const p1 = document.querySelector(".p1");
const p2 = document.querySelector(".p2");
const loader = document.querySelector(".loader");

async function jokes() {
  try {
    const response = await fetch(
      `https://official-joke-api.appspot.com/jokes/random`
    );
    const data = await response.json();

    p1.innerHTML = data.setup;
    p1.style.display = "block";

    p2.innerHTML = data.punchline;
    p2.style.display = "block";
    loader.style.display = "none";
  } catch {
    alert("Something Went Wrong!");
    console.log(`Something Went Wrong!`);
  }
}

// Everything
btn.addEventListener("click", () => {
  p1.style.display = "block";
  loader.style.display = "block";
  p1.innerHTML = "";
  p2.innerHTML = "";
  jokes();
});
