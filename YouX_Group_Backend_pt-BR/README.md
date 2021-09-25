<h1>Introdução ao repositório YouX_Group_Backend_pt-BR</h1>

<p>Este repositório em português contém o <i>backend</i> destinado ao teste prático do Processo de Seleção da YouX Group. Caso queira baixar o repositório de forma separada, acesse o <a href="https://github.com/LorisLambert/YouX_Group_Backend_pt-BR">link</a>.</p>

<h3>Sobre as escolhas</h3>

<p>Para este <i>backend</i> foram escolhidos o Springboot Java SE 11 e o Hibernate 5 versões sólidas e que possuem uma boa quantidade de coisas na <i>internet</i>. Para consultar a documentação do Springboot clique no seguinte <a href="https://docs.spring.io/spring-boot/docs/current/reference/htmlsingle/">link</a>, para a documentação do Java SE 11 acesse o <a href="https://docs.oracle.com/en/java/javase/11/">link</a> e para consultar a documentação do Hibernate 5 clique no <a href="https://hibernate.org/orm/documentation/5.0/">link</a>.<p>
<h3>Testes</h3>
<p>Para a realização de testes utilize a ferramenta Postman cuja documentação está disponível no seguinte <a href="https://learning.postman.com/docs/getting-started/introduction/">link</a>.A seguir veja um <i>script</i> de teste manual simples:</p>
<ol>
    <li>Rode a aplicação no Spring Tools 4</li>
    <li>Abra o programa Postman;</li>
    <li>Digite o localhost no espaço destinado a url;</li>
    <li>Selecione o tipo de método e acompanhe os resultados na parte inferior da tela.</li>
</ol>
<i>OBS.: é possível criar ambientes de testes dentro do Postman e disponibilizar para todo o time.</i>
<h3><i>Onboarding</i></h3>

<p>Para rodar a apliação, utilize o software Spring Tools 4 pelo seguinte <a href="https://spring.io/tools">link</a> e os recursos "MySQL Driver", "Spring web", "Spring dev Tools" e o "Spring Data JPA". Além disso é importante baixar o pacote do Java SE 11 disponível no seguinte <a href="https://www.oracle.com/java/technologies/javase/jdk11-archive-downloads.html">link</a>. Já para os testes baixe o Postman no seguinte <a href="https://www.postman.com/downloads/">link</a>.</p>

<h3>Sobre a arquitetura da informação</h3>

<p>Para este projeto, foram escolhidos duas entidades principais: a pacientes e a usuários. Essa escolhe se deu pelo fato do desafio não especificar o uso desta aplicação por parte dos pacientes, portanto, os únicos usuários seriam os médicos e os enfermeiros. Logo, basta identificar se o usuário é um enfermeiro ou um médio para conceder as permissões de controle. Os pacientes são apenas uma entidade que será usada para registrar dados.</p>

