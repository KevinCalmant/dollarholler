<script lang="ts">
  import { page } from '$app/stores'

  export let href: string
</script>

<a {href} class:active={$page.url.pathname === href}><slot /></a>

<style lang="postcss" scoped>
  a {
    @apply font-bold text-white hover:text-goldenFizz;
  }

  a.active {
    @apply px-8 text-robinEggBlue transition-[padding];
    background:
      url('/images/active-nav--left.svg') left no-repeat,
      url('/images/active-nav--right.svg') right no-repeat;
  }

  a.active:hover {
    @apply px-9;
  }
</style>
