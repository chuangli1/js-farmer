<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
import { Button } from '@/components/components/ui/button'
import {ref} from 'vue'
import Nav, {type LinkProp} from '@components/Nav.vue'
const isCollapsed = ref(false)
const links2: LinkProp[] = [
  {
    title: 'Social',
    label: '972',
    icon: 'lucide:user-2',
    variant: 'ghost',
  },
  {
    title: 'Updates',
    label: '342',
    icon: 'lucide:alert-circle',
    variant: 'ghost',
  },
  {
    title: 'Forums',
    label: '128',
    icon: 'lucide:message-square',
    variant: 'ghost',
  },
  {
    title: 'Shopping',
    label: '8',
    icon: 'lucide:shopping-cart',
    variant: 'ghost',
  },
  {
    title: 'Promotions',
    label: '21',
    icon: 'lucide:archive',
    variant: 'ghost',
  },
]

</script>

<template>
  <header>
    <div class="wrapper">
      <Button>你属</Button>
       <Nav
          :is-collapsed="isCollapsed"
          :links="links2"
        />
      <a href="/app_store/index">你好呀</a>

      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
