import React from 'react';
import { inject, observer } from 'mobx-react';
import Moment from './Moment'

@inject('momentStore')
@observer
class MomentsList extends React.Component {

  render() {
    const { loading, moments } = this.props.momentStore;
    return loading ? (
      <p>Loading...</p>
    ) : (
      <div>
        {
          moments.map(moment => {
            return (
              <Moment key={moment.id} moment={moment} />
            )
          })
        }
      </div>
    )
  }
}

export default MomentsList;