<template>
<Frame>
  <Page class="page" actionBarHidden="true">
    <StackLayout class="hello-world">
      <Label class="body" textWrap=true text="This is a home screen, we shouldn't have an actionbar"/>

      <Button class="btn btn-primary" @tap="onTap" text="Press to test"/>

    </StackLayout>

  </Page>
</Frame>
</template>

<script>
  import NotHome from './NotHome'
  import Home from './Home'
  export default {
    methods: {
      onTap () {
        this.$navigateTo(Home, {
          clearHistory: true
        });
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
