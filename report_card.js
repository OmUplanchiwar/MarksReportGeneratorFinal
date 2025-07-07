  const form = document.querySelector("#marksForm");
    form.addEventListener("submit", function (e) {
      e.preventDefault();

      const name = document.getElementById("name").value;
      const roll = document.getElementById("roll").value;
      const studentClass = document.getElementById("class").value;

      const english = parseInt(document.getElementById("english").value);
      const math = parseInt(document.getElementById("math").value);
      const science = parseInt(document.getElementById("science").value);
      const hindi = parseInt(document.getElementById("hindi").value);
      const sst = parseInt(document.getElementById("sst").value);

      const total = english + math + science + hindi + sst;
      const percent = (total / 500 * 100).toFixed(2);
      let grade = "";

      if (percent >= 90) grade = "A+";
      else if (percent >= 75) grade = "A";
      else if (percent >= 60) grade = "B";
      else if (percent >= 40) grade = "C";
      else grade = "F";

      document.getElementById("r-name").textContent = name;
      document.getElementById("r-roll").textContent = roll;
      document.getElementById("r-class").textContent = studentClass;
      document.getElementById("r-total").textContent = total;
      document.getElementById("r-percent").textContent = percent;
      document.getElementById("r-grade").textContent = grade;

      form.classList.add("hidden");
      document.getElementById("reportCard").classList.remove("hidden");
    });