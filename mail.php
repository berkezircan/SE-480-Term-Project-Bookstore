<?php

if(isset($_POST['submit'])){
	$name = $_POST['name'];
	$mailFrom = $_POST['mail'];
	$message = $_POST['message'];

	require_once('PHPMailer/PHPMailerAutoload.php');

    $mail = new PHPMailer();
    $mail->isSMTP();
    $mail->SMTPAuth = true;
    $mail->SMTPSecure = 'tls';
    $mail->Host = 'smtp.gmail.com';
    $mail->Port = '587';
    $mail->isHtml();
    $mail->Username = 'berksoft35@gmail.com';
    $mail->Password = 'berkozan35'; 
    $mail->SetFrom('Deneme Mesaj');
    $mail->Subject = "From: ".$mailFrom;
    $mail->Body = "You have received an e-mail from: ".$name.".\n\n".$message;
    $mail->AddAddress('berksoft35@gmail.com');

    header('Location: index.html');

    $mail->Send();
}
?>    