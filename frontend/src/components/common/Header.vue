<template>
<div class="navigation">
    <!-- <div id="header" v-if="isHeader"> -->
    <div class="navigation-container" id="header">
        <span>
            <router-link v-bind:to="{name:constants.URL_TYPE.POST.MAIN}">
                <img class="navigation-logo" src="../../assets/img/logo.png">
            </router-link>
        </span>
        <nav role='navigation'>
            <ul class="">
                <li>
                    <a href="#">PT</a>
                </li>

                <li>
                    <a href="#">헬스가이드</a>
                    <ul>
                        <li><a href="#">가이드1</a></li>
                        <li><a href="#">가이드2</a></li>
                    </ul>
                </li>

                <li>
                    <a href="#">커뮤니티</a>
                </li>
            </ul>
        </nav>
        <div class="navigation-loginBtn">
            <b-button id="login-btn" v-if="$store.state.accessToken == null" @click="$bvModal.show('login-modal')">로그인</b-button>
            <!-- 로그아웃 처리 -->
            <div class="navigation-logined" v-else>
                <div class="navigation-user">
                    <b-avatar src="https://placekitten.com/300/300"></b-avatar>
                    <router-link v-bind:to="{name:constants.URL_TYPE.USER.INFO}">
                        {{$store.state.accessToken}}
                    </router-link>
                </div>
                <b-button style="margin-left:30px;" v-on:click="onClickLogout()">로그아웃</b-button>
            </div>
            <b-modal id="login-modal" hide-footer>
                <template v-slot:modal-title>
                    login
                </template>
                <Login @modal-hide="hideModal" class="login-btn" />
            </b-modal>
        </div>
    </div>
</div>
</template>

<script>
import '../../assets/css/header.scss'
import constants from '../../lib/constants.js'
import Login from '../../page/user/Login.vue'

export default {
    name: 'Header',
    components: {
        Login,
    },
    props: ['isHeader'],
    computed: {},
    watch: {},
    created() {
        if (localStorage.getItem('accessToken') != null) {
            this.$store.state.accessToken = localStorage.getItem('accessToken');
        }
    },
    methods: {
        hideModal: function () {
            // 모달 hide
            this.$bvModal.hide('login-modal');
        },
        onClickLogout() {
            this.$store.dispatch('LOGOUT')
                .then()
                .catch()
        }
    },
    data: function () {
        return {
            constants,
            keyword: "",
        }
    },
}
</script>
