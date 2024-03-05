import type { ComputedRef } from "vue";
import type { TOC } from "~/components/ContentTable.vue";
import type { ParsedContent, TocLink } from "@nuxt/content/types";

function extractTOC(links: TocLink[], basePath: string): TOC[] {
  const TOCs: TOC[] = [];

  for (const link of links) {
    const TOC: TOC = {
      title: link.text,
      path: basePath + "#" + link.id,
    };

    if (link.children) {
      TOC.children = extractTOC(link.children, basePath);
    }

    TOCs.push(TOC);
  }

  return TOCs;
}

export default function useTOC(content: ParsedContent | null): ComputedRef<TOC[]> {
  return computed(() => {
    const links = content?.body?.toc?.links;

    if (!content || !links || !content._path) return [];

    return extractTOC(links, content?._path);
  });
}
