<template>
    <div>
    <section class="section">
        <div class="container ">
            <div class="columns is-multiline">
                <div class="column is-full">
                    <div class="level">
                        <div class="level-rifgt">
                            <div class="level-item">
                                <figure class="image is-128x128">
                                    <img class="image" src="../assets/acher_amp_x300.png"/>
                                </figure>
                            </div>
                        </div>
                        <div class="level-left">
                            <div class="level-item is-clearfix">
                                <h1 class="title has-text-centered has-text-light">
                                    Wouerner Brandão
                                </h1>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="column is-full">
                    <b-collapse
                        class=" card has-background-grey-darker"
                        :open="false"
                    >
                        <div slot="trigger" slot-scope="props" class=" card-header">
                            <p class="card-header-title has-text-white-ter is-size-3">
                               Bio
                            </p>
                        <a class="card-header-icon has-text-white-ter">
                            <b-icon
                                :icon="props.open ?  'caret-up': 'caret-down'">
                            </b-icon>
                        </a>
                        </div>
                        <div class="card-content ">
                            <div class="content has-text-white-ter">
                                <p>Oi, meu nome é <strong>Wouerner Brandão</strong>, nascido em 27 de Novembro de 1989, casado com Tereza Cristina, brasiliense, morador do <a target="blank" href="https://www.google.com.br/maps/@-15.9250398,-48.0989367,14z">Recanto das Emas – DF</a>, bacharel em Sistemas de informação pela <a href="http://udf.edu.br/">UDF</a> no ano de 2012.</p>
                                <p>Busco oportunidade na área de desenvolvimento web, trabalho como desenvolvedor desde 2010.</p>
                                <p>Atualmente estou me  capacitando como profissional em outras linguagens de programação, como: Ruby, Python e Javascript.</p>
                                <p>Contatos: <a href="tel:+5561999179736">61-99917-9736</a> e o e-mail <a href="mailto:wouerner@gmail.com">wouerner@gmail.com</a></p>
                                <a href="wouerner.pdf" class="button ">
                                    <b-icon icon="file-pdf"></b-icon>
                                    <span>Curriculo</span>
                                </a>
                            </div>
                        </div>
                    </b-collapse>
                </div>
                <div class="column is-full">
                    <b-collapse
                        class="has-text-white card has-background-grey-darker"
                        :open="false"
                        >
                        <div slot="trigger" slot-scope="props" class=" card-header">
                            <p class="card-header-title has-text-white-ter is-size-3">
                                Experiência
                            </p>
                        <a class="card-header-icon has-text-white-ter">
                            <b-icon
                                :icon="props.open ? 'caret-up' : 'caret-down'">
                            </b-icon>
                        </a>
                        </div>
                        <div class="card-content">
                            <div class="content has-text-dark-invert">
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

                                            <div class="card-image">
                                                <figure class="image  is-rounded">
                                                    <img :src="job.image" alt="Placeholder image" />
                                                </figure>
                                            </div>
                                            <div class="card-content">
                                                <p><strong>{{job.empresa}}</strong> como {{job.cargo}}</p>
                                                <p><strong>Periodo:</strong>{{job.periodo}}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </b-collapse>
                </div>
                <div class="column is-full">
                    <b-collapse
                        class="   card has-background-grey-darker"
                        :open="false"
                        >
                        <div slot="trigger" slot-scope="props" class=" card-header">
                            <p class="card-header-title has-text-white-ter is-size-3">
                                Tecnologias
                            </p>
                        <a class="card-header-icon has-text-white-ter">
                            <b-icon
                                :icon="props.open ? 'caret-up' : 'caret-down'">
                            </b-icon>
                        </a>
                        </div>
                        <div class="card-content">
                            <div class="content has-text-white-ter">
                                <template v-for="(skill, index) in skills" >
                                    <p :key="'p_' + index" class="subtitle is-3"> {{skill.title}}</p>
                                    <div :key="'d_' + index" class="tags are-medium">
                                        <span
                                            v-for="(tech, i) in skill.techs"
                                            :key="i"
                                            class="tag is-info is-large"
                                            >
                                            {{tech}}
                                        </span>
                                    </div>
                                </template>
                            </div>
                        </div>
                    </b-collapse>
                </div>
                <div class="column is-full">
                    <b-collapse
                        class="has-text-white  card has-background-grey-darker"
                        :open="false"
                    >
                        <div slot="trigger" slot-scope="props" class=" card-header">
                            <p class="card-header-title  has-text-white-ter is-size-3">
                                Formação
                            </p>
                        <a class="card-header-icon has-text-white-ter">
                            <b-icon
                                :icon="props.open ? 'caret-up' : 'caret-down'">
                            </b-icon>
                        </a>
                        </div>
                        <div class="card-content">
                            <div class="content has-text-white-ter">
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
                            </div>
                        </div>
                    </b-collapse>
               </div>
            </div>

            <p class="subtitle has-text-white is-2"> Tecnologias</p>
            <template v-for="(skill, index) in skills" >
                <p :key="'p_' + index" class="subtitle is-3 has-text-white "> {{skill.title}}</p>
                <div :key="'d_' + index" class="tags are-medium">
                    <span
                        v-for="(tech, i) in skill.techs"
                        :key="i"
                        class="tag is-info is-large"
                    >
                        {{tech}}
                    </span>
                </div>
            </template>

            <p class="subtitle has-text-white is-2">Formação</p>
            <p>
                Bacharel pelo Centro Universitário UDF em Sistemas de Informação no ano de 2012
            </p>
            <p class="subtitle  has-text-white is-3">Livros</p>
            <p>
                O Programador Pragmático, Php e Mysql - Desenvolvimento Web - 3ª Edição, Aprendendo Padrões de Projeto em PHP,Web Services em PHP, Zend Framework Componentes Poderosos para PHP, Joomla! Guia do Operador, Contruindo Sites com Css e (X)Html, JQuery em Ação, Html5 e CSS3, UML na prática do problema ao sistema, Programação Shell Linux e Scrum - Gestão Ágil para projetos de Sucesso, PHP e MVC com CodeIgniter.
            </p>
            <p class="subtitle has-text-white is-3">Cursos</p>
            <p>
                Curso Presencial: na X25 - PHP 5.3 OO – 64 horas
            </p>
            <p>
                Cursos On-line: Ruby - http://www.codecademy.com
            </p>
            <Footer></Footer>
        </div>
    </section>
  </div>
