<script lang="ts">
    import Title from "../style-components/Title.svelte";
    import Entry from "../sub-components/Entry.svelte";
    import * as data from "../data.json";
</script>

<section>
    <Title title={data["dynamic"]["title"]} />

    {#each data["dynamic"]["entries"] as entry}
        <Entry {...entry} />
    {/each}
</section>

<style>
</style>
