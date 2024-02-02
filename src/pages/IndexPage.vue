<script setup>
import { ref, onMounted, watch } from "vue";
import RoomCard from "components/RoomCard.vue";
import apiService from "../services/apiService.js";
import AddRoomModal from "components/AddRoomModal.vue";
import { useRoute } from "vue-router";
import { useRoom } from "@/composables/room.js";

const { showAddRoomModal } = useRoom();

watch(
  () => showAddRoomModal,
  (newValue, oldValue) => {
    if (newValue) {
      this.$refs.addRoomModalRef.show();
    }
  }
);

const jobid = +useRoute().params.jobid;
console.log(jobid);
const rooms = ref([]);

onMounted(async () => {
  try {
    const response = await apiService.getRooms(jobid);
    // rooms.value = response.data.rooms;
    rooms.value = response.data.rooms.slice().sort((a, b) => {
      // Compare the 'title' values for sorting
      const titleA = a.title.toLowerCase();
      const titleB = b.title.toLowerCase();

      if (titleA < titleB) {
        return -1;
      }
      if (titleA > titleB) {
        return 1;
      }
      return 0;
    });
  } catch (error) {
    console.error("Error fetching rooms:", error);
  }
});

const handleFormSubmission = async ({ formData, jobid }) => {
  try {
    console.log("Adding room to jobid " + jobid);
    const updatedRoomsResponse = await apiService.addRoom(jobid, formData);
    this.rooms = updatedRoomsResponse.data.rooms.slice().sort((a, b) => {
      // Compare the 'title' values for sorting
      const titleA = a.title.toLowerCase();
      const titleB = b.title.toLowerCase();

      if (titleA < titleB) {
        return -1;
      }
      if (titleA > titleB) {
        return 1;
      }
      return 0;
    });

    // Optionally, you can perform other actions after submission
  } catch (error) {
    // Handle errors, e.g., show an error message to the user
    console.error("Error handling form submission:", error);
  }
};
</script>

<!-- <script>
import { defineComponent, ref, onMounted } from "vue";
import RoomCard from "components/RoomCard.vue";
import apiService from "../services/apiService.js";
import AddRoomModal from "components/AddRoomModal.vue";

export default defineComponent({
  name: "IndexPage",
  components: {
    RoomCard,
    AddRoomModal,
  },
  props: {
    jobid: Number,
  },
  methods: {
    showAddRoomModal() {
      this.$refs.addRoomModalRef.show();
    },
    async handleFormSubmission({ formData, jobid }) {
      try {
        console.log("Adding room to jobid " + jobid);
        const updatedRoomsResponse = await apiService.addRoom(jobid, formData);
        this.rooms = updatedRoomsResponse.data.rooms.slice().sort((a, b) => {
          // Compare the 'title' values for sorting
          const titleA = a.title.toLowerCase();
          const titleB = b.title.toLowerCase();

          if (titleA < titleB) {
            return -1;
          }
          if (titleA > titleB) {
            return 1;
          }
          return 0;
        });

        // Optionally, you can perform other actions after submission
      } catch (error) {
        // Handle errors, e.g., show an error message to the user
        console.error("Error handling form submission:", error);
      }
    },
  },
  setup(props) {
    const rooms = ref([]);
    console.log("id = " + props.jobid);

    onMounted(async () => {
      try {
        const response = await apiService.getRooms(props.jobid);
        // rooms.value = response.data.rooms;
        rooms.value = response.data.rooms.slice().sort((a, b) => {
          // Compare the 'title' values for sorting
          const titleA = a.title.toLowerCase();
          const titleB = b.title.toLowerCase();

          if (titleA < titleB) {
            return -1;
          }
          if (titleA > titleB) {
            return 1;
          }
          return 0;
        });
      } catch (error) {
        console.error("Error fetching rooms:", error);
      }
    });

    return {
      rooms,
    };
  },
});
</script> -->

<template>
  <q-page class="flex justify-center items-start bg-grey-3">
    <!-- <q-btn @click="showAddRoomModal" label="Add Room" /> -->
    <div class="rooms">
      <RoomCard v-for="room in rooms" :key="room.title" v-bind="room" />
    </div>

    <AddRoomModal
      ref="addRoomModalRef"
      @submit-form="handleFormSubmission"
      :jobid="jobid"
    />
  </q-page>
</template>
