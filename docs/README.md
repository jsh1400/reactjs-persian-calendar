
![reactjs persian calendar](https://raw.githubusercontent.com/jsh1400/reactjs-persian-calendar/master/docs/reactjs-persian-calendar.png)

```
npm i reactjs-persian-calendar
```

```javascript

import JCalendar from 'reactjs-persian-calendar'

// your component details ...
render() {
  <JCalendar 
      locale={'fa'} 
      color={'#000066'}
      size={30}
      onClick={console.log}
      itemRender={(key, item, children) => children}
  />
}

```
### props
    locale:     [string]    'fa' or 'en',
    color:      [string]    '#660000' or 'red' or 'rgb(250,0,0)',
    size:       [number]    30 size of calendar item
    onClick:    [function]  callback onClick on any day item,
    itemRender: [function]  change render any item in calendar,

---
