<script lang="ts">
    import { createEventDispatcher, onMount } from "svelte";

    import * as data from "../data.json";
    let header = data["header"];
    let style = data["style"];
    let height;

    const dispatch = createEventDispatcher();

    onMount(() => {
        dispatch("height", {
            height,
        });
    });
</script>

<div
    id="flex-container"
    style="font-family:{style.font_family}"
    bind:clientHeight={height}
>
    <div>
        <h1>{header.name}</h1>
        <h2>{header.job_title}</h2>
        <br />
        <div id="grid-container">
            <span><i class="fas fa-phone icon" />&nbsp; + {header.mobile}</span
            >
            <span><i class="fab fa-github icon" />&nbsp; {header.github}</span>
            <span><i class="fas fa-envelope icon" />&nbsp; {header.email}</span>
            <span><i class="fas fa-location-arrow icon" />&nbsp; {header.location}</span
            >
        </div>
    </div>
    <div>
        <img
            class="profile-picture"
            src="assets/images/profile_picture.jpg"
            alt="profile"
        />
    </div>
</div>

<style>
    .profile-picture {
        width: 150px;
        border-radius: 100px;
    }
    .icon {
        width: 15px;
        color: var(--main-color);
        vertical-align: middle;
    }
    #flex-container {
        display: flex;
        justify-content: space-between;
        width: 195mm;
        font-family: "Roboto", sans-serif;
    }
    #grid-container {
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-template-rows: 1fr 1fr;
        column-gap: 30px;
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
</style>
