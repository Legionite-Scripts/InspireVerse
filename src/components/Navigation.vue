<template>
  <nav class="navbar">
    <main class="navbar-container">
      <div class="logo">
        <a href="/"><h3>InspireVerse</h3></a>
      </div>

      <!-- Desktop Navigation -->
      <div class="desktop-menu">
        <a href="/">Character Search</a>
        <a href="/about">Daily Verse</a>
        <a href="/services">Guidance by Topic</a>
        <a href="/contact">Support Us</a>

        <!-- Dark Mode Toggle for Desktop -->
        <button
          @click="toggleDarkMode"
          class="dark-mode-toggle desktop-dark-mode-toggle"
        >
          {{ isDarkMode ? "☀️ Light" : "🌙 Dark" }}
        </button>
      </div>

      <!-- Mobile Hamburger Menu and Dark Mode Toggle -->
      <div class="mobile-menu-actions">
        <!-- Dark Mode Toggle for Mobile -->
        <button
          @click="toggleDarkMode"
          class="dark-mode-toggle mobile-dark-mode-toggle"
        >
          {{ isDarkMode ? "☀️" : "🌙" }}
        </button>

        <!-- Mobile Menu Toggle -->
        <div class="mobile-menu-toggle">
          <button @click="toggleMobileMenu">
            <div class="hamburger" :class="{ 'is-active': isMobileMenuOpen }">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </button>
        </div>
      </div>
    </main>

    <!-- Mobile Menu Dropdown -->
    <main class="mobile-menu" :class="{ 'is-open': isMobileMenuOpen }">
      <a href="/">Character Search</a>
      <a href="/about">Daily Verse</a>
      <a href="/services">Guidance by Topic</a>
      <a href="/contact">Support Us</a>
    </main>
  </nav>
</template>

<script>
import { ref, onMounted } from "vue";

export default {
  name: "Navigation",
  setup() {
    const isMobileMenuOpen = ref(false);
    const isDarkMode = ref(false);

    const toggleMobileMenu = () => {
      isMobileMenuOpen.value = !isMobileMenuOpen.value;
    };

    const toggleDarkMode = () => {
      isDarkMode.value = !isDarkMode.value;
      applyDarkMode();
    };

    const applyDarkMode = () => {
      if (isDarkMode.value) {
        // Dark mode colors
        document.documentElement.style.setProperty(
          "--background",
          "var(--background-black)"
        );
        document.documentElement.style.setProperty("--primary-text", "#fff");
        document.documentElement.style.setProperty("--link-color", "#e0e0e0");
        document.documentElement.style.setProperty(
          "--nav-border-color",
          "#2a2a2a"
        );

        document.body.classList.add("dark-mode");
        localStorage.setItem("darkMode", "enabled");
      } else {
        // Light mode colors
        document.documentElement.style.setProperty("--background", "#ffffff");
        document.documentElement.style.setProperty("--primary-text", "#161616");

        document.body.classList.remove("dark-mode");
        localStorage.setItem("darkMode", "disabled");
      }
    };

    // Check for previous dark mode preference on component mount
    onMounted(() => {
      const savedDarkMode = localStorage.getItem("darkMode");

      // Check system preference if no saved preference
      if (savedDarkMode === "enabled") {
        isDarkMode.value = true;
        applyDarkMode();
      } else if (
        savedDarkMode === null &&
        window.matchMedia &&
        window.matchMedia("(prefers-color-scheme: dark)").matches
      ) {
        isDarkMode.value = true;
        applyDarkMode();
      }
    });

    return {
      isMobileMenuOpen,
      toggleMobileMenu,
      isDarkMode,
      toggleDarkMode,
    };
  },
};
</script>

<style scoped>
.navbar {
  background-color: var(--background);
  position: sticky;
  border-bottom: 1px solid var(--nav-border-color);
}

.navbar-container {
  display: flex;
  align-items: center;
  justify-content: space-between !important;
  padding: 1em 0 1em 0;
}

.logo a {
  text-decoration: none;
  font-size: 1.5rem;
  font-weight: bold;
}

.desktop-menu {
  display: none;
}

.mobile-menu-toggle {
  display: block;
}

.mobile-menu-toggle button {
  background: none;
  border: none;
  cursor: pointer;
}

.hamburger {
  width: 30px;
  height: 20px;
  position: relative;
  transform: rotate(0deg);
  transition: 0.5s ease-in-out;
  cursor: pointer;
}

.hamburger span {
  display: block;
  position: absolute;
  height: 3px;
  width: 100%;
  background: var(--primary-text);
  border-radius: 9px;
  opacity: 1;
  left: 0;
  transform: rotate(0deg);
  transition: 0.25s ease-in-out;
}

.hamburger span:nth-child(1) {
  top: 0px;
}

.hamburger span:nth-child(2) {
  top: 10px;
}

.hamburger span:nth-child(3) {
  top: 20px;
}

.hamburger.is-active span:nth-child(1) {
  top: 10px;
  transform: rotate(135deg);
}

.hamburger.is-active span:nth-child(2) {
  opacity: 0;
  left: -60px;
}

.hamburger.is-active span:nth-child(3) {
  top: 10px;
  transform: rotate(-135deg);
}

.mobile-menu {
  display: none;
  background-color: var(--background);
  width: 100%;
  position: absolute;
  top: 100%;
  left: 0;
  transition: max-height 0.3s ease-in-out, opacity 0.3s ease-in-out;
  max-height: 0;
  overflow: hidden;
  opacity: 0;
}

.mobile-menu.is-open {
  display: block;
  max-height: 300px;
  opacity: 1;
}

.mobile-menu a {
  display: block;

  text-decoration: none;
  padding: 1rem;
  border-top: 1px solid #555;
}

.mobile-menu a:hover {
  background-color: #555;
}
.mobile-menu-actions {
  display: flex;
  align-items: center;
  /* gap: 1rem; */
  display: none;
}

.dark-mode-toggle {
  background: none;
  border: none;
  cursor: pointer;
  font-size: 1.2rem;
  padding: 0.5rem;
}

.desktop-dark-mode-toggle {
  display: none;
}

@media screen and (min-width: 768px) {
  .mobile-dark-mode-toggle {
    display: none;
  }

  .desktop-dark-mode-toggle {
    display: block;
    margin-left: 1rem;
  }
}

/* Desktop Styles */
@media screen and (min-width: 768px) {
  .desktop-menu {
    display: flex;
    gap: 1rem;
  }

  .desktop-menu a {
    text-decoration: none;
    padding: 0.5rem 1rem;
    transition: background-color 0.3s;
  }

  .desktop-menu a:hover {
    background-color: #555;
  }

  .mobile-menu-toggle {
    display: none;
  }

  .mobile-menu {
    display: none;
  }
}

@media (max-width: 768px) {
  .mobile-menu-actions {
    display: flex !important;
  }
}
</style>
