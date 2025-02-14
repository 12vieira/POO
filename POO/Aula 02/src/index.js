import prompt from 'prompt-sync';

import  {AlunoController}  from './modulos/Aluno/controllers/index.js'

const input = prompt();

export function CriarAluno(){
    const aluno = new AlunoController();
    const mat = input('Digite a Matrícula: ');
    const nome = input('Digite o Nome: ');
    const email = input('Digite o Email: ');
    const senha = input('Digite a Senha: ');

    aluno.criar(mat,nome,email,senha)
}
export function ListarTodos(){
    const aluno = new AlunoController();
    aluno.listarTodos();
}
export function EditarMatricula(){
    
    const aluno = new AlunoController();
    const matricula = input("Digite a matrícula do aluno: ");
    aluno.listaPorMatricula(matricula);
    const resposta = input("Deseja editar o nome? (S/N): ")
    resposta = resposta.toLocaleLowerCase();
    if (resposta === "s") {
        const name = input('Insira o novo nome: ');
        aluno.nome = name;
    } else {
        aluno.nome = aluno.nome;
    }
    const resp = input("Deseja editar o e-mail? (S/N): ")
    resp = resp.toLocaleLowerCase();
    if (resp === "s") {
        const email = input('Insira o novo email: ');
        aluno.email = email;
    } else {
        aluno.email = aluno.email;
    }
    const rp = input("Deseja editar a senha? (S/N): ")
    rp = rp.toLocaleLowerCase();
    if (rp === "s") {
        const senha = input('Insira a nova senha: ');
        aluno.senha = senha;
    } else {
        aluno.senha = aluno.senha;
    }
}
export function ExcluirTodos(){
    const aluno = new AlunoController();
    aluno.deletarTodos();
}
export function ExcluirMatricula(){
    const aluno = new AlunoController();
    const matricula = input("Digite a matrícula: ")
    aluno.deletarPorMatricula(matricula);
}
export function MenuPrincipal(){
    
    const options = [
        "+-----------------------------------+",
        "| Menu Principal                    |",
        "+-----------------------------------+",
        "|1 - Criar Novo Aluno               |",
        "|2 - Listar Todos os Alunos         |" ,
        "|3 - Editar Aluno por Matrícula     |",
        "|4 - Excluir Todos os Alunos        |",
        "|5 - Excluir por Matrícula          |",
        "|0 - Sair                           |",
        "+-----------------------------------+"  
    ];

    console.log(options);
    const choice = input('Digite a Opção Desejada: ');
    switch (choice) {
        case '1':
            console.log('em desenvolvimento...');
            CriarAluno();
            break;
        case  '2':
            console.log('em desenvolvimento...');
            ListarTodos();
            break;
        case '3': 
            console.log('em desenvolvimento...');
            EditarMatricula();
            break;
        case '4': 
            console.log('em desenvolvimento...');
            ExcluirTodos();
            break;
        case '5': 
            console.log('em desenvolvimento...');
            ExcluirMatricula();
            break;
        case '0': 
            break;  
        default:
            break;
    }
    
}

MenuPrincipal();


/*
const aluno1 = new AlunoController()

aluno1.criar("a9111","Irineu","ireneu@edum.senac.br","@123")
aluno1.criar("a9222","Borges","borges@edum.senac.br","@123")

aluno1.listarTodos()

aluno1.deletarPorMatricula("a9111")
aluno1.listarTodos()

aluno1.editar('a9222',null,"borgeseditado@edum.senac.br",null)
aluno1.listarTodos()*/
