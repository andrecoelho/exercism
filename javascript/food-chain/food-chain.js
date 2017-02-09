'use strict';

module.exports = class {
  constructor() {
    const animals = [
      {
        name: 'fly',
        reaction: "I don't know why she swallowed the fly. Perhaps she'll die."
      },
      {
        name: 'spider',
        reaction: "It wriggled and jiggled and tickled inside her."
      },
      {
        name: 'bird',
        reaction: "How absurd to swallow a bird!"
      },
      {
        name: 'cat',
        reaction: "Imagine that, to swallow a cat!"
      },
      {
        name: 'dog',
        reaction: "What a hog, to swallow a dog!"
      },
      {
        name: 'goat',
        reaction: "Just opened her throat and swallowed a goat!"
      },
      {
        name: 'cow',
        reaction: "I don't know how she swallowed a cow!"
      },
      {
        name: 'horse',
        reaction: "She's dead, of course!"
      }
    ];

    this._verses = animals.map((animal, index, animals) => {
      const firstLine = `I know an old lady who swallowed a ${animal.name}.`;

      if (index === 0 || index === animals.length - 1) {
        return `${firstLine}\n${animal.reaction}`;
      } else {
        const chain = [];

        for (let i = index; i > 0; i--) {
          chain.push(
            `She swallowed the ${animals[i].name} to catch the ${animals[i - 1].name}` +
            ((animals[i].name === 'bird')
              ? ' that' + animals[i - 1].reaction.slice(2)
              : '.' ));
        }

        return `${firstLine}\n${animal.reaction}\n${chain.join('\n')}\n${animals[0].reaction}`;
      }
    });
  }

  verse(number) {
    return this._verses[number - 1] + '\n';
  }

  verses(start, end) {
    return this._verses.slice(start - 1, end).join('\n\n') + '\n\n';
  }
}