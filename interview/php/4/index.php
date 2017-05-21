<form method="post" name="futsal" action="index.php">
    <input type="text" name="number" value="<?php echo isset($_POST['number']) ? $_POST['number'] : 0?>" />
    <input type="submit" name="submit" value="Hitung" />
</form>
<?php
$inputTime = $_POST['number'];
if(isset($inputTime) && $inputTime > 0) {
    $bookeds = [[1, 4], [5, 6], [8, 9], [2, 6]];
    $errorMessage = [];
    $time = [];
    foreach($bookeds as $booked) {
        $time = call_user_func_array('range', $booked);
        if (in_array($inputTime, $time)) {
            array_push($errorMessage, 1);
        }
    }
    if($errorMessage) {
        echo "Already booked!";
    } else {
        echo "Horee..! Available";
    }
}
