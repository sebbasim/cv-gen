<script lang="ts">
    import Title from "../style-components/Title.svelte";
    import SubTitle from "../style-components/SubTitle.svelte";
    import * as data from "../data.json";
</script>

<Title title="Personal Projects" />

{#each data["projects"] as project}
    <SubTitle title={project.title} />
    <ul>
        {#each project.bullet_points as bullet}
            <li style="font-size:0.9em">
                {bullet.text}
            </li>
        {/each}
    </ul>
{/each}

<style>
    ul {
        margin-top: 5px;
        padding-left: 20px;
    }
    li {
        margin-bottom: 5px;
    }
</style>
