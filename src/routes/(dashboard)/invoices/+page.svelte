<script lang="ts">
  import CircledAmount from '$lib/components/CircledAmount.svelte'
  import Search from '$lib/components/Search.svelte'
  import Status from '$lib/components/Status.svelte'
  import { Icon, EllipsisHorizontal, Eye } from 'svelte-hero-icons'
</script>

<svelte:head>
  <title>Invoices | The Dollar Holler</title>
</svelte:head>

<div class="mb-16 flex w-full items-center justify-between">
  <!-- Search field -->
  <Search />

  <!-- new invoice button -->
  <div>
    <button
      class="relative translate-y-0 whitespace-nowrap rounded-lg bg-lavenderIndigo px-10 py-3 font-sansSerif text-xl font-black text-white shadow-colored transition-all hover:-translate-y-2 hover:shadow-coloredHover"
      >+ Invoice</button
    >
  </div>
</div>

<!-- list of invoices -->
<div>
  <!-- header -->
  <div class="table-header invoice-table text-daisyBush">
    <h3>Status</h3>
    <h3>Due Date</h3>
    <h3>ID</h3>
    <h3>Client</h3>
    <h3>Amount</h3>
    <div></div>
    <div></div>
  </div>

  <!-- invoices -->
  <div class="invoice-table items-center rounded-lg bg-white py-6 shadow-tableRow">
    <div><Status label="sent" /></div>
    <div class="text-lg">1/8/2024</div>
    <div class="text-lg">12345</div>
    <div class="text-xl font-bold">Compressed.fm</div>
    <div class="font-mondo text-lg font-bold">$504.00</div>
    <div class="center text-lg">
      <button class="text-pastelPurple hover:text-daisyBush">
        <Icon src={Eye} size="24" solid />
      </button>
    </div>
    <div class="center text-lg">
      <a href="#" class="text-pastelPurple hover:text-daisyBush"><Icon src={EllipsisHorizontal} size="24" solid /></a>
    </div>
  </div>
</div>

<CircledAmount label="Total" amount="$1,144.00" />

<style lang="postcss">
  .table-header h3 {
    @apply text-xl font-black leading-snug;
  }
</style>
