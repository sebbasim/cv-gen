<script lang="ts">
    import Title from "../style-components/Title.svelte";
    import * as data from "../data.json";
    import List from "../style-components/List.svelte";
    let bullet_points = data["summary"]["bullet_points"];
</script>

<section>
    <Title title="Summary" />
    <List {bullet_points} font_size="0.9em" />
</section>

<style>
</style>
