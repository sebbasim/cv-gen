<script lang="ts">
    import Title from "../style-components/Title.svelte";
    import EducationEntry from "../sub-components/Entry.svelte";
    import * as data from "../data.json";
</script>

<section>
    <Title title="Education" />

    {#each data["education"]["entries"] as education}
        <EducationEntry {...education} />
    {/each}
</section>

<style>
</style>
