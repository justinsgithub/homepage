<template>
  <div>
    <Header />
    <div class="container" id="content">
      <main>
        <router-view />
      </main>
    </div>
  </div>
</template>

<script>
import Header from '@/components/Header'

export default {
  components: {
    Header,
  },
}
</script>

<style lang="less">
@import (reference) './styles/index.less';

.container {
  max-width: 1100px;
  margin: auto;
  background-color: #1e2127;
  @media @tablet, @desktop {
    width: 97%;
  }
}

.title {
  h1 {
    .frame-medium();
    border-bottom: @border-medium solid @title-color;
    text-transform: capitalize;
    text-shadow: 7px 7px @color-transparent;
    @media @tablet, @desktop {
      text-align: right;
    }
  }
}

/* Body */

body {
  background-color: #1e2127;
  font-family: 'CustomFont', sans-serif;
  font-size: @font-size * 1.2;
  background-color: @theme-color;
  color: @text-color;
  margin: @margin-zero;
}

/* Headings */

.heading(h1, @font-size * 3);
.heading(h2, @font-size * 2.3);
.heading(h3, @font-size * 1.9);
.heading(h4, @font-size * 1.5);

a {
  text-decoration: none;
  color: inherit;
}
</style>
