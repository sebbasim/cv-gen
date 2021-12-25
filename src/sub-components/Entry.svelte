<script lang="ts">
    import DateAndLocation from "../style-components/DateAndLocation.svelte";
    import List from "../style-components/List.svelte";
    import SubTitle from "../style-components/SubTitle.svelte";
    export let title: string;
    export let institution: string;
    export let start_date: string;
    export let end_date: string;
    export let location: string;
    export let bullet_points: {
        id: number;
        text: string;
    }[];
</script>

<SubTitle {title} />
<main>
    {#if institution !== undefined}
    <span class="institution">{institution}</span>
    {/if}
    <DateAndLocation {start_date} {end_date} {location} />
    <List {bullet_points} />
</main>

<style>
    .institution {
        color: var(--main-color);
        font-weight: bold;
        font-size: 15px;
    }
</style>
