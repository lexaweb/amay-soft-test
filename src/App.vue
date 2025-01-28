<template>
    <slider></slider>
    <iframeComponent></iframeComponent>
    <iframe src="/" title="Control Panel">

    </iframe>
</template>

<script setup lang="ts">
import slider from '@/components/slider'
import iframeComponent from "@/components/iframeComponent"
</script>
<style lang="scss">
#app {
    height: 100%;
}
html,
body {
    position: relative;
    height: 100%;
}

body {
    background: #fff;
    font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
    font-size: 16px;
    line-height: 20px;
    font-weight: 400;
    color: #3C4267;
    margin: 0;
    padding: 0;
    @media (max-width: 768px) {
        font-size: 14px;
    }
}

iframe {
    width: 100%;
    height: 300px;
    border: none;
}

</style>
