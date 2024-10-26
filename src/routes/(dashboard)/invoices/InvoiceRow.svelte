<script lang="ts">
  import AdditionalOptions from '$lib/components/AdditionalOptions.svelte'
  import Tag from '$lib/components/Tag.svelte'
  import { formatDate, isLate } from '$utils/dateHelpers'
  import { centsToDollars, sumLineItems } from '$utils/moneyHelpers'
  import { Icon, Eye, EllipsisHorizontal, PaperAirplane, Trash, Pencil } from 'svelte-hero-icons'
  import { InvoiceStatus } from '../../../enums'
  import Modal from '$lib/components/Modal.svelte'
  import Button from '$lib/components/Button.svelte'
  import { deleteInvoice } from '$lib/stores/invoiceStore'

  let { invoice }: { invoice: Invoice } = $props()

  let formattedTotalAmount = $state('')
  let dueDate = $state()
  let invoiceStatus = $state<InvoiceStatus>()
  let isAdditionalOptionsShowing = $state(false)
  let isModalShowing = $state(false)

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

  const toggleAddtionalOptions = () => (isAdditionalOptionsShowing = !isAdditionalOptionsShowing)
  const toggleModal = () => {
    if (isAdditionalOptionsShowing) toggleAddtionalOptions()
    isModalShowing = !isModalShowing
  }
  const handleEdit = () => console.log('editing')
  const handleSend = () => console.log('sending')

  const handleDelete = () => {
    deleteInvoice(invoice)
    toggleModal()
  }
</script>

<div class="invoice-table invoice-row items-center rounded-lg bg-white py-3 shadow-tableRow lg:py-6">
  <div class="status"><Tag label={invoiceStatus} className="ml-auto lg:ml-0" /></div>
  <div class="due-date textsm lg:text-lg">{dueDate}</div>
  <div class="invoice-number textsm lg:text-lg">{invoice.invoiceNumber}</div>
  <div class="client-name truncate text-base font-bold lg:text-xl">{invoice.client.name}</div>
  <div class="font-mondo amount textsm text-right font-bold lg:text-lg">
    {formattedTotalAmount}
  </div>
  <div class="lg:center view-button hidden text-sm lg:text-lg">
    <a href="#" class="text-pastelPurple hover:text-daisyBush"><Icon src={Eye} size="24" solid /></a>
  </div>
  <div class="lg:center more-buton hidden text-lg">
    <button class="text-pastelPurple hover:text-daisyBush" onclick={toggleAddtionalOptions}>
      <Icon src={EllipsisHorizontal} size="24" solid />
    </button>
    {#if isAdditionalOptionsShowing}
      <AdditionalOptions
        options={[
          { label: 'Send', icon: PaperAirplane, onClick: handleSend, disabled: false },
          { label: 'Edit', icon: Pencil, onClick: handleEdit, disabled: false },
          { label: 'Delete', icon: Trash, onClick: toggleModal, disabled: false },
        ]}
      />
    {/if}
  </div>
</div>

<Modal isVisible={isModalShowing} on:close={toggleModal}>
  <div class="flex h-full min-h-[175px] flex-col items-center justify-between gap-6">
    <div class="text-center text-xl font-bold text-daisyBush">
      Are you sure you want to delete this invoice to
      <span class="text-scarlet">{invoice.client.name}</span> for
      <span class="text-scarlet">{centsToDollars(sumLineItems(invoice.lineItems))}</span>
    </div>
    <div class="flex gap-4">
      <Button label="Cancel" onClick={toggleModal} isAnimated={false} style="secondary" />
      <Button label="Yes, delete it" onClick={handleDelete} isAnimated={false} style="destructive" />
    </div>
  </div>
</Modal>

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
