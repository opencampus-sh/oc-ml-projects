/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import {difference, sortBy} from '../utils/jsUtils';
import Projects_WISE from './projects_wise.json';
import Projects_SOSE from './projects_sose.json';
/*
 * ADD YOUR SITE TO THE DOCUSAURUS SHOWCASE:
 *
 * Requirements for adding your site to our showcase:
 * - It is a marketingion-ready site with real content and decent customizations (different from the init templates)
 * - It is NOT a work-in-progress with empty pages
 * - It has a stable domain name (a Netlify/Vercel deploy preview is not allowed)
 *
 * Instructions:
 * - Add your site in the json array below
 * - Add a local image preview (decent screenshot of your Docusaurus site)
 * - Use relevant tags to qualify your site (read the tag descriptions bellow)
 * - The image MUST be added to the GitHub repository, and use `require("image")`
 * - Open a PR and check for reported CI errors
 *
 * Example PR: https://github.com/facebook/docusaurus/pull/3976
 *
 * If you edit this file through the Github interface, you can:
 * - Submit first your users.js edit PR
 * - This will create a branch on your Docusaurus fork (usually "patch-1")
 * - Go to https://github.com/<username>/docusaurus/tree/<branch>/website/src/data/showcase
 * - Drag-and-drop an image here to add it to your existing PR
 *
 * Please help us maintain this showcase page data:
 * - Update sites with wrong data
 * - Ensure site tags remains correct over time
 * - Remove sites not using Docusaurus anymore
 * - Add missing Docusaurus sites (if the site owner agreed)
 *
 */

export type Tag = {
  label: string;
  description: string;
  icon: JSX.Element;
};

export type TagType =
  | 'favorite'
  | 'opensource'
  | 'MLT'
  | 'DLFS'
  | 'GAN'
  | 'MED'
  | 'company'
  | 'DLFCV'
  | 'NLP';

export type User = {
  title: string;
  description: string;
  course: string;
  semester: string;
  participants: string;
  preview: any;
  website: string;
  source: string;
  tags: TagType[];
};

// LIST OF AVAILABLE TAGS
// Available tags to assign to your site
// Please choose widely, we'll remove unappropriate tags
export const Tags: Record<TagType, Tag> = {
  // DO NOT USE THIS TAG: we choose sites to add to favorites
  favorite: {
    label: 'Opencampus Favorites',
    description:
      'Our favorite projects that you must absolutely check-out! (in progress)',
    icon: <></>,
  },

  // For open-source sites, a link to the source code is required
  opensource: {
    label: 'Open Source',
    description: 'Project for which the code has been released.',
    icon: <></>,
  },

  company: {
    label: 'Made with Companies',
    description: 'Projects made in collaboration with a company',
    icon: <></>,
  },

  MLT: {
    label: 'Machine Learning with Tensorflow',
    description: 'Project from the Machine Learning with Tensorflow course.',
    icon: <></>,
  },

  DLFS: {
    label: 'Deep Learning',
    description: 'Project from the Deep Learning course.',
    icon: <></>,
  },

  GAN: {
    label: 'Generative Adversarial Networks',
    description:
      'Project from the General Adversarial Network course.',
    icon: <></>,
  },

  MED: {
    label: 'ML für die Medizin',
    description:
      'Projekte aus dem Machine Learning für die Medizin Kurs',
    icon: <></>,
  },

  DLFCV: {
    label: 'DL for Computer Vision',
    description:
      'Project from the Deep Learning for Computer Vision course.',
    icon: <></>,
  },

  NLP: {
    label: 'NLP with Transformer',
    description:
      'Project from the Natural Language Processing with Transformers course.',
    icon: <></>,
  },
};

const PROJECT_FOLDER = 'https://github.com/opencampus-sh/ML-Projects/tree/main/data/';
// Add your site to this list
// prettier-ignore
const Users: User[] = [
  // WISE 2122
  Projects_WISE,
  Projects_SOSE,
  /*
  Pro Tip: add your site in alphabetical order.
  Appending your site here (at the end) is more likely to produce Git conflicts.
   */
];

export const TagList = Object.keys(Tags) as TagType[];
function sortUsers() {
  let result = Users;
  // Sort by site name
  result = sortBy(result, (user) => user.title.toLowerCase());
  // Sort by favorite tag, favorites first
  result = sortBy(result, (user) => !user.tags.includes('favorite'));
  return result;
}

export const SortedUsers = sortUsers();

// Fail-fast on common errors
function ensureUserValid(user: User) {
  function checkFields() {
    const keys = Object.keys(user);
    const validKeys = [
      'title',
      'description',
      'course',
      'semester',
      'participants',
      'preview',
      'website',
      'source',
      'tags',
    ];
    const unknownKeys = difference(keys, validKeys);
    if (unknownKeys.length > 0) {
      throw new Error(
        `Site contains unknown attribute names=[${unknownKeys.join(',')}]`,
      );
    }
  }

  function checkTitle() {
    if (!user.title) {
      throw new Error('Site title is missing');
    }
  }

  function checkDescription() {
    if (!user.description) {
      throw new Error('Site description is missing');
    }
  }

  function checkWebsite() {
    if (!user.website) {
      throw new Error('Site website is missing');
    }
    const isHttpUrl =
      user.website.startsWith('http://') || user.website.startsWith('https://');
    if (!isHttpUrl) {
      throw new Error(
        `Site website does not look like a valid url: ${user.website}`,
      );
    }
  }

  function checkPreview() {
    if (
      !user.preview ||
      (user.preview instanceof String &&
        (user.preview.startsWith('http') || user.preview.startsWith('//')))
    ) {
      throw new Error(
        `Site has bad image preview=[${user.preview}].\nThe image should be hosted on Docusaurus site, and not use remote HTTP or HTTPS URLs`,
      );
    }
  }

  function checkTags() {
    if (
      !user.tags ||
      !(user.tags instanceof Array) ||
      (user.tags as string[]).includes('')
    ) {
      throw new Error(`Bad showcase tags=[${JSON.stringify(user.tags)}]`);
    }
    const unknownTags = difference(user.tags, TagList);
    if (unknownTags.length > 0) {
      throw new Error(
        `Unknown tags=[${unknownTags.join(
          ',',
        )}\nThe available tags are ${TagList.join(',')}`,
      );
    }
  }

  function checkML() {
    if (typeof user.source === 'undefined') {
      throw new Error(
        "The source attribute is required.\nIf your Docusaurus site is not open-source, please make it explicit with 'source: null'",
      );
    } else {
      const hasOpenSourceTag = user.tags.includes('opensource');
      if (user.source === null && hasOpenSourceTag) {
        throw new Error(
          "You can't add the opensource tag to a site that does not have a link to source code.",
        );
      } else if (user.source && !hasOpenSourceTag) {
        throw new Error(
          "For open-source sites, please add the opensource tag",
        );
      }
    }
  }

  try {
    checkFields();
    checkTitle();
    checkDescription();
    checkWebsite();
    checkPreview();
    checkTags();
    checkML();
  } catch (e) {
    throw new Error(
      `Showcase site with title=${user.title} contains errors:\n${e.message}`,
    );
  }
}

Users.forEach(ensureUserValid);
