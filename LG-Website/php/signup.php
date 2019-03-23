<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">

    <!-- bootstrap -->
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"
        integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
    <!-- font awesome icons -->
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css"
        integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf" crossorigin="anonymous">
    <!-- google fonts -->
    <link
        href="https://fonts.googleapis.com/css?family=Open+Sans:300,300italic,regular,italic,600,600italic,700,700italic,800,800italic"
        rel="stylesheet" />
    <!-- css -->
    <link rel="stylesheet" href="../css/main.css">

    <title>Sign Up</title>
</head>

<body>
    <!-- login page navbar -->
    <nav class="navbar navbar-expand-lg navbar-dark">
        <div class="container">
            <!-- brand/logo -->
            <a href="../index.html" class="navbar-brand"><span id="lg-logo">Leadership</span> Gwinnett</a>

            <!-- button for mobile devices -->
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent">
                <span class="navbar-toggler-icon"></span>
            </button>

            <!-- navbar links -->
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav ml-auto">
                    <li class="nav-item">
                        <a href="../index.html" class="nav-link"><i class="fas fa-user"></i> Login</a>
                    </li>
                </ul>
            </div> <!-- navbar -->
        </div> <!-- container -->
    </nav>

    <div class="container">
        <div class="row justify-content-center align-items-center h-100">
            <form action="signup.php" id="signup" method="post">
                <h3 class="display-4">Create an Account</h3><br>

                <div class="form-row">
                    <div class="col-lg">
                        <label for="sign-up-FIRST_NAME">First Name</label>
                        <input type="text" class="form-control" name="FIRST_NAME" id="sign-up-FIRST_NAME"
                            placeholder="Enter your first name">
                        <span class="errFName"></span>
                    </div> <!-- end first name .col-lg -->

                    <div class="col-lg">
                        <label for="sign-up-LAST_NAME">Last Name</label>
                        <input type="text" class="form-control" name="LAST_NAME" id="sign-up-LAST_NAME"
                            placeholder="Enter your last name">
                        <span class="errLName"></span>
                    </div>
                </div> <!-- end last name .form-row -->

                <div class="form-row">
                    <div class="col-lg">
                        <label for="sign-up-EMAIL_ADDRESS">Email Address</label>
                        <input type="email" class="form-control" name="EMAIL_ADDRESS" id="sign-up-EMAIL_ADDRESS"
                            placeholder="Enter your email address">
                        <span class="errEmail"></span>
                    </div>
                </div> <!-- end email .form-row -->

                <div class="form-row">
                    <div class="col-lg">
                        <label for="sign-up-PASSWORD">Password</label>
                        <input type="password" class="form-control" name="PASSWORD" id="sign-up-PASSWORD"
                            placeholder="Create your password">
                        <span class="errPassword"></span>
                    </div>

                    <div class="col-lg">
                        <label for="sign-up-CONFIRM_PASSWORD">Confirm Password</label>
                        <input type="password" class="form-control" name="CONFIRM_PASSWORD" id="sign-up-CONFIRM_PASSWORD"
                            placeholder="Confirm your password">
                        <span class="errConfirmPassword"></span>
                    </div> <!-- password .col-lg -->
                </div> <!-- end password .form-row -->

                <div class="form-row">
                    <div class="col-lg">
                        <label for="sign-up-ADDRESS">Street Address</label>
                        <input type="text" class="form-control" name="ADDRESS" id="sign-up-ADDRESS"
                            placeholder="Enter your street address">
                        <span class="errAddress"></span>
                    </div>
                </div> <!-- end address .form-row -->

                <div class="form-row">
                    <div class="col-lg-3">
                        <label for="sign-up-CITY">City</label>
                        <input type="text" class="form-control" name="CITY" id="sign-up-CITY"
                            placeholder="Enter your city">
                        <span class="errCity"></span>
                    </div> <!-- end city -->

                    <div class="col-lg-6">
                        <label for="sign-up-STATE">State</label>
                        <select class="form-control" name="STATE" id="sign-up-STATE">
                            <option value="none-selected">Choose your state</option>
                            <option value="AL">Alabama</option>
                            <option value="AK">Alaska</option>
                            <option value="AZ">Arizona</option>
                            <option value="AR">Arkansas</option>
                            <option value="CA">California</option>
                            <option value="CO">Colorado</option>
                            <option value="CT">Connecticut</option>
                            <option value="DE">Delaware</option>
                            <option value="DC">District Of Columbia</option>
                            <option value="FL">Florida</option>
                            <option value="GA">Georgia</option>
                            <option value="HI">Hawaii</option>
                            <option value="ID">Idaho</option>
                            <option value="IL">Illinois</option>
                            <option value="IN">Indiana</option>
                            <option value="IA">Iowa</option>
                            <option value="KS">Kansas</option>
                            <option value="KY">Kentucky</option>
                            <option value="LA">Louisiana</option>
                            <option value="ME">Maine</option>
                            <option value="MD">Maryland</option>
                            <option value="MA">Massachusetts</option>
                            <option value="MI">Michigan</option>
                            <option value="MN">Minnesota</option>
                            <option value="MS">Mississippi</option>
                            <option value="MO">Missouri</option>
                            <option value="MT">Montana</option>
                            <option value="NE">Nebraska</option>
                            <option value="NV">Nevada</option>
                            <option value="NH">New Hampshire</option>
                            <option value="NJ">New Jersey</option>
                            <option value="NM">New Mexico</option>
                            <option value="NY">New York</option>
                            <option value="NC">North Carolina</option>
                            <option value="ND">North Dakota</option>
                            <option value="OH">Ohio</option>
                            <option value="OK">Oklahoma</option>
                            <option value="OR">Oregon</option>
                            <option value="PA">Pennsylvania</option>
                            <option value="RI">Rhode Island</option>
                            <option value="SC">South Carolina</option>
                            <option value="SD">South Dakota</option>
                            <option value="TN">Tennessee</option>
                            <option value="TX">Texas</option>
                            <option value="UT">Utah</option>
                            <option value="VT">Vermont</option>
                            <option value="VA">Virginia</option>
                            <option value="WA">Washington</option>
                            <option value="WV">West Virginia</option>
                            <option value="WI">Wisconsin</option>
                            <option value="WY">Wyoming</option>
                        </select>
                        <span class="errState"></span>
                    </div> <!-- end state -->
                    <div class="col-lg-3">
                        <label for="sign-up-ZIP_POSTAL_CODE">Zip Code</label>
                        <input class="form-control" type="text" name="ZIP_POSTAL_CODE" id="sign-up-ZIP_POSTAL_CODE"
                            placeholder="Zip code">
                        <span class="errZip"></span>
                    </div> <!-- end zip -->
                </div> <!-- end state selection -->

                <button type="submit" class="btn btn-primary submit" id="btnSubmit" name="submit" value="Sign Up">Sign Up</button>
            </form> <!-- end sign up form -->
        </div> <!-- end row -->
    </div> <!-- close container-->

    <!-- jQuery, Popper.js, Bootstrap JS (for bootstrap usage) -->
    <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js"
        integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous">
    </script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js"
        integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous">
    </script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js"
        integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous">
    </script>

    <!-- validation script -->
    <!-- <script src="../js/validation.js"></script> -->
