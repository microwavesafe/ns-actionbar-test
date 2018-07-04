<template>
  <Page class="page">
    <ActionBar class="action-bar" title="Not Home Page">
      <ActionItem text="Action"></ActionItem>
    </ActionBar>

    <StackLayout class="hello-world">
      <Label class="body" textWrap=true text="This is a not Home page showed after navigating from the home page."/>

    </StackLayout>

  </Page>
</template>

<script>
  export default {
    data () {
      return {
        surprise: false,
      };
    },
  };
</script>

<style scoped>
  .hello-world {
    margin: 20;
  }

  Label {
    color: red;
  }
</style>
