<!-- Envio de dados de um formulário para o banco -->

<?php 
    if(isset($_POST['submit'])) {
        // Exibindo os dados recebidos do formulário
        // print_r('Nome: ' . $_POST['nome']);
        // print_r('<br>');
        // print_r('E-mail: ' . $_POST['email']);
        // print_r('<br>');
        // print_r('Senha: ' . $_POST['senha']);
        // print_r('<br>');
        // print_r('Telefone: ' . $_POST['telefone']);
        // print_r('<br>');
        // print_r('Gênero: ' . $_POST['genero']);
        // print_r('<br>');
        // print_r('Data de Nascimento: ' . $_POST['data_nascimento']);
        // print_r('<br>');
        // print_r('Endereço: ' . $_POST['endereco']);
        // print_r('<br>');
        // print_r('Cidade: ' . $_POST['cidade']);
        // print_r('<br>');
        // print_r('Estado: ' . $_POST['estado']);
    
        include_once('config.php'); // Incluindo o arquivo de configuração do banco de dados
    
        // Recebendo os dados do formulário
        $nomecompleto = $_POST['nome'];
        $email = $_POST['email'];
        $senha = $_POST['senha'];
        $telefone = $_POST['telefone'];
        $genero = $_POST['genero'];
        $data_nascimento = $_POST['data_nascimento'];
        $endereco = $_POST['endereco'];
        $cidade = $_POST['cidade'];
        $estado = $_POST['estado'];
    
        // Inserindo os dados recebidos no banco de dados
        $result = mysqli_query($conexao, "insert into tb_FormularioCadastro(nomeCompleto, email, senha, telefone, genero, dataNasc, endereco, cidade, estado) values ('$nomecompleto', '$email', '$senha', '$telefone', '$genero', '$data_nascimento', '$endereco', '$cidade', '$estado')"); // mysqli_query: Executa a consulta SQL especificada no banco de dados associado à conexão fornecida.
    
        // Redirecionando para a página de login após a inserção bem-sucedida dos dados
        header('Location: login.php');
    }
?>