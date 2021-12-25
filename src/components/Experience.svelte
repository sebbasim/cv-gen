<script lang="ts">
    import { createEventDispatcher, onMount } from "svelte";
    import Title from "../style-components/Title.svelte";
    import ExperienceEntry from "../sub-components/Entry.svelte";
    import * as data from "../data.json";
    let height: number;
    const dispatch = createEventDispatcher();
    onMount(() => {
        dispatch("message", {
            height,
        });
    });
</script>

<div bind:clientHeight={height}>
    <Title title="Experience" />

    {#each data["experience"] as experience}
        <ExperienceEntry {...experience} />
    {/each}
</div>

<style>
</style>
