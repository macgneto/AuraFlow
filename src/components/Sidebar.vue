<template>
  <div class="sidebar">
    <!--    <img src="https://via.placeholder.com/100" alt="Avatar" class="rounded-full w-24 mb-4"/>-->
    <!--    <button @click="toggleLogin" class="bg-primary-500 text-white px-4 py-2 rounded mb-6">-->
    <!--      {{ isLoggedIn ? 'Logout' : 'Login' }}-->
    <!--    </button>-->

    <nav class="">
      <ul class="space-y-10">
        <li v-for="(item, index) in menuItems" :key="index">
          <router-link
              :to="item.link"
              class="menu-item"
              :class="[item.colorClass, isActive(item.link) ? 'active' : '', item.hoverClass]"
              v-tooltip="item.title"
          >
            <i :class="item.icon" class="icon" style="font-size: 2rem" ></i>

          </router-link>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'Sidebar',
  data() {
    return {
      isLoggedIn: false,
      menuItems: [
        {
          name: 'Dashboard',
          link: '/',
          icon: 'pi pi-home',
          colorClass: 'color-white',
          hoverClass: 'hover-blue',
          title: 'Dashboard'
        },
        {
          name: 'Profile',
          link: '/profile',
          icon: 'pi pi-user',
          colorClass: 'color-white',
          hoverClass: 'hover-red',
          title: 'Profile'
        },
        {
          name: 'Settings',
          link: '/settings',
          icon: 'pi pi-cog',
          colorClass: 'color-white',
          hoverClass: 'hover-green',
          title: 'Settings'
        },
        {
          name: 'Reports',
          link: '/reports',
          icon: 'pi pi-chart-bar',
          colorClass: 'color-white',
          hoverClass: 'hover-yellow',
          title: 'Reports'
        },
      ],
    };
  },
  methods: {
    toggleLogin() {
      this.isLoggedIn = !this.isLoggedIn;
    },
    isActive(link) {
      return this.$route.path === link;
    },
  },
};
</script>

