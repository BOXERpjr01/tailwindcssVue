<template>
    <header class="flex flex-col  items-center bg-bg-header w-full h-40 bg-cover bg-no-repeat">
      <!--  -->
      <!-- this div is part of get value of  -->
      <!--  -->
      <div  class="w-full flex justify-center relative top-32 px-32 py-3 items-center ">
        <div class="w-full flex">
          <!-- get value from post.role element -->
          <div class="flex w-full bg-white h-11 items-center rounded-sm px-5">
            <div v-if="roleValue === ''? show : !show" 
            class="w-52 flex items-center justify-start text-center">
              <span 
              class="bg-LightGrayishCyan px-4 py-[2px] rounded-tl-md rounded-bl-md">
                 {{ roleValue }}
              </span>
              <span @click="hide"  class="py-[5px] px-[5px] rounded-tr-md rounded-br-md bg-Cyans text-center text-base hover:bg-VeryDarkGrayishCyan cursor-pointer">
                <img class=" w-4" src="../../images/icon-remove.svg" alt="">
              </span> 
            </div>
          </div>
          <!-- get value from post.level element -->
          <div class="flex justify-between  w-full bg-white h-11 items-center rounded-sm px-5">
            <div v-if="levelValue === ''? show : !show" 
            class="w-52 flex items-center justify-start text-center">
              <span 
              class="bg-LightGrayishCyan px-4 py-[2px] rounded-tl-md rounded-bl-md">
                 {{ levelValue }}
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
</template>

<script setup>
const show= ref(false)
const roleValue = ref('')
const levelValue = ref('')

const hide = () => {
  roleValue.value = '';
  levelValue.value = '';
}
const btnrole = (event) => {
  roleValue.value = event.target.textContent;
}
const btnlevel = (event) => {
  levelValue.value = event.target.textContent;
}
</script>

<style lang="scss" scoped>


</style>