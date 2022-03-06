let submitBtn = document.getElementById('submit-button');
submitBtn.addEventListener("click", akanName);

function akanName(event){
    let dd = document.getElementById('birthDate').value;
    if(dd == ""){
        document.getElementById("error-message-1").innerHTML = "<span style='color:red'>Date Input Can't Be Empty</span>";
    }
    if(dd > 31 || dd <= 0){
        document.getElementById("error-message-2").innerHTML = "<span style='color:red'>Enter a number between 1 to 31</span>";
    }

    let mm = document.getElementById('monthDate').value;
    if(mm === ""){
        document.getElementById("error-message-3").innerHTML = "<span style='color:red'>Month Input Can't Be Empty</span>";
    }
    if(mm > 12 || mm <=0 ){
        document.getElementById("error-message-4").innerHTML = "<span style='color:red'>Enter Month Between 1 to 12</span>";
    }

    let year = document.getElementById('year').value;
    if(year === ""){
        document.getElementById("error-message-5").innerHTML = "<span style='color:red'>Year Input Can't Be Empty</span>";
    }

    
    let birthDay = dd + '/' + mm + '/' + year;
    let dateOfBirth = new Date(birthDay);
    let dayOfWeek = dateOfBirth.getDay();

    let gender = document.getElementsByName('gender');
    let days = ["Sunday","Monday", "Tuesday", "Wednesday","Thurday","Friday","Saturday"];
    let maleNames = ["Kwasi", "Kwadwo", "Kwabena","Kwaku", "Yaw","Kofi","Kwame"];
    let femaleNames = ["Akosua", "Adwoa", "Abenaa","Akua","Yaa","Afua","Ama"];

    for(let i = 0; i<gender.length; i++){
        if(gender[i].checked){
            if(gender[i].id === "male-radio"){
                alert("Your Born on a " + days[dayOfWeek] + " Your Akan Name is " + maleNames[dayOfWeek])
            }
            if(gender[i].id === "female-radio"){
                alert("You Were Born on a " + days[dayOfWeek] + " Your Akan Name is " + femaleNames[dayOfWeek])
            }
        }
    }
    event.preventDefault();
}