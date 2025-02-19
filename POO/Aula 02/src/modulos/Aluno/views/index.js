import prompt from 'prompt-sync';
const input = prompt();
import  {AlunoController}  from './modulos/Aluno/controllers/index.js' //AlunoController.criar - AlunoController.editar


const aluno = new AlunoController();

export class AlunoView{
    criarAluno(){
        const mat = input('Digite a Matrícula: ');
        const nome = input('Digite o Nome: ');
        const email = input('Digite o Email: ');
        const senha = input('Digite a Senha: ');
    
        aluno.criar(mat,nome,email,senha);
        
    }

    listarTodos(){
        aluno.listarTodos();
        
    }

    editarMatricula(){
        const matricula = input("Digite a matrícula do aluno: ");
        aluno.listaPorMatricula(matricula);
        let resposta = input("Deseja editar o nome? (S/N): ")
        resposta = resposta.toLocaleLowerCase();
        let name = aluno.nome;
        let email = aluno.email;
        let senha = aluno.senha;
        if (resposta === "s") {
            let name1 = input('Insira o novo nome: ');
            name = name1;
        }
        let resp = input("Deseja editar o e-mail? (S/N): ")
        resp = resp.toLocaleLowerCase();
        if (resp === "s") {
            let email1 = input('Insira o novo email: ');
            email = email1;
        }
        let rp = input("Deseja editar a senha? (S/N): ")
        rp = rp.toLocaleLowerCase();
        if (rp === "s") {
            let senha1 = input('Insira a nova senha: ');
            senha = senha1;
        } aluno.editar(matricula,name,email,senha);
        
    }

    excluirTodos(){
        aluno.deletarTodos();
        
    }

    excluirMatricula(){
        const matricula = input("Digite a matrícula: ")
        aluno.deletarPorMatricula(matricula);
        
    }
}