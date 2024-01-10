<template>
  <q-dialog v-model="showModal" @hide="resetForm">
    <q-card>
      <q-card-section>
        <form @submit.prevent="submitForm">
          <q-input
            autofocus
            v-model="formData.title"
            label="Title"
            ref="titleInputRef"
          />

          <div class="q-mt-md">
            <q-btn type="submit" label="Add Room" color="primary" />
            <q-btn @click="hide" label="Cancel" />
          </div>
        </form>
      </q-card-section>
    </q-card>
  </q-dialog>
</template>

<script>
import { ref, defineComponent, nextTick } from "vue";

export default defineComponent({
  name: "AddRoomModal",
  props: {
    jobid: {
      type: Number,
      required: true,
    },
  },
  mounted() {
    // this.$refs.titleInputRef.focus();
    console.log("AddRoomModal mounted");
  },
  setup(props, context) {
    // Reactive state
    const showModal = ref(false);
    const formData = ref({
      title: "",
    });

    // Methods
    const submitForm = () => {
      // Emit an event to notify the parent component
      console.log("Submitting form with jobid " + props.jobid);
      // You can emit an event to notify the parent component
      // This is just an example; adjust it according to your needs
      context.emit("submit-form", {
        formData: formData.value,
        jobid: props.jobid,
      });

      hideModal(); // Hide the modal after submission
    };

    const hide = () => {
      showModal.value = false;
    };

    const show = () => {
      showModal.value = true;
      // nextTick(() => {
      // this.$refs.titleInputRef.value.focus();
      // });
    };

    const resetForm = () => {
      // Reset form data when the modal is hidden
      formData.value = { title: "" };
      // Reset other form fields as needed
    };

    // Expose variables and methods to the template
    return {
      showModal,
      formData,
      submitForm,
      resetForm,
      hide,
      show,
    };
  },
});
</script>
