<script lang="ts">
  import CircledAmount from '$lib/components/CircledAmount.svelte'
  import Search from '$lib/components/Search.svelte'
  import { invoices, loadInvoices } from '$lib/stores/invoiceStore'
  import { onMount } from 'svelte'
  import InvoiceRow from './InvoiceRow.svelte'
  import { centsToDollars, sumLineItems } from '$utils/moneyHelpers'

  onMount(() => {
    loadInvoices()
  })

  const totalAmount = $derived(
    sumLineItems($invoices.flatMap((invoice) => invoice.lineItems).filter((item) => item != undefined)),
  )

  const formattedTotalAmount = $derived(centsToDollars(totalAmount))
</script>

<svelte:head>
  <title>Invoices | The Dollar Holler</title>
</svelte:head>

<div
  class="mb-7 flex w-full flex-col-reverse items-start justify-between gap-y-6 md:flex-row md:items-center md:gap-y-4 lg:mb-16"
>
  <!-- Search field -->
  <Search />

  <!-- new invoice button -->
  <div>
    <button
      class="relative translate-y-0 whitespace-nowrap rounded-lg bg-lavenderIndigo px-5 py-2 font-sansSerif text-base font-black text-white shadow-colored transition-all hover:-translate-y-2 hover:shadow-coloredHover lg:px-10 lg:py-3 lg:text-xl"
      >+ Invoice</button
    >
  </div>
</div>

<!-- list of invoices -->
<div>
  <!-- header -->
  <div class="lg:invoice-table table-header hidden text-daisyBush">
    <h3>Status</h3>
    <h3>Due Date</h3>
    <h3>ID</h3>
    <h3>Client</h3>
    <h3 class="text-right">Amount</h3>
    <div></div>
    <div></div>
  </div>

  <!-- invoices -->
  {#each $invoices as invoice}
    <InvoiceRow {invoice} />
  {/each}
</div>

<CircledAmount label="Total" amount={formattedTotalAmount} />

<style lang="postcss">
  .table-header h3 {
    @apply text-xl font-black leading-snug;
  }
</style>
