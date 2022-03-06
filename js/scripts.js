let submitBtn = document.getElementById('submit-button');
submitBtn.addEventListener("click", akanName);

function akanName(event){
    let year = document.getElementById('year').value;
    console.log(year);
    if(year === ""){
        console.log("Please enter an year")
    }

    let mm = document.getElementById('monthDate').value;
    console.log(mm);
    if(mm === ""){
        console.log("Please enter a month")
    }
    if(mm > 12 || mm <=0 ){
        console.log("Enter a Valid Month!!")
    }
    let dd = document.getElementById('birthDate').value;
    console.log(dd);
    if(dd === ""){
        console.log("Please enter a day")
    }
    if(dd > 31 || dd <= 0){
        console.log("Enter a Valid Date!!")
    }
    
    let birthDay = dd + '/' + mm + '/' + year;
    console.log(birthDay);

    let dateOfBirth = new Date(birthDay);
    console.log(dateOfBirth);

    let dayOfWeek = dateOfBirth.getDay();
    console.log(dayOfWeek)

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