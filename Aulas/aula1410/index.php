<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Aula 8 - Back-End PHP</title>
    <link rel="stylesheet" href="style.css">
</head>

<body>
    <h1>Aula 8 - Back-End PHP</h1>

    <?php
    // Código executado pelo servidor
    echo '<h1 class=hello>Olá Mundo PHP! ' . $nome . '</h1>';
    $nome = 'Nicolas';

    ?>

    <script>
        document.write('<h1 class=hello> Olá Mundo JS</h1>')
    </script>
</body>

</html>