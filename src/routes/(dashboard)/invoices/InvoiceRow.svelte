<script lang="ts">
  import Tag from '$lib/components/Tag.svelte'
  import { formatDate, isLate } from '$utils/dateHelpers'
  import { centsToDollars, sumLineItems } from '$utils/moneyHelpers'
  import { Icon, Eye, EllipsisHorizontal } from 'svelte-hero-icons'
  import { InvoiceStatus } from '../../../enums'

  let { invoice }: { invoice: Invoice } = $props()

  let formattedTotalAmount = $state('')
  let dueDate = $state()
  let invoiceStatus = $state<InvoiceStatus>()

  $effect(() => {
    formattedTotalAmount = centsToDollars(sumLineItems(invoice.lineItems))
    dueDate = formatDate(invoice.dueDate)

    if (invoice.invoiceStatus === 'draft') invoiceStatus = InvoiceStatus.DRAFT
    else if (invoice.invoiceStatus === 'sent') {
      invoiceStatus = isLate(invoice.dueDate) ? InvoiceStatus.LATE : InvoiceStatus.SENT
    } else if (invoice.invoiceStatus === 'paid') {
      invoiceStatus = InvoiceStatus.PAID
    }
  })
</script>

<div class="invoice-table invoice-row items-center rounded-lg bg-white py-3 shadow-tableRow lg:py-6">
  <div class="status"><Tag label={invoiceStatus} className="ml-auto lg:ml-0" /></div>
  <div class="due-date textsm lg:text-lg">{dueDate}</div>
  <div class="invoice-number textsm lg:text-lg">{invoice.invoiceNumber}</div>
  <div class="client-name truncate text-base font-bold lg:text-xl">{invoice.client.name}</div>
  <div class="font-mondo amount textsm text-right font-bold lg:text-lg">
    {formattedTotalAmount}
  </div>
  <div class="lg:center view-button textsm hidden lg:text-lg">
    <button class="text-pastelPurple hover:text-daisyBush">
      <Icon src={Eye} size="24" solid />
    </button>
  </div>
  <div class="lg:center more-buton hidden text-lg">
    <a href="#" class="text-pastelPurple hover:text-daisyBush"><Icon src={EllipsisHorizontal} size="24" solid /></a>
  </div>
</div>

<style lang="postcss">
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
