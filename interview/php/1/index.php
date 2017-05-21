<form method="post" name="hitung" action="index.php">
<input type="text" name="number" value="<?php echo isset($_POST['number']) ? $_POST['number'] : 0?>" />
    <input type="submit" name="submit" value="Hitung" />
</form>

<table border="1">
    <tr>
        <td>
            n
        </td>
        <td>
            hasil
        </td>
    </tr>
    <?php
        if(isset($_POST['number'])):
            $number = $_POST['number'];
            $i = 0;
            $a = 0;
            $b = 1;
            $beforeNumber = 0;
            $nextNumber = 0;
            for ($i; $i<=$number; $i++) {
    ?>
        <tr>
            <td>
                <?php echo $i; ?>
            </td>
            <td>
                <?php
                    if ($i == 1 || $i == 2) {
                        $b = 1;
                    }
                    if ($i == 0) {
                        $b = 0;
                    }
                    if ($i > 1) {
                        $tmp = $a;
                        $a = $b;
                        $b = $tmp + $a;
                    }
                    echo $b;
                ?>
            </td>
        </tr>
    <?php } ?>
    <?php endif; ?>
</table>
