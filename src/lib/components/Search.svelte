<script lang="ts">
  import { Icon, MagnifyingGlass } from 'svelte-hero-icons'
</script>

<div class="flex w-full">
  <div class="mr-2 mt-auto text-pastelPurple">
    <Icon src={MagnifyingGlass} size="28" class="text-grey hover:text-purple" />
  </div>
  <input
    type="text"
    name="search"
    placeholder="Search by keyword"
    class="borber-b-pastelPurple w-3/4 border-b-2 border-dashed bg-transparent font-sansSerif text-base text-black outline-none focus:border-solid focus:border-b-lavenderIndigo md:w-[14rem] lg:w-72 lg:text-xl"
  />
  <button class="font-sansSerif text-lg font-black text-pastelPurple lg:text-xl">Search</button>
</div>
