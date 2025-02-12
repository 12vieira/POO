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
            CriarAluno()
            break;
        case  '2':
            console.log('em desenvolvimento...');
            break;
        case '3': 
            console.log('em desenvolvimento...');
            break;
        case '4': 
            console.log('em desenvolvimento...');
            break;
        case '5': 
            console.log('em desenvolvimento...');
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
