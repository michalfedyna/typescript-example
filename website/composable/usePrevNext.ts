import type { ComputedRef } from "vue";
import type { NavigationPrevNext } from "~/components/NavigateButtons.vue";

export default async function (): Promise<ComputedRef<{ prev: NavigationPrevNext; next: NavigationPrevNext }>> {
  const route = useRoute();

  const { data: links } = await useAsyncData("[prev, next]" + route.path, () =>
    queryContent().only(["_path", "title"]).findSurround(route.path),
  );

  return computed(() => {
    const items = links?.value;
    if (!items) return { prev: undefined, next: undefined };

    let prev, next;

    if (items[0]) prev = { title: items[0].title, path: items[0]._path };
    if (items[1]) next = { title: items[1].title, path: items[1]._path };

    return { prev, next };
  });
}
