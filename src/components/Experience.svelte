<script lang="ts">
    import Title from "../style-components/Title.svelte";
    import ExperienceEntry from "../sub-components/ExperienceEntry.svelte";
    let experiences = [
        {
            title: "Full-stack engineer",
            company: "Sparklink",
            start_date: "01/2020",
            end_date: "06/2021",
            location: "Antwerp, Belgium",
            bullet_points: [
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
            ],
        },
    ];
</script>

<Title title="Experience" />

{#each experiences as experience}
    <ExperienceEntry {...experience} />
{/each}

<style>
</style>
