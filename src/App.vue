<template>
  <!--  <div class="app-container">-->

  <!--      <div-->
  <!--          class="px-6 py-20 md:px-12 lg:px-20 flex items-center justify-center bg-[linear-gradient(-225deg,var(&#45;&#45;p-primary-500),var(&#45;&#45;p-primary-700)_48%,var(&#45;&#45;p-primary-800))] dark:bg-[linear-gradient(-225deg,var(&#45;&#45;p-primary-400),var(&#45;&#45;p-primary-600)_48%,var(&#45;&#45;p-primary-800))]"-->
  <!--      >-->
  <!--        <div class="p-12 shadow text-center lg:w-[30rem] backdrop-blur-md rounded-xl bg-[rgba(255,255,255,0.1)]">-->
  <!--          <div class="text-4xl font-medium mb-12 text-primary-contrast">Welcome</div>-->
  <!--          <InputText-->
  <!--              type="text"-->
  <!--              class="!appearance-none placeholder:!text-primary-contrast/40 !border-0 !p-4 !w-full !outline-0 !text-xl !block !mb-6 !bg-white/10 !text-primary-contrast/70 !rounded-full"-->
  <!--              placeholder="Email"-->
  <!--          />-->
  <!--          <InputText-->
  <!--              type="text"-->
  <!--              class="!appearance-none placeholder:!text-primary-contrast/40 !border-0 !p-4 !w-full !outline-0 !text-xl !mb-6 !bg-white/10 !text-primary-contrast/70 !rounded-full"-->
  <!--              placeholder="Password"-->
  <!--          />-->
  <!--          <button-->
  <!--              type="button"-->
  <!--              class="max-w-40 w-full rounded-full appearance-none border-0 p-4 outline-0 text-xl mb-6 font-medium bg-white/30 hover:bg-white/40 active:bg-white/20 text-primary-contrast/80 cursor-pointer transition-colors duration-150"-->
  <!--          >-->
  <!--            Sign In-->
  <!--          </button>-->
  <!--          <a class="cursor-pointer font-medium block text-center text-primary-contrast">Forgot Password?</a>-->
  <!--        </div>-->
  <!--      </div>-->


      <Header />
      <div class="main-content">
        <Sidebar />
        <Content />
      </div>
      <Footer />
<!--    </div>-->


<!--  <div class="layout-wrapper overlay">-->
<!--    <Header/>-->
<!--    <Sidebar/>-->
<!--    <div class="layout-main-container">-->
<!--      <div class="layout-main">-->
<!--        <router-view></router-view>-->
<!--      </div>-->
<!--      &lt;!&ndash;      <app-footer></app-footer>&ndash;&gt;-->
<!--      &lt;!&ndash;    </div>&ndash;&gt;-->
<!--      &lt;!&ndash;    <div class="layout-mask animate-fadein"></div>&ndash;&gt;-->
<!--    </div>-->
<!--  </div>-->

</template>

<script>
import Header from './components/Header.vue';
import Sidebar from './components/Sidebar.vue';
import Content from './components/Content.vue';
import Footer from './components/Footer.vue';

export default {
  name: 'App',
  components: {
    Header,
    Sidebar,
    Content,
    Footer,
  },
};
</script>
