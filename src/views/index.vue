<template>
  <main>
    <div class="home">
      <div class="search-container">
        <div class="search-icon">
          <img src="/icons/search.svg" alt="Search" />
        </div>
        <input
          type="search"
          id="search"
          class="search-input width-100"
          placeholder="Search Bible Character"
        />
      </div>
    </div>
  </main>
</template>

<script>
import Navigation from "../components/Navigation.vue";

export default {
  components: {
    Navigation,
  },
};
</script>

<style scoped>
#search {
  background-color: var(--home-search-input-color);
}


.search-container {
  position: relative;
  display: flex;
  align-items: center;
}

.search-icon {
  position: absolute;
  left: 10px;
}

.search-input {
  padding-left: 40px; /* Space for the icon */
  width: 100%;
  height: 40px; /* Adjust as needed */
  border: .5px solid var(--nav-border-color, #ccc);
  border-radius: 8px; /* Rounded corners */
  outline: none;
}

.search-input:focus {
  border-color: var(--primary-color, #007bff); /* Highlight on focus */
}
</style>
