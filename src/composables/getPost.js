import { ref} from "vue";

const getPosts = () => {
  const posts = ref([]);
  const error = ref(null);
  // const props = defineProps(['id']);

  const load = async () => {
    try {
      let data = await fetch("http://localhost:3000/posts/");
      if (!data.ok) {
        throw Error("no data available");
      }
      posts.value = await data.json();
    } catch (err) {
      error.value = err.meesage;
      console.log(error.value);
    }
  };

  return { posts, error, load };
};

export default getPosts;
