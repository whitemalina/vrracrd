<template>
  <div>
    <div class="signup">
      <div class="signup-content">
        <h2 class="sign-title">Регистрация</h2>
        <div class="sign-inputs">
          <div class="sign-input">
            <img src="../assets/image/acount.svg" alt="" />
            <input
              v-model="registForm.name"
              type="text"
              placeholder="Имя пользователя"
            />
          </div>
          <div class="sign-input">
            <img src="../assets/image/mail.svg" alt="" />
            <input
              v-model="registForm.email"
              type="text"
              placeholder="E-mail"
            />
          </div>
          <div class="sign-input">
            <img src="../assets/image/lock.svg" alt="" /><input
              v-model="registForm.password"
              type="password"
              placeholder="Пароль"
            />
          </div>
          <div class="sign-input">
            <img src="../assets/image/lock.svg" alt="" />
            <input
              type="password" required v-model="registForm.conpassword"
              placeholder="Повтор пароля"
            />
          </div>
        </div>
        <div class="sign-buttons">
          <button @click.prevent="regist" class="sign-button btn">
            Зарегистрироваться
          </button>
          <NuxtLink to="/signin" class="sign-button_signup">Войти</NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.signup {
  background: url("./assets/image/signup-back.png") no-repeat;
  background-size: cover;
  height: 100vh;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  .sign-input {
    &s {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }
    width: 80%;
    &:not(.sign-input:last-child) {
      margin-bottom: 40px;
    }
  }
  &-content {
    padding: 64px 120px;
    width: max-content;
    background-color: white;
    border-radius: 50px;
    margin: 0 auto;
    position: absolute;
    top: 50%;
    left: 0;
    right: 0;
    transform: translateY(-50%);
  }
  .sign-input {
    border-bottom: 1px solid #f6851b;
    display: flex;
    align-items: center;
    padding: 10px 0;
    input {
      padding-left: 12px;
      &:focus {
        border: none;
        outline: none;
      }
    }

    &:nth-child(1) {
      margin-bottom: 42px;
    }
  }
}
.sign {
  &-title {
    font-size: 64px;
    text-align: center;
    line-height: 75px;
    margin-bottom: 91px;
  }
  &-inputs {
    margin-bottom: 88px;
  }
  &-button {
    margin-bottom: 17px;
    &_signup {
      color: #333333;
    }
    &s {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }
    padding: 16px 80px;
  }
}
</style>

<script>
import "animate.css";

import { Notyf } from "notyf";
import "notyf/notyf.min.css";
import { log } from "aframe";
const notyf = new Notyf({
  position: {
    x: "center",
    y: "top",
  },
});

const HOST = process.env.HOST;

export default {
  layout: "empty",
  data: () => ({
    select: null,
    token: "",

    user: "",
    registForm: {
      name: "123",
      email: "test23@gmail.com",
      password: "123",
      conpassword: '',
    },
  }),
  methods: {
    async regist() {
      let email = this.registForm.email;
      let name = this.registForm.name;
      let password = this.registForm.password;
      let conpassword = this.registForm.conpassword;
      let data = {
        email: email,
        name: name,
        password: password,
        confirm_password: conpassword,
      };
      let user = null;
      let result;
      // Валидация?
      function validate(email, password) {
        let re = /^[\w-\.]+@[\w-]+\.[a-z]{2,4}$/i;
        if (email.length >= 1 && password.length >= 1) {
          if (!re.test(email)) {
            notyf.error("Неправильная почта");
            return false;
          } else {
            return true;
          }
        } else {
          notyf.error("Заполните все поля");
          console.log(email, password);
          return false;
        }
      }

      // если валидация успешна, продолжаем
      if (validate(email, password)) {
        // авторизация
        try {
await fetch(HOST + "register", {
          method: "POST",
          body: JSON.stringify(data),
          headers: {
            "Content-Type": "application/json",
          },
        })
          .then((res) => {
            if (res.status == 200) {
              result = 1;
            } else {
              result = 2;
            }
            return res.json();
          })
          .then((data) => {
            console.log(data);
            if (result == 1) {
              this.user = data;
              // this.saveLocalData();
            } else {
            }
            if (result == 1) {
              notyf.success("Вы успешно зарегистрировались");

              localStorage.setItem("user", JSON.stringify(this.user.data));
              console.log(JSON.parse(localStorage.getItem("user")));

              this.$router.push({
                path: '/'
              })
            } else {
              this.errorNotyf(data)
            }
          });
        }
        catch(e) {
          notyf.error(String(e))
        }
        
      }
    },
    // Вывод ошибок Notyf
    errorNotyf(data) {
      for (let i = 0; i < Object.keys(data.message).length; i++) {
        let value = Object.values(data.message)[i];
        notyf.error(value[0]);
      }
    },
  },
};
</script>
