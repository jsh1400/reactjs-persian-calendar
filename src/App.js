import React from 'react'
import './App.css'
import JCalendar from 'reactjs-persian-calendar'

class App extends React.Component {
  state = {
    locale: 'fa',
    size: 30,
    color: '#000066',
    fa:'',
    en: ''
  }

  render () {
    const { color, locale, size, fa, en } = this.state
    return (
      <div className="App">
        <div className="option">
          <h3>Option</h3>
          <hr />
          <div>
            <label>locale :</label>
            <select value={locale}
                    onChange={(e) => this.setState({ locale: e.target.value })}>
              <option>fa</option>
              <option>en</option>
            </select>
          </div>
          <div>
            <label>color :</label>
            <input type={'color'}
                   value={color}
                   onChange={(e) => this.setState({ color: e.target.value })}/>
          </div>
          <div>
            <label>size :</label>
            <input type={'number'}
                   value={size}
                   onChange={(e) => this.setState({ size: e.target.value })}/>
          </div>
          <hr />
          <div>
            <label>fa locale :</label>
            <div>{fa}</div>
          </div>
          <div>
            <label>en locale :</label>
            <div>{en}</div>
          </div>
        </div>

        <div className="App-header">
          <JCalendar
            size={size}
            key={locale}
            locale={locale}
            color={color}
            onClick={(fa,en)=> this.setState({fa,en})}
          />
        </div>
      </div>
    )
  }
}

export default App
