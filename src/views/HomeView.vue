<template>
  <div class="bg-white/90 p-3 px-20 rounded-sm">
    <section class="my-32">
      <!-- <ul
        class="bg-white border-x-6 border-x-white rounded-md grid grid-cols-16 items-center px-10 my-10 shadow-xl"
        v-for="(list, index) in lists"
        :key="index" :class="{'today': isToday(list.movementsDates[0]), 'yesterday': isYesterday(list.movementsDates[0])} "
      > -->
      <ul
        class="bg-white border-x-6 border-x-white rounded-md grid grid-cols-20 items-center px-10 my-10 shadow-xl"
        v-for="(list, index) in lists"
        :key="index"
        :class="{
          'today': isToday(list),
          'yesterday': isYesterday(list),
        }"
      >
        <!-- <div class="hidde-div"></div> -->
        <li class="li-img">
          {{ list.img }}
        </li>
        <div
          class="col-start-3 col-end-7 ml-6 flex flex-col justify-start gap-5"
        >
          <div class="flex gap-x-2 items-center">
            <p class="text-emerald-900/80 font-bold">{{ list.title }}</p>
            <p
              class="bg-emerald-800/60 px-3 py-1 rounded-full text-white text-center"
            v-if="isToday(list) || isYesterday(list)">
              New!
            </p>
            <p class="bg-black/75 text-white px-3 py-1 rounded-full" v-if="isFeatured(list)">
              Feature
            </p>
          </div>
          <div>
            <p>{{ list.p }}</p>
            <div class="flex gap-x-3">

              <p
                class=""
                v-for="(date, dateIndax) in list.movementsDates"
                :key="dateIndax"
              >
                {{ formatDate(date) }}
              </p>
              <p  v-for="(time, timeTitle) in list.timeTitle"
            :key="timeTitle"> {{ time }} </p>
            </div>
          </div>
        </div>
        <div class="flex gap-x-10 col-start-13 col-end-12">
          <li
            class="bg-newrgba rounded text-emerald-900/70 font-bold px-2 py-1"
            v-for="(skill, skils) in list.skils"
            :key="skils"
          >
            {{ skill }}
          </li>
        </div>
      </ul>
    </section>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";

const lists = ref([
  // have to find new and future part to vue
  {
    img: "Photoshap",
    title: "Photoshap",
    p: "Senior Frontend Developer",
    skils: ["Frontend", "Sanior", "HTML", "Frontend", "Frontend"],
    movementsDates: [
      "2023-10-26T13:15:33.035Z",

      
    ],
    timeTitle:["Full Time", "USA only"]
  },
]);

// const formatData = (dataString) => {
//   const date = new Date(dataString);
//   const options = {
//     year: "numeric",
//     month: "long",
//     day: "numeric",
//   };
//   return date.toLocaleString(undefined, options);
// };
const formatDate = (dateString) => {
  const calcDaysPassed = (date1, date2) =>
    Math.round(Math.abs(date2 - date1) / (1000 * 60 * 60 * 24));

  const daysPassed = calcDaysPassed(new Date(), new Date(dateString));

  if (daysPassed === 0) return "Today";
  if (daysPassed === 1) return "Yesterday";
  // if (daysPassed === 2) return `${daysPassed} days ago`;
  // if (daysPassed === 3) return `${daysPassed} days ago`;
  // if (daysPassed === 4) return `${daysPassed} days ago`;
  // if (daysPassed === 5) return `${daysPassed} days ago`;
  // if (daysPassed === 6) return `${daysPassed} days ago`;
  if (daysPassed <= 7) return `${daysPassed} days ago`;

  const options = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  return new Date(dateString).toLocaleString(undefined, options);
};
/////////////////////////////
// when the element is new it get some style

const today = new Date().toDateString();
const yesterday = new Date(new Date().getTime() - 24 * 60 * 60 * 1000).toDateString(); 

const filteredItems = computed(() => {
  return lists.value.filter((list) => {
    const movementsDate = new Date(list.movementsDates[0]).toDateString();

    return movementsDate === today || movementsDate === yesterday;
  });
});

const isToday = (list) => {
  const movementsDate = new Date(list.movementsDates[0]).toDateString();
  return movementsDate === today;
};

const isYesterday = (list) => {
  const movementsDate = new Date(list.movementsDates[0]).toDateString();
  return movementsDate === yesterday;
}

// if ahs some propertis we want get thist element

const isFeatured = (list) => {
  const requiredSkills = ["Fullstick Developer", "Senior Frontend Developer", "Fontend Developer"];
  return requiredSkills.some((skill) => list.p.includes(skill)); 
  // const unrequiredSkills = Array.from(new Set(list.p));
  // const matching = requiredSkills.filter((skill) => unrequiredSkills.includes(skill));

  // return matching.length === 1;

};

// const isToday = (dateString) => {
//   const today = new Date();
//   const date = new Date(dateString);

//   return (
//     date.getDate() === today.getDate() &&
//     date.getMonth() === today.getMonth() &&
//     date.getFullYear() === today.getFullYear()
//   );
// };

// const isYesterday = (dateString) => {
//   const yesterday = new Date();
//   yesterday.setDate(yesterday.getDate() - 1);
//   const date = new Date(dateString);
//   return (
//     date.getDate() === yesterday.getDate() &&
//     date.getMonth() === yesterday.getMonth() &&
//     date.getFullYear() === yesterday.getFullYear()
//   );
// };
</script>

<style>
.today {
  border-left: 6px solid;
  border-left-color: rgb(6 78 59 / 0.8);
  border-left-width: 6px;
  border-radius: 6px;
}
.yesterday {
  border-left: 6px solid;
  border-left-color: rgba(12, 94, 72, 0.8);
  border-left-width: 6px;
  border-radius: 6px;
}
</style>
