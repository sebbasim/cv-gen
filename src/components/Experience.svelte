<script lang="ts">
    import Title from "../style-components/Title.svelte";
    import ExperienceEntry from "../sub-components/Entry.svelte";
    import * as data from "../data.json";
   
</script>

<Title title="Experience" />

{#each data["experience"] as experience}
    <ExperienceEntry {...experience} />
{/each}

<style>
</style>
