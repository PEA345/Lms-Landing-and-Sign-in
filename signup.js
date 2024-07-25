// scripts.js
document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('signup-form');
    const userType = document.getElementById('user-type');
    const studentFields = document.getElementById('student-fields');
    const staffFields = document.getElementById('staff-fields');
    const facultySelect = document.getElementById('faculty');
    const departmentSelect = document.getElementById('department');
    
    userType.addEventListener('change', function() {
        if (this.value === 'student') {
            studentFields.classList.remove('hidden');
            staffFields.classList.add('hidden');
        } else if (this.value === 'staff') {
            staffFields.classList.remove('hidden');
            studentFields.classList.add('hidden');
        } else {
            studentFields.classList.add('hidden');
            staffFields.classList.add('hidden');
        }
    });
    
    facultySelect.addEventListener('change', function() {
        if (this.value === 'engineering') {
            departmentSelect.classList.remove('hidden');
        } else {
            departmentSelect.classList.add('hidden');
        }
    });
    
    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent form submission
        
        const username = document.getElementById('Full name').value;
        const email = document.getElementById('email').value;
        const password = document.getElementById('create-password').value;
        const confirmPassword = document.getElementById('confirm-password').value;
        const userTypeValue = userType.value;
        
        if (password !== confirmPassword) {
            alert('Passwords do not match!');
            return;
        }
        
        if (!username || !email || !password || !confirmPassword || !userTypeValue) {
            alert('Please fill out all required fields.');
            return;
        }

        if (userTypeValue === 'student') {
            const studentId = document.getElementById('student-id').value;
            const course = document.getElementById('course').value;
            if (!studentId || !course) {
                alert('Please fill out all student fields.');
                return;
            }
        }
        
        if (userTypeValue === 'staff') {
            const staffId = document.getElementById('staff-id').value;
            const faculty = facultySelect.value;
            if (!staffId || !faculty) {
                alert('Please fill out all staff fields.');
                return;
            }
            if (faculty === 'engineering') {
                const department = departmentSelect.value;
                if (!department) {
                    alert('Please select a department.');
                    return;
                }
            }
        }
        
        // If validation passes, submit the form
        form.submit();
    });
});