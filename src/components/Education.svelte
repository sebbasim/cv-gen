<script lang="ts">
    import Title from "../style-components/Title.svelte";
    import EducationEntry from "../sub-components/Entry.svelte";
    import * as data from "../data.json";
   
</script>

<Title title="Education" />

{#each data["education"] as education}
    <EducationEntry {...education} />
{/each}

<style>
</style>
