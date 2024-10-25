<script lang="ts">
  import { Icon, type IconSource } from 'svelte-hero-icons'

  const {
    options,
  }: {
    options: {
      label: string
      disabled: boolean
      onClick: () => void
      icon?: IconSource
    }[]
  } = $props()
</script>

<ul class="absolute ml-48 mt-28 flex-col rounded-lg bg-white text-sm shadow-lg">
  {#each options as option}
    {#if !option.disabled}
      <li>
        <button
          class="flex w-full gap-x-2 p-4 font-sansSerif font-bold text-pastelPurple hover:text-daisyBush"
          onclick={option.onClick}
        >
          {#if option.icon}
            <Icon src={option.icon} size="20" solid />
          {/if}
          {option.label}
        </button>
      </li>
    {/if}
  {/each}
</ul>

<style lang="postcss">
  li {
    @apply border-b-2 border-whisper;
  }

  li:last-child {
    @apply border-b-0;
  }
</style>
