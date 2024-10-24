<script lang="ts">
  import { Icon, MagnifyingGlass } from 'svelte-hero-icons'
</script>

<div class="flex">
  <div class="mr-2 mt-auto text-pastelPurple">
    <Icon src={MagnifyingGlass} size="28" class="text-grey hover:text-purple" />
  </div>
  <input
    type="text"
    name="search"
    placeholder="Search by keyword"
    class="borber-b-pastelPurple w-72 border-b-2 border-dashed bg-transparent font-sansSerif text-xl text-black outline-none focus:border-solid focus:border-b-lavenderIndigo"
  />
</div>
