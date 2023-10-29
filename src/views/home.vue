<template>
  <div class="text-[15px] font-Spartan cursor-default">
    <header class="flex flex-col items-center bg-bg-header h-40 bg-cover bg-no-repeat">
      <!--  -->
      <!-- this div is part of get value of  -->
      <!--  -->
      <div  class="insideheader w-full flex justify-center relative top-32 px-32 py-3 items-center ">
        <div class="flex w-full bg-white h-11 items-center rounded-sm px-5">
          <!-- get value from post.role element -->
          <div>
            <div v-if="roleValue === ''? show : !show" 
            class="responsiv w-32 flex items-center">
              <span 
              class="textspan bg-LightGrayishCyan px-4 py-[2px] rounded-tl-md rounded-bl-md">
                 {{ roleValue }}
              </span>
              <span @click="hide"  class="py-[5px] px-[5px] rounded-tr-md rounded-br-md bg-Cyans text-center text-base hover:bg-VeryDarkGrayishCyan cursor-pointer">
                <img class=" w-4" src="../../images/icon-remove.svg" alt="">
              </span> 
            </div>
          </div>
          <!-- get value from post.level element -->
          <div >
            <div v-if="levelValue === ''? show : !show" 
            class="responsiv w-32 flex items-center">
              <span 
              class="textspan bg-LightGrayishCyan px-4 py-[2px] rounded-tl-md rounded-bl-md">
                 {{ levelValue }}
              </span>
              <span @click="hide"  class="py-[5px] px-[5px] rounded-tr-md rounded-br-md bg-Cyans text-center text-base hover:bg-VeryDarkGrayishCyan cursor-pointer">
                <img class=" w-4" src="../../images/icon-remove.svg" alt="">
              </span> 
            </div>
          </div>
          <!-- get value from post.tool element -->
          <div>
            <div v-if="toolValue === ''? show : !show" 
            class="responsiv w-32 flex item-center text-center">
              <span 
              class="textspan bg-LightGrayishCyan px-4 py-[2px] rounded-tl-md rounded-bl-md">
                 {{ toolValue }}
              </span>
              <span @click="hide"  class="py-[5px] px-[5px] rounded-tr-md rounded-br-md bg-Cyans text-center text-base hover:bg-VeryDarkGrayishCyan cursor-pointer">
                <img class=" w-4" src="../../images/icon-remove.svg" alt="">
              </span> 
            </div>
          </div>
          <!-- get value from post.lang element -->
          <div>
            <div v-if=" languageValue === ''? show : !show" 
            class="responsiv w-32 flex item-center text-center">
              <span 
              class="textspan bg-LightGrayishCyan px-4 py-[2px] rounded-tl-md rounded-bl-md">
                 {{  languageValue }}
              </span>
              <span @click="hide"  class="py-[5px] px-[5px] rounded-tr-md rounded-br-md bg-Cyans text-center text-base hover:bg-VeryDarkGrayishCyan cursor-pointer">
                <img class=" w-4" src="../../images/icon-remove.svg" alt="">
              </span> 
            </div>
          </div>
        </div>
        <p @click="hide" class="flex text-center items-center h-11 pr-4 rounded-tr-sm rounded-br-sm bg-white  cursor-pointer hover:text-Cyans underline underline-offset-2 hover:underline hover:underline-offset-2 ">
          Clear
        </p>
      </div>
    </header>
    <p v-if="error">{{ error }}</p>
    <section v-if="posts.length" class="sectionPost bg-white/75 px-32 py-10">
      <div>
        <ul
          class="unorderlist bg-GrayishCyan border-x-6 border-x-GrayishCyan rounded-md grid grid-cols-20 items-center px-10 py-4 my-10 shadow-xl shadow-DarkGrayishCyan"
          :class="{'featuredstyle': post.featured === true}"
          v-for="post in posts"
          :key="post.id"
        >
        <li class="imagelist">
          <img class="images w-24 col-start-1 col-span-2" :src="post.logo" alt="" />
        </li>
          
          <li class="listitem flex flex-col gap-y-2 col-start-3 col-span-5">
            <div class="flex gap-x-2 items-center text-center">
              <h1 class="text-Cyans font-bold mr-2">{{ post.company }}</h1>
              <span class="new bg-Cyans text-white px-3 py-1 rounded-3xl" :class="{'hidden': post.new === false}">{{ post.new === true ? "New!" :""}}</span>
              <span class="featured bg-VeryDarkGrayishCyan text-white px-3 py-1 rounded-3xl" :class="{'hidden': post.featured === false}">{{ post.featured === true ? "FEATURED" : "" }}</span>
            </div>
            <p class="font-bold"> 
              <span class="hover:text-Cyans">
                {{ post.position }}
              </span>
            </p>
            <p class="date text-gray-500 font-semibold flex gap-x-3">
              {{ post.postedAt }} 
              <div class="bg-gray-400 w-1 h-1 mt-2"></div>
              {{ post.contract }}
              <div class="bg-gray-400 w-1 h-1 mt-2"></div> 
              {{ post.location }}
            </p>
          </li>
          <li class="listitembtn flex gap-x-6 col-start-11">
            <button 
              @click="btnrole" 
              class="font-bold py-1 px-3 rounded-md bg-LightGrayishCyan  text-Cyans hover:bg-Cyans hover:text-white transition-all duration-300">
                {{ post.role }}
            </button>
            <button 
              @click="btnlevel"  
              class="font-bold py-1 px-3 rounded-md bg-LightGrayishCyan  text-Cyans hover:bg-Cyans hover:text-white transition-all duration-300">
              {{ post.level }}
            </button>
            <button 
              @click="btntool"  
              class="font-bold py-1 px-3 rounded-md bg-LightGrayishCyan  text-Cyans hover:bg-Cyans hover:text-white transition-all duration-300" 
              v-for="(tool, tools) in post.tools" 
              :key="tools">
                {{ tool }}
            </button>
            <button 
            @click="btnlanguage" 
            class="font-bold py-1 px-3 rounded-md bg-LightGrayishCyan  text-Cyans  hover:bg-Cyans hover:text-white transition-all duration-300"
              v-for="(lang, languages) in post.languages"
              :key="languages"
            >
              {{ lang }}
            </button>
          </li>
        </ul>
      </div>
    </section>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import getPost from "../composables/getPost.js";
import axios from "axios";

const { posts, error, load } = getPost();

load();


const fetchTools = () => {
  axios.get('http://localhost:3000/posts').then(Response => {
    posts.value =Response.data
  })
    .catch(error => {
    console.log(error);
    
  })
}
onMounted(() => {
  fetchTools();
})
const show = ref(false);
const roleValue = ref('');
const levelValue = ref('');
const toolValue = ref('');
const languageValue = ref('');

const hide = () => {
  roleValue.value = '';
  levelValue.value = '';
  toolValue.value = '';
  languageValue.value = '';
}
const btnrole = (event) => {
  roleValue.value = event.target.textContent;
}
const btnlevel = (event) => {
  levelValue.value = event.target.textContent;
}
const btntool = (event) => {
  toolValue.value = event.target.textContent;
}
const btnlanguage = (event) => {
  languageValue.value = event.target.textContent;
}


</script>

<style>
.hidden{
  background: none;
}
.featuredstyle{
  border-left:6px solid hsl(180, 29%, 50%);
}

</style>
