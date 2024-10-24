<script lang="ts">
  import { Icon, XMark, Bars3 } from 'svelte-hero-icons'
  import Navlink from './Navlink.svelte'

  let isNavShowing = $state(false)

  const toggleNavbar = () => (isNavShowing = !isNavShowing)
</script>

<svelte:head>
  {#if isNavShowing}
    <style lang="postcss">
      body {
        @apply overflow-hidden md:overflow-auto;
      }
    </style>
  {/if}
</svelte:head>

<button class="fixed right-6 top-6 z-navBarToggle md:hidden" onclick={toggleNavbar}>
  {#if isNavShowing}
    <Icon src={XMark} class="text-goldenFizz" size="32" />
  {:else}
    <Icon src={Bars3} class="text-daisyBush" size="32" />
  {/if}
</button>

<header
  class="fixed z-navBar h-screen w-full -translate-x-full bg-daisyBush text-center transition-transform md:relative md:col-span-3 md:h-full md:translate-x-0"
  class:translate-x-0={isNavShowing}
>
  <div class="my-10 md:mb-24">
    <a href="/invoices"><img src="/images/logo.svg" alt="The Dollar Holler" class="mx-auto" /></a>
  </div>

  <nav>
    <ul class="list-none text-2xl font-bold">
      <li><Navlink href="/invoices">Invoice</Navlink></li>
      <li><Navlink href="/clients">Clients</Navlink></li>
      <li><Navlink href="#">Setting</Navlink></li>
      <li><Navlink href="#">Logout</Navlink></li>
    </ul>
  </nav>
</header>

<style lang="postcss">
  nav ul li {
    @apply mb-6;
  }
</style>
