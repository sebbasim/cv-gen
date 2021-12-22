<script lang="ts">
    import Title from "../style-components/Title.svelte";
    import VolunteeringEntry from "../sub-components/Entry.svelte";
    import * as data from "../data.json";
</script>

<Title title="Volunteering" />

{#each data["volunteering"] as volunteering_entry}
    <VolunteeringEntry {...volunteering_entry} />
{/each}

<style>
</style>
