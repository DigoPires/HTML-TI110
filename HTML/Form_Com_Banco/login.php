<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Tela de Login</title>
    <link rel="stylesheet" href="telaLogin.css">
</head>
<body>
    
    <div class="box">
        <h1>Realize o Login</h1>
        <br><br>
        <form action="testarLogar.php" method="POST" >  
        <input type="text" name="email" placeholder="E-mail" class="inputUser" > 
        <br><br>
        <input type="password" name="senha" placeholder="Senha" class="inputUser">
        <br><br>
        <input type="submit" name="submit" value="Enviar" class="botaoNovo">
        </form>                        
    </div>

</body>
</html>