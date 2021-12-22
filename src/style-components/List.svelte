<script lang="ts">
    export let bullet_points: {
        id: number;
        text: string;
    }[];
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
