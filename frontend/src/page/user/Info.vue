<template>
    <div class="user" id="join"> 
        <div class="wrapC table">
            <div class="middle">
                <h1>회원 정보</h1>
                <div class="form-wrap">
                    <div class="input-wrap">
                        이메일
                        <input v-model="email"
                            id="email"
                            placeholder="이메일을 입력해주세요" 
                            type="text"
                            disabled/>
                    </div>
                    <div class="input-wrap">
                        닉네임
                        <input v-model="nickName"
                            id="nickname"
                            placeholder="닉네임을 입력해주세요" 
                            type="text"
                            />
                    </div>
                    <div class="input-wrap">
                        비밀번호
                        <input v-model="password"
                            id="password"
                            placeholder="비밀번호를 입력해주세요" 
                            type="text"
                            />
                    </div>
                    <button class="btn btn--back btn--login" v-on:click="editUserInfo()">수정하기</button>
                    <button class="btn btn--back btn--login" v-on:click="deleteAccount()">탈퇴</button>
                </div>
            </div>
        </div> 
        

    </div>
</template>

<script>
import axios from "axios";

    export default {
        components: {
        },
        created(){
            if(localStorage.getItem('accessToken') != null) {
                axios.get('http://localhost:8080/account/info', {
                    params:{
                        email: localStorage.getItem('accessToken')
                    }
                })
                .then((response) => {
                    // 잘되면 이쪽 이 실행
                    this.nickName = response.data.nickname;
                    this.email = response.data.email;
                    this.password = response.data.password;
                })
                .catch((error) => {
                    // 안되면 아마 이쪽 실행될꺼
                });
            }
        },
        methods: {
            editUserInfo() {
                axios.get('http://localhost:8080/account/editInfo', {
                    params:{
                    email: this.email,
                    password: this.password,
                    nickname: this.nickName,
                } 
                })
                .then((response) => {
                    // 잘되면 이쪽 이 실행
                })
                .catch((error) => {
                    // 안되면 아마 이쪽 실행될꺼
                });
            },
            deleteAccount() {
                axios.delete('http://localhost:8080/account/delete', {
                    params:{
                    email: this.email,
                    }
                })
                .then((response) => {
                    // 잘되면 이쪽 이 실행
                    alert("삭제되었습니다");
                    this.$router.push('/');
                    this.$store.dispatch('LOGOUT')
                    .then()
                    .catch()
                })
                .catch((error) => {
                    // 안되면 아마 이쪽 실행될꺼
                });
            }
        },
        watch: {
        },
        data: () => {
            return {
                test: "test",
                email: '',
                nickName: '',
                password: '',
            }
        }

    }

</script>


