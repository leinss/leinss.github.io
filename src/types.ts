export type Site = {
  NAME: string;
  EMAIL: string;
  NUM_POSTS_ON_HOMEPAGE: number;
  NUM_WORKS_ON_HOMEPAGE: number;
  NUM_PROJECTS_ON_HOMEPAGE: number;
  NUM_EDUCATION_ON_HOMEPAGE: number;
};

export type Metadata = {
  TITLE: string;
  DESCRIPTION: string;
};

export type Socials = {
  /**
   * Doubles as the Feather icon name and as the key Head.astro looks up for
   * the schema.org `sameAs` list, so it has to stay a name Feather ships.
   * Feather has no `x` icon, which is why the X profile is keyed `twitter`.
   */
  NAME: string;
  HREF: string;
  /** What the visitor reads, when the network has outgrown its icon name. */
  LABEL?: string;
}[];
