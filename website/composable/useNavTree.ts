import type { NavItem } from "@nuxt/content/types";
import type { NavTree } from "~/components/NavigationTree.vue";
import type { ComputedRef } from "vue";

function extractNavTree(items: NavItem[]): NavTree[] {
  const navTree: NavTree[] = [];

  for (const item of items) {
    const tree: NavTree = {
      title: item.title,
      path: item._path,
    };

    if (item.children) {
      tree.children = extractNavTree(item.children);
    }

    navTree.push(tree);
  }

  return navTree;
}

export default async function (basePath: string): Promise<ComputedRef<NavTree[]>> {
  const { data: navigation } = await useAsyncData("navigation", async () =>
    fetchContentNavigation(queryContent(basePath)),
  );

  return computed(() => {
    if (!navigation.value) return [];

    return extractNavTree(navigation.value);
  });
}