</template>

<script>
import Footer from './Footer'

export default {
  name: 'Curriculum',
  components: { Footer },
  data() {
        return {
            isComponentModalActive: false,
            empregos: [
                {
                    empresa: 'DataPrev',
                    cargo: 'Desenvolvedor web',
                    periodo: '13/03/2010 a 31/12/2010',
                    image: require('../assets/dataprev.jpg')
                },
                {
                    empresa: 'CEBAN',
                    cargo: 'Analista de Desenvolvimento',
                    periodo: '01/06/2011 a 31/05/2012',
                    image: require('../assets/ceban.png')
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
                    }
                },
            ],
            skills:[
                { title: 'Front-end Web', techs: [
                    'Javascript',
                    'CSS',
                    'Bootstrap',
                    'Fundation',
                    'Bulma',
                    'jQuery',
                    'Angular',
                    'Vue.js'
                ]},
                {
                    title: 'Backend Web', techs: [
                    'PHP',
                    'Laravel',
                    'Zend',
                    'Symfony',
                    'CodeIgniter',
                    'NodeJS',
                    'Ruby',
                    'Python'
                ]},
                {
                    title: 'Banco de dados', techs: [
                    'Sql Server',
                    'PostgreSQL',
                    'MySQL',
                    'Oracle',
                    'Sqlite',
                    'MongoDB'
                ]}
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
    }
}
</script>
<style scoped>
</style>
