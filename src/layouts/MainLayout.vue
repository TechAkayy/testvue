<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />

        <q-toolbar-title> Retrofit Survey </q-toolbar-title>

        <div>Quasar v{{ $q.version }}</div>
      </q-toolbar>
    </q-header>

    <q-drawer v-model="leftDrawerOpen" show-if-above bordered>
      <q-list>
        <q-item-label header> Links </q-item-label>

        <q-item clickable @click="addRoom">
          <q-item-section avatar>
            <q-icon name="plan" />
          </q-item-section>

          <q-item-section>
            <q-item-label>Add Room</q-item-label>
            <!-- <q-item-label caption>{{ caption }}</q-item-label> -->
          </q-item-section>
        </q-item>

        <!-- <EssentialLink
          v-for="link in essentialLinks"
          :key="link.title"
          v-bind="link"
        /> -->
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup>
import { ref } from "vue";
import { useRoom } from "@/composables/room.js";

const { showAddRoomModal } = useRoom();

const leftDrawerOpen = ref(false);

const toggleLeftDrawer = () => {
  leftDrawerOpen.value = !leftDrawerOpen.value;
};

const closeLeftDrawer = () => {
  leftDrawerOpen.value = false;
};

const addRoom = () => {
  showAddRoomModal.value = true;
  closeLeftDrawer();
};
</script>

<!-- <script>
import { defineComponent, ref } from "vue";
import IndexPage from "components/IndexPage.vue";

export default defineComponent({
  name: "MainLayout",

  components: {
    // EssentialLink,
    IndexPage,
  },
  props: {
    jobid: Number,
  },
  setup(_, { emit }) {
    const leftDrawerOpen = ref(false);

    return {
      // essentialLinks: linksList,
      leftDrawerOpen,
      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value;
      },
      closeLeftDrawer() {
        leftDrawerOpen.value = false;
      },
    };
  },
});
</script> -->
