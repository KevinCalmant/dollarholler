<script lang="ts">
  import Portal from '$lib/components/Portal.svelte'
  import Overlay from '$lib/components/Overlay.svelte'
  import { Icon, XCircle } from 'svelte-hero-icons'
  import { createEventDispatcher } from 'svelte'

  const { isVisible = false } = $props()

  const dispatch = createEventDispatcher()
</script>

<svelte:window on:keydown={(event) => event.key === 'Escape' && dispatch('close')} />

{#if isVisible}
  <Portal>
    <Overlay />
    <div class="center fixed inset-0 z-modal">
      <div class="relative min-h-[230px] w-full max-w-[450px] rounded-lg bg-white px-10 py-7">
        <button class="absolute right-4 top-4 text-pastelPurple hover:text-daisyBush" onclick={() => dispatch('close')}
          ><Icon src={XCircle} solid size="24" /></button
        >
        <slot />
      </div>
    </div>
  </Portal>
{/if}
