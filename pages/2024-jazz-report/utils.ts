import d from './data.json';
import top200 from './top200.json';

interface SongData {
  Title: string;
  Key?: string;
  Composer: string;
  Sections: Array<{
    Label: string;
    MainSegment: {
      Chords: string;
    };
    Endings?: Array<{ Chords: string }>;
  }>;
}
const data = d as SongData[];

function stripParentheses(str: string) {
  const regex = /^\((.*)\)$/;
  const match = str.match(regex);
  return match ? match[1] : str;
}
function getChordRoot(chord: string) {
  const rootRegex = /^[A-G#b]+/;
  const match = chord.match(rootRegex);
  if (!match) {
    throw new Error(`no match root: ${chord}`);
  }
  return match[0];
}
enum ChordType {
  DOM = 1,
  MIN = 2,
  MAJ = 3,
  HALF_DIM = 4,
  DIM = 5,
  AUG = 6,
  SUS = 7,
}
function inferType(str: string): ChordType {
  if (
    str === '' ||
    str.startsWith('/') ||
    str.startsWith('(') ||
    str.startsWith('maj') ||
    str.startsWith('add') ||
    str.startsWith('6')
  ) {
    return ChordType.MAJ;
  }
  if (str.startsWith('sus')) {
    return ChordType.SUS;
  }
  if (str.startsWith('aug')) {
    return ChordType.AUG;
  }
  if (str.startsWith('0')) {
    return ChordType.DIM;
  }
  // if (/^\d/.test(str)) {
  if (str.startsWith('7') || str.startsWith('9') || str.startsWith('13')) {
    return ChordType.DOM;
  }
  if (str.startsWith('m7b5')) {
    return ChordType.HALF_DIM;
  }
  if (str.startsWith('m')) {
    return ChordType.MIN;
  }
  throw new Error(str);
}
function getSemiTone(note: string) {
  const noteToSemiTone = new Map([
    ['C', 1],
    ['C#', 2],
    ['Db', 2],
    ['D', 3],
    ['D#', 4],
    ['Eb', 4],
    ['E', 5],
    ['F', 6],
    ['F#', 7],
    ['Gb', 7],
    ['G', 8],
    ['G#', 9],
    ['Ab', 9],
    ['A', 10],
    ['A#', 11],
    ['Bb', 11],
    ['B', 12],
  ]);
  const semiTone = noteToSemiTone.get(note);
  if (semiTone === undefined) {
    throw new Error(note);
  }
  return semiTone;
}
interface Chord {
  root: string;
  type: ChordType;
  str: string;
  semiTone: number;
}
function toChord(str: string): Chord {
  const root = getChordRoot(str);
  const rest = str.slice(root.length);
  const type = inferType(rest);

  return {
    str,
    root,
    type,
    semiTone: getSemiTone(root),
  };
}
function strToChords(str: string): Chord[] {
  return str
    .split(/\||,/)
    .filter((cs) => cs != '')
    .map(stripParentheses)
    .map(toChord);
}
function getChords(song: SongData): Chord[] {
  return song.Sections.flatMap((section) => {
    if (section.Endings) {
      return section.Endings.flatMap((ending) => {
        return strToChords(`${section.MainSegment.Chords},${ending.Chords}`);
      });
    } else {
      return strToChords(section.MainSegment.Chords);
    }
  });
}

// Chord stats ====================
function sortEntires<K, V>(entries: Array<[K, V[]]>) {
  return entries.toSorted((a, b) => {
    return b[1].length - a[1].length;
  });
}
function bucketChordsByRoot(chords: Chord[]) {
  const chordBuckets = Object.groupBy(chords, (c) => c.root);
  const chordEntires = sortEntires(
    Object.entries(chordBuckets) as Array<[string, Chord[]]>
  );
  return chordEntires;
}
function bucketChordsByType(chords: Chord[]) {
  const chordBuckets = Object.groupBy(chords, (c) => c.type);
  const chordEntires = sortEntires(Object.entries(chordBuckets));
  return chordEntires;
}
function bucketChordsByRootAndType(chords: Chord[], type?: ChordType) {
  if (type) {
    chords = chords.filter((c) => c.type === type);
  }
  const chordBuckets = Object.groupBy(chords, (c) => `${c.root}_${c.type}`);
  const chordEntires = sortEntires(
    Object.entries(chordBuckets) as Array<[string, Chord[]]>
  );
  return chordEntires;
}
function logEntries<V>(entries: Array<[string, V[]]>) {
  let total = 0;
  for (const [, v] of entries) {
    total += v.length;
  }
  for (const [k, v] of entries) {
    console.log(k, v.length, ((v.length / total) * 100).toFixed(2));
  }
}
function bucketSongsByKey(songs: SongData[]) {
  const buckets = Object.groupBy(songs, (c) => c.Key || 'C');
  const entries = sortEntires(
    Object.entries(buckets) as Array<[string, SongData[]]>
  );
  return entries;
}

// logEntries(bucketSongsByKey(data));
// const chords: Chord[] = data.flatMap(getChords);
// logEntries(bucketChordsByType(chords));
// logEntries(bucketChordsByRoot(chords));
// logEntries(bucketChordsByRootAndType(chords, ChordType.MAJ));

// Song stats, find by progression ====================
export interface Song {
  chords: Chord[];
  song: SongData;
  progression: string;
}
function encodeChord(prevChord: Chord | undefined, chord: Chord): string {
  if (prevChord === undefined) {
    return chord.type.toString();
  }
  let steps = chord.semiTone - prevChord.semiTone;
  if (steps < 0) {
    steps += 12;
  }
  return `+${steps}_${chord.type}`;
}
function sameChord(prevChord: Chord | undefined, chord: Chord) {
  if (prevChord === undefined) return false;
  return prevChord.semiTone === chord.semiTone && prevChord.type === chord.type;
}
function chordsToProgression(chords: Chord[]): string {
  let result = '';
  for (let i = 0; i < chords.length; i++) {
    if (sameChord(chords[i - 1], chords[i])) continue;
    const c = encodeChord(chords[i - 1], chords[i]);
    result += c;
  }
  return result;
}
function getSong(song: SongData): Song {
  const chords = getChords(song);
  return {
    song,
    chords,
    progression: chordsToProgression(chords),
  };
}
function fitlerSongs(songs: Song[], progression: string): Song[] {
  return songs.filter((s) => s.progression.includes(progression));
}

function filterTop200(): SongData[] {
  const songs = new Set(top200);
  const top = [];
  for (const d of data) {
    if (songs.has(d.Title)) {
      top.push(d);
    }
  }
  return top;
}

// Uncommet to query all songs.
// const songs: Song[] = data.map(getSong);
const songs: Song[] = filterTop200().map(getSong);
export function querySongs(progression: string): Song[] {
  const p = chordsToProgression(strToChords(progression));
  return fitlerSongs(songs, p);
}
export function querySongTitles(progression: string) {
  return querySongs(progression).map(
    (s) => `${s.song.Title} - ${s.song.Composer}`
  );
}

export const PROGRESSIONS = [
  ['backdoor', 'F|Bb7|C'],
  ['yardbird backdoor', 'C|Fm|Bb7'],
  ['backdoor2', 'Gm|C7|F|Bb7|C'],
  ['sunny', 'Am|Gm|C7|F'],
  ['misty', 'C|Gm|C7|F'],
  ['interchange', 'C|Cm'],
  ['interchange2', 'Cm|C'],
  ['drop251', 'G|Gm|C7|F|Fm'],
  ['mixolydian', 'C|Bb'],
  ['mixolydian2', 'C|Gm'],
  ['lydian', 'C|D'],
  ['dorian', 'Cm|F'],
  ['dorian2', 'Cm|D'],
  ['mediant', 'C|Eb'],
  ['mediant2', 'C|Ab'],
  ['authentic cadence', 'F|G7|C'],
  ['plagal cadence', 'Fm|C'],
  ['creep', 'F|Fm|C'],
  ['creep2', 'C|C7|F|Bb7'],
  ['creep3', 'C|C7|Fm'],
  ['pop', 'Am|Dm|G7|C'],
  ['pop2', 'C|Am|Dm|G7'],
  ['pop3', 'Dm|G7|C|Am'],
  ['jpop', 'F|Em|Am'],
  ['jpop2', 'Em|Am|Dm|G7|C'],
  ['jpop3', 'F|Bm7b5|E7|Am'],
  ['jpop4', 'C|Bm7b5|E7|Am|Gm|C7'],
  ['fly me', 'C|Bm7b5|E7|Am|Dm|G7'],
  ['autumn leaves', 'Dm|G7|C|F|Bm7b5|E7'],
];

function songByProgCnt() {
  const o: Record<string, number> = {};
  for (const [, p] of PROGRESSIONS) {
    for (const name of querySongTitles(p)) {
      o[name] = (o[name] ?? 0) + 1;
    }
  }
  for (const [k, v] of Object.entries(o).toSorted((a, b) => b[1] - a[1])) {
    console.log(k, v);
  }
}
// songByProgCnt();
