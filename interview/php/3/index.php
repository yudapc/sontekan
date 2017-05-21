function someTest()
{
    $error = _OK;
    $arr = [1,2,3,4];
    $errorMessage = [];
    foreach($arr as $processNumber) {
        array_push($errorMessage, 
            checkSuccess($processNumber, call_user_func("doProcess{$processNumber}"))
        );
    }
    if($errorMessage) {
        $error = implode(" ", $errorMessage);
    }
}

function checkSuccess($processNumber, $processFunction)
{
    if (!isSuccess($processFunction)) {
        return "_PROCESS{$processNumber}FAILED";
    }
}
