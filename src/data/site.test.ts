import { describe, expect, it } from "vitest";
import {
  experience,
  links,
  person,
  skillGroups,
  urbankey,
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
    expect(urbankey.live).toMatch(/^https:\/\//);
    expect(urbankey.repo).toBe(links.urbankeyRepo);
  });

  it("keeps non-empty content sections", () => {
    expect(experience.length).toBeGreaterThan(0);
    expect(skillGroups.length).toBeGreaterThan(0);
    skillGroups.forEach((group) => {
      expect(group.items.length).toBeGreaterThan(0);
    });
  });

  it("references local UrbanKey project images", () => {
    expect(urbankey.logo).toMatch(/^\/images\//);
    urbankey.screenshots.forEach((shot) => {
      expect(shot.src).toMatch(/^\/images\//);
    });
  });
});
