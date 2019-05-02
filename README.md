# local-emoji-picker

emoji picker for local emojis

## [live example](https://local-emoji-picker.richardsoderman.se/)

**props**
- categorySelector: boolean
  - default: false
- search: boolean
  - default: true
- onClick: function
- idPrefix: string
  - default: ''

### examples

```javascript
  const onClick = (data) => {
    console.log(data) /*
    {
      value: '',
      name: '',
      keywords: ['', ...],
      category: ',
      unicode: '',
      unicodeAlt: ['', ...]
    }
    */
  }

  <LocalEmojiPicker
    categorySelector
    onClick={onClick}
  />

// only search
  <LocalEmojiPicker
    onClick={onClick}
  />

// only category selector
  <LocalEmojiPicker
    categorySelector
    search={false}
    onClick={onClick}
  />

// none
  <LocalEmojiPicker
    search={false}
    onClick={onClick}
  />,
```
