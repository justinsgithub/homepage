<template>
  <div>
    <h1 class="jh">Justin Angeles</h1>
    <a target="_blank" rel="nofollow noopener noreferrer" href="https://www.linkedin.com/in/justintylers">
      <div class="card">
        <div class="post">
          <div class="cover">
            <img src="../assets/images/me.jpg" height="200px" width="200px" class="me" alt="picture of site owner Justin Angeles" />
          </div>
          <div class="content">
            <span>
              Welcome to my homepage.<br />
              This site contains links to my activities & projects on the internet. <br />
              <span style="color: #d19a66">Click here</span> to get ahold of me on LinkedIn.
            </span>
          </div>
        </div>
      </div>
    </a>
    <a target="_blank" rel="nofollow noopener noreferrer" href="https://docs.justintylers.com">
      <div class="card">
        <div class="post">
          <div class="cover">
            <img src="../assets/images/learning-docs-cover.png" height="150px" width="225px" alt="Justins Learning Docs" />
          </div>
          <div class="content">
            <span>
              I created study docs to help learn and document things I learn about.
              <br />
              Currently it is pretty much all tech subjects. <br />
              <span style="color: #d19a66">Click here</span> to check them out at docs.justintylers.com
            </span>
          </div>
        </div>
      </div>
    </a>
    <a target="_blank" rel="nofollow noopener noreferrer" href="https://portfolio.justintylers.com">
      <div class="card">
        <div class="post">
          <div class="cover">
            <img src="../assets/images/portfolio-cover.png" height="150px" width="225px" alt="developer portfolio" />
          </div>
          <div class="content">
            <span>
              This is a link to my software development portfolio. <br />
              <span style="color: #d19a66">Click here</span> to see it at portfolio.justintylers.com
            </span>
          </div>
        </div>
      </div>
    </a>
    <a target="_blank" rel="nofollow noopener noreferrer" href="https://app.simplenote.com/p/WFNTYm">
      <div class="card">
        <div class="post">
          <div class="cover">
            <img src="../assets/images/simplenote-writings.png" height="150px" width="225px" alt="simplenote writings" />
          </div>
          <div class="content">
            <span>
              I did some writings while recovering from hard drug addiction. <br />
              <span style="color: red;">Warning:</span> some of them get pretty dark. <br />
              <span style="color: #d19a66">Click here</span> to check them out at simplenote.com
            </span>
          </div>
        </div>
      </div>
    </a>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'HomeView',
}
</script>

<style scoped lang="less">
@import (reference) '../styles/index.less';

.me {
  border-radius: 50%;
}

.jh {
  text-align: center;
  margin-top: 80px;
}

.container {
  .flex-center();
  justify-content: center;
  flex-direction: column;
  @media @mobile {
    flex-direction: column;
  }
  box-shadow: @box-shadow-cover;
  & > a > div {
    transition: @transition-time transform;
  }

  h2 {
    color: #61afef;
  }
  ul > li {
    padding-top: 0.3em;
  }
}

.post {
  .flex-center();
  .frame-small();
  flex-wrap: initial;
  flex-direction: row;
  width: 100%;
  box-sizing: border-box;
  &:hover {
    > div:first-child > a > div {
      transform: scale(1.1) !important;
    }
  }
  @media @mobile {
    width: 100%;
    flex-direction: column;
  }
}

.cover {
  overflow: hidden;
  margin: @margin-small;
  width: 40%;
  min-width: 40%;
  & > a > div {
    transition: @transition-time transform;
  }
  @media @mobile {
    min-width: 100%;
    width: 100%;
    text-align: center;
  }
}

.content {
  .frame-small();
  text-align: center;
  h1,
  h2,
  p {
    text-align: center;
    margin: @margin-zero @margin-zero @margin-zero @margin-zero;
    padding-bottom: 20px;
  }
  h2 {
    text-shadow: @text-shadow-title;
  }
  span > Link {
    color: #61afef;
  }
  p {
    .frame-small();
  }
  @media @desktop {
    width: 600px;
  }
}

.badge {
  color: #61afef;
}

.badge:hover {
  color: #c678dd;
}

.card {
  padding: 1rem;
  margin: 0.7rem 0;
  padding-bottom: 20px;
  background-color: #1e2127;
  box-shadow: @box-shadow-cover;
}
.list {
  .flex-center();
  flex-wrap: nowrap;
  font-size: 1rem;
  ul {
    list-style: none;
    .flex-center();
    flex-wrap: nowrap;
    height: 8vh;
    font-size: 1.5em;
    margin: @margin-zero @margin-medium;
    padding: @padding-zero;
    @media @mobile {
      margin-top: @margin-small;
      margin-bottom: @margin-small;
    }
    li {
      margin: @margin-zero @margin-small;
      a {
        // text-transform: uppercase;
        transition: @transition-time color;
        &:hover {
          cursor: pointer;
          color: #c678dd;
        }
      }
    }
  }
}

ul.postTags {
  padding: 0;
  display: inline-flex;
  list-style: none;
  justify-content: center;

  li {
    margin-right: 10px;
    justify-content: center;
  }
}
</style>
