<template>
  <div class="card" :style="{ backgroundColor: bgColor }">
    <!-- Background Icon (Top Right) -->
    <div class="card-bg-icon" :class="icon"></div>

    <!-- Card Content -->
    <div class="card-content">
      <!-- Title Section -->
      <div class="card-title" :style="{ color: titleColor }">
        {{ title }}
      </div>

      <!-- Centered Content Section -->
      <div class="card-center">
        <slot name="center"></slot>
      </div>

      <!-- Footer Section -->
      <div class="card-footer">
        <slot name="footer"></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Card',
  props: {
    title: String,
    bgColor: String,
    titleColor: String,
    icon: String,
  },
};
</script>
