

const form = document.querySelector("form");
form.addEventListener("submit", (e) => {
    e.preventDefault();

    var aml = document.getElementById("aml").value;
    var ntm = document.getElementById("ntm").value;
    var fsd = document.getElementById("fsd").value;
    var cc = document.getElementById("cc").value;
    var rpa = document.getElementById("rpa").value;
    var pw_initial = document.getElementById("pw").value;
    var pw = pw_initial/2;

    var display = document.getElementById("result");

    function credits(marks) {
        if (marks < 40) {
            return 0;
        }
        else if (marks < 45 && marks >= 40) {
            return 4;
        }
        else if (marks < 50 && marks >= 45) {
            return 5;
        }
        else if (marks < 60 && marks >= 50) {
            return 6;
        }
        else if (marks < 70 && marks >= 60) {
            return 7;
        }
        else if (marks < 80 && marks >= 70) {
            return 8;
        }
        else if (marks < 90 && marks >= 80) {
            return 9;
        }
        else {
            return 10;
        }
    }

    var aml_credits = credits(aml);
    var ntm_marks = credits(ntm);
    var fsd_marks = credits(fsd);
    var cc_marks = credits(cc);
    var rpa_marks = credits(rpa);
    var pw_marks = credits(pw);

    var total = (aml_credits*3) + (ntm_marks*3) + (fsd_marks*3) + (cc_marks*2) + (rpa_marks*3) + (pw_marks*10);
    var result = parseFloat(total/24).toFixed(2);
    alert("SGPA : " + result);

    display.innerText="Congratulations ! SGPA : "+result;

})