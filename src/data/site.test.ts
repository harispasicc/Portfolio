import { describe, expect, it } from "vitest";
import {
  experience,
  links,
  nextProjects,
  person,
  skillGroups,
} from "./site";

describe("site data", () => {
  it("has core profile fields", () => {
    expect(person.name.length).toBeGreaterThan(0);
    expect(person.roleLine.length).toBeGreaterThan(0);
  });

  it("uses valid external and mail links", () => {
    expect(links.github).toMatch(/^https:\/\//);
    expect(links.linkedin).toMatch(/^https:\/\//);
    expect(links.email).toMatch(/^mailto:/);
    expect(links.fitbookLive).toMatch(/^https:\/\//);
    expect(links.fitbookRepo).toMatch(/^https:\/\//);
  });

  it("keeps non-empty content sections", () => {
    expect(experience.length).toBeGreaterThan(0);
    expect(skillGroups.length).toBeGreaterThan(0);
    skillGroups.forEach((group) => {
      expect(group.items.length).toBeGreaterThan(0);
    });
  });

  it("references local project images", () => {
    nextProjects.forEach((project) => {
      expect(project.image).toMatch(/^\/images\//);
    });
  });
});
