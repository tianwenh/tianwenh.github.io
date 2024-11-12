import React, { useState } from 'react';
import style from './JazzFinder.module.css';

import { querySongs, PROGRESSIONS, type Song } from './utils';

export const JazzFinder: React.FC = () => {
  const [pendingQuery, setPendingQuery] = useState('');
  const [result, setResult] = useState<
    { query: string; songs: Song[] } | undefined
  >(undefined);
  function queryResult(input: string) {
    if (input === '') {
      setResult(undefined);
      return;
    }
    setResult({ query: input, songs: querySongs(input) });
  }

  const presets = PROGRESSIONS.map(([name, progression]) => {
    return (
      <li key={name}>
        <button
          className={style.btn}
          onClick={() => {
            queryResult(progression);
          }}
        >
          {name}: {progression}
        </button>
      </li>
    );
  });
  const summary =
    result === undefined ? undefined : (
      <>
        <div>{`Found ${result.songs.length} songs for ${result.query}!`}</div>
        <ol>
          {result.songs.map((song) => {
            return (
              <li key={song.song.Title}>
                {song.song.Title} - {song.song.Composer}
              </li>
            );
          })}
        </ol>
      </>
    );

  return (
    <div>
      <ul>{presets}</ul>
      <input
        onChange={(e) => {
          setPendingQuery(e.target.value);
        }}
        type="text"
      />
      <button
        className={style.btn}
        onClick={() => {
          queryResult(pendingQuery);
        }}
        type="button"
      >
        Find!
      </button>
      {summary}
    </div>
  );
};
