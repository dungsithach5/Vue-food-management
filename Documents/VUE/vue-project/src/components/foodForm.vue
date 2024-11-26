<template>
  <div data-modal-hide="true">
    <!-- Add Modal Trigger -->
    <button
      class="bg-blue-500 text-white px-4 py-2 rounded font-medium"
      @click="showAddModal = true"
    >
      New Food
    </button>

    <!-- Add Modal -->
    <div
      v-if="showAddModal" 
      class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"
    >
      <div class="bg-white rounded-lg shadow-lg w-1/3">
        <div class="p-4 border-b flex justify-between items-center">
          <h3 class="text-lg font-semibold">Thêm nhà hàng mới</h3>
          <button
            class="text-gray-400 hover:text-gray-900"
            @click="closeAddModal"
          >
            ✕
          </button>
        </div>
        <form class="p-4" @submit.prevent="submitAddForm">
          <div class="mb-4">
            <label class="block text-sm font-medium mb-1" for="img">Hình Ảnh</label>
            <input
              type="file"
              id="img"
              @change="handleFileUpload"
              placeholder="Nhập URL hình ảnh"
              class="block w-full border rounded px-3 py-2"
              required
            />
          </div>
          <div class="mb-4">
            <label class="block text-sm font-medium mb-1" for="name">Tên Đồ Ăn</label>
            <input
              type="text"
              id="name"
              v-model="formData.name"
              placeholder="Nhập tên đồ ăn"
              class="block w-full border rounded px-3 py-2"
              required
            />
          </div>
          <div class="mb-4">
            <label class="block text-sm font-medium mb-1" for="address">Địa Chỉ</label>
            <input
              type="text"
              id="address"
              v-model="formData.address"
              placeholder="Nhập địa chỉ"
              class="block w-full border rounded px-3 py-2"
              required
            />
          </div>
          <div class="mb-4">
            <label class="block text-sm font-medium mb-1" for="price">Giá</label>
            <input
              type="text"
              id="price"
              v-model="formData.price"
              placeholder="Nhập giá"
              class="block w-full border rounded px-3 py-2"
              required
            />
          </div>
          <div class="flex justify-end gap-2">
            <button
              type="button"
              class="bg-gray-300 text-gray-700 px-4 py-2 rounded"
              @click="closeAddModal"
            >
              Hủy
            </button>
            <button
              type="submit"
              class="bg-blue-500 text-white px-4 py-2 rounded"
            >
              Thêm
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showAddModal: false,
      formData: {
        img: null,
        name: "",
        address: "",
        price: "",
      },
    };
  },
  methods: {
    handleFileUpload(event) {
      const file = event.target.files[0];
      if (file) {
        this.formData.img = file;
        console.log("File selected:", file);
      }
    },
    submitAddForm() {
      console.log("Form submitted with:", this.formData);
      this.closeAddModal();
      this.resetForm();
    },
    closeAddModal() {
      this.showAddModal = false;
    },
    resetForm() {
      this.formData = {
        img: null,
        name: "",
        address: "",
        price: "",
      };
    },
  },
};
</script>
