<template>
    <div>
      <h1 class="text-4xl text-white font-medium mb-10" >Food Management</h1>
      <foodForm
        :initialData="currentfood"
        @submit="addfood"
      />
      <foodTable
        :foods="foods"
        @edit="editfood"
        @delete="deletefood"
      />
      <div v-if="loading" class="loading">Đang xử lý...</div>
      <div v-if="error" class="error">{{ error }}</div>
    </div>
  </template>
  
  <script>
  import axios from "axios";
  import foodForm from "./foodForm.vue";
  import foodTable from "./foodTable.vue";
  
  export default {
    name: "foodCRUD",
    components: {
      foodForm,
      foodTable,
    },
    data() {
      return {
        foods: [],
        currentfood:
        { 
          id:"",
          img: "", 
          name:"",
          address: "", 
          price: "" 
        },
        loading: false,
        error: null,
      };
    },
    created() {
      this.fetchfoods();
    },
    methods: {
        async fetchfoods() {
            this.loading = true;
            this.error = null;
            try {
                const response = await axios.get("http://localhost:3000/api/foods");
                this.foods = response.data;
            } catch (err) {
              this.error = "Không thể tải danh sách nhà hàng.";
            } finally {
              this.loading = false;
            }
        },
    
        async addfood(data) {
            this.loading = true;
            this.error = null;

            try {
                const response = await axios.post('http://localhost:3000/api/foods', data);
                this.foods.push(response.data);
            } catch (err) {
                this.error = "Không thể thêm sản phẩm.";
            } finally {
                this.loading = false;
            }
        },

        async updatefood(data) {
            this.loading = true;
            this.error = null;

            try {
                console.log(data)
                await axios.put(`http://localhost:3000/api/foods/${data.id}`, data);
                const index = this.foods.findIndex(r => r.id === data.id);
                this.foods[index] = { ...data };
                this.resetForm();
            } catch (err) {
                this.error = "Không thể cập nhật sản phẩm.";
            } finally {
                this.loading = false;
            }
        },

        async deletefood(id) {
            this.loading = true;    
            this.error = null;
    
            try {
                await axios.delete(`http://localhost:3000/api/foods/${id}`);
                this.foods = this.foods.filter(r => r.id !== id);
                window.location.reload();
            } catch (err) {
                this.error = "Không thể xóa sản phẩm.";
            } finally {
                this.loading = false;
            }
        },

        editfood(food) {
            this.currentfood = { ...food };
            this.editMode = true;
        },

        resetForm() {
            this.currentfood = { 
            id:"",
            img: "", 
            name:"",
            address: "", 
            price: "" 
          },
            this.editMode = false;
        },
    },
  };
  </script>
  
  <style scoped>
  .loading {
    color: blue;
    font-size: 1.2em;
  }
  .error {
    color: red;
    font-size: 1.2em;
  }
  </style>
  