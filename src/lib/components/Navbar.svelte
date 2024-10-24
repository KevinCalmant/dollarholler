<script lang="ts">
  import { page } from '$app/stores'
  import { onMount } from 'svelte'
  import Navlink from './Navlink.svelte'

  let currentPath: string

  onMount(() => (currentPath = window.location.pathname))
</script>

<header class="col-span-3 bg-daisyBush text-center">
  <div>
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
