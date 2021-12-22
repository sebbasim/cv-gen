<script lang="ts">
    import Title from "../style-components/Title.svelte";
    import * as data from "../data.json";
    let height: number;
</script>

<div bind:clientHeight={height}>
    <Title title="Summary" />

    <ul>
        {#each data["summary"]["bullet_points"] as bullet}
            <li>{bullet.text}</li>
        {/each}
    </ul>
</div>

<style>
</style>
