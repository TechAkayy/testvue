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

        <q-item
          clickable
          @click="
            $refs.indexPageChild.showAddRoomModal();
            closeLeftDrawer();
          "
        >
          <q-item-section avatar>
            <q-icon name="plan" />
          </q-item-section>

          <q-item-section>
            <q-item-label>Add Room</q-item-label>
            <q-item-label caption>{{ caption }}</q-item-label>
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
      <!-- <router-view /> -->
      <IndexPage
        :jobid="jobid"
        @add-room="showAddRoomModal"
        ref="indexPageChild"
      />
    </q-page-container>
  </q-layout>
</template>

<script>
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
</script>
