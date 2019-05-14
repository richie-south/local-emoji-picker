# local-emoji-picker

emoji picker for local emojis

## [live example](https://local-emoji-picker.richardsoderman.se/)

**props**
- categorySelector: boolean
  - default: false
- search: boolean
  - default: false
- frequentlyUsed: boolean
  - default: false
- categories: categories
  - default: preset, example { category: 'people', symbol: '😄' }
- onClick: function(data)
  - data: { value: string, keywords: Array<string> }
- idPrefix: string
  - default: ''

### examples

```javascript
  const onClick = (data) => {
    console.log(data) /*
    {
      value: '',
      keywords: ['', ...],
    }
    */
  }

  <LocalEmojiPicker
    categorySelector
    search
    frequentlyUsed
    onClick={onClick}
  />

// only search
  <LocalEmojiPicker
    search
    onClick={onClick}
  />

// only category selector
  <LocalEmojiPicker
    categorySelector
    onClick={onClick}
  />

// custom category selector
  <LocalEmojiPicker
    categorySelector
    categories={[
      {
        category: 'symbols',
        symbol: '💕'
      },
      {
        category: 'flags',
        symbol: '🇸🇪'
      }
    ]}
    onClick={onClick}
  />,

// only frequently used
  <LocalEmojiPicker
    frequentlyUsed
    onClick={onClick}
  />,

// none
  <LocalEmojiPicker
    onClick={onClick}
  />,
```
