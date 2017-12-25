/**
 * Created Date: 2017/12/21
 * Author: luojinghui
 */
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {withRouter,} from 'react-router-dom';

class WrapInfo extends Component {
  componentDidMount() {
    console.log(this.props);
  }

  render() {
    return (
      <div>
        this is info page
        <div>
          kasjdfkjasldfjal;dsjfklajkslfajsdfjasldjflasjdflkajkskdfjaslfjalsjfalskjflasjflajslkfjaksldjflaksldjflkasjfljaslfjasldfjkals;dfjlajrlwejr;ejqeiroadsfkfjkalsjfklas
        </div>
        <div>
          kasjdfkjasldfjal;dsjfklajkslfajsdfjasldjflasjdflkajkskdfjaslfjalsjfalskjflasjflajslkfjaksldjflaksldjflkasjfljaslfjasldfjkals;dfjlajrlwejr;ejqeiroadsfkfjkalsjfklas
        </div>
        <div>
          kasjdfkjasldfjal;dsjfklajkslfajsdfjasldjflasjdflkajkskdfjaslfjalsjfalskjflasjflajslkfjaksldjflaksldjflkasjfljaslfjasldfjkals;dfjlajrlwejr;ejqeiroadsfkfjkalsjfklas
        </div>
        <div>
          kasjdfkjasldfjal;dsjfklajkslfajsdfjasldjflasjdflkajkskdfjaslfjalsjfalskjflasjflajslkfjaksldjflaksldjflkasjfljaslfjasldfjkals;dfjlajrlwejr;ejqeiroadsfkfjkalsjfklas
        </div>
        <div>
          kasjdfkjasldfjal;dsjfklajkslfajsdfjasldjflasjdflkajkskdfjaslfjalsjfalskjflasjflajslkfjaksldjflaksldjflkasjfljaslfjasldfjkals;dfjlajrlwejr;ejqeiroadsfkfjkalsjfklas
        </div>
        <div>
          kasjdfkjasldfjal;dsjfklajkslfajsdfjasldjflasjdflkajkskdfjaslfjalsjfalskjflasjflajslkfjaksldjflaksldjflkasjfljaslfjasldfjkals;dfjlajrlwejr;ejqeiroadsfkfjkalsjfklas
        </div>
        <div>
          kasjdfkjasldfjal;dsjfklajkslfajsdfjasldjflasjdflkajkskdfjaslfjalsjfalskjflasjflajslkfjaksldjflaksldjflkasjfljaslfjasldfjkals;dfjlajrlwejr;ejqeiroadsfkfjkalsjfklas
        </div>
        <div>
          kasjdfkjasldfjal;dsjfklajkslfajsdfjasldjflasjdflkajkskdfjaslfjalsjfalskjflasjflajslkfjaksldjflaksldjflkasjfljaslfjasldfjkals;dfjlajrlwejr;ejqeiroadsfkfjkalsjfklas
        </div>
        <div>
          kasjdfkjasldfjal;dsjfklajkslfajsdfjasldjflasjdflkajkskdfjaslfjalsjfalskjflasjflajslkfjaksldjflaksldjflkasjfljaslfjasldfjkals;dfjlajrlwejr;ejqeiroadsfkfjkalsjfklas
        </div>
        <div>
          kasjdfkjasldfjal;dsjfklajkslfajsdfjasldjflasjdflkajkskdfjaslfjalsjfalskjflasjflajslkfjaksldjflaksldjflkasjfljaslfjasldfjkals;dfjlajrlwejr;ejqeiroadsfkfjkalsjfklas
        </div>
      </div>
    );
  }
}

let Info = withRouter(connect((state) => state)(WrapInfo));
export default Info;
