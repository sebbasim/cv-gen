<script lang="ts">
    export let start_date: string;
    export let end_date: string;
    export let location: string;
</script>

<main>
    <span>{start_date} - {end_date}</span>
    <span class="location">{location}</span>
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
