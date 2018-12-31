<template>
    <footer class="footer is-dark">
        <div class="content has-text-centered">
            <p><strong>Wouerner</strong> Programador</p>
            <p>Telefone: <a href="tel:+5561999179736">61-99917-9736</a></p>
            <p>E-mail <a href="mailto:wouerner@protonmail.com">wouerner@protonmail..com</a></p>
            <p><a href="https://www.linkedin.com/in/wouerner/">Linkedin</a> </p>
        </div>
    </footer>
</template>

<script>
export default {
  name: 'Footer',
    data() {
        return {
            isComponentModalActive: false,
        }
    },
  props: {
    msg: String
  },
  methods: {
  },
    mounted(){
    }
}
</script>
<style scoped>
footer {
    color: white;
    background-color: #2c251e;
}
a,strong {
    color: white;
}
</style>
