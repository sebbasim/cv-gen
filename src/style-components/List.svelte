<script lang="ts">
    export let bullet_points = [
        {
            id: 1,
            text: "Implementing complex logic on the Salesforce platform including building custom interfaces, table/trigger logic and async work.",
        },
        {
            id: 2,
            text: "API integrations with external systems: ticketing systems, websites, planning applications,...",
        },
        {
            id: 3,
            text: "Salesforce Marketing Cloud: building highly personalized, automatic mails, setting up customer journeys, data automations,...",
        },
    ];
</script>

<ul>
    {#each bullet_points as bullet}
        <li>
            {bullet.text}
        </li>
    {/each}
</ul>

<style>
    li {
        font-size: 0.9em;
        margin-bottom: 5px;
    }
    ul {
        padding-left: 15px;
    }
</style>