</body>

</html>

<?php
$connection = mysql_connect("localhost", "btwpip_lg", "AB123cd123"); // Establishing Connection with Server
$db = mysql_select_db("btwpip_lg", $connection); // Selecting Database from Server
if(isset($_POST['submit'])){ // Fetching variables of the form which travels in URL
$fname = $_POST['FIRST_NAME'];
$lname = $_POST['LAST_NAME'];
$email = $_POST['EMAIL_ADDRESS'];
$password = $_POST['PASSWORD'];
$cpassword = $_POST['CONFIRM_PASSWORD'];
$address = $_POST['ADDRESS'];
$city = $_POST['CITY'];
$state = $_POST['STATE'];
$zip = $_POST['ZIP_POSTAL_CODE'];
// $cemail = mysql_query("SELECT 'email' FROM `LOGIN1` WHERE `email` = '$email'"); <-- old query

$query="select * from LOGIN1 where email = '$email'";
$result=mysql_query($query);
$numOfRows=mysql_numrows($result);

if($fname == '' || $lname == '' || $email == '' || $password == '' || $cpassword == '' || $address == '' || $city == '' || $state == '' || $zip == ''){
	echo '<p class="container" style="text-align: center; color: red; font-size: 2em;">All fields are required.</p>';
}elseif ($numOfRows==1) {
	echo '<p class="container" style="text-align: center; color: red;">This email is already in use.</p>';
}elseif ($password != $cpassword) {
	echo '<p class="container" style="text-align: center; color: red;">Passwords do not match.</p>';
}else{
	$query = mysql_query("insert into MEMBER1(last_name, first_name, address1, city, state, zip) values ('$lname', '$fname', '$address', '$city', '$state', '$zip')");
	$query2 = mysql_query("insert into LOGIN1(password, email) values ('$password', '$email')");
}
}
mysql_close($connection); // Closing Connection with Server
?>