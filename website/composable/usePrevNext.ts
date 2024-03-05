import type { ComputedRef } from "vue";
import type { NavigationPrevNext } from "~/components/NavigateButtons.vue";

export default async function (): Promise<ComputedRef<{ prev: NavigationPrevNext; next: NavigationPrevNext }>> {
  const route = useRoute();

  const { data: links } = await useAsyncData("[prev, next]" + route.path, () =>
    queryContent().only(["_path", "title"]).findSurround(route.path),
  );

  return computed(() => {
    const items = links?.value;
    if (!items) return { prev: null, next: null };

    const prevItem = items[0];
    const nextItem = items[1];

    const prev = {
      title: prevItem.title,
      path: prevItem._path,
    };

    const next = {
      title: nextItem.title,
      path: nextItem._path,
    };

    return { prev, next };
  });
}
