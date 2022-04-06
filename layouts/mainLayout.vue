<template>
  <div>
    <nav class="nav">
      <img src="../assets/image/logo.png" alt="" class="logo" />
      <div class="nav-search">
        <img src="../assets/image/search.svg" alt="" />
        <input type="text" placeholder="Поиск" />
      </div>
      <img src="../assets/image/accoutn_nav.svg" alt="" class="account" />
    </nav>
    <nuxt />

    <footer class="footer">
      <div class="container">
        <hr />
        <div class="footer-contain">
          <p class="copyrite">© 2021 Lorem inpsum</p>
          <div class="network">
            <a href="#"
            class="network-img"
              ><img
                src="../assets/image/network/Vector.svg"
                
                alt=""
            /></a>
            <a href="#"
            class="network-img"
              ><img
                src="../assets/image/network/Vector-1.svg"
                
                alt=""
            /></a>
            <a href="#"
            class="network-img"
              ><img
                src="../assets/image/network/Vector-2.svg"
                
                alt=""
            /></a>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>


<style lang="scss">
.nav {
  display: flex;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  padding: 14px 40px;
  align-items: center;
  justify-content: space-between;
  &-search {
    border-radius: 50px;
    width: 50%;
    display: flex;
    align-items: center;
    box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);
    padding: 7px 22px;

    input {
      padding: 10px 0;
      width: 100%;
      padding-left: 23px;
      font-size: 16px;
      line-height: 19px;
      &:focus {
        outline: none;
      }
    }
  }
}
.footer {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  hr {
    margin-bottom: 30px;
    border: 1px solid #e9ebee;
  }
  &-contain {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .network {
    .network-img:not(.network-img:first-child) {
      margin-left: 60px;
    }
  }
}
</style>