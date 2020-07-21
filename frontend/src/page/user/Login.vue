<template>
<form>
    <div class="group">
        <input v-model="email" id="email" type="text">
        <span class="highlight"></span>
        <span class="bar"></span>
        <label>Email</label>
    </div>
    <div class="group">
        <input v-model="password" id="password" type="password">
        <span class="highlight"></span>
        <span class="bar"></span>
        <label>Password</label>
    </div>
    <button type="button" class="button buttonBlue" v-on:click="onSubmit()">로그인
        <div class="ripples buttonRipples"><span class="ripplesCircle"></span></div>
    </button>
        <div class="join-button">
            <p>아직 회원이 아니신가요?</p>
            <router-link v-bind:to="{name:constants.URL_TYPE.USER.JOIN}" class="btn--text">회원가입</router-link>
        </div>
</form>
</template>

<script>
import '../../assets/css/login.css'
import constants from '../../lib/constants'

export default {
    components: {},
    created() {},
    watch: {},
    methods: {
        onSubmit() {
            // axios 통신
            this.$store.dispatch('LOGIN', {
                    email: this.email,
                    password: this.password
                })
                .then(() => this.redirect())
                .catch(({
                    message
                }) => {
                    this.msg = message;
                    alert("이메일 및 비밀번호를 확인해주세요");
                })
        },
        redirect() {
            this.$emit('modal-hide');
            this.$router.push({name:constants.URL_TYPE.POST.MAIN});
            // const {search} = window.location
            // const tokens = search.replace(/^\?/, '').split('&')
            // const {returnPath} = tokens.reduce((qs, tkn) => {
            //     const pair = tkn.split('=')
            //     qs[pair[0]] = decodeURIComponent(pair[1])
            //     return qs
            // }, {})

            // // 리다이렉트 처리
            // this.$router.push(returnPath)
        },
    },
    data: () => {
        return {
            constants,
            email: '',
            password: '',
            msg: '',
        }
    }

}
</script>
