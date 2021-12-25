<script lang="ts">
    export let level: number;
</script>

<div>
    <i class="fas fa-circle icon main-color" />
    {#if level > 1}
        <i class="fas fa-circle icon main-color" />
    {:else}
        <i class="fas fa-circle icon" />
    {/if}

    {#if level > 2}
        <i class="fas fa-circle icon main-color" />
    {:else}
        <i class="fas fa-circle icon" />
    {/if}

    {#if level > 3}
        <i class="fas fa-circle icon main-color" />
    {:else}
        <i class="fas fa-circle icon" />
    {/if}

    {#if level > 4}
        <i class="fas fa-circle icon main-color" />
    {:else}
        <i class="fas fa-circle icon" />
    {/if}
</div>

<style>
    .icon {
        width: 12px;
        vertical-align: middle;
    }
    .main-color {
        color: var(--main-color);
    }
</style>
