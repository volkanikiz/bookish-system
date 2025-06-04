<?php
$number1 = $_POST['number1'] ?? '';
$number2 = $_POST['number2'] ?? '';
$operator = $_POST['operator'] ?? '+';
$result = '';
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    if (is_numeric($number1) && is_numeric($number2)) {
        switch ($operator) {
            case '+':
                $result = $number1 + $number2;
                break;
            case '-':
                $result = $number1 - $number2;
                break;
            case '*':
                $result = $number1 * $number2;
                break;
            case '/':
                if ($number2 != 0) {
                    $result = $number1 / $number2;
                } else {
                    $result = 'Infinity';
                }
                break;
        }
    } else {
        $result = 'Invalid input';
    }
}
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>PHP Calculator</title>
    <script src="https://cdn.tailwindcss.com"></script>
</head>
<body class="bg-gray-100 flex items-center justify-center min-h-screen">
    <div class="bg-white p-8 rounded shadow-md w-96">
        <h1 class="text-2xl font-bold mb-4 text-center">Hesap Makinesi</h1>
        <form method="post" class="space-y-4">
            <input type="text" name="number1" value="<?= htmlspecialchars($number1) ?>" placeholder="Birinci sayı" class="w-full p-2 border rounded">
            <select name="operator" class="w-full p-2 border rounded">
                <option value="+" <?= $operator=='+'?'selected':'' ?>>+</option>
                <option value="-" <?= $operator=='-'?'selected':'' ?>>-</option>
                <option value="*" <?= $operator=='*'?'selected':'' ?>>×</option>
                <option value="/" <?= $operator=='/'?'selected':'' ?>>÷</option>
            </select>
            <input type="text" name="number2" value="<?= htmlspecialchars($number2) ?>" placeholder="İkinci sayı" class="w-full p-2 border rounded">
            <button type="submit" class="w-full bg-blue-500 text-white p-2 rounded">Hesapla</button>
        </form>
        <?php if ($result !== ''): ?>
            <div class="mt-4 p-2 bg-gray-200 text-center rounded">
                Sonuç: <span class="font-bold"><?= htmlspecialchars($result) ?></span>
            </div>
        <?php endif; ?>
    </div>
</body>
</html>
