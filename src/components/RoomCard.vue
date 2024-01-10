<script>
import { defineComponent, nextTick } from "vue";
import WindowCard from "components/WindowCard.vue";
import WindowModal from "components/WindowModal.vue";

export default defineComponent({
  name: "RoomCard",
  components: {
    WindowCard,
    WindowModal,
  },
  props: {
    id: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: false,
    },
    windows: {
      type: Object,
      required: false,
    },
  },
  mounted() {
    // console.log(this.windows);
  },
  methods: {
    openWindowModal() {
      // Use nextTick to wait for the next DOM update cycle
      nextTick(() => {
        // Check if $refs.WindowModalRef is available before accessing the show method
        if (this.$refs.WindowModalRef) {
          this.$refs.WindowModalRef.show();
        }
      });
    },
  },
});
</script>

<template>
  <q-item class="room-card">
    <q-list seperator>
      <!-- <q-item-section avatar>
        <q-icon name="fa-solid fa-house" />
      </q-item-section> -->

      <q-item-label class="q-mb-sm">{{ title }}</q-item-label>

      <WindowCard v-for="window in windows" :key="window.id" v-bind="window" />
      <div class="row justify-around">
        <q-btn
          clickable
          @click="openWindowModal"
          color="primary"
          icon="window"
          size="sm"
          label="Add Window"
        />
        <q-btn
          color="primary"
          icon="fireplace"
          size="sm"
          label="Add Radiator"
        />
      </div>
    </q-list>
  </q-item>
  <WindowModal
    ref="WindowModalRef"
    @submit-form="handleFormSubmission"
    :jobid="jobid"
    :roomid="id"
  />
</template>

<style scoped>
.room-card {
  padding: 15px;
  /* width: 250px; */
  cursor: pointer;
  border: 1px solid #39495c;
  margin-bottom: 9px;
  margin-top: 9px;
}
</style>
