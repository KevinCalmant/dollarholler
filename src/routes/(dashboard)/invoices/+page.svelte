<script lang="ts">
  import CircledAmount from '$lib/components/CircledAmount.svelte'
  import Search from '$lib/components/Search.svelte'
  import { invoices, loadInvoices } from '$lib/stores/invoiceStore'
  import { onMount } from 'svelte'
  import InvoiceRow from './InvoiceRow.svelte'
  import { centsToDollars, sumLineItems } from '$utils/moneyHelpers'
  import BlankState from './BlankState.svelte'
  import InvoiceHeader from './InvoiceHeader.svelte'
  import Button from '$lib/components/Button.svelte'

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
  {#if $invoices?.length}
    <Search />
  {:else}
    <div></div>
  {/if}

  <!-- new invoice button -->
  <div>
    <Button label="+ Invoice" onClick={() => {}} />
  </div>
</div>

<!-- Invoices table -->
{#if $invoices === null}
  Loading...
{:else if $invoices.length}
  <InvoiceHeader className="text-daisyBush" />
  <div class="flex flex-col-reverse">
    {#each $invoices as invoice}
      <InvoiceRow {invoice} />
    {/each}
  </div>
  <CircledAmount label="Total" amount={formattedTotalAmount} />
{:else}
  <BlankState />
{/if}
