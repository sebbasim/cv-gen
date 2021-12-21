<script lang="ts">
    import Title from "../style-components/Title.svelte";
    import * as data from "../data.json";
</script>

<Title title="Summary" />

<ul>
    {#each data["summary"]["bullet_points"] as bullet}
        <li>{bullet.text}</li>
    {/each}
</ul>

<style>
</style>
