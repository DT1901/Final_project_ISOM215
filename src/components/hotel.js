import React, { PropTypes, Component } from 'react'
import '../styles/hotel.css'


export default class Hotel extends Component {
  constructor(props) {
    super(props);
  }

  render() {

    return (
      <div>
        <div className="hotel-row row well">
          <div className="hotel-row-img col-md-4">
            <div className="img-container">
              <img src={'http://covers.openlibrary.org/b/ID/' + this.props.cover_i +'-L.jpg'}/>
          </div>
          </div>
          <div className="col-md-8">
            <div className="hotel-header row">
              <div className="pull-left">
          <h3>Title: {this.props.title_suggest}</h3>
              <span>
              <h3>Language: {this.props.language[0]}</h3>
              <h3>Published Year: {this.props.publish_year[0]}</h3>
              <h3>Time: {this.props.time}</h3></span>
            </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

Hotel.propTypes = {

}
