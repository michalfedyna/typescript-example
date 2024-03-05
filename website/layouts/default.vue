<template>
  <div class="flex min-h-screen flex-col">
    <Navbar />
    <main class="container mx-auto flex-1 py-6">
      <slot />
    </main>
    <Footer />
  </div>
</template>
