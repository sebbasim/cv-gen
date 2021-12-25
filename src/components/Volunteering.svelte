<script lang="ts">
    import Title from "../style-components/Title.svelte";
    import VolunteeringEntry from "../sub-components/Entry.svelte";
    import * as data from "../data.json";
</script>

<section>
    <Title title="Volunteering" />

    {#each data["volunteering"]["entries"] as volunteering_entry}
        <VolunteeringEntry {...volunteering_entry} />
    {/each}
</section>

<style>
</style>
