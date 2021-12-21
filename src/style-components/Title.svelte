<script lang="ts">
    export let title: string;
</script>


<h2>{title}</h2>
<hr />


<style>
    h2 {
        text-transform: uppercase;
        font-size: 1.7em;
        font-weight: 600;
        font-family: "Roboto", sans-serif;
        margin: 10px 10px 0px 10px; 
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
