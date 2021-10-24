/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React, {useState, useMemo, useCallback, useEffect} from 'react';

import Layout from '@theme/Layout';
import ShowcaseCheckbox from './ShowcaseCheckbox';
import ShowcaseSelect from './ShowcaseSelect';
import ShowcaseCard from './ShowcaseCard';
import clsx from 'clsx';

import {useHistory, useLocation} from '@docusaurus/router';

import {toggleListItem} from '../../utils/jsUtils';
import {SortedUsers, Tags, ThemeTags, TagList, ThemeTagType, User, TagType} from '../../data/projects';

type Operator = 'OR' | 'AND';

const TITLE = 'Opencampus.sh Machine Learning Projects';
const DESCRIPTION = 'The cool projects people are building with the machine learning courses at opencampus.sh';
const EDIT_URL =
  'https://edu.opencampus.sh/';

function filterUsers(
  users: User[],
  selectedTags: TagType[],
  operator: Operator,
) {
  if (selectedTags.length === 0) {
    return users;
  }
  return users.filter((user) => {
    if (user.tags.length === 0) {
      return false;
    }
    if (operator === 'AND') {
      return selectedTags.every((tag) => user.tags.includes(tag));
    } else {
      return selectedTags.some((tag) => user.tags.includes(tag));
    }
  });
}

function useFilteredUsers(
  users: User[],
  selectedTags: TagType[],
  operator: Operator,
) {
  return useMemo(() => filterUsers(users, selectedTags, operator), [
    users,
    selectedTags,
    operator,
  ]);
}

const TagQueryStringKey = 'tags';

function readSearchTags(search: string) {
  return new URLSearchParams(search).getAll(TagQueryStringKey) as TagType[];
}

function replaceSearchTags(search: string, newTags: TagType[]) {
  const searchParams = new URLSearchParams(search);
  searchParams.delete(TagQueryStringKey);
  newTags.forEach((tag) => searchParams.append(TagQueryStringKey, tag));
  return searchParams.toString();
}

function useSelectedTags() {
  // The search query-string is the source of truth!
  const location = useLocation();
  const {push} = useHistory();

  // On SSR / first mount (hydration) no tag is selected
  const [selectedTags, setSelectedTags] = useState<TagType[]>([]);

  // Sync tags from QS to state (delayed on purpose to avoid SSR/Client hydration mismatch)
  useEffect(() => {
    const tags = readSearchTags(location.search);
    setSelectedTags(tags);
  }, [location, setSelectedTags]);

  // Update the QS value
  const toggleTag = useCallback(
    (tag: TagType) => {
      const tags = readSearchTags(location.search);
      const newTags = toggleListItem(tags, tag);
      const newSearch = replaceSearchTags(location.search, newTags);
      push({...location, search: newSearch});
      // no need to call setSelectedTags, useEffect will do the sync
    },
    [location, push],
  );

  return {selectedTags, toggleTag};
}

function ShowcaseHeader() {
  return (
    <div className="text--center">
      <h1>{TITLE}</h1>
      <p>{DESCRIPTION}</p>
      <p>
        <a
          className={'button button--primary'}
          href={EDIT_URL}
          target={'_blank'}>
          🧠 Do your own! ‍🔥
        </a>
      </p>
    </div>
  );
}

interface Props {
  selectedTags: TagType[];
  toggleTag: (tag: TagType) => void;
  operator: Operator;
  setOperator: (op: Operator) => void;
}

function ShowcaseFilters({
  selectedTags,
  toggleTag,
  operator,
  setOperator,
}: Props) {
  return (
    <div className="margin-top--l margin-bottom--md container">
      <div className="row">
        {TagList.map((tag) => {
          const {label, description, icon} = Tags[tag];
          return (
            <div key={tag} className="col col--4">
              <ShowcaseCheckbox
                // TODO add a proper tooltip
                title={`${label}: ${description}`}
                name={tag}
                label={
                  icon ? (
                    <>
                      {icon} {label}
                    </>
                  ) : (
                    label
                  )
                }
                onChange={() => toggleTag(tag)}
                checked={selectedTags.includes(tag)}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}

function ShowcaseCards({filteredUsers}: {filteredUsers: User[]}) {
  return (
    <section className="container margin-top--lg">
      <h2>
        {filteredUsers.length} project{filteredUsers.length > 1 ? 's' : ''}
      </h2>
      <div className="margin-top--lg">
        {filteredUsers.length > 0 ? (
          <div className="row">
            {filteredUsers.map((user) => (
              <ShowcaseCard
                key={user.title} // Title should be unique
                user={user}
              />
            ))}
          </div>
        ) : (
          <div className={clsx('padding-vert--md text--center')}>
            <h3>No result</h3>
          </div>
        )}
      </div>
    </section>
  );
}

function Showcase() {
  const {selectedTags, toggleTag} = useSelectedTags();
  const [operator, setOperator] = useState<Operator>('OR');
  const filteredUsers = useFilteredUsers(SortedUsers, selectedTags, operator);
  return (
    <div>
      <main className="container margin-vert--lg">
        <ShowcaseHeader />
        <ShowcaseFilters
          selectedTags={selectedTags}
          toggleTag={toggleTag}
          operator={operator}
          // setOperator={setOperator}
        />
        <ShowcaseCards filteredUsers={filteredUsers} />
      </main>
    </div>
  );
}

export default Showcase;
