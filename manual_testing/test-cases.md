# OrangeHRM Login Page Test Cases

---

## TC-001
### Title
Verify successful login with valid credentials

### Preconditions
User is on the login page

### Test Steps
1. Enter valid username
2. Enter valid password
3. Click Login button

### Test Data
Username: Admin  
Password: admin123

### Expected Result
User should successfully login and dashboard should appear.

---

## TC-002
### Title
Verify login with invalid password

### Preconditions
User is on the login page

### Test Steps
1. Enter valid username
2. Enter invalid password
3. Click Login button

### Test Data
Username: Admin  
Password: wrong123

### Expected Result
System should display invalid credentials error message.

---

## TC-003
### Title
Verify login with empty username and password

### Preconditions
User is on login page

### Test Steps
1. Leave username empty
2. Leave password empty
3. Click Login button

### Expected Result
Required field validation messages should appear.

---

## TC-004
### Title
Verify password field is masked

### Preconditions
User is on login page

### Test Steps
1. Enter password in password field

### Expected Result
Password characters should not be visible.

---

## TC-005
### Title
Verify forgot password functionality

### Preconditions
User is on login page

### Test Steps
1. Click Forgot Password
2. Enter valid username
3. Click Reset Password

### Expected Result
System should display confirmation message for password reset.