<!--<template>-->
<!--  <div>-->
<!--    <h1>General Index</h1>-->
<!--  </div>-->
<!--</template>-->



<!--<template>-->
<!--  <div>-->
<!--    <h1>{{ $t('welcome') }}</h1>-->
<!--    <button @click="switchLanguage('en')">English</button>-->
<!--    <button @click="switchLanguage('el')">Greek</button>-->
<!--    -->
<!--    -->
<!--    -->
<!--  </div>-->
<!--</template>-->

<!--<script>-->
<!--export default {-->
<!--  methods: {-->
<!--    switchLanguage(lang) {-->
<!--      this.$i18n.locale = lang; // Change the language-->
<!--    }-->
<!--  }-->
<!--};-->
<!--</script>-->
<template>
  <div class="card-container">
    <Card
        v-for="(item, index) in items"
        :key="index"
        :title="item.title"
        :bgColor="item.bgColor"
        :titleColor="item.titleColor"
        :icon="item.icon"
    >
      <!-- Center Content Slot -->
      <template #center>
        {{ item.description }}
      </template>

      <!-- Footer Slot -->
      <template #footer>
        <i :class="item.footerIcon" class="footer-icon"></i>
        <span>{{ item.footerText }}</span>
      </template>
    </Card>
  </div>
</template>

<script>
import Card from '@/components/DashboardCard.vue';

export default {
  components: { Card },
  data() {
    return {
      items: [
        {
          title: 'Dashboard',
          description: 'Overview of statistics',
          bgColor: '#f7f4ff',
          titleColor: '#6f0ca9',
          icon: 'pi pi-chart-bar', // Background icon
          footerIcon: 'pi pi-info-circle', // Icon in footer
          footerText: 'More info',
        },
        // Add more card items here
      ],
    };
  },
};
</script>

<style>
.card-container {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
}
.footer-icon {
  font-size: 1.2rem;
}
</style>
