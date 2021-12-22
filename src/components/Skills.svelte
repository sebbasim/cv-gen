<script lang="ts">
    import Title from "../style-components/Title.svelte";
    import * as data from "../data.json";
    import SubTitle from "../style-components/SubTitle.svelte";
import Level from "../sub-components/Level.svelte";
</script>

<Title title="Skills" />

{#each data["skills"] as skill_group}
    <SubTitle title={skill_group.group} />
    
        {#each skill_group.skill_set as skill}
           <div class="flex-container">
                <span class="skill-name"> {skill.name} </span>
                <Level level={skill.level} />
           </div>
        {/each}
    
{/each}

<style>
    .flex-container {
        display: flex; 
        justify-content: space-between;
        margin-bottom: 3px;
    }
    .skill-name {
        font-size: 0.9em;
    }
</style>
