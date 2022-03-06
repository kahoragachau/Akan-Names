let submitBtn = document.getElementById('submit-button');
submitBtn.addEventListener("click", akanName);

function akanName(event){
    let year = document.getElementById('year').value;
    console.log(year);

    let mm = document.getElementById('monthDate').value;
    console.log(mm);

    let dd = document.getElementById('birthDate').value;
    console.log(dd);
    
    let birthDay = dd + '/' + mm + '/' + year;
    console.log(birthDay);

    let dateOfBirth = new Date(birthDay);
    console.log(dateOfBirth);

    let dayOfWeek = dateOfBirth.getDay();
    console.log(dayOfWeek)

    let days = ["Sunday","Monday", "Tuesday", "Wednesday","Thurday","Friday","Saturday"];
    let maleNames = ["Kwasi", "Kwadwo", "Kwabena","Kwaku", "Yaw","Kofi","Kwame"];
    let femaleNames = ["Akosua", "Adwoa", "Abenaa","Akua","Yaa","Afua","Ama"];
    event.preventDefault();
}