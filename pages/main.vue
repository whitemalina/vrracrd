<template>
  <v-main class="welcome">
    <v-app id="inspire">
      <div class="text-center">
        <v-dialog v-model="dialog" hide-overlay persistent width="300">
          <v-card color="primary" dark>
            <v-card-text>
              Генерируем...
              <v-progress-linear
                indeterminate
                color="white"
                class="mb-0 p-10"
              ></v-progress-linear>
            </v-card-text>
          </v-card>
        </v-dialog>
      </div>
    </v-app>

    <v-app id="inspire">
      <div class="text-center">
        <v-dialog v-model="dialog2" width="500" color="red">
          <v-card>
            <v-card-title class="text-h5 lighten-2">
              Создание открытки
            </v-card-title>
            <v-form> </v-form>
            <v-card-text>
              <v-text-field
                label="Название"
                v-model="form.name"
                placeholder="Открытка максиму"
                hint="Название открытки"
              ></v-text-field>
              <v-select
                v-model="form.category"
                :items="categories"
                item-text="name"
                item-value="value"
                label="Категория"
                persistent-hint
                return-object
                single-line
              ></v-select>
              <v-text-field
                label="Заголовок"
                v-model="form.title"
                placeholder="Поздравляю с Днем рождения!"
                hint="Заголовок открытки"
              ></v-text-field>

              <v-textarea
                name="input-7-1"
                label="Содержимое"
                v-model="form.content"
                placeholder="С днем рождения! Пусть в твоем доме всегда царят покой, уют и гармония. Желаю быть счастливой, радоваться жизни, удивляться.."
                hint="Содержимое открытки"
              ></v-textarea>
              <v-select
                v-model="form.scene"
                :items="items"
                item-text="name"
                item-value="value"
                label="Сцена"
                hint="Сцена в открытке"
              ></v-select>
            </v-card-text>

            <v-divider> </v-divider>

            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="primary" text @click.prevent="generate"> СОЗДАТЬ </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </div>
    </v-app>

    <v-app id="inspire">
      <div class="text-center">
        <v-dialog v-model="dialog3" width="500" color="red">
          <v-card :loading="loading" class="mx-auto my-12" max-width="374">
            <template slot="progress">
              <v-progress-linear
                color="deep-purple"
                height="10"
                indeterminate
              ></v-progress-linear>
            </template>

            <vue-qr style="margin-left: 50%; transform: translateX(-50%)"  bgSrc='https://raw.githubusercontent.com/Binaryify/vue-qr/master/src/assets/result4.gif' backgroundDimming logoSrc='v.png' logoScale='0.5' logoBackgroundColor='transparent' dotScale='0.7' :text="card.qrurl" :size="250"></vue-qr>

            <v-card-title>{{ card.title }}</v-card-title>

            

            <v-card-text>
                <p>Текст: {{card.text}}</p>
                <p>Ссылка: <b>{{card.qrurl}}</b> </p>
                
                <v-divider style="" class="mx-4"></v-divider>
                <div style="display: flex; justify-content: space-between; align-item: center" class="">
                  <span style=" text-align: center;margin-top:10px; margin-right: 15px">Категория</span>
                  <v-chip style="margin-top: 10px" >{{ cardInfo.category.title }}</v-chip>
                </div>
                

            </v-card-text>

            <v-card-actions>
              <v-btn
                color="deep-purple lighten-2"
                text
                :href="card.qrurl"
              >
                Открыть
              </v-btn>
              <v-btn @click="copy()" color="deep-purple lighten-2" text>
                Скопировать ссылку
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </div>
    </v-app>

    <div class="container">
      <div class="welcome-wrapper">
        <div class="welcome-content animate__animated animate__backInLeft">
          <h1 class="welcome-title">
            Виртуальные <br />
            Открытки
          </h1>
          
          <p class="welcome-text">
            Здесь вы найдёте уникальные виртуальные открытки<br />
            для друзей и знакомых<br />
            Создавайте собственные вирутальные открытки<br />
            Делитесь ими <br />
          </p>
          <NuxtLink to="/signin">
            <button v-if="this.token == null" class="btn welcome-btn">
              Генерировать 1
            </button>
          </NuxtLink>
          <button
            v-if="this.token !== null"
            @click="dialog2 = !dialog2"
            class="btn welcome-btn"
          >
            Генерировать 2
          </button>
          <!-- <a href="/signin"></a> -->
        </div>
        <!-- <QrcodeVue></QrcodeVue> -->
        <div
          class="welcome-Aframe animate__animated animate__backInRight"
          style="overflow: hidden"
        >
          <iframe
            height="100%"
            src="http://localhost:3000/card/SrswH"
            style="width: calc(100% + 20px)"
            class="overflow-hidden"
            frameborder="0"
          ></iframe>
        </div>
      </div>
    </div>
  </v-main>
</template>

