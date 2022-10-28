<template>
  <div class="hcontainer">
    <div class="titleContainer">
      <div class="title">
        <router-link to="/">
          <h4>
            Justin
            <span style="color: red">@</span>
            Home
          </h4>
        </router-link>
      </div>
      <div class="menuButton">
        <v-icon v-if="isMenuCollapsed" name="bars" scale="2" v-on:click="isMenuCollapsed = !isMenuCollapsed" />
        <v-icon v-else name="regular/window-close" scale="2" v-on:click="isMenuCollapsed = !isMenuCollapsed" />
      </div>
    </div>
    <div class="list" v-bind:class="{ collapsedMenu: isMenuCollapsed, expandedMenu: !isMenuCollapsed }">
      <!-- NO BLOG YET <ul> <li> <a rel="nofollow noopener noreferrer" href="https://blog.justintylers.com"> Blog </a> </li> </ul> -->
      <ul>
        <li>
          <a target="_blank" rel="nofollow noopener noreferrer" href="https://twitter.com/JustinTAngeles">
            <v-icon name="brands/twitter" scale="2" class="twitter" />
            <!-- <FaTwitter color="#1DA1F2" size="30" /> -->
          </a>
        </li>
        <li>
          <a target="_blank" rel="nofollow noopener noreferrer" href="https://github.com/JustinsGithub">
            <v-icon name="brands/github" scale="2" class="github"/>
            <!-- <FaGithub color="#FFFFFF" size="30" /> -->
          </a>
        </li>
        <li>
          <a target="_blank" rel="nofollow noopener noreferrer" href="https://www.linkedin.com/in/JustinTAngeles">
            <v-icon name="brands/linkedin" scale="2" class="linkedin"/>
            <!-- <FaLinkedin color="#3077B0" size="30" /> -->
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Header',
  data() {
    return {
      isMenuCollapsed: true,
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
@import (reference) '../styles/index.less';

.fa-icon.twitter {
  fill: #1DA1F2;
} 

.fa-icon.github {
  fill: #FFFFFF;
} 

.fa-icon.linkedin {
  fill: #3077B0;
} 

.hcontainer {
  position: fixed;
  top: 0px;
  left: 0px;
  width: 100%;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: 1000;
  padding: @padding-small @padding-medium;
  border-bottom: 0px;
  background-color: @theme-color;
  color: @text-color;
  font-size: @font-size;
  & + div {
    margin-top: @margin-medium * 5;
  }
  @media @mobile {
    padding: @padding-small;
    flex-direction: column;
  }
}

.titleContainer {
  display: flex;
  width: 100%;
  align-items: center;
  @media @mobile {
    justify-content: space-between;
  }
}

.title {
  h4 {
    margin: @margin-zero;
    padding: @padding-zero @padding-small;
    color: inherit;
    transition: @transition-time color;
  }
  p {
    margin: @margin-zero;
    text-align: center;
  }
  &:hover {
    h4,
    p {
      color: #61afef;
    }
  }
}

.list {
  .flex-center();
  flex-wrap: nowrap;
  font-size: 1.4rem;
  ul {
    list-style: none;
    .flex-center();
    flex-wrap: nowrap;
    height: 8vh;
    margin: @margin-zero @margin-medium;
    padding: @padding-zero;
    @media @mobile {
      margin-top: @margin-small;
      margin-bottom: @margin-small;
    }
    li {
      margin: @margin-zero @margin-small;
      a {
        transition: @transition-time color;
        &:hover {
          cursor: pointer;
          color: #c678dd;
        }
      }
    }
  }
  @media @mobile {
    flex-direction: column;
    margin-top: @margin-small;
  }
}

.menuButton {
  display: none;
  @media @mobile {
    display: block;
    margin-left: @margin-medium;
    float: right;
    margin-right: @margin-small;
    .fa-icon {
      fill: @text-color;
    }
  }
}

.collapsedMenu {
  @media @mobile {
    display: none;
    transition: @transition-time max-height ease, @transition-time margin ease, @transition-time opacity ease;
  }
}

.expandedMenu {
  @media @mobile {
    opacity: 0.8;
    transition: @transition-time max-height ease, @transition-time opacity ease;
  }
}
</style>
