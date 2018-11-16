<template>
    <div>
    <section class="hero">
        <div class="hero-body">
            <div class="container">
                <h1 class="title">
                    Wouerner Brandão
                </h1>
                <h2 class="subtitle">
                   Programador 
                </h2>
                <p>Oi, meu nome é <strong>Wouerner Brandão</strong>, nascido em 27 de Novembro de 1989, casado com Tereza Cristina, brasiliense, morador do <a target="blank" href="https://www.google.com.br/maps/@-15.9250398,-48.0989367,14z">Recanto das Emas – DF</a>, bacharel em Sistemas de informação pela <a href="http://udf.edu.br/">UDF</a> no ano de 2012.</p>
                <p>Busco oportunidade na área de desenvolvimento web, trabalho como desenvolvedor desde 2010.</p>
                <p>Atualmente estou me  capacitando como profissional em outras linguagens de programação, como: Ruby, Python e Javascript.</p>
                <p>Contatos: <a href="tel:+5561999179736">61-99917-9736</a> e o e-mail <a href="mailto:wouerner@gmail.com">wouerner@gmail.com</a></p>
                <p>Curriculo em <a href="wouerner.pdf">PDF</a>.</p>
            </div>
        </div>
    </section>
    <section>
        <div class="container">
            <div class="columns">
                <div class="column">
                    <div class="card">
                        <header class="card-header">
                            <p class="card-header-title">
                               Contatos
                            </p>
                            <a href="#" class="card-header-icon" aria-label="more options">
                                <span class="icon">
                                    <i class="fas fa-angle-down" aria-hidden="true"></i>
                                </span>
                            </a>
                        </header>
                        <div class="card-content">
                            <p>Telefone: <a href="tel:+5561999179736">61-99917-9736</a></p>
                            <p>E-mail: <a href="mailto:wouerner@protonmail.com">wouerner@protonmail.com</a></p>
                            <p><a href="https://www.linkedin.com/in/wouerner/">Linkedin</a></p>
                        </div>
                    </div>
                </div>
            </div>

            <p class="subtitle is-2">Experiência</p>
            <div
                v-for="(col, index) in chunk(empregos)"
                :key="index"
                class="columns"
            >
               <div
                   v-for="(job, index) in col"
                   :key="index"
                   class="column"
               >
                    <div :class="['card', job.colors ? job.colors.background : '']">
                        <div class="card-content">
                            <p><strong>{{job.empresa}}</strong> como {{job.cargo}}</p>
                            <p><strong>Periodo:</strong>{{job.periodo}}</p>
                        </div>
                    </div>
               </div>
            </div>

            <p class="subtitle is-2"> Tecnologias</p>
            <p class="subtitle is-3"> Front-end Web</p>
            <div class="tags are-medium">
                <span class="tag is-info is-large">Javascript</span>
                <span class="tag is-info is-large">CSS</span>
                <span class="tag is-info is-large">Bootstrap</span>
                <span class="tag is-info is-large">Fundation</span>
                <span class="tag is-info is-large">Bulma</span>
                <span class="tag is-info is-large">jQuery</span>
                <span class="tag is-info is-large">Angular</span>
                <span class="tag is-info is-large">Vue.js</span>
            </div>
            <p class="subtitle is-3"> Back-end Web</p>
            <div class="tags are-medium">
                <span class="tag is-info is-large">PHP</span>
                <span class="tag is-info is-large">Laravel</span>
                <span class="tag is-info is-large">Zend</span>
                <span class="tag is-info is-large">Symfony</span>
                <span class="tag is-info is-large">CodeIgniter</span>
                <span class="tag is-info is-large">NodeJS</span>
                <span class="tag is-info is-large">Ruby</span>
                <span class="tag is-info is-large">Python</span>
                <span class="tag is-info is-large">Vue.js</span>
            </div>
            <p class="subtitle is-3">Banco de dados </p>
            <div class="tags are-medium">
                <span class="tag is-info is-large">Sql Server</span>
                <span class="tag is-info is-large">PostgreSQL</span>
                <span class="tag is-info is-large">MySQL</span>
                <span class="tag is-info is-large">Oracle</span>
                <span class="tag is-info is-large">Sqlite</span>
                <span class="tag is-info is-large">MongoDB</span>
            </div>
            <p class="subtitle is-2">Formação</p>
            <p>
                Bacharel pelo Centro Universitário UDF em Sistemas de Informação no ano de 2012
            </p>
            <p class="subtitle is-3">Livros</p>
            <p>
                O Programador Pragmático, Php e Mysql - Desenvolvimento Web - 3ª Edição, Aprendendo Padrões de Projeto em PHP,Web Services em PHP, Zend Framework Componentes Poderosos para PHP, Joomla! Guia do Operador, Contruindo Sites com Css e (X)Html, JQuery em Ação, Html5 e CSS3, UML na prática do problema ao sistema, Programação Shell Linux e Scrum - Gestão Ágil para projetos de Sucesso, PHP e MVC com CodeIgniter.
            </p>
            <p class="subtitle is-3">Cursos</p>
            <p>
                Curso Presencial: na X25 - PHP 5.3 OO – 64 horas
            </p>
            <p>
                Cursos On-line: Ruby - http://www.codecademy.com
            </p>
            <footer class="footer">
                <div class="content has-text-centered">
                    <p>
                        <strong>Wouerner</strong> Programador
                        <p>Telefone: <a href="tel:+5561999179736">61-99917-9736</a></p>
                        <p>E-mail <a href="mailto:wouerner@protonmail.com">wouerner@protonmail..com</a></p>
                        <p><a href="https://www.linkedin.com/in/wouerner/">Linkedin</a>
                    </p>
                </div>
            </footer>
        </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
    data() {
        return {
            isComponentModalActive: false,
            empregos: [
                {
                    empresa: 'DataPrev',
                    cargo: 'Desenvolvedor web',
                    periodo: '13/03/2010 a 31/12/2010'
                },
                {
                    empresa: 'CEBAN',
                    cargo: 'Analista de Desenvolvimento',
                    periodo: '01/06/2011 a 31/05/2012'
                },
                {
                    empresa: 'CPM Braxis',
                    cargo: 'Programador Junior',
                    periodo: '04/06/2012 a 03/02/2013'
                },
                {
                    empresa: 'Cnec',
                    cargo: 'Analista de Desenvolvimento',
                    periodo: '20/06/2013 a 09/05/2014'
                },
                {
                    empresa: 'Cnec',
                    cargo: 'Gestão TI como Programador Pleno III',
                    periodo: '19/05/2014 a 15/01/2015'
                },
                {
                    empresa: 'CTIS - DataSUS',
                    cargo: 'Programador PHP',
                    periodo: '19/03/2015 a 13/06/2016'
                },
                {
                    empresa: 'Fundep - Ministério da Cultura',
                    cargo: 'Programador PHP',
                    periodo: '10/05/2016 a Emprego Atual',
                    colors:{
                        color: '',
                        background: 'has-background-info',
                    }
                },
            ]
        }
    },
  props: {
    msg: String
  },
  methods: {
        chunk() {
            const size = 2;
            const chunked_arr = [];
            let copied = [...this.empregos]; // ES6 destructuring
            const numOfChild = Math.ceil(copied.length / size); // Round up to the nearest integer

            for (let i = 0; i < numOfChild; i++) {
                chunked_arr.push(copied.splice(0, size));
            }
            return chunked_arr;

        }
  },
    mounted(){
        console.log(this.chunk());
    }
}
</script>
<style scoped>
</style>
