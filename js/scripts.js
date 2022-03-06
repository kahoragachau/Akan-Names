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
    
    event.preventDefault();
}