<script lang="ts">
    export let bullet_points: {
        id: number;
        text: string;
    }[];
    export let font_size = "0.9em"; 
</script>

<ul>
    {#each bullet_points as bullet}
        <li style="font-size:{font_size}">
            {bullet.text}
        </li>
    {/each}
</ul>

<style>
    li {
        margin-bottom: 5px;
    }
    ul {
        padding-left: 20px;
    }
</style>
