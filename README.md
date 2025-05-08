# Password-Tester

This project is a very basic password validation script that checks for a variety of common password rules. It outputs an error message if the password is invalid or confimrs acceptance if it passes all checks.

# Features

**1. Minimum Length:** Must be at least 10 characters long.
**2. No spaces:** May not contain any spaces.
**3. At Least One Digit:** Must contain at least one numeric digit (0-9).
**4. No Repetition of First/Last 3 Characters:** The first three characters of the password many not match the last three characters.

# Limitations

- This script does not prompt for user input or support runtime interaction.
- To test a password, you must manually assign it to the password variable in the source code or edit the source code to add the support you need for either Node.js or Browser.
