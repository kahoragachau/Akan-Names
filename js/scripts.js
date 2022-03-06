let submitBtn = document.getElementById('submit-button');
submitBtn.addEventListener("click", akanName);

function akanName(event){
    let dd = document.getElementById('birthDate').value;
    if(dd === ""){
        alert("Date input cant be empty");
    }
    if(dd > 31 || dd <= 0){
        alert("Enter a Valid Date!!");
    }

    let mm = document.getElementById('monthDate').value;
    if(mm === ""){
        alert("Month Input Can't be empty")
    }
    if(mm > 12 || mm <=0 ){
        alert("Enter a Valid Month!!")
    }

    let year = document.getElementById('year').value;
    if(year === ""){
        alert("Year Input Can't be empty")
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
                console.log("Your Born on a " + days[dayOfWeek] + " Your Akan Name is " + maleNames[dayOfWeek])
            }
            if(gender[i].id === "female-radio"){
                alert("You Were Born on a " + days[dayOfWeek] + " Your Akan Name is " + femaleNames[dayOfWeek])
                console.log("You Were Born on a " + days[dayOfWeek] + " Your Akan Name is " + femaleNames[dayOfWeek])
            }
        }
    }
    event.preventDefault();
}