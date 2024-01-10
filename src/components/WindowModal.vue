<template>
  <q-dialog v-model="showModal" @hide="resetForm">
    <q-card>
      <q-card-section>
        <form @submit.prevent="submitForm">
          <q-input v-model="formData.title" label="Title" />

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
import { ref, defineProps, defineEmits } from "vue";

export default {
  props: {
    jobid: Number,
  },
  setup(props, context) {
    // Reactive state
    const showModal = ref(false);
    const formData = ref({
      title: "",
    });

    // Methods
    const submitForm = () => {
      console.log("Submitting window form with jobid " + props.jobid);

      // Emit an event to notify the parent component
      context.emit("submit-form", {
        formData: formData.value,
        jobid: props.jobid,
      });

      hide(); // Hide the modal after submission
    };

    const hide = () => {
      showModal.value = false;
    };

    const show = () => {
      showModal.value = true;
    };

    const resetForm = () => {
      // Reset form data when the modal is hidden
      formData.value = { title: "" };
    };

    // Expose variables and methods to the template
    return {
      showModal,
      formData,
      submitForm,
      resetForm,
      show,
      hide,
    };
  },
};
</script>
