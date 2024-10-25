<script lang="ts">
  export let label: 'draft' | 'sent' | 'current' | 'late' | 'paid' | 'archived' = 'draft'
  export let className = ''
</script>

<div
  class={`text-md w-20 rounded-full border-1 text-center font-bold capitalize ${className}`}
  class:inverted={label === 'draft'}
  class:success={label === 'sent' || label === 'current'}
  class:alert={label === 'late'}
  class:archived={label === 'paid' || label === 'archived'}
>
  {label}
</div>

<style lang="postcss">
  .inverted {
    @apply border-pastelPurple text-pastelPurple;
  }

  .success {
    @apply border-robinEggBlue bg-robinEggBlue text-blueGem;
  }

  .alert {
    @apply border-scarlet bg-scarlet text-goldenFizz;
  }

  .archived {
    @apply border-pastelPurple bg-pastelPurple text-white;
  }
</style>
