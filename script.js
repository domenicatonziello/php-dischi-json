const { createApp } = Vue;
const apiUri = 'http://localhost/php-dischi-json/discs.php';
const app = createApp({
    data() {
        return {
            discs: [],
        }
    },
    mounted() {
        axios.get(apiUri).then(res => {
            this.discs = res.data;
        });
    }
});

app.mount('#root');