<script lang="ts">
    import Title from "../style-components/Title.svelte";
    import ProjectEntry from "../sub-components/Entry.svelte";
    import * as data from "../data.json";
   
</script>

<Title title="Personal Projects" />

{#each data["projects"] as project}
    <ProjectEntry {...project} />
{/each}

<style>
</style>
