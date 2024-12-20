<template>
  <div>
    <p>This is the profile page.</p>
    <p>App Name: {{ appName }}</p>
  </div>
</template>

<script>
export default {
  computed: {
    // Access shared props from Inertia's $page object
    appName() {
      return this.$page.props.appName;
    },
  },
};
</script>
