/**terator Pattern
Behavioral Design Pattern
1. Concept first
Definition:

The Iterator Pattern is a behavioral design pattern that provides a way to access elements of a collection sequentially without exposing its internal structure.

In simple words:

It lets you go through items one by one without worrying about how those items are stored internally. */

/**
 * Music Playlist Iterator
Requirements only · No solution
File: 07-iterator.js

Build a Music Playlist using the Iterator Pattern.
Class 1 — Playlist
Requirements:
- Constructor accepts an array of songs.
- Store songs internally.
- Implement [Symbol.iterator]().
- Return a custom iterator object.
- The iterator must maintain its own current index.
- Implement next():
  - If songs remain, return { value: song, done: false }.
  - If no songs remain, return { value: undefined, done: true }.
Testing requirements
const playlist = new Playlist([
  "Song A",
  "Song B",
  "Song C"
]);

for (const song of playlist) {
  console.log(song);
}


Expected output:
Song A
Song B
Song C


Additional test
const iterator = playlist[Symbol.iterator]();

console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());


Expected output:
{ value: "Song A", done: false }
{ value: "Song B", done: false }
{ value: "Song C", done: false }
{ value: undefined, done: true }
 */

class Playlist {
  constructor(songs) {
    this.songs = songs;
  }
  [Symbol.iterator]() {
    let index = 0;
    const songs = this.songs;
    return {
      next() {
        if (index < songs.length) {
          return {
            value: songs[index++],
            done: false,
          };
        }
        return { value: null, done: true };
      },
    };
  }
}

const playlist = new Playlist(["Song A", "Song B", "Song C"]);

for (const song of playlist) {
  console.log(song);
}
const iterator = playlist[Symbol.iterator]();

console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