<style lang="scss">
@media (min-width: 1904px) {
  .container {
    max-width: none;
  }
}
@media (min-width: 1264px) {
  .container {
    max-width: none;
  }
}
@media (max-width: 1342px) {
  .container {
    max-width: none;
  }
  .welcome {
    &-content {
      max-width: 50%;
    }
    &-Aframe {
      width: 400px !important;
    }
    &-title {
      font-size: 60px !important;
    }
    &-text {
      font-size: 20px !important;
    }
  }
}
@media (max-width: 873px) {
  // .v-main__wrap{
  //   height: 200vh;
  // }
}
@media (max-width: 822px) {
  .container{
    height: 100%;
    
  }
  .welcome {
    height: 100% !important;
  }
}
.welcome {
  .v-main__wrap {
    display: flex;
    align-items: center;
  }
  background: url("./assets/image/welcome-back.png") no-repeat;
  background-size: cover;
  height: 100vh;
  &-wrapper {
    color: white;
    width: 100%;
    justify-content: space-around;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
  }

  &-content {
    border-radius: 25px !important;
    min-height: 458px !important;
    padding: 20px 40px 20px 40px;
  }

  &-btn {
    padding: 27px 65px;
    font-size: 1.5em;
    line-height: 28px;
    transition: all ease-in-out 0.2s;
    &:hover {
      transform: translateY(-10%);
    }
  }
  &-title {
    font-size: 72px;
    line-height: 84px;
    font-weight: bold;
    margin-bottom: 63px;
    color: #fbfbfb;
  }
  &-text {
    // font-weight: 500;
    margin-bottom: 87px;
    font-size: 24px;
    line-height: 28px;
  }
  &-Aframe {
    width: 624px;
    min-width: 400px;
    min-height: 458px;
    height: 715px;
    background-color: white;
    border-radius: 50px;
  }
}
</style>

<script>
const HOST = process.env.HOST;



import "animate.css";

import VueQr from 'vue-qr'



import { Notyf } from "notyf";
import "notyf/notyf.min.css";
import { log } from "aframe";
const notyf = new Notyf({
  position: {
    x: "center",
    y: "top",
  },
});

export default {
  layout: "empty",
  mounted() {},
  data() {
    return {
      dialog: false,
      dialog2: false,
      dialog3: false,
      token: "",
      form: {
        title: "",
        content: "123",
        scene: 2,
        category: 2,
        name: '',
      },
      cardInfo: {
        category: {
          title: null,
        },
      },
      card: {
        title: "1qw",
        content: "123",
        scene: 2,
        category: 2,
        qrurl: ' ',
      },
      items: [
        { name: "Зима", value: "1" },
        { name: "Дом", value: "2" },
        { name: "Улица", value: "3" },
        { name: "Закат", value: "4" },
      ],
      user: null,
      categories: [
        { name: "Поздравление", value: "1" },
        { name: "День рождения", value: "2" },
        { name: "Доброе утро", value: "3" },
        { name: "Зима", value: "4" },
      ],
    };
  },
  components: {VueQr},
  watch: {
    dialog(val) {
      if (!val) return;

      // setTimeout(() => (this.dialog = false, this.dialog3 = true), 4000)
      setTimeout(() => ((this.dialog = false), (this.dialog3 = true)), 4000);
    },
  },
  mounted() {
    try {
      if (localStorage.getItem("user") !== "") {
        this.token = JSON.parse(localStorage.getItem("user")).token;
      }
      if (localStorage.getItem("user")) {
        try {
          this.user = JSON.parse(localStorage.getItem("user"));
        } catch (e) {
          console.log(e);
          localStorage.removeItem("user");
        }
      }
      console.log(this.token);
    }
    catch(e){
      localStorage.removeItem("user");
      this.token = null
    }
    
  },

  methods: {
    copy() {
      try {
        navigator.clipboard.writeText(this.card.qrurl)
        notyf.success('Скопировано!')
      } catch(e){
        throw e
      }
      
    },
    async generate() {
      try {
        let result;
        let form = {
            name: this.form.name,
            category_id: this.form.category.value,
            scene_id: this.form.scene,
            title: this.form.title,
            text: this.form.content,
        }
        await fetch(HOST + `cards`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            Authorization: "Bearer " + this.token,
          },
          body: JSON.stringify(form),
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
            let url = data.data.url
            // if (result == 1) {
            //   // this.user = data;
            //   // this.saveLocalData();
            // } else {
            // }
            if (result == 1) {
              setTimeout(() => (notyf.success("Открытка создана")), 4000);
              
              this.cardInfo = data.data
              console.log('card info');
              console.log(this.cardInfo);
              this.card = form
              this.dialog2 = false; this.dialog = true;
              console.log(location.href + url);
              this.card.qrurl = String(location.href + 'card/' + url)
            } else {
              this.errorNotyf(data)
            }
          });
          console.log(this.card);
          // .then((body) => {
          //   console.log(body);

          //   //this.card = body["Created card"];
          // });

        //dialog2 = false; dialog = true;
      } catch (e) {
        console.log(e);
        setTimeout(() => (notyf.error(String(e))), 4000);
        
      }
    },

    errorNotyf(data) {
      for (let i = 0; i < Object.keys(data.message).length; i++) {
        let value = Object.values(data.message)[i];
        notyf.error(value[0]);
      }
    },
  },
};
</script>