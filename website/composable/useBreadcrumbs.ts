import type { Breadcrumb } from "~/components/NavigationBreadcrumb.vue";
import type { ComputedRef } from "vue";

export default function (): ComputedRef<Breadcrumb[]> {
  const route = useRoute();

  return computed(() => {
    return route.path
      .split("/")
      .filter((path) => path)
      .map((part, index, parts) => {
        const path = "/" + parts.slice(0, index + 1).join("/");
        return {
          title: part.replace(/-/g, " ").replace(/\b\w/g, (l) => l.toUpperCase()),
          path,
        };
      });
  });
}
