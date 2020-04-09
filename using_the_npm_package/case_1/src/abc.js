// abc.js
import * as dummyCalcul from 'dummy-calcul';

document.addEventListener("DOMContentLoaded", function() {
  const result1 = dummyCalcul.add1000(3);
  const result2 = dummyCalcul.mult1000(4);

  const code = document.createElement("p");
  code.innerHTML = "result1: " + result1 + "<br>";
  code.innerHTML += "result2: " + result2 + "<br>";
  document.body.appendChild(code);
});

