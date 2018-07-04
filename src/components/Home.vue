<template>
  <Page class="page">
    <ActionBar class="action-bar" title="Home">
      <ActionItem text="Action"></ActionItem>
    </ActionBar>

    <StackLayout class="hello-world">
      <Label class="body" textWrap=true text="This is a home screen, tap the button to go to the next screen"/>

      <Button class="btn btn-primary" @tap="onTap" text="Tap me!"/>

    </StackLayout>

  </Page>
</template>

<script>
  import NotHome from './NotHome'
  export default {
    methods: {
      onTap () {
        this.$navigateTo(NotHome)
      }
    }
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
