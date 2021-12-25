<script lang="ts">
    import { createEventDispatcher, onMount } from "svelte";
    import Title from "../style-components/Title.svelte";
    import * as data from "../data.json";
    import List from "../style-components/List.svelte";
    let bullet_points = data["summary"]["bullet_points"];
    let height: number;
    const dispatch = createEventDispatcher();
    onMount(() => {
        dispatch("message", {
            height,
        });
    });
</script>

<div bind:clientHeight={height}>
    <Title title="Summary" />
    <List {bullet_points} font_size="0.9em" />
</div>

<style>
</style>
