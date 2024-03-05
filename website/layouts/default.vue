<template>
  <div class="flex min-h-screen flex-col">
    <Navbar />
    <main class="flex-1 py-6">
      <slot />
    </main>
    <Footer />
  </div>
</template>
