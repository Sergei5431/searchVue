<script setup>
import { RouterLink, RouterView } from 'vue-router';
// import axios from 'axios';
import { onBeforeMount, ref } from 'vue'; 
import arr from './arr.js';
import {getUsers} from './services/users.js'
// import { onBeforeMount } from 'vue';

let users = []
let loading = true
onBeforeMount(async()=>{
  users = await getUsers()
  // debugger
  const data = await users.json()
  console.log(data)
  loading = false
})


const name = ref(arr.name)

console.log(name.value )
// console.log(users )

// const get = () => {
//   axios.get('https://api.github.com/search/repositories?q=subject')
//   .then((res) => {
//     arr = res.data
//     console.log(res)
//   }).catch(error => {
//     console.log(error)
//   })
  
// }

// get()
// console.log(555)

// setTimeout(()=>{
//   console.log(arr.items)
//   const name = ref(arr.items.name)
//   console.log(name)
// },1000)

// const previewFilePath = ()=>{
//   // console.log(user.avatar_url)
//     return URL.createObjectURL(user.avatar_url)
  
// }
// previewFilePath()
</script>

<template>
  <header>
    <div class="wrapper">
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
    </div>
  </header>

  <body>
    <div class="search">
      <div class="input-group">
        <input type="text" class="form-control" placeholder="Начните вводить текст для поиска (не менее трех символов)" aria-label="Recipient's username" aria-describedby="button-addon2">
         <button class="btn btn-outline-secondary" type="button" id="button-addon2">
          <img src="./assets/Rectangle 17.svg" alt="Rectangle 17" >
         </button>
      </div>
      <!-- <div class="div mar"></div> -->
    </div>

    <div class="content">
       <div 
       class="cards"
       v-if="!loading"
       v-for="user in arr"
       :key="user.id"

       >
        <div class="project">
          <span class="project-text">{{ user.full_name }}</span>
        </div>
        <div class="wrapper-users">
          <div class="avatar">
            <!-- <img src="user.avatar_url"  alt="" class="img-avatar"> -->
          </div>
          <div class="wrapper-name">
            <span class="text">{{ user.name }}</span>
          </div>
        </div>
        <div class="rating">
          <img src="./assets/Rectangle 5.png" alt="star">
          <div class="star">
            <span class="text">{{ user.stargazers_count }}</span>
          </div>
          <img src="./assets/Rectangle 7.png" alt="eyes">
          <div class="eyers">
            <span class="text">{{ user.watchers_count }}</span>
          </div>
        </div>
        <div class="input-group comments">
          <input type="text" class="form-control" placeholder="Комментарий к проекту" aria-label="Recipient's username" aria-describedby="button-addon2">
            <button class="btn btn-outline-secondary" type="button" id="button-addon2">
              <img src="./assets/Rectangle 8.png" alt="Rectangle 17" >
            </button>
        </div>
        <button type="button" class="btn btn-primary mt-3">Подробности</button>
       </div>
    </div>

  </body>

  <RouterView />
</template>

<style scoped>
*{
  box-sizing: border-box;
}
.btn-outline-secondary{
  background-color:#00A3FF;
}

.search{
  /* display: flex; */
  max-width: 1440px;
  min-height: 147px;
  background-color: #DDDDDD;
  padding:  32px 39px 47px 25px;
  margin:  0 auto;
}

.div{
  width: 500px;
  height: 15px;
  background-color: aqua;
  /* margin-bottom: 20px;
  margin-left: 20px;
  margin-top: 20px; */

}

.content{
  max-width: 1440px;
  margin:  0 auto;
  padding-top: 11px;
}
.cards{
  width: 440px;
  min-height: 218px;
  margin-left: 28px;
  margin-top: 23px;
  border: 1px solid #A2A3A4;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  padding: 7px 15px 13px 16px;
}

.project{
  /* margin-left: 16px;
  margin-top: 7px; */
}

.img-avatar{
  width: 50px;
  height: 50px;
  border-radius: 25px;
  overflow: hidden;
}

.wrapper-users{
  margin-top: 18px;
  display: flex;
  align-items: center;
}

.wrapper-name{
  margin-left: 26px;
}

.text{
  font-size: 18px;
  line-height: 21px;
}

.project-text{
  font-size: 20px;
  line-height: 23px;
}

.rating{
  display: flex;
  margin-top: 13px;
  align-items: center;
}

.star{
  width: 72px;
  margin-left: 19px;
}

.eyers{
  width: 39px;
  margin-left: 19px;
}

.comments{
  margin-top: 14px;
}

</style>
