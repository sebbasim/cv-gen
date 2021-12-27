<script lang="ts">
    export let title: string;
    import * as data from "../data.json";

	let style = data["style"]; 
</script>

<h2 style="font-size: {style.header_1.font_size}">{title}</h2>
{#if style.header_1.underline}
<hr />
{/if}

<style>
    h2 {
        text-transform: uppercase;
        font-weight: 600;
        font-family: "Roboto", sans-serif;
        margin: 10px 10px 0px 0px; 
    }
    hr {
        display: block;
        height: 1px;
        border: 0;
        border-top: 3px solid;
        margin: 1px 0;
        padding: 0;
    }
</style>
