<script lang="ts">
  import CircledAmount from '$lib/components/CircledAmount.svelte'
  import Search from '$lib/components/Search.svelte'
  import Tag from '$lib/components/Tag.svelte'
  import { Icon, EllipsisHorizontal, Eye } from 'svelte-hero-icons'
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
    <h3>Amount</h3>
    <div></div>
    <div></div>
  </div>

  <!-- invoices -->
  <div class="invoice-table invoice-row items-center rounded-lg bg-white py-3 shadow-tableRow lg:py-6">
    <div class="status"><Tag label="sent" className="ml-auto lg:ml-0" /></div>
    <div class="due-date textsm lg:text-lg">1/8/2024</div>
    <div class="invoice-number textsm lg:text-lg">12345</div>
    <div class="client-name text-base font-bold lg:text-xl">Compressed.fm</div>
    <div class="font-mondo amount textsm text-right font-bold lg:text-lg">$504.00</div>
    <div class="lg:center view-button textsm hidden lg:text-lg">
      <button class="text-pastelPurple hover:text-daisyBush">
        <Icon src={Eye} size="24" solid />
      </button>
    </div>
    <div class="lg:center more-buton hidden text-lg">
      <a href="#" class="text-pastelPurple hover:text-daisyBush"><Icon src={EllipsisHorizontal} size="24" solid /></a>
    </div>
  </div>
</div>

<CircledAmount label="Total" amount="$1,144.00" />

<style lang="postcss">
  .table-header h3 {
    @apply text-xl font-black leading-snug;
  }

  .invoice-row {
    grid-template-areas:
      'invoiceNumber invoiceNumber'
      'clientName amount'
      'dueDate status';
  }

  @media (min-width: 1024px) {
    .invoice-row {
      grid-template-areas: 'status dueDate invoiceNumber clientName amount viewButton moreButton';
    }
  }

  .invoice-row .status {
    grid-area: status;
  }

  .invoice-row .due-date {
    grid-area: dueDate;
  }

  .invoice-row .client-name {
    grid-area: clientName;
  }

  .invoice-row .invoice-number {
    grid-area: invoiceNumber;
  }

  .invoice-row .amount {
    grid-area: amount;
  }

  .invoice-row .view-button {
    grid-area: viewButton;
  }

  .invoice-row .more-buton {
    grid-area: moreButton;
  }
</style>
