<script lang="ts">
  const { className }: { className: string } = $props()
</script>

<div class={`lg:invoice-table table-header hidden ${className}`}>
  <h3>Status</h3>
  <h3>Due Date</h3>
  <h3>ID</h3>
  <h3>Client</h3>
  <h3 class="text-right">Amount</h3>
  <div></div>
  <div></div>
</div>

<style lang="postcss">
  .table-header h3 {
    @apply text-xl font-black leading-snug;
  }
</style>
