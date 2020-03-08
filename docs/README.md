
![reactjs persian calendar](https://raw.githubusercontent.com/jsh1400/reactjs-persian-calendar/master/reactjs-persian-calendar.png)

```
npm i reactjs-persian-calendar
```

```javascript

import JCalendar from 'reactjs-persian-calendar'

// your component details ...
render() {
  <JCalendar 
      locale={'fa'} 
      color={'#660000'}
      size={30}
      onClick={console.log}
      itemRender={(key, item, children) => children}
  />
}

```
### props
    locale:     [string]    'fa' or 'en',
    color:      [string]    '#660000' or 'red' or 'rgb(250,0,0)',
    size:       [number]    30
    onClick:    [function]  callback onClick on any item,
    itemRender: [function]  change render any item in calendar,

---
