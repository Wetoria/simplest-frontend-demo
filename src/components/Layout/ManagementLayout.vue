<template>
  <div class="container">
    <div class="left"
      style="
        width: 290px;
        height: 100%;
        background: white;
      "
    ></div>
    <div class="right"
      style="
        width: calc(100% - 290px);
        height: 100%;
        display: flex;
        flex-direction: column;
      "
    >
      <div
        style="
          width: 100%;
          height: 50px;
          background: white;
        "
      ></div>
      <div
        style="
         width: 100%;
         height: calc(100% - 50px);
        "
      >
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<style>
.container {
  width: 100%;
  height: 100%;
  background: #EEF0F3;
  display: flex;
}

</style>