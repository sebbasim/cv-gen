<script lang="ts">
    export let start_date: string;
    export let end_date: string;
    export let location: string;
</script>

<main>
    {#if start_date !== undefined && end_date !== undefined}
        <span>{start_date} - {end_date}</span>
    {/if}
    {#if location !== undefined}
        <span class="location">{location}</span>
    {/if}
</main>

<style>
    main {
        color: grey;
        font-size: 0.8em;
        margin-top: 5px;
        margin-bottom: 10px;
    }

    .location {
        margin-left: 10px;
    }
</style>
