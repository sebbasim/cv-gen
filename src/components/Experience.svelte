<script lang="ts">
    import Title from "../style-components/Title.svelte";
    import ExperienceEntry from "../sub-components/Entry.svelte";
    import * as data from "../data.json";
</script>

<section>
    <Title title="Experience" />

    {#each data["experience"]["entries"] as experience}
        <ExperienceEntry {...experience} />
    {/each}
</section>

<style>
</style>
