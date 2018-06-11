var btnPesquisar = document.getElementById( 'pesquisar' );
var btnLimpar = document.getElementById( 'limpar' );
var cont = 0;

btnPesquisar.addEventListener( 'click' , function(){
    let urlRepo = '';
    let name = document.getElementById( 'nome-usuario' ).value;
    urlRepo = 'https://api.github.com/users/' + name + '/repos';
    document.getElementById( 'nome-usuario' ).value = '';
    consultaApiRep( urlRepo );
});

btnLimpar.addEventListener( 'click' ,function(){
    let tabela = document.getElementById( 'tabela' );
    tabela.innerHTML = '';
});

function consultaApiRep( url ){
    axios.get(url, {})
        .then(response => {
            let repositorios = response.data;
            let tabela = document.getElementById( 'tabela' );
            for(let rep of repositorios){
                cont += 1;
                tabela.innerHTML += "<tr>"+
                                        "<td>"+cont+"</td>"+
                                        "<td>"+ rep.id +"</td>"+
                                        "<td>"+ rep.name +"</td>"+
                                        "<td>"+ rep.forks_count +"</td>"+
                                        "<td>"+rep.watchers+"</td>"+
                                        "<td>"+ rep.stargazers_count+"</td>"+
                                        "<td>"+ rep.clone_url+"</td>"+
                                    "</tr>";
            }
        })
        .catch(error => {
            alert('O Usuário Não Existe!');
        });
};