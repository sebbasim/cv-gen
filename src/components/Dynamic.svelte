<script lang="ts">
    import Title from "../style-components/Title.svelte";
    import Entry from "../sub-components/Entry.svelte";
    import * as data from "../data.json";
    export let component_title: string; 
</script>

<section>
    <Title title={data[`${component_title}`]["title"]} />

    {#each data[`${component_title}`]["entries"] as entry}
        <Entry {...entry} />
    {/each}
</section>

<style>
</style>
