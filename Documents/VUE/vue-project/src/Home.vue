<template>
    <section class="grid grid-cols-4 place-items-center p-10">
        <div v-for="item in data" :key="item.id" 
          class="max-w-sm mb-6 bg-gray-800 border rounded-lg shadow border-gray-700"
        >
            <a href="#">
                <img class="rounded-t-lg" :src="item.img" alt="" />
            </a>
            <div 
                class="p-5 text-white"
            >
                <a href="#">
                <h5 
                    class="mb-2 text-2xl font-bold tracking-tight"
                >
                    {{ item.name }}
                </h5>
                </a>
                <p 
                    class="mb-3 font-normal text-gray-400"
                >
                    {{ item.address }}
                </p>
                <p 
                    class="mb-3 font-normal text-gray-400"
                >
                    {{ item.price }}
                </p>
                <flowbite-button 
                    href="#" 
                    class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300"
                >
                More Details
                <svg 
                    class="rtl:rotate-180 w-3.5 h-3.5 ms-2" 
                    aria-hidden="true" 
                    xmlns="http://www.w3.org/2000/svg" 
                    fill="none" 
                    viewBox="0 0 14 10"
                >
                    <path 
                        stroke="currentColor" 
                        stroke-linecap="round" 
                        stroke-linejoin="round" 
                        stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"
                    />
                </svg>
                </flowbite-button>
            </div>
        </div>
    </section>
</template>

<script>
import axios from "axios";
export default {
    name: "Home",
    data() {
        return {
        data: [],
        loading: true,
        };
    },
    async created() {
        try {
            const response = await axios.get( "http://localhost:3000/api/foods");
            this.data = response.data;
        } catch (error) {
            console.error("Lỗi khi gọi API:", error);
        } finally {
            this.loading = false; 
        }   
    },
};
</script>

