function colorContestSubmit() {
    let elementary = [1, 2, 3, 4, 5, 6];
    let middleSchool = [7, 8, 9];
    let highSchool = [10, 11];

    let gradeInput = document.forms.colorForm.gradeLevel.value;

    let firstName = document.forms.colorForm.firstName.value;
    let lastName = document.forms.colorForm.lastName.value;
    
    let success = false;


    if (firstName === '' || lastName === '') {
       return alert('Both First and Last Name are required!');
    }

    if (!isNaN(firstName) || !isNaN(lastName)) {
       return alert('You entered a number as your first or last name. Please enter a vaild name.');
    }

    if (gradeInput === '') {
        return alert('Please enter your grade!');
    }

    if (elementary.includes(Number(gradeInput))) {
        let message = '<p>Thank you for registering. We have placed you in the Elementary Group. Good luck!</p>';
        document.getElementById('formOutput').innerHTML = message;
        success = true;
    } else if (middleSchool.includes(Number(gradeInput))) {
        let message = '<p>Thank you for registering. We have placed you in the Middle School Group. Good luck!</p>';
        document.getElementById('formOutput').innerHTML = message;
        success = true;
    } else if (highSchool.includes(Number(gradeInput))) {
        let message = '<p>Thank you for registering. We have placed you in the High School Group. Good luck!</p>';
        document.getElementById('formOutput').innerHTML = message;
        success = true;
    } else if (gradeInput === 'K' || gradeInput === 'k') {
        let message = '<p>Sadly Kindergarten age kids are not eligible to participate. Parents should contact Valerie at vfrizzle@magicschool.bus for further information.</p>';
        document.getElementById('formOutput').innerHTML = message;
    } else if (Number(gradeInput) === 12)  {
        let message = '<p>Seniors are not eligible to participate in this contest. Look into your local high school drawing clubs if you are interested in similar contests.</p>';
        document.getElementById('formOutput').innerHTML = message;
    } else if (Number(gradeInput) > 12) {
        let message = '<p>Thank you for your interest. Sadly, you are too old for our contest.</p>';
        document.getElementById('formOutput').innerHTML = message;
    } else if (Number(gradeInput) === 0) {
        // When nothing is entered into the field this still runs. It shouldn't, needs fixing.
        let message = '<p>Thank you for your interest. Sadly, you are too young for our contest.</p>';
        document.getElementById('formOutput').innerHTML = message;
    } else if (gradeInput !== 'K' || gradeInput !== 'k') {
        alert('Please try again, and enter a valid grade.')
    }
    
    if (success) {
        console.log('Congrats '+firstName+' '+lastName+', You are registerd.');
    }
}
