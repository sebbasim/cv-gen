<script lang="ts">
    export let level: number;
</script>
<div>
<img class="icon" alt="blue dot" src="assets/icons/circle-blue.svg" />

{#if level > 1}
    <img class="icon" alt="blue dot" src="assets/icons/circle-blue.svg" />
{:else}
    <img class="icon" alt="black dot" src="assets/icons/circle-black.svg" />
{/if}

{#if level > 2}
    <img class="icon" alt="blue dot" src="assets/icons/circle-blue.svg" />
{:else}
    <img class="icon" alt="black dot" src="assets/icons/circle-black.svg" />
{/if}

{#if level > 3}
    <img class="icon" alt="blue dot" src="assets/icons/circle-blue.svg" />
{:else}
    <img class="icon" alt="black dot" src="assets/icons/circle-black.svg" />
{/if}

{#if level > 4}
    <img class="icon" alt="blue dot" src="assets/icons/circle-blue.svg" />
{:else}
    <img class="icon" alt="black dot" src="assets/icons/circle-black.svg" />
{/if}
</div>

<style>
    .icon {
        width: 17px;
        color: #00bfff;
        vertical-align: middle;
    }
    img {
        margin: 0px;
        padding: 0px;
        float: left;
    }
</style>
