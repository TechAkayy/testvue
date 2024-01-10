<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "WindowCard",
  props: {
    id: {
      type: String,
      required: true,
    },
    width: {
      type: Number,
      required: true,
    },
    height: {
      type: Number,
      required: true,
    },
    direction: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      required: true,
    },
    frame: {
      type: String,
      required: true,
    },
    gap: {
      type: String,
      required: true,
    },
    vent: {
      type: Number,
      required: true,
    },
  },
});
</script>

<template>
  <q-card class="window-card">
    <div class="row q-pa-none justify-between items-center">
      <div class="row items-center">
        <q-icon name="window" class="q-pr-xs" />
        <div>{{ type }}</div>
      </div>
      <div class="row items-center justify-between">
        <q-icon name="explore" class="q-pr-xs" />
        <div class="text-right">{{ direction }}</div>
      </div>
    </div>

    <div class="row justify-between">
      <div>
        <span class="clLabel">Frame: </span>
        <span class="clValue">{{ frame }}</span>
      </div>
      <div>
        <span class="clLabel">Vent: </span>
        <span class="clValue">{{ vent == 0 ? "None" : vent + "mm" }}</span>
      </div>
    </div>
    <div class="row justify-between">
      <div>
        <span class="clLabel">Size: </span>
        <span class="clValue">{{ width }}mm x {{ height }}mm</span>
      </div>
      <div class="q-px-sm"></div>
      <!-- <div class="q-px-sm">|</div> -->
      <div>
        <span class="clLabel">Gap: </span>
        <span class="clValue">{{ gap }}</span>
      </div>
    </div>
  </q-card>
</template>

<style scoped>
.window-card {
  padding: 10px;
  /* width: 250px; */
  cursor: pointer;
  border: 1px solid #39495c;
  margin-bottom: 9px;
  margin-top: 9px;
}
.clLabel {
  font-weight: bold;
}
</style>
