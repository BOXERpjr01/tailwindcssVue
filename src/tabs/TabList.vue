<template>
  <div>
    <header class="fixed w-full justify-start top-0 pt-0 left-0 pb-9 px-10 z-50 bg-cyan-400">
      <div class="">
        <nav class=" text-sm">
          <RouterLink to="/" class="">Home</RouterLink>
          <div class="h-6 bg-white border border-gray-50"></div>
          <RouterLink to="/about">About</RouterLink>
          <!-- <div class="h-6 bg-white border border-gray-50"></div> -->
          <!-- <div class="h-6 bg-white border border-gray-50"></div>
          <RouterLink to="/about">View</RouterLink> -->
        </nav>
      </div>
    </header>
        <RouterView />
  </div>
</template>

<script setup>

</script>

<style lang="scss" scoped></style>
