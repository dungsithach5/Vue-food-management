<template>
  <div class="overflow-x-auto shadow-md sm:rounded-lg mt-10">
    <!-- Table -->
    <table class="w-full text-sm text-center rtl:text-right text-gray-400">
      <thead class="text-xs uppercase bg-gray-700 text-gray-400">
        <tr>
          <th scope="col" class="px-6 py-3">#</th>
          <th scope="col" class="px-6 py-3">Img</th>
          <th scope="col" class="px-6 py-3">Food Name</th>
          <th scope="col" class="px-6 py-3">Address</th>
          <th scope="col" class="px-6 py-3">Price</th>
          <th scope="col" class="px-6 py-3">Action</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(food, index) in foods" :key="food.id" class="odd:bg-gray-900">
          <td>{{ index + 1 }}</td>
          <td>
            <img
              :src="food.img"
              alt="Hình ảnh đồ ăn"
              class="w-24 h-16 object-cover mx-auto"
              @error="handleImageError($event)"
            />
          </td>
          <td class="px-6 py-4 text-white font-medium">{{ food.name }}</td>
          <td class="px-6 py-4">{{ food.address }}</td>
          <td class="px-6 py-4">{{ food.price }}</td>
          <td class="space-x-4">
            <button
              @click="openEditModal(food)"
              class="bg-green-500 text-white p-2 px-3 rounded-md font-medium"
            >
              Update
            </button>
            <button
              @click="$emit('delete', food._id)"
              class="bg-red-500 text-white p-2 px-3 rounded-md font-medium"
            >
              Delete
            </button>
          </td>
        </tr>
      </tbody>
    </table>

    <!-- Update Modal -->
    <div
      v-if="showEditModal"
      class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center"
      @click.self="closeEditModal"
    >
      <div class="bg-white rounded-lg shadow-lg w-1/3">
        <div class="p-4 border-b flex justify-between items-center">
          <h3 class="text-lg font-semibold">Cập nhật đồ ăn</h3>
          <button
            class="text-gray-400 hover:text-gray-900"
            @click="closeEditModal"
          >
            ✕
          </button>
        </div>
        <form class="p-4" @submit.prevent="submitEditForm">
          <div class="mb-4">
            <label class="block text-sm font-medium mb-1" for="img">Hình Ảnh</label>
            <input
              type="text"
              id="img"
              v-model="editFormData.img"
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
              v-model="editFormData.name"
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
              v-model="editFormData.address"
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
              v-model="editFormData.price"
              placeholder="Nhập giá"
              class="block w-full border rounded px-3 py-2"
              required
            />
          </div>
          <div class="flex justify-end gap-2">
            <button
              type="button"
              class="bg-gray-300 text-gray-700 px-4 py-2 rounded"
              @click="closeEditModal"
            >
              Hủy
            </button>
            <button
              type="submit"
              class="bg-blue-500 text-white px-4 py-2 rounded"
            >
              Cập nhật
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    foods: {
      type: Array,
      required: true,
    },
  },
  emits: ["edit", "delete"],
  data() {
    return {
      showEditModal: false,
      editFormData: {
        img: "",
        name: "",
        address: "",
        price: "",
      },
    };
  },
  methods: {
    openEditModal(food) {
      this.editFormData = { ...food };
      this.showEditModal = true;
    },
    closeEditModal() {
      this.showEditModal = false;
    },
    submitEditForm() {
      this.$emit("edit", this.editFormData);
      this.closeEditModal();
    },
    updateData() {
      this.$emit("update", this.editFormData);
    }
  },
};
</script>