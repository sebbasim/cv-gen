<script lang="ts">
    import { createEventDispatcher, onMount } from "svelte";
    import * as data from "../data.json";

    const header = data["header"];
    const style = data["style"];
    let height: number;

    const dispatch = createEventDispatcher();

    onMount(() => {
        dispatch("height", {
            height,
        });
    });
</script>

<div
    class="flex-container"
    style:font-family={style.font_family}
    bind:clientHeight={height}
>
    <div>
        <h1>{header.name}</h1>
        <h2>{header.job_title}</h2>
        <br />
        <div class="grid-container">
            {#each header["information"] as info}
            <span><i class={info.icon} />&nbsp;  {info.text}</span> 
            {/each}       
        </div>
    </div>
    <div>
        <img src={header["image"]} alt="profile" />
    </div>
</div>

<style>
    .flex-container {
        display: flex;
        justify-content: space-between;
        width: 195mm;
        font-family: "Roboto", sans-serif;
        color: rgb(88, 86, 86);
    }
    .grid-container {
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-template-rows: 1fr 1fr;
        column-gap: 30px;
        row-gap: 5px;
    }
    .icon {
        width: 15px;
        color: var(--main-color);
        vertical-align: middle;
    }
    h1 {
        text-transform: uppercase;
        font-size: 2.2em;
        font-weight: 600;
        font-family: "Roboto", sans-serif;
        margin: 10px 10px 0px 0px;
    }
    h2 {
        text-transform: uppercase;
        font-size: 1em;
        font-weight: 800;
        font-family: "Roboto", sans-serif;
        margin: 0px 10px 0px 0px;
        color: var(--main-color);
    }
    img {
        width: 150px;
        border-radius: 100px;
    }
</style>
