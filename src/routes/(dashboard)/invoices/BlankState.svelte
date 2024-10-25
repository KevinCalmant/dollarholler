<script lang="ts">
  import BlankRow from '$lib/components/BlankRow.svelte'
  import InvoiceHeader from './InvoiceHeader.svelte'
</script>

<div>
  <div class="-mt-8 md:-mt-6 lg:-mt-14">
    <h2
      class="bg-arrowLeftUp md:bg-arrowRightUp mb-10 bg-left bg-no-repeat pl-24 pt-14 text-left font-handwriting text-2xl font-bold text-caribbeanGreen md:bg-right md:pl-0 md:pr-28 md:text-right md:text-4xl"
    >
      Add Your First Invoice
    </h2>
  </div>
  <!-- invoice header -->
  <InvoiceHeader className="text-fog" />

  <!-- blank rows -->
  <BlankRow />
  <BlankRow />
  <BlankRow />
</div>
